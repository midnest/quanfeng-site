'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { productSeries, tableHeaders, featureTranslations, materialTranslations, getProductDescription } from '../lib/productData';
import { withBasePath } from '@/quanfeng/lib/base-path';

interface ProductShowcaseProps {
  locale: string;
}

// Static folder mapping - defined once
const FOLDER_MAP: Record<string, string> = {
  'qa8025': '8025', 'qa9225': '9225', 'qa11025': '11025', 'qa12025': '12025',
  'qa12038': '12038', 'qa13538': '13538', 'qa15050': '15050', 'qa17250': '17250',
  'qa18060': '18060', 'qa20060': '20060', 'qa20060y': '20060Y',
  'qa22090y': '22090Y', 'qa22580': '22580', 'qa28080': '28080',
};

// Simple lazy image component - minimal overhead
function LazyImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={80}
      height={60}
      loading="lazy"
      decoding="async"
      style={{ objectFit: 'contain' }}
      onError={(e) => {
        // Hide broken images
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  );
}

// Modal image component - click to view full size
function ModalImage({ 
  imageUrl, 
  alt,
  onClick
}: { 
  imageUrl: string; 
  alt: string;
  onClick?: () => void;
}) {
  const [hidden, setHidden] = useState(false);
  
  if (hidden) return null;
  
  return (
    <div className="modal-pdf-section" onClick={onClick} style={{ cursor: onClick ? 'zoom-in' : 'default' }}>
      <img 
        src={imageUrl} 
        alt={alt}
        className="modal-pdf-image"
        loading="lazy"
        decoding="async"
        onError={() => setHidden(true)}
      />
    </div>
  );
}

// Full screen image viewer
function ImageViewer({
  imageUrl,
  alt,
  onClose
}: {
  imageUrl: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <div className="image-viewer-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-viewer-close" onClick={onClose}>×</button>
        <img src={imageUrl} alt={alt} className="image-viewer-img" />
      </div>
    </div>
  );
}

// Helper to get range from array of values
function getRange(values: string[]): string {
  const nums = values.map(v => parseFloat(v)).filter(n => !isNaN(n));
  if (nums.length === 0) return '-';
  if (nums.length === 1) return values[0];
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return min === max ? values[0] : `${min}~${max}`;
}

// Extract unique sizes and voltages for filter options
const SIZE_OPTIONS = [...new Set(productSeries.map(s => s.size))].sort();
const VOLTAGE_OPTIONS = [...new Set(productSeries.flatMap(s => s.variants.map(v => v.voltage)))].sort();

