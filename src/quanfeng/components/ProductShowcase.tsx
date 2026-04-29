'use client';

import { useState, useMemo } from 'react';
import { productSeries, tableHeaders, featureTranslations, materialTranslations, getProductDescription, getProductFeatures } from '../lib/productData';
import { withBasePath } from '@/quanfeng/lib/base-path';

interface ProductShowcaseProps {
  locale: string;
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

  const headers = tableHeaders[locale as keyof typeof tableHeaders] || tableHeaders.zh;
  const features = featureTranslations[locale as keyof typeof featureTranslations] || featureTranslations.zh;
  const materials = materialTranslations[locale as keyof typeof materialTranslations] || materialTranslations.zh;

  const currentSeries = useMemo(() => 
    selectedSeries ? productSeries.find(s => s.id === selectedSeries) || null : null,
    [selectedSeries]
  );

  // Get aggregated data for each series
  const getSeriesSummary = (series: typeof productSeries[0]) => {
    const voltages = series.variants.map(v => v.voltage);
    const speeds = series.variants.map(v => v.speed);
    const airflows = series.variants.map(v => v.airflow);
    const noises = series.variants.map(v => v.noise);
    
    // Get bearing types (unique)
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
  };

  const toggleCompare = (model: string) => {
    if (compareList.includes(model)) {
      setCompareList(compareList.filter(m => m !== model));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, model]);
    }
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const getCompareProducts = () => {
    const allVariants = productSeries.flatMap(s => s.variants);
    return compareList.map(model => allVariants.find(v => v.model === model)).filter(Boolean) as typeof allVariants;
  };

  // Get PDF page for series
  const getPdfPage = (pageNum: number) => withBasePath(`/pdf_pages/page_${pageNum}.png`);

  // Get product image from extracted_docx_images folder
  const getProductImage = (seriesId: string, useThumbnail: boolean = false) => {
    // Map series id to folder name
    const folderMap: Record<string, string> = {
      'qa8025': '8025',
      'qa9225': '9225',
      'qa11025': '11025',
      'qa12025': '12025',
      'qa12038': '12038',
      'qa13538': '13538',
      'qa15050': '15050',
      'qa17250': '17250',
      'qa18060': '18060',
      'qa20060': '20060',
      'qa20060y': '20060Y',
      'qa22090y': '22090Y',
      'qa22580': '22580',
      'qa28080': '28080',
    };

    const folder = folderMap[seriesId];
    if (folder) {
      // Use thumbnail for table, full image for detail modal
      const imageName = useThumbnail ? 'thumb.jpg' : '1.png';
      return withBasePath(`/extracted_docx_images/${folder}/${imageName}`);
    }
    // Fallback to PDF page if no folder mapping
    const series = productSeries.find(s => s.id === seriesId);
    return series ? getPdfPage(series.pdfPage) : '';
  };

  // Translations
  const t = {
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
    power: locale === 'zh' ? '功率' : 
           locale === 'en' ? 'Power' :
           locale === 'vi' ? 'Công suất' :
           locale === 'th' ? 'กำลัง' :
           locale === 'ms' ? 'Kuasa' :
           locale === 'tr' ? 'Güç' :
           'القوة',
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
    speed: locale === 'zh' ? '转速' : 
           locale === 'en' ? 'Speed' :
           locale === 'vi' ? 'Tốc độ' :
           locale === 'th' ? 'ความเร็ว' :
           locale === 'ms' ? 'Kelajuan' :
           locale === 'tr' ? 'Hız' :
           'السرعة',
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
    close: locale === 'zh' ? '关闭' : 
           locale === 'en' ? 'Close' :
           locale === 'vi' ? 'Đóng' :
           locale === 'th' ? 'ปิด' :
           locale === 'ms' ? 'Tutup' :
           locale === 'tr' ? 'Kapat' :
           'إغلاق',
    compare: locale === 'zh' ? '对比' : 
             locale === 'en' ? 'Compare' :
             locale === 'vi' ? 'So sánh' :
             locale === 'th' ? 'เปรียบเทียบ' :
             locale === 'ms' ? 'Banding' :
             locale === 'tr' ? 'Karşılaştır' :
             'قارن',
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
  };

  return (
    <div className="product-showcase">
      {/* Header */}
      <div className="product-showcase-header">
        <h3 className="showcase-title">{t.title}</h3>
        <p className="showcase-subtitle">{t.subtitle}</p>
        
        {/* Compare Actions */}
        {compareList.length > 0 && (
          <div className="compare-actions-bar">
            <span className="compare-count">
              {compareList.length} {t.selected}
            </span>
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
              <th>{locale === 'zh' ? '产品图片' : locale === 'en' ? 'Image' : locale === 'vi' ? 'Hình ảnh' : locale === 'th' ? 'รูปภาพ' : locale === 'ms' ? 'Gambar' : locale === 'tr' ? 'Görsel' : 'الصورة'}</th>
              <th>{locale === 'zh' ? '系列名称' : locale === 'en' ? 'Series' : locale === 'vi' ? 'Dòng sản phẩm' : locale === 'th' ? 'ซีรี่ส์' : locale === 'ms' ? 'Siri' : locale === 'tr' ? 'Seri' : 'السلسلة'}</th>
              <th>{locale === 'zh' ? '尺寸' : locale === 'en' ? 'Size' : locale === 'vi' ? 'Kích thước' : locale === 'th' ? 'ขนาด' : locale === 'ms' ? 'Saiz' : locale === 'tr' ? 'Boyut' : 'الحجم'}</th>
              <th>{t.voltage}</th>
              <th>{t.speed}</th>
              <th>{t.airflow}</th>
              <th>{t.noise}</th>
              <th>{t.bearing}</th>
              <th>{locale === 'zh' ? '操作' : locale === 'en' ? 'Action' : locale === 'vi' ? 'Thao tác' : locale === 'th' ? 'การดำเนินการ' : locale === 'ms' ? 'Tindakan' : locale === 'tr' ? 'İşlem' : 'الإجراء'}</th>
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
                    <img
                      src={getProductImage(series.id, true)}
                      alt={series.name}
                      loading="lazy"
                      width="80"
                      height="60"
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
                    <button className="view-detail-btn" onClick={(e) => { e.stopPropagation(); setSelectedSeries(series.id); }}>
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
        <div className="detail-modal-overlay" onClick={() => setSelectedSeries(null)}>
          <div className="detail-modal" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="detail-modal-header">
              <div className="modal-title-section">
                <h3>{currentSeries.name}</h3>
                <span className="modal-size">{currentSeries.size}</span>
                <p className="modal-desc">{getProductDescription(currentSeries.id, locale)}</p>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedSeries(null)}>×</button>
            </div>
            
            {/* Modal Content */}
            <div className="detail-modal-content">
              {/* Product Image */}
              <div className="modal-pdf-section">
                <img 
                  src={getProductImage(currentSeries.id)} 
                  alt={currentSeries.name}
                  className="modal-pdf-image"
                />
              </div>
              
              {/* Specifications Table */}
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
                        {currentSeries.variants.map((variant, idx) => (
                          <th key={idx}>
                            <div className="model-header-with-checkbox">
                              <input 
                                type="checkbox" 
                                checked={compareList.includes(variant.model)}
                                onChange={() => toggleCompare(variant.model)}
                                disabled={!compareList.includes(variant.model) && compareList.length >= 4}
                                onClick={e => e.stopPropagation()}
                              />
                              <span>{variant.model}</span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="param-label">{headers[1]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{locale === 'zh' ? variant.bearing : features[variant.bearingType]}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[2]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.voltage}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[3]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.power}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[4]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.frequency}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[5]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.current}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[6]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.speed}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[7]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.airflow}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[8]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.noise}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[9]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.insulationClass}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[10]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.insulation}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[11]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.dielectricStrength}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[12]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{variant.weight}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[13]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{materials[variant.coilMaterial as keyof typeof materials]}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[14]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{materials[variant.housingMaterial as keyof typeof materials]}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="param-label">{headers[15]}</td>
                        {currentSeries.variants.map((variant, idx) => (
                          <td key={idx}>{materials[variant.bladeMaterial as keyof typeof materials]}</td>
                        ))}
                      </tr>
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
        <div className="compare-modal-overlay" onClick={() => setShowCompareModal(false)}>
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
                    {getCompareProducts().map((p, i) => (
                      <th key={i} className="compare-model-header">{p.model}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{headers[1]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{locale === 'zh' ? p.bearing : features[p.bearingType]}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[2]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.voltage}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[3]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.power}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[4]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.frequency}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[5]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.current}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[6]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.speed}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[7]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.airflow}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[8]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.noise}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[9]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.insulationClass}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[10]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.insulation}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[11]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.dielectricStrength}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[12]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.weight}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[13]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{materials[p.coilMaterial as keyof typeof materials]}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[14]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{materials[p.housingMaterial as keyof typeof materials]}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[15]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{materials[p.bladeMaterial as keyof typeof materials]}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
