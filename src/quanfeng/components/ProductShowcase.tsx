'use client';

import { useState, useMemo } from 'react';
import { productSeries, tableHeaders, featureTranslations, getProductDescription, getProductFeatures } from '../lib/productData';
import { withBasePath } from '@/quanfeng/lib/base-path';

interface ProductShowcaseProps {
  locale: string;
}

export function ProductShowcase({ locale }: ProductShowcaseProps) {
  const [selectedSeries, setSelectedSeries] = useState<string>(productSeries[0].id);
  const [compareMode, setCompareMode] = useState(false);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const headers = tableHeaders[locale as keyof typeof tableHeaders] || tableHeaders.zh;
  const features = featureTranslations[locale as keyof typeof featureTranslations] || featureTranslations.zh;

  const currentSeries = useMemo(() => 
    productSeries.find(s => s.id === selectedSeries) || productSeries[0],
    [selectedSeries]
  );

  const toggleCompare = (model: string) => {
    if (compareList.includes(model)) {
      setCompareList(compareList.filter(m => m !== model));
    } else if (compareList.length < 4) {
      setCompareList([...compareList, model]);
    }
  };

  const clearCompare = () => {
    setCompareList([]);
    setCompareMode(false);
  };

  const getCompareProducts = () => {
    const allVariants = productSeries.flatMap(s => s.variants);
    return compareList.map(model => allVariants.find(v => v.model === model)).filter(Boolean) as typeof allVariants;
  };

  // Get PDF page for current series
  const getPdfPage = (pageNum: number) => withBasePath(`/pdf_pages/page_${pageNum}.png`);

  return (
    <div className="product-showcase">
      {/* Series Selector */}
      <div className="series-selector">
        <h3 className="series-selector-title">
          {locale === 'zh' ? '产品系列' : 
           locale === 'en' ? 'Product Series' :
           locale === 'vi' ? 'Dòng Sản Phẩm' :
           locale === 'th' ? 'ซีรีส์สินค้า' :
           locale === 'ms' ? 'Siri Produk' :
           locale === 'tr' ? 'Ürün Serisi' :
           'سلسلة المنتجات'}
          <span style={{ marginLeft: '10px', fontSize: '14px', color: '#ff0000' }}>
            (共 {productSeries.length} 个系列)
          </span>
        </h3>
        <div className="series-tabs">
          {productSeries.map((series, index) => (
            <button
              key={series.id}
              className={`series-tab ${selectedSeries === series.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedSeries(series.id);
              }}
              title={`#${index + 1} ${series.name}`}
            >
              <span className="series-tab-name">{series.name}</span>
              <span className="series-tab-size">{series.size}</span>
            </button>
          ))}
        </div>
      </div>



      {/* Product Detail Card */}
      <div className="product-detail-card">
        {/* Header */}
        <div className="product-detail-header">
          <h3 className="product-detail-title">{currentSeries.name}</h3>
          <span className="product-detail-size">{currentSeries.size}</span>
          <p className="product-detail-desc">{getProductDescription(currentSeries.id, locale)}</p>
        </div>

        {/* PDF Page Display */}
        <div className="product-pdf-display">
          <img 
            src={getPdfPage(currentSeries.pdfPage)} 
            alt={`${currentSeries.name} catalog page`}
            className="pdf-page-image"
          />
        </div>

        {/* Features Tags */}
        <div className="product-features">
          {getProductFeatures(currentSeries.id, locale).map((feature, idx) => (
            <span key={idx} className="feature-tag">{feature}</span>
          ))}
        </div>

        {/* Specifications Table - Transposed Layout for Mobile Friendliness */}
        <div className="product-specs-section">
          <h4 className="specs-title">
            {locale === 'zh' ? '技术参数表' : 
             locale === 'en' ? 'Technical Specifications' :
             locale === 'vi' ? 'Bảng Thông Số Kỹ Thuật' :
             locale === 'th' ? 'ตารางข้อมูลจำเพาะทางเทคนิค' :
             locale === 'ms' ? 'Jadual Spesifikasi Teknikal' :
             locale === 'tr' ? 'Teknik Özellikler Tablosu' :
             'جدول المواصفات الفنية'}
          </h4>
          
          {/* Compare Mode Toggle */}
          <div className="specs-compare-toggle">
            <label className="compare-checkbox-label">
              <input 
                type="checkbox" 
                checked={compareMode}
                onChange={() => {
                  setCompareMode(!compareMode);
                  if (compareMode) {
                    setCompareList([]);
                  }
                }}
              />
              <span>
                {locale === 'zh' ? '启用型号对比' : 
                 locale === 'en' ? 'Enable Model Comparison' :
                 locale === 'vi' ? 'Bật So Sánh Mẫu' :
                 locale === 'th' ? 'เปิดใช้งานการเปรียบเทียบรุ่น' :
                 locale === 'ms' ? 'Dayakan Perbandingan Model' :
                 locale === 'tr' ? 'Model Karşılaştırmayı Etkinleştir' :
                 'تمكين مقارنة النماذج'}
              </span>
            </label>
            {compareList.length > 0 && (
              <>
                <span className="specs-compare-count">
                  {compareList.length} {locale === 'zh' ? '个已选' : 
                    locale === 'en' ? 'selected' :
                    locale === 'vi' ? 'đã chọn' :
                    locale === 'th' ? 'ที่เลือก' :
                    locale === 'ms' ? 'dipilih' :
                    locale === 'tr' ? 'seçildi' :
                    'مختار'}
                </span>
                <button className="desktop-view-compare-btn" onClick={() => setShowCompareModal(true)}>
                  {locale === 'zh' ? '查看对比' : 
                   locale === 'en' ? 'View Compare' :
                   locale === 'vi' ? 'Xem So Sánh' :
                   locale === 'th' ? 'ดูการเปรียบเทียบ' :
                   locale === 'ms' ? 'Lihat Perbandingan' :
                   locale === 'tr' ? 'Karşılaştırmayı Gör' :
                   'عرض المقارنة'}
                </button>
                <button className="desktop-clear-compare-btn" onClick={clearCompare}>
                  {locale === 'zh' ? '清除' : 
                   locale === 'en' ? 'Clear' :
                   locale === 'vi' ? 'Xóa' :
                   locale === 'th' ? 'ล้าง' :
                   locale === 'ms' ? 'Padam' :
                   locale === 'tr' ? 'Temizle' :
                   'مسح'}
                </button>
              </>
            )}
          </div>

          {/* Desktop View - Transposed Table */}
          <div className="specs-table-wrapper desktop-table">
            <table className="specs-table specs-table-transposed">
              <thead>
                <tr>
                  <th className="param-header">
                    {locale === 'zh' ? '参数' : 
                     locale === 'en' ? 'Parameter' :
                     locale === 'vi' ? 'Thông Số' :
                     locale === 'th' ? 'พารามิเตอร์' :
                     locale === 'ms' ? 'Parameter' :
                     locale === 'tr' ? 'Parametre' :
                     'المعلمة'}
                  </th>
                  {currentSeries.variants.map((variant, idx) => (
                    <th key={idx} className={`model-header ${compareList.includes(variant.model) ? 'selected' : ''}`}>
                      {compareMode && (
                        <input 
                          type="checkbox" 
                          checked={compareList.includes(variant.model)}
                          onChange={() => toggleCompare(variant.model)}
                          disabled={!compareList.includes(variant.model) && compareList.length >= 4}
                        />
                      )}
                      <span>{variant.model}</span>
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
                    <td key={idx}>{variant.insulation}</td>
                  ))}
                </tr>
                <tr>
                  <td className="param-label">{headers[10]}</td>
                  {currentSeries.variants.map((variant, idx) => (
                    <td key={idx}>{variant.dielectricStrength}</td>
                  ))}
                </tr>
                <tr>
                  <td className="param-label">{headers[11]}</td>
                  {currentSeries.variants.map((variant, idx) => (
                    <td key={idx}>{variant.weight}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile View - Card Layout */}
          <div className="mobile-specs-list">
            {currentSeries.variants.map((variant, vidx) => (
              <div key={vidx} className={`mobile-spec-card ${compareList.includes(variant.model) ? 'selected' : ''}`}>
                <div className="mobile-spec-header">
                  {compareMode && (
                    <input 
                      type="checkbox" 
                      checked={compareList.includes(variant.model)}
                      onChange={() => toggleCompare(variant.model)}
                      disabled={!compareList.includes(variant.model) && compareList.length >= 4}
                    />
                  )}
                  <h5>{variant.model}</h5>
                </div>
                <div className="mobile-spec-rows">
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[1]}</span>
                    <span className="mobile-spec-value">{locale === 'zh' ? variant.bearing : features[variant.bearingType]}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[2]}</span>
                    <span className="mobile-spec-value">{variant.voltage}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[3]}</span>
                    <span className="mobile-spec-value">{variant.power}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[4]}</span>
                    <span className="mobile-spec-value">{variant.frequency}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[5]}</span>
                    <span className="mobile-spec-value">{variant.current}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[6]}</span>
                    <span className="mobile-spec-value">{variant.speed}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[7]}</span>
                    <span className="mobile-spec-value">{variant.airflow}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[8]}</span>
                    <span className="mobile-spec-value">{variant.noise}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[9]}</span>
                    <span className="mobile-spec-value">{variant.insulation}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[10]}</span>
                    <span className="mobile-spec-value">{variant.dielectricStrength}</span>
                  </div>
                  <div className="mobile-spec-row">
                    <span className="mobile-spec-label">{headers[11]}</span>
                    <span className="mobile-spec-value">{variant.weight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compare Button for Mobile */}
          {compareList.length > 0 && (
            <div className="mobile-compare-actions">
              <button className="mobile-view-compare-btn" onClick={() => setShowCompareModal(true)}>
                {locale === 'zh' ? '查看对比 (' : 
                 locale === 'en' ? 'View Compare (' :
                 locale === 'vi' ? 'Xem So Sánh (' :
                 locale === 'th' ? 'ดูการเปรียบเทียบ (' :
                 locale === 'ms' ? 'Lihat Perbandingan (' :
                 locale === 'tr' ? 'Karşılaştırmayı Gör (' :
                 'عرض المقارنة ('}{compareList.length})
              </button>
              <button className="mobile-clear-compare-btn" onClick={clearCompare}>
                {locale === 'zh' ? '清除' : 
                 locale === 'en' ? 'Clear' :
                 locale === 'vi' ? 'Xóa' :
                 locale === 'th' ? 'ล้าง' :
                 locale === 'ms' ? 'Padam' :
                 locale === 'tr' ? 'Temizle' :
                 'مسح'}
              </button>
            </div>
          )}
        </div>
      </div>

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
                    <th>{locale === 'zh' ? '参数' : 
                         locale === 'en' ? 'Parameter' :
                         locale === 'vi' ? 'Thông Số' :
                         locale === 'th' ? 'พารามิเตอร์' :
                         locale === 'ms' ? 'Parameter' :
                         locale === 'tr' ? 'Parametre' :
                         'المعلمة'}</th>
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
                      <td key={i}>{p.insulation}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[10]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.dielectricStrength}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[11]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.weight}</td>
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