export function ProductShowcase({ locale }: ProductShowcaseProps) {
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [viewerImage, setViewerImage] = useState<{ url: string; alt: string } | null>(null);

  // Filter states
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedVoltage, setSelectedVoltage] = useState<string>('');
  const [minSpeed, setMinSpeed] = useState<string>('');
  const [minAirflow, setMinAirflow] = useState<string>('');
  const [maxNoise, setMaxNoise] = useState<string>('');

  // Ref for scrolling to product table
  const productTableRef = useRef<HTMLDivElement>(null);

  // Memoized values
  const headers = useMemo(() => tableHeaders[locale as keyof typeof tableHeaders] || tableHeaders.zh, [locale]);
  const features = useMemo(() => featureTranslations[locale as keyof typeof featureTranslations] || featureTranslations.zh, [locale]);
  const materials = useMemo(() => materialTranslations[locale as keyof typeof materialTranslations] || materialTranslations.zh, [locale]);

  const currentSeries = useMemo(() => 
    selectedSeries ? productSeries.find(s => s.id === selectedSeries) || null : null,
    [selectedSeries]
  );

  // Filtered product series
  const filteredSeries = useMemo(() => {
    return productSeries.filter(series => {
      // Filter by size
      if (selectedSize && series.size !== selectedSize) return false;
      
      // Filter by voltage - check if any variant matches
      if (selectedVoltage && !series.variants.some(v => v.voltage === selectedVoltage)) return false;
      
      // Filter by minimum speed
      if (minSpeed) {
        const minSpeedVal = parseInt(minSpeed);
        const seriesMaxSpeed = Math.max(...series.variants.map(v => parseInt(v.speed) || 0));
        if (seriesMaxSpeed < minSpeedVal) return false;
      }
      
      // Filter by minimum airflow
      if (minAirflow) {
        const minAirflowVal = parseFloat(minAirflow);
        const seriesMaxAirflow = Math.max(...series.variants.map(v => parseFloat(v.airflow) || 0));
        if (seriesMaxAirflow < minAirflowVal) return false;
      }
      
      // Filter by maximum noise (user wants noise less than value)
      if (maxNoise) {
        const maxNoiseVal = parseInt(maxNoise);
        const seriesMinNoise = Math.min(...series.variants.map(v => parseInt(v.noise) || 999));
        if (seriesMinNoise > maxNoiseVal) return false;
      }
      
      return true;
    });
  }, [selectedSize, selectedVoltage, minSpeed, minAirflow, maxNoise]);

  // Get compare products - memoized
  const compareProducts = useMemo(() => {
    const allVariants = productSeries.flatMap(s => s.variants);
    return compareList.map(model => allVariants.find(v => v.model === model)).filter(Boolean) as typeof allVariants;
  }, [compareList]);

  // Static helper functions
  const getSeriesSummary = useCallback((series: typeof productSeries[0]) => {
    const voltages = series.variants.map(v => v.voltage);
    const speeds = series.variants.map(v => v.speed);
    const airflows = series.variants.map(v => v.airflow);
    const noises = series.variants.map(v => v.noise);
    
    const bearingTypes = [...new Set(series.variants.map(v => v.bearingType))];
    const bearingDisplay = bearingTypes.length === 1 
      ? features[bearingTypes[0]] 
      : bearingTypes.map(t => features[t]).join('/');
    
    return {
      voltageRange: voltages.join('/'),
      speedRange: getRange(speeds) + 'RPM',
      airflowRange: getRange(airflows),
      noiseRange: getRange(noises) + 'dB',
      bearingType: bearingDisplay,
    };
  }, [features]);

  const toggleCompare = useCallback((model: string) => {
    setCompareList(prev => {
      if (prev.includes(model)) {
        return prev.filter(m => m !== model);
      } else if (prev.length < 6) {
        return [...prev, model];
      }
      return prev;
    });
  }, []);

  const clearCompare = useCallback(() => {
    setCompareList([]);
  }, []);

  // Filter handlers
  const handleApplyFilter = useCallback(() => {
    // Scroll to product table
    productTableRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleResetFilter = useCallback(() => {
    setSelectedSize('');
    setSelectedVoltage('');
    setMinSpeed('');
    setMinAirflow('');
    setMaxNoise('');
  }, []);

  // Get product image
  const getProductImage = useCallback((seriesId: string) => {
    const folder = FOLDER_MAP[seriesId];
    if (folder) {
      return withBasePath(`/extracted_docx_images/${folder}/thumb.jpg`);
    }
    return '';
  }, []);

  // Get all product images
  // Static mapping of actual image files in each folder
  // NOTE: These must match the actual files in public/extracted_docx_images/{folder}/
  const FOLDER_IMAGES: Record<string, string[]> = {
    '11025': ['1.jpg', '2.jpeg'],
    '12025': ['1.jpg', '2.jpeg'],
    '12038': ['1.jpg', '2.jpeg'],
    '13538': ['1.jpg', '2.jpeg'],
    '15050': ['1.jpg', '2.jpeg'],
    '17250': ['1.jpg', '2.jpeg'],
    '18060': ['1.jpg', '2.jpeg'],
    '20060': ['1.jpg', '2.jpeg'],
    '20060Y': ['1.jpg', '2.jpeg'],
    '22090Y': ['1.jpg', '2.jpeg', '3.jpg', '4.jpeg'],
    '22580': ['1.jpg', '2.jpg', '3.jpg'],
    '28080': ['1.jpg', '2.jpg'],
    '8025': ['1.jpg', '2.jpeg'],
    '9225': ['1.jpg', '2.jpeg'],
  };

  const getAllProductImages = useCallback((seriesId: string): string[] => {
    const folder = FOLDER_MAP[seriesId];
    if (!folder) return [];
    // Use static mapping of actual files
    const files = FOLDER_IMAGES[folder] || ['1.jpg'];
    return files.map(file => withBasePath(`/extracted_docx_images/${folder}/${file}`));
  }, []);

  // Memoized translations
  const t = useMemo(() => ({
    title: locale === 'zh' ? '产品选型' : 
           locale === 'en' ? 'Product Selection' :
           locale === 'vi' ? 'Chọn Sản Phẩm' :
           locale === 'th' ? 'เลือกสินค้า' :
           locale === 'ms' ? 'Pemilihan Produk' :
           locale === 'tr' ? 'Ürün Seçimi' :
           'اختيار المنتج',
    subtitle: locale === 'zh' ? '点击产品查看详细技术参数' : 
              locale === 'en' ? 'Click product to view detailed specifications' :
              locale === 'vi' ? 'Nhấn vào sản phẩm để xem thông số chi tiết' :
              locale === 'th' ? 'คลิกที่สินค้าเพื่อดูข้อมูลจำเพาะโดยละเอียด' :
              locale === 'ms' ? 'Klik produk untuk melihat spesifikasi terperinci' :
              locale === 'tr' ? 'Detaylı özellikleri görüntülemek için ürüne tıklayın' :
              'انقر على المنتج لعرض المواصفات التفصيلية',
    voltage: locale === 'zh' ? '电压' : 
             locale === 'en' ? 'Voltage' :
             locale === 'vi' ? 'Điện áp' :
             locale === 'th' ? 'แรงดัน' :
             locale === 'ms' ? 'Voltan' :
             locale === 'tr' ? 'Voltaj' :
             'الجهد',
    speed: locale === 'zh' ? '转速' : 
           locale === 'en' ? 'Speed' :
           locale === 'vi' ? 'Tốc độ' :
           locale === 'th' ? 'ความเร็ว' :
           locale === 'ms' ? 'Kelajuan' :
           locale === 'tr' ? 'Hız' :
           'السرعة',
    airflow: locale === 'zh' ? '风量' : 
             locale === 'en' ? 'Airflow' :
             locale === 'vi' ? 'Lưu lượng' :
             locale === 'th' ? 'ปริมาณลม' :
             locale === 'ms' ? 'Aliran' :
             locale === 'tr' ? 'Hava Akışı' :
             'تدفق الهواء',
    noise: locale === 'zh' ? '噪声' : 
           locale === 'en' ? 'Noise' :
           locale === 'vi' ? 'Ồn' :
           locale === 'th' ? 'เสียง' :
           locale === 'ms' ? 'Bunyi' :
           locale === 'tr' ? 'Gürültü' :
           'الضوضاء',
    bearing: locale === 'zh' ? '轴承' : 
             locale === 'en' ? 'Bearing' :
             locale === 'vi' ? 'Ổ bi' :
             locale === 'th' ? 'ลูกปืน' :
             locale === 'ms' ? 'Bearing' :
             locale === 'tr' ? 'Rulman' :
             'المحمل',
    viewDetails: locale === 'zh' ? '查看详情' : 
                 locale === 'en' ? 'View Details' :
                 locale === 'vi' ? 'Xem chi tiết' :
                 locale === 'th' ? 'ดูรายละเอียด' :
                 locale === 'ms' ? 'Lihat butiran' :
                 locale === 'tr' ? 'Detayları Gör' :
                 'عرض التفاصيل',
    viewCompare: locale === 'zh' ? '查看对比' : 
                 locale === 'en' ? 'View Compare' :
                 locale === 'vi' ? 'Xem so sánh' :
                 locale === 'th' ? 'ดูการเปรียบเทียบ' :
                 locale === 'ms' ? 'Lihat perbandingan' :
                 locale === 'tr' ? 'Karşılaştırmayı Gör' :
                 'عرض المقارنة',
    clear: locale === 'zh' ? '清除' : 
           locale === 'en' ? 'Clear' :
           locale === 'vi' ? 'Xóa' :
           locale === 'th' ? 'ล้าง' :
           locale === 'ms' ? 'Padam' :
           locale === 'tr' ? 'Temizle' :
           'مسح',
    selected: locale === 'zh' ? '已选' : 
              locale === 'en' ? 'selected' :
              locale === 'vi' ? 'đã chọn' :
              locale === 'th' ? 'ที่เลือก' :
              locale === 'ms' ? 'dipilih' :
              locale === 'tr' ? 'seçildi' :
              'مختار',
    filterTitle: locale === 'zh' ? '产品筛选' : 
                 locale === 'en' ? 'Product Filter' :
                 locale === 'vi' ? 'Lọc Sản Phẩm' :
                 locale === 'th' ? 'กรองสินค้า' :
                 locale === 'ms' ? 'Penapis Produk' :
                 locale === 'tr' ? 'Ürün Filtresi' :
                 'تصفية المنتج',
    sizeLabel: locale === 'zh' ? '尺寸' : 
               locale === 'en' ? 'Size' :
               locale === 'vi' ? 'Kích thước' :
               locale === 'th' ? 'ขนาด' :
               locale === 'ms' ? 'Saiz' :
               locale === 'tr' ? 'Boyut' :
               'الحجم',
    voltageLabel: locale === 'zh' ? '电压' : 
                  locale === 'en' ? 'Voltage' :
                  locale === 'vi' ? 'Điện áp' :
                  locale === 'th' ? 'แรงดัน' :
                  locale === 'ms' ? 'Voltan' :
                  locale === 'tr' ? 'Voltaj' :
                  'الجهد',
    minSpeedLabel: locale === 'zh' ? '转速 ≥' : 
                   locale === 'en' ? 'Speed ≥' :
                   locale === 'vi' ? 'Tốc độ ≥' :
                   locale === 'th' ? 'ความเร็ว ≥' :
                   locale === 'ms' ? 'Kelajuan ≥' :
                   locale === 'tr' ? 'Hız ≥' :
                   'السرعة ≥',
    minAirflowLabel: locale === 'zh' ? '风量 ≥' : 
                     locale === 'en' ? 'Airflow ≥' :
                     locale === 'vi' ? 'Lưu lượng ≥' :
                     locale === 'th' ? 'ปริมาณลม ≥' :
                     locale === 'ms' ? 'Aliran ≥' :
                     locale === 'tr' ? 'Hava Akışı ≥' :
                     'تدفق الهواء ≥',
    maxNoiseLabel: locale === 'zh' ? '噪声 ≤' : 
                   locale === 'en' ? 'Noise ≤' :
                   locale === 'vi' ? 'Ồn ≤' :
                   locale === 'th' ? 'เสียง ≤' :
                   locale === 'ms' ? 'Bunyi ≤' :
                   locale === 'tr' ? 'Gürültü ≤' :
                   'الضوضاء ≤',
    applyFilter: locale === 'zh' ? '确定' : 
                 locale === 'en' ? 'Apply' :
                 locale === 'vi' ? 'Áp dụng' :
                 locale === 'th' ? 'นำไปใช้' :
                 locale === 'ms' ? 'Gunakan' :
                 locale === 'tr' ? 'Uygula' :
                 'تطبيق',
    resetFilter: locale === 'zh' ? '重置' : 
                 locale === 'en' ? 'Reset' :
                 locale === 'vi' ? 'Đặt lại' :
                 locale === 'th' ? 'รีเซ็ต' :
                 locale === 'ms' ? 'Tetap semula' :
                 locale === 'tr' ? 'Sıfırla' :
                 'إعادة تعيين',
    allSizes: locale === 'zh' ? '全部尺寸' : 
              locale === 'en' ? 'All Sizes' :
              locale === 'vi' ? 'Tất cả kích thước' :
              locale === 'th' ? 'ทุกขนาด' :
              locale === 'ms' ? 'Semua saiz' :
              locale === 'tr' ? 'Tüm Boyutlar' :
              'جميع الأحجام',
    allVoltages: locale === 'zh' ? '全部电压' : 
                 locale === 'en' ? 'All Voltages' :
                 locale === 'vi' ? 'Tất cả điện áp' :
                 locale === 'th' ? 'ทุกแรงดัน' :
                 locale === 'ms' ? 'Semua voltan' :
                 locale === 'tr' ? 'Tüm Voltajlar' :
                 'جميع الجهود',
    rpmUnit: locale === 'zh' ? ' RPM' : 
             locale === 'en' ? ' RPM' :
             locale === 'vi' ? ' RPM' :
             locale === 'th' ? ' RPM' :
             locale === 'ms' ? ' RPM' :
             locale === 'tr' ? ' RPM' :
             ' RPM',
    airflowUnit: locale === 'zh' ? ' m³/min' : 
                 locale === 'en' ? ' m³/min' :
                 locale === 'vi' ? ' m³/min' :
                 locale === 'th' ? ' m³/min' :
                 locale === 'ms' ? ' m³/min' :
                 locale === 'tr' ? ' m³/min' :
                 ' m³/min',
    noiseUnit: locale === 'zh' ? ' dB' : 
               locale === 'en' ? ' dB' :
               locale === 'vi' ? ' dB' :
               locale === 'th' ? ' dB' :
               locale === 'ms' ? ' dB' :
               locale === 'tr' ? ' dB' :
               ' dB',
    filterResults: locale === 'zh' ? '筛选结果' : 
                   locale === 'en' ? 'Filtered Results' :
                   locale === 'vi' ? 'Kết quả lọc' :
                   locale === 'th' ? 'ผลลัพธ์ที่กรอง' :
                   locale === 'ms' ? 'Keputusan penapisan' :
                   locale === 'tr' ? 'Filtrelenmiş Sonuçlar' :
                   'النتائج المصفاة',
  }), [locale]);

  // Memoized table headers
  const tableHeaderLabels = useMemo(() => ({
    image: locale === 'zh' ? '产品图片' : locale === 'en' ? 'Image' : locale === 'vi' ? 'Hình ảnh' : locale === 'th' ? 'รูปภาพ' : locale === 'ms' ? 'Gambar' : locale === 'tr' ? 'Görsel' : 'الصورة',
    series: locale === 'zh' ? '系列名称' : locale === 'en' ? 'Series' : locale === 'vi' ? 'Dòng sản phẩm' : locale === 'th' ? 'ซีรี่ส์' : locale === 'ms' ? 'Siri' : locale === 'tr' ? 'Seri' : 'السلسلة',
    size: locale === 'zh' ? '尺寸' : locale === 'en' ? 'Size' : locale === 'vi' ? 'Kích thước' : locale === 'th' ? 'ขนาด' : locale === 'ms' ? 'Saiz' : locale === 'tr' ? 'Boyut' : 'الحجم',
    action: locale === 'zh' ? '操作' : locale === 'en' ? 'Action' : locale === 'vi' ? 'Thao tác' : locale === 'th' ? 'การดำเนินการ' : locale === 'ms' ? 'Tindakan' : locale === 'tr' ? 'İşlem' : 'الإجراء',
  }), [locale]);

  return (
    <div className="product-showcase">
      {/* Filter Section */}
      <div className="product-filter-section">
        <h4 className="filter-title">{t.filterTitle}</h4>
        <div className="filter-grid">
          {/* Size Dropdown */}
          <div className="filter-item">
            <label className="filter-label">{t.sizeLabel}</label>
            <select 
              className="filter-select"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              <option value="">{t.allSizes}</option>
              {SIZE_OPTIONS.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          {/* Voltage Dropdown */}
          <div className="filter-item">
            <label className="filter-label">{t.voltageLabel}</label>
            <select 
              className="filter-select"
              value={selectedVoltage}
              onChange={(e) => setSelectedVoltage(e.target.value)}
            >
              <option value="">{t.allVoltages}</option>
              {VOLTAGE_OPTIONS.map(voltage => (
                <option key={voltage} value={voltage}>{voltage}V</option>
              ))}
            </select>
          </div>

          {/* Min Speed Input */}
          <div className="filter-item">
            <label className="filter-label">{t.minSpeedLabel}</label>
            <div className="filter-input-wrapper">
              <input
                type="number"
                className="filter-input"
                value={minSpeed}
                onChange={(e) => setMinSpeed(e.target.value)}
                placeholder="0"
                min="0"
              />
              <span className="filter-unit">{t.rpmUnit}</span>
            </div>
          </div>

          {/* Min Airflow Input */}
          <div className="filter-item">
            <label className="filter-label">{t.minAirflowLabel}</label>
            <div className="filter-input-wrapper">
              <input
                type="number"
                className="filter-input"
                value={minAirflow}
                onChange={(e) => setMinAirflow(e.target.value)}
                placeholder="0"
                min="0"
                step="0.1"
              />
              <span className="filter-unit">{t.airflowUnit}</span>
            </div>
          </div>

          {/* Max Noise Input */}
          <div className="filter-item">
            <label className="filter-label">{t.maxNoiseLabel}</label>
            <div className="filter-input-wrapper">
              <input
                type="number"
                className="filter-input"
                value={maxNoise}
                onChange={(e) => setMaxNoise(e.target.value)}
                placeholder="80"
                min="0"
              />
              <span className="filter-unit">{t.noiseUnit}</span>
            </div>
          </div>

          {/* Filter Actions */}
          <div className="filter-item filter-actions">
            <label className="filter-label">&nbsp;</label>
            <div className="filter-buttons">
              <button className="filter-btn-apply" onClick={handleApplyFilter}>
                {t.applyFilter}
              </button>
              <button className="filter-btn-reset" onClick={handleResetFilter}>
                {t.resetFilter}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="product-showcase-header" ref={productTableRef}>
        <h3 className="showcase-title">{t.title}</h3>
        <p className="showcase-subtitle">{t.subtitle}</p>
        
        {(selectedSize || selectedVoltage || minSpeed || minAirflow || maxNoise) && (
          <div className="filter-results-info">
            <span className="filter-results-count">
              {t.filterResults}: {filteredSeries.length}
            </span>
            <button className="filter-clear-btn" onClick={handleResetFilter}>
              {t.resetFilter}
            </button>
          </div>
        )}
        
        {compareList.length > 0 && (
          <div className="compare-actions-bar">
            <span className="compare-count">{compareList.length} {t.selected}</span>
            <button className="view-compare-btn" onClick={() => setShowCompareModal(true)}>
              {t.viewCompare}
            </button>
            <button className="clear-compare-btn" onClick={clearCompare}>
              {t.clear}
            </button>
          </div>
        )}
      </div>

      {/* Product Table */}
      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>{tableHeaderLabels.image}</th>
              <th>{tableHeaderLabels.series}</th>
              <th>{tableHeaderLabels.size}</th>
              <th>{t.voltage}</th>
              <th>{t.speed}</th>
              <th>{t.airflow}</th>
              <th>{t.noise}</th>
              <th>{t.bearing}</th>
              <th>{tableHeaderLabels.action}</th>
            </tr>
          </thead>
          <tbody>
            {filteredSeries.map((series) => {
              const summary = getSeriesSummary(series);
              return (
                <tr 
                  key={series.id} 
                  className="product-table-row"
                  onClick={() => setSelectedSeries(series.id)}
                >
                  <td className="table-cell-image">
                    <LazyImage
                      src={getProductImage(series.id)}
                      alt={series.name}
                    />
                  </td>
                  <td className="table-cell-name">{series.name}</td>
                  <td className="table-cell-size">{series.size}</td>
                  <td className="table-cell-param">{summary.voltageRange}</td>
                  <td className="table-cell-param">{summary.speedRange}</td>
                  <td className="table-cell-param">{summary.airflowRange} m³/min</td>
                  <td className="table-cell-param">{summary.noiseRange}</td>
                  <td className="table-cell-param">{summary.bearingType}</td>
                  <td className="table-cell-action">
                    <button 
                      className="view-detail-btn" 
                      onClick={(e) => { e.stopPropagation(); setSelectedSeries(series.id); }}
                    >
                      {t.viewDetails}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      {currentSeries && (
        <div 
          className="detail-modal-overlay" 
          onClick={() => setSelectedSeries(null)}
          style={{ willChange: 'opacity' }}
        >
          <div className="detail-modal" onClick={e => e.stopPropagation()}>
            <div className="detail-modal-header">
              <div className="modal-title-section">
                <h3>{currentSeries.name}</h3>
                <span className="modal-size">{currentSeries.size}</span>
                <p className="modal-desc">{getProductDescription(currentSeries.id, locale)}</p>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedSeries(null)}>×</button>
            </div>
            
            <div className="detail-modal-content">
              <div className="modal-images-column">
                {getAllProductImages(currentSeries.id).map((imageUrl, index) => (
                  <ModalImage
                    key={index}
                    imageUrl={imageUrl}
                    alt={`${currentSeries.name} - ${index + 1}`}
                    onClick={() => setViewerImage({ url: imageUrl, alt: `${currentSeries.name} - ${index + 1}` })}
                  />
                ))}
              </div>
              
              <div className="modal-specs-section">
                <h4 className="modal-specs-title">
                  {locale === 'zh' ? '技术参数表' : 
                   locale === 'en' ? 'Technical Specifications' :
                   locale === 'vi' ? 'Bảng Thông Số Kỹ Thuật' :
                   locale === 'th' ? 'ตารางข้อมูลจำเพาะทางเทคนิค' :
                   locale === 'ms' ? 'Jadual Spesifikasi Teknikal' :
                   locale === 'tr' ? 'Teknik Özellikler Tablosu' :
                   'جدول المواصفات الفنية'}
                </h4>
                
                <div className="modal-specs-table-wrapper">
                  <table className="modal-specs-table">
                    <thead>
                      <tr>
                        <th>{headers[0]}</th>
                        {currentSeries.variants.map((variant) => (
                          <th key={variant.model}>
                            <div className="model-header-with-checkbox">
                              <input 
                                type="checkbox" 
                                checked={compareList.includes(variant.model)}
                                onChange={() => toggleCompare(variant.model)}
                                disabled={!compareList.includes(variant.model) && compareList.length >= 6}
                                onClick={e => e.stopPropagation()}
                              />
                              <span>{variant.model}</span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((rowIdx) => (
                        <tr key={rowIdx}>
                          <td className="param-label">{headers[rowIdx]}</td>
                          {currentSeries.variants.map((variant) => {
                            const values = [
                              variant.bearingType,
                              variant.voltage,
                              variant.power,
                              variant.frequency,
                              variant.current,
                              variant.speed,
                              variant.airflow,
                              variant.noise,
                              variant.insulationClass,
                              variant.insulation,
                              variant.dielectricStrength,
                              variant.weight,
                              variant.coilMaterial,
                              variant.housingMaterial,
                              variant.bladeMaterial,
                            ];
                            const value = values[rowIdx - 1];
                            // Translate material and bearing values
                            let displayValue = value;
                            if (rowIdx === 1) displayValue = features[value as keyof typeof features] || value;
                            if ([13, 14, 15].includes(rowIdx)) {
                              displayValue = materials[value as keyof typeof materials] || value;
                            }
                            return <td key={variant.model}>{displayValue}</td>;
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compare Modal */}
      {showCompareModal && compareList.length > 0 && (
        <div 
          className="compare-modal-overlay" 
          onClick={() => setShowCompareModal(false)}
          style={{ willChange: 'opacity' }}
        >
          <div className="compare-modal" onClick={e => e.stopPropagation()}>
            <div className="compare-modal-header">
              <h3>
                {locale === 'zh' ? '型号对比' : 
                 locale === 'en' ? 'Model Comparison' :
                 locale === 'vi' ? 'So Sánh Mẫu' :
                 locale === 'th' ? 'การเปรียบเทียบรุ่น' :
                 locale === 'ms' ? 'Perbandingan Model' :
                 locale === 'tr' ? 'Model Karşılaştırması' :
                 'مقارنة النماذج'}
              </h3>
              <button className="close-btn" onClick={() => setShowCompareModal(false)}>×</button>
            </div>
            <div className="compare-modal-content">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>{headers[0]}</th>
                    {compareProducts.map((p) => (
                      <th key={p.model} className="compare-model-header">{p.model}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((rowIdx) => (
                    <tr key={rowIdx}>
                      <td>{headers[rowIdx]}</td>
                      {compareProducts.map((p) => {
                        const values = [
                          p.bearingType,
                          p.voltage,
                          p.power,
                          p.frequency,
                          p.current,
                          p.speed,
                          p.airflow,
                          p.noise,
                          p.insulationClass,
                          p.insulation,
                          p.dielectricStrength,
                          p.weight,
                          p.coilMaterial,
                          p.housingMaterial,
                          p.bladeMaterial,
                        ];
                        const value = values[rowIdx - 1];
                        let displayValue = value;
                        if (rowIdx === 1) displayValue = features[value as keyof typeof features] || value;
                        if ([13, 14, 15].includes(rowIdx)) {
                          displayValue = materials[value as keyof typeof materials] || value;
                        }
                        return <td key={p.model}>{displayValue}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Bottom Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed-compare-bar">
          <div className="fixed-compare-content">
            <div className="fixed-compare-left">
              <div className="fixed-compare-header">
                <span className="fixed-compare-icon">📊</span>
                <span className="fixed-compare-title">
                  {locale === 'zh' ? '已选择对比型号' :
                   locale === 'en' ? 'Selected Models' :
                   locale === 'vi' ? 'Mẫu đã chọn' :
                   locale === 'th' ? 'รุ่นที่เลือก' :
                   locale === 'ms' ? 'Model dipilih' :
                   locale === 'tr' ? 'Seçilen Modeller' :
                   'النماذج المختارة'}
                </span>
                <span className="fixed-compare-max">(max 6)</span>
              </div>
              <div className="fixed-compare-models">
                {compareList.map((model) => (
                  <span key={model} className="fixed-compare-model-tag">
                    {model}
                    <button 
                      className="fixed-compare-remove-btn"
                      onClick={() => toggleCompare(model)}
                      title={locale === 'zh' ? '移除' : 'Remove'}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div className="fixed-compare-actions">
              <button className="fixed-compare-view-btn" onClick={() => setShowCompareModal(true)}>
                {locale === 'zh' ? '查看对比' :
                 locale === 'en' ? 'View Compare' :
                 locale === 'vi' ? 'Xem so sánh' :
                 locale === 'th' ? 'ดูการเปรียบเทียบ' :
                 locale === 'ms' ? 'Lihat perbandingan' :
                 locale === 'tr' ? 'Karşılaştır' :
                 'عرض المقارنة'}
              </button>
              <button className="fixed-compare-clear-btn" onClick={clearCompare}>
                {locale === 'zh' ? '清空' :
                 locale === 'en' ? 'Clear' :
                 locale === 'vi' ? 'Xóa' :
                 locale === 'th' ? 'ล้าง' :
                 locale === 'ms' ? 'Padam' :
                 locale === 'tr' ? 'Temizle' :
                 'مسح'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Viewer */}
      {viewerImage && (
        <ImageViewer
          imageUrl={viewerImage.url}
          alt={viewerImage.alt}
          onClose={() => setViewerImage(null)}
        />
      )}
    </div>
  );
}
