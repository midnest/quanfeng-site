'use client';

import { productSeries } from '../lib/productData';

export function TestProductSeries() {
  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <h3>产品系列测试 - 共 {productSeries.length} 个系列</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '20px' }}>
        {productSeries.map((series, index) => (
          <div 
            key={series.id} 
            style={{ 
              padding: '12px 20px', 
              background: '#fff', 
              border: '2px solid #ccc',
              borderRadius: '10px',
              minWidth: '100px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontWeight: 'bold' }}>{index + 1}. {series.name}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{series.size}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', padding: '10px', background: '#ffeb3b', borderRadius: '5px' }}>
        <strong>所有系列列表：</strong>
        <ul>
          {productSeries.map((s, i) => (
            <li key={s.id}>{i + 1}. {s.name} ({s.size})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
