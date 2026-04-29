'use client';

import { useState, useMemo, useCallback, useRef } from 'react';
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

// Modal image component with zoom
function ModalImage({ 
  imageUrl, 
  alt
}: { 
  imageUrl: string; 
  alt: string;
}) {
  const [hidden, setHidden] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);
  
  if (hidden) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };
  
  return (
    <div className="modal-pdf-section">
      <div 
        className="zoomable-image-wrapper"
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <img 
          ref={imgRef}
          src={imageUrl} 
          alt={alt}
          className="modal-pdf-image"
          loading="lazy"
          decoding="async"
          onError={() => setHidden(true)}
        />
        {showZoom && (
          <div className="zoom-lens" style={{
            left: `${zoomPosition.x}%`,
            top: `${zoomPosition.y}%`,
          }} />
        )}
        {showZoom && (
          <div className="zoom-result">
            <img 
              src={imageUrl}
              alt={alt}
              style={{
                position: 'absolute',
                left: `${-zoomPosition.x * 2}%`,
                top: `${-zoomPosition.y * 2}%`,
                width: '300%',
                height: '300%',
                objectFit: 'cover',
              }}
            />
          </div>
        )}
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

export function ProductShowcase({ locale }: ProductShowcaseProps) {
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Memoized values
  const headers = useMemo(() => tableHeaders[locale as keyof typeof tableHeaders] || tableHeaders.zh, [locale]);
  const features = useMemo(() => featureTranslations[locale as keyof typeof featureTranslations] || featureTranslations.zh, [locale]);
  const materials = useMemo(() => materialTranslations[locale as keyof typeof materialTranslations] || materialTranslations.zh, [locale]);

  const currentSeries = useMemo(() => 
    selectedSeries ? productSeries.find(s => s.id === selectedSeries) || null : null,
    [selectedSeries]
  );

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

  // Get product image
  const getProductImage = useCallback((seriesId: string) => {
    const folder = FOLDER_MAP[seriesId];
    if (folder) {
      return withBasePath(`/extracted_docx_images/${folder}/thumb.jpg`);
    }
    return '';
  }, []);

  // Get all product images
  const getAllProductImages = useCallback((seriesId: string): string[] => {
    const folder = FOLDER_MAP[seriesId];
    if (!folder) return [];
    // Generate paths for both .jpg and .jpeg formats
    const paths: string[] = [];
    [1, 2, 3, 4, 5, 6].forEach(num => {
      paths.push(withBasePath(`/extracted_docx_images/${folder}/${num}.jpg`));
      paths.push(withBasePath(`/extracted_docx_images/${folder}/${num}.jpeg`));
    });
    return paths;
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
      {/* Header */}
      <div className="product-showcase-header">
        <h3 className="showcase-title">{t.title}</h3>
        <p className="showcase-subtitle">{t.subtitle}</p>
        
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
            {productSeries.map((series) => {
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
            <div className="fixed-compare-info">
              <span className="fixed-compare-icon">📊</span>
              <span className="fixed-compare-count">
                {locale === 'zh' ? `已选择 ${compareList.length} 个型号对比` :
                 locale === 'en' ? `${compareList.length} models selected for comparison` :
                 locale === 'vi' ? `Đã chọn ${compareList.length} mẫu để so sánh` :
                 locale === 'th' ? `เลือก ${compareList.length} รุ่นเพื่อเปรียบเทียบ` :
                 locale === 'ms' ? `${compareList.length} model dipilih untuk perbandingan` :
                 locale === 'tr' ? `Karşılaştırma için ${compareList.length} model seçildi` :
                 `تم اختيار ${compareList.length} نموذج للمقارنة`}
              </span>
              <span className="fixed-compare-max">(max 6)</span>
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
    </div>
  );
}
