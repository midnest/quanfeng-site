'use client';

import { useState, useMemo } from 'react';
import { productSeries, tableHeaders, featureTranslations } from '../lib/productData';
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
        </h3>
        <div className="series-tabs">
          {productSeries.map((series) => (
            <button
              key={series.id}
              className={`series-tab ${selectedSeries === series.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedSeries(series.id);
              }}
            >
              <span className="series-tab-name">{series.name}</span>
              <span className="series-tab-size">{series.size}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Compare Mode Toggle */}
      <div className="compare-toolbar">
        <button 
          className={`compare-toggle ${compareMode ? 'active' : ''}`}
          onClick={() => {
            setCompareMode(!compareMode);
            if (compareMode) {
              setCompareList([]);
            }
          }}
        >
          {locale === 'zh' ? '型号对比' : 
           locale === 'en' ? 'Compare Models' :
           locale === 'vi' ? 'So Sánh Mẫu' :
           locale === 'th' ? 'เปรียบเทียบรุ่น' :
           locale === 'ms' ? 'Bandingkan Model' :
           locale === 'tr' ? 'Model Karşılaştır' :
           'مقارنة النماذج'}
        </button>
        {compareList.length > 0 && (
          <>
            <span className="compare-count">
              {compareList.length} {locale === 'zh' ? '个已选' : 
                locale === 'en' ? 'selected' :
                locale === 'vi' ? 'đã chọn' :
                locale === 'th' ? 'ที่เลือก' :
                locale === 'ms' ? 'dipilih' :
                locale === 'tr' ? 'seçildi' :
                'مختار'}
            </span>
            <button className="compare-view-btn" onClick={() => setShowCompareModal(true)}>
              {locale === 'zh' ? '查看对比' : 
               locale === 'en' ? 'View Compare' :
               locale === 'vi' ? 'Xem So Sánh' :
               locale === 'th' ? 'ดูการเปรียบเทียบ' :
               locale === 'ms' ? 'Lihat Perbandingan' :
               locale === 'tr' ? 'Karşılaştırmayı Gör' :
               'عرض المقارنة'}
            </button>
            <button className="compare-clear-btn" onClick={clearCompare}>
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

      {/* Product Detail Card */}
      <div className="product-detail-card">
        {/* Header */}
        <div className="product-detail-header">
          <h3 className="product-detail-title">{currentSeries.name}</h3>
          <span className="product-detail-size">{currentSeries.size}</span>
          <p className="product-detail-desc">{currentSeries.description}</p>
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
          {currentSeries.features.map((feature, idx) => (
            <span key={idx} className="feature-tag">{feature}</span>
          ))}
        </div>

        {/* Specifications Table */}
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
          <div className="specs-table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  {compareMode && <th>{locale === 'zh' ? '对比' : 'Compare'}</th>}
                  {headers.map((header, idx) => (
                    <th key={idx}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentSeries.variants.map((variant, idx) => (
                  <tr key={idx} className={compareList.includes(variant.model) ? 'selected' : ''}>
                    {compareMode && (
                      <td>
                        <input 
                          type="checkbox" 
                          checked={compareList.includes(variant.model)}
                          onChange={() => toggleCompare(variant.model)}
                          disabled={!compareList.includes(variant.model) && compareList.length >= 4}
                        />
                      </td>
                    )}
                    <td className="model-cell">{variant.model}</td>
                    <td>{locale === 'zh' ? variant.bearing : features[variant.bearingType]}</td>
                    <td>{variant.voltage}</td>
                    <td>{variant.power}</td>
                    <td>{variant.frequency}</td>
                    <td>{variant.current}</td>
                    <td>{variant.speed}</td>
                    <td>{variant.airflow}</td>
                    <td>{variant.noise}</td>
                    <td>{variant.insulation}</td>
                    <td>{variant.dielectricStrength}</td>
                    <td>{variant.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
