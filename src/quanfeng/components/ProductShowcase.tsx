"use client";

import { useState, useMemo } from "react";
import { withBasePath } from "@/quanfeng/lib/base-path";
import { productSeries, tableHeaders, featureTranslations, type ProductSeries, type ProductVariant } from "@/quanfeng/lib/productData";
import type { Locale } from "@/quanfeng/lib/i18n";

interface ProductShowcaseProps {
  locale: Locale;
}

export function ProductShowcase({ locale }: ProductShowcaseProps) {
  const [selectedSeries, setSelectedSeries] = useState<string>(productSeries[0].id);
  const [activeImageTab, setActiveImageTab] = useState<'main' | 'side' | 'back'>('main');
  const [compareMode, setCompareMode] = useState(false);
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);
  
  const headers = tableHeaders[locale] || tableHeaders.zh;
  const features = featureTranslations[locale] || featureTranslations.zh;
  
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

  const getCompareProducts = (): ProductVariant[] => {
    const allVariants = productSeries.flatMap(s => s.variants);
    return compareList.map(model => allVariants.find(v => v.model === model)).filter(Boolean) as ProductVariant[];
  };

  const clearCompare = () => {
    setCompareList([]);
    setShowCompareModal(false);
  };

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
           locale === 'tr' ? 'Ürün Serisi' : 'سلسلة المنتجات'}
        </h3>
        <div className="series-tabs">
          {productSeries.map((series) => (
            <button
              key={series.id}
              className={`series-tab ${selectedSeries === series.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedSeries(series.id);
                setActiveImageTab('main');
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
           locale === 'tr' ? 'Modelleri Karşılaştır' : 'مقارنة النماذج'}
        </button>
        {compareList.length > 0 && (
          <>
            <span className="compare-count">
              {compareList.length} {locale === 'zh' ? '个已选' : 'selected'}
            </span>
            <button className="compare-view-btn" onClick={() => setShowCompareModal(true)}>
              {locale === 'zh' ? '查看对比' : 'View Compare'}
            </button>
            <button className="compare-clear-btn" onClick={clearCompare}>
              {locale === 'zh' ? '清除' : 'Clear'}
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

        {/* Images Section */}
        <div className="product-images-section">
          {/* Main Product Image */}
          <div className="product-main-image">
            <div className="product-image-tabs">
              <button 
                className={activeImageTab === 'main' ? 'active' : ''}
                onClick={() => setActiveImageTab('main')}
              >
                {locale === 'zh' ? '正面' : 'Front'}
              </button>
              <button 
                className={activeImageTab === 'side' ? 'active' : ''}
                onClick={() => setActiveImageTab('side')}
              >
                {locale === 'zh' ? '侧面' : 'Side'}
              </button>
              <button 
                className={activeImageTab === 'back' ? 'active' : ''}
                onClick={() => setActiveImageTab('back')}
              >
                {locale === 'zh' ? '背面' : 'Back'}
              </button>
            </div>
            <div className="product-image-display">
              <img 
                src={withBasePath(currentSeries.images[activeImageTab])} 
                alt={`${currentSeries.name} ${activeImageTab}`}
              />
            </div>
          </div>

          {/* Dimension Drawing */}
          <div className="product-dimension-image">
            <h4>
              {locale === 'zh' ? '尺寸规格图' : 
               locale === 'en' ? 'Dimension Drawing' :
               locale === 'vi' ? 'Bản Vẽ Kích Thước' :
               locale === 'th' ? 'แผนภาพขนาด' :
               locale === 'ms' ? 'Lukisan Dimensi' :
               locale === 'tr' ? 'Boyut Çizimi' : 'رسم الأبعاد'}
            </h4>
            <div className="dimension-image-display">
              <img 
                src={withBasePath(currentSeries.images.dimension)} 
                alt={`${currentSeries.name} dimension`}
              />
            </div>
          </div>
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
             locale === 'tr' ? 'Teknik Özellikler Tablosu' : 'جدول المواصفات التقنية'}
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
                    <td>{variant.voltage}V</td>
                    <td>{variant.power}W</td>
                    <td>{variant.frequency}</td>
                    <td>{variant.current}A</td>
                    <td>{variant.speed}RPM</td>
                    <td>{variant.airflow}m³/min</td>
                    <td>{variant.noise}dB</td>
                    <td>{variant.insulation}</td>
                    <td>{variant.dielectricStrength}V</td>
                    <td>{variant.weight}kg</td>
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
                {locale === 'zh' ? '型号对比' : 'Model Comparison'}
              </h3>
              <button className="close-btn" onClick={() => setShowCompareModal(false)}>×</button>
            </div>
            <div className="compare-modal-content">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>{locale === 'zh' ? '参数' : 'Parameter'}</th>
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
                      <td key={i}>{p.voltage}V</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[3]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.power}W</td>
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
                      <td key={i}>{p.current}A</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[6]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.speed}RPM</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[7]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.airflow}m³/min</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[8]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.noise}dB</td>
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
                      <td key={i}>{p.dielectricStrength}V</td>
                    ))}
                  </tr>
                  <tr>
                    <td>{headers[11]}</td>
                    {getCompareProducts().map((p, i) => (
                      <td key={i}>{p.weight}kg</td>
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
