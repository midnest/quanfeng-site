#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
更新产品数据脚本
读取 Excel 文件并生成新的 productData.ts
"""

import pandas as pd
import re

def parse_model(model):
    """解析型号，提取系列ID"""
    # QA8025HBL1 -> qa8025
    # QA22090YHBL2D -> qa22090y (带Y后缀的型号)
    match = re.match(r'(QA\d+Y?)', model)
    if match:
        return match.group(1).lower()
    return None

def get_size_from_model(model):
    """从型号提取尺寸"""
    sizes = {
        'QA8025': '80×80×25mm',
        'QA9225': '92×92×25mm',
        'QA11025': '110×110×25mm',
        'QA12025': '120×120×25mm',
        'QA12038': '120×120×38mm',
        'QA13538': '135×135×38mm',
        'QA15050': '150×150×50mm',
        'QA17250': '172×150×50mm',
        'QA18060': '180×180×60mm',
        'QA20060': '200×200×60mm',
        'QA20060Y': '200×200×60mm',
        'QA22090Y': '220×220×90mm',
        'QA22580': '225×225×80mm',
        'QA28080': '280×280×80mm',
    }
    for prefix, size in sizes.items():
        if model.startswith(prefix):
            return size
    return 'Unknown'

def get_pdf_page(series_id):
    """根据系列ID获取PDF页码"""
    pages = {
        'qa8025': 1,
        'qa9225': 1,
        'qa11025': 2,
        'qa12025': 2,
        'qa12038': 3,
        'qa13538': 3,
        'qa15050': 4,
        'qa17250': 4,
        'qa18060': 5,
        'qa20060': 6,
        'qa20060y': 6,
        'qa22090y': 7,
        'qa22580': 7,
        'qa28080': 8,
    }
    return pages.get(series_id, 1)

def format_value(val):
    """格式化数值"""
    if pd.isna(val):
        return ''
    if isinstance(val, float):
        if val == int(val):
            return str(int(val))
        return str(val)
    # 移除换行符并替换为空格
    return str(val).strip().replace('\n', ' ').replace('\r', '')

def main():
    # 读取Excel文件
    df = pd.read_excel('泉风轴流风机参数2026-5(1).xlsx', header=0)
    
    print(f"读取到 {len(df)} 行数据")
    
    # 按系列分组
    series_groups = {}
    
    for idx, row in df.iterrows():
        model = format_value(row.iloc[0])
        series_id = parse_model(model)
        
        if series_id not in series_groups:
            series_groups[series_id] = {
                'id': series_id,
                'name': series_id.upper(),
                'nameEn': f'{series_id.upper()} Axial Fan',
                'size': get_size_from_model(model),
                'dimensions': get_size_from_model(model),
                'pdfPage': get_pdf_page(series_id),
                'variants': []
            }
        
        # 解析轴承类型
        bearing_raw = format_value(row.iloc[12])
        bearing_type = 'ball' if 'Ball' in bearing_raw or '婊氱彔' in bearing_raw else 'sleeve'
        bearing = '滚珠' if bearing_type == 'ball' else '含油'
        
        # 构建variant
        variant = {
            'model': model,
            'bearing': bearing,
            'bearingType': bearing_type,
            'voltage': format_value(row.iloc[1]).replace('AC', ''),
            'power': format_value(row.iloc[2]),
            'frequency': format_value(row.iloc[3]),
            'current': format_value(row.iloc[4]),
            'speed': format_value(row.iloc[5]),
            'airflow': format_value(row.iloc[6]),
            'noise': format_value(row.iloc[7]),
            'insulationClass': format_value(row.iloc[8]),
            'insulation': format_value(row.iloc[9]),
            'dielectricStrength': format_value(row.iloc[10]).replace('V/min', '').replace('V', ''),
            'weight': format_value(row.iloc[11]),
            'coilMaterial': format_value(row.iloc[13]),
            'housingMaterial': format_value(row.iloc[14]),
            'bladeMaterial': format_value(row.iloc[15]),
        }
        
        series_groups[series_id]['variants'].append(variant)
    
    print(f"共有 {len(series_groups)} 个产品系列")
    for sid, data in series_groups.items():
        print(f"  {sid}: {len(data['variants'])} 个型号")
    
    # 生成TypeScript代码
    ts_content = generate_typescript(series_groups)
    
    # 保存到文件
    with open('src/quanfeng/lib/productData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print("\n✅ 产品数据已更新到 src/quanfeng/lib/productData.ts")

def generate_typescript(series_groups):
    """生成TypeScript代码"""
    
    # 多语言描述
    descriptions = generate_descriptions(series_groups)
    features = generate_features(series_groups)
    
    ts = '''// Product data based on PDF catalog - 泉风牌交流风机图册（2026更新）
// Auto-generated from 泉风轴流风机参数2026-5(1).xlsx

export interface ProductVariant {
  model: string;
  bearing: string;
  bearingType: 'ball' | 'sleeve';
  voltage: string;
  power: string;
  frequency: string;
  current: string;
  speed: string;
  airflow: string;
  noise: string;
  insulationClass: string;
  insulation: string;
  dielectricStrength: string;
  weight: string;
  coilMaterial: string;
  housingMaterial: string;
  bladeMaterial: string;
}

export interface ProductSeries {
  id: string;
  name: string;
  nameEn: string;
  size: string;
  dimensions: string;
  pdfPage: number;
  variants: ProductVariant[];
}

// Multi-language descriptions
export const productDescriptions: Record<string, Record<string, string>> = {
'''
    
    # 添加描述
    for series_id in sorted(series_groups.keys()):
        ts += f"  {series_id}: {descriptions.get(series_id, descriptions['default'])},\n"
    
    ts += '''};

// Multi-language features
export const productFeatures: Record<string, Record<string, string[]>> = {
'''
    
    # 添加特性
    for series_id in sorted(series_groups.keys()):
        ts += f"  {series_id}: {features.get(series_id, features['default'])},\n"
    
    ts += '''};

// Helper function to get description
export function getProductDescription(productId: string, locale: string): string {
  const descriptions = productDescriptions[productId];
  if (!descriptions) return '';
  return descriptions[locale] || descriptions.zh || '';
}

// Helper function to get features
export function getProductFeatures(productId: string, locale: string): string[] {
  const features = productFeatures[productId];
  if (!features) return [];
  return features[locale] || features.zh || [];
}

// Product data from PDF catalog
export const productSeries: ProductSeries[] = [
'''
    
    # 添加产品系列
    for series_id in sorted(series_groups.keys()):
        data = series_groups[series_id]
        ts += f'''  {{
    id: '{data['id']}',
    name: '{data['name']}',
    nameEn: '{data['nameEn']}',
    size: '{data['size']}',
    dimensions: '{data['dimensions']}',
    pdfPage: {data['pdfPage']},
    variants: [
'''
        for v in data['variants']:
            ts += f"      {{ model: '{v['model']}', bearing: '{v['bearing']}', bearingType: '{v['bearingType']}', voltage: '{v['voltage']}', power: '{v['power']}', frequency: '{v['frequency']}', current: '{v['current']}', speed: '{v['speed']}', airflow: '{v['airflow']}', noise: '{v['noise']}', insulationClass: '{v['insulationClass']}', insulation: '{v['insulation']}', dielectricStrength: '{v['dielectricStrength']}', weight: '{v['weight']}', coilMaterial: '{v['coilMaterial']}', housingMaterial: '{v['housingMaterial']}', bladeMaterial: '{v['bladeMaterial']}' }},\n"
        
        ts += '''    ],
  },
'''
    
    ts += '''];

// Table headers for different languages
export const tableHeaders = {
  zh: ['型号', '轴承', '电压(V)', '功率(W)', '频率(Hz)', '电流(A)', '转速(RPM)', '风量(m³/min)', '噪声(dB)', '绝缘电阻', '耐压(V)', '重量(kg)'],
  en: ['Model', 'Bearing', 'Voltage(V)', 'Power(W)', 'Frequency(Hz)', 'Current(A)', 'Speed(RPM)', 'Airflow(m³/min)', 'Noise(dB)', 'Insulation', 'Dielectric(V)', 'Weight(kg)'],
  vi: ['Mẫu', 'Ổ bi', 'Điện áp(V)', 'Công suất(W)', 'Tần số(Hz)', 'Dòng điện(A)', 'Tốc độ(RPM)', 'Lưu lượng(m³/min)', 'Ồn(dB)', 'Cách điện', 'Điện áp(V)', 'Trọng lượng(kg)'],
  th: ['รุ่น', 'ลูกปืน', 'แรงดัน(V)', 'กำลัง(W)', 'ความถี่(Hz)', 'กระแส(A)', 'ความเร็ว(RPM)', 'ปริมาณลม(m³/min)', 'เสียง(dB)', 'ฉนวน', 'แรงดันไฟ(V)', 'น้ำหนัก(kg)'],
  ms: ['Model', 'Bearing', 'Voltan(V)', 'Kuasa(W)', 'Frekuensi(Hz)', 'Arus(A)', 'Kelajuan(RPM)', 'Aliran(m³/min)', 'Bunyi(dB)', 'Penebat', 'Dielektrik(V)', 'Berat(kg)'],
  tr: ['Model', 'Rulman', 'Voltaj(V)', 'Güç(W)', 'Frekans(Hz)', 'Akım(A)', 'Hız(RPM)', 'Hava Akışı(m³/min)', 'Gürültü(dB)', 'İzolasyon', 'Dielektrik(V)', 'Ağırlık(kg)'],
  ar: ['الموديل', 'المحمل', 'الجهد(V)', 'القوة(W)', 'التردد(Hz)', 'التيار(A)', 'السرعة(RPM)', 'تدفق الهواء(m³/min)', 'الضوضاء(dB)', 'العزل', 'الضغط(V)', 'الوزن(kg)'],
};

// Feature translations
export const featureTranslations = {
  zh: { ball: '滚珠', sleeve: '含油' },
  en: { ball: 'Ball', sleeve: 'Sleeve' },
  vi: { ball: 'Bi', sleeve: 'Bạc' },
  th: { ball: 'ลูกปืน', sleeve: 'บูช' },
  ms: { ball: 'Bebola', sleeve: 'Lengan' },
  tr: { ball: 'Bilyalı', sleeve: 'Burç' },
  ar: { ball: 'كروي', sleeve: 'كم' },
};
'''
    
    return ts

def generate_descriptions(series_groups):
    """生成多语言描述"""
    descriptions = {}
    
    # 尺寸映射到描述模板
    templates = {
        'QA8025': {
            'zh': 'FZY小型轴流风机，80mm方型铝合金框架，PBT塑料风叶',
            'en': 'FZY Mini Axial Fan, 80mm Square Aluminum Frame, PBT Plastic Blades',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 80mm, Cánh Quạt Nhựa PBT',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 80mm, ใบพัดพลาสติก PBT',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 80mm, Bilah Plastik PBT',
            'tr': 'FZY Mini Eksenel Fan, 80mm Kare Alüminyum Gövde, PBT Plastik Kanatlar',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 80 مم، شفرات بلاستيكية PBT',
        },
        'QA9225': {
            'zh': 'FZY小型轴流风机，92mm方型铝合金框架，PBT塑料风叶',
            'en': 'FZY Mini Axial Fan, 92mm Square Aluminum Frame, PBT Plastic Blades',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 92mm, Cánh Quạt Nhựa PBT',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 92mm, ใบพัดพลาสติก PBT',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 92mm, Bilah Plastik PBT',
            'tr': 'FZY Mini Eksenel Fan, 92mm Kare Alüminyum Gövde, PBT Plastik Kanatlar',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 92 مم، شفرات بلاستيكية PBT',
        },
        'QA11025': {
            'zh': 'FZY小型轴流风机，110mm方型铝合金框架，PBT塑料风叶',
            'en': 'FZY Mini Axial Fan, 110mm Square Aluminum Frame, PBT Plastic Blades',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 110mm, Cánh Quạt Nhựa PBT',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 110mm, ใบพัดพลาสติก PBT',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 110mm, Bilah Plastik PBT',
            'tr': 'FZY Mini Eksenel Fan, 110mm Kare Alüminyum Gövde, PBT Plastik Kanatlar',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 110 مم، شفرات بلاستيكية PBT',
        },
        'QA12025': {
            'zh': 'FZY小型轴流风机，120mm方型铝合金框架，标准25mm厚度',
            'en': 'FZY Mini Axial Fan, 120mm Square Aluminum Frame, Standard 25mm Thickness',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 120mm, Độ Dày Tiêu Chuẩn 25mm',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 120mm, ความหนามาตรฐาน 25mm',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 120mm, Ketebalan Piawai 25mm',
            'tr': 'FZY Mini Eksenel Fan, 120mm Kare Alüminyum Gövde, Standart 25mm Kalınlık',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 120 مم، سماكة قياسية 25 مم',
        },
        'QA12038': {
            'zh': 'FZY小型轴流风机，120mm方型铝合金框架，38mm加厚设计',
            'en': 'FZY Mini Axial Fan, 120mm Square Aluminum Frame, 38mm Thickened Design',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 120mm, Thiết Kế Dày 38mm',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 120mm, การออกแบบหนา 38mm',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 120mm, Reka Bentuk Tebal 38mm',
            'tr': 'FZY Mini Eksenel Fan, 120mm Kare Alüminyum Gövde, 38mm Kalınlaştırılmış Tasarım',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 120 مم، تصميم مُثخن 38 مم',
        },
        'QA13538': {
            'zh': 'FZY小型轴流风机，135mm方型铝合金框架，大风量设计',
            'en': 'FZY Mini Axial Fan, 135mm Square Aluminum Frame, High Airflow Design',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 135mm, Thiết Kế Lưu Lượng Gió Cao',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 135mm, การออกแบบปริมาณลมสูง',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 135mm, Reka Bentuk Aliran Tinggi',
            'tr': 'FZY Mini Eksenel Fan, 135mm Kare Alüminyum Gövde, Yüksek Hava Akışı Tasarımı',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 135 مم، تصميم تدفق هواء عالي',
        },
        'QA15050': {
            'zh': 'FZY小型轴流风机，150mm方型铝合金框架，50mm厚度',
            'en': 'FZY Mini Axial Fan, 150mm Square Aluminum Frame, 50mm Thickness',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 150mm, Độ Dày 50mm',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 150mm, ความหนา 50mm',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 150mm, Ketebalan 50mm',
            'tr': 'FZY Mini Eksenel Fan, 150mm Kare Alüminyum Gövde, 50mm Kalınlık',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 150 مم، سماكة 50 مم',
        },
        'QA17250': {
            'zh': 'FZY小型轴流风机，172mm圆形铝合金框架，大风量设计',
            'en': 'FZY Mini Axial Fan, 172mm Round Aluminum Frame, High Airflow Design',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 172mm, Thiết Kế Lưu Lượng Gió Cao',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 172mm, การออกแบบปริมาณลมสูง',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 172mm, Reka Bentuk Aliran Tinggi',
            'tr': 'FZY Mini Eksenel Fan, 172mm Yuvarlak Alüminyum Gövde, Yüksek Hava Akışı Tasarımı',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 172 مم، تصميم تدفق هواء عالي',
        },
        'QA18060': {
            'zh': 'FZY小型轴流风机，180mm圆形铝合金框架，60mm厚度',
            'en': 'FZY Mini Axial Fan, 180mm Round Aluminum Frame, 60mm Thickness',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 180mm, Độ Dày 60mm',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 180mm, ความหนา 60mm',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 180mm, Ketebalan 60mm',
            'tr': 'FZY Mini Eksenel Fan, 180mm Yuvarlak Alüminyum Gövde, 60mm Kalınlık',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 180 مم، سماكة 60 مم',
        },
        'QA20060': {
            'zh': 'FZY小型轴流风机，200mm圆形铝合金框架，60mm厚度',
            'en': 'FZY Mini Axial Fan, 200mm Round Aluminum Frame, 60mm Thickness',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 200mm, Độ Dày 60mm',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 200mm, ความหนา 60mm',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 200mm, Ketebalan 60mm',
            'tr': 'FZY Mini Eksenel Fan, 200mm Yuvarlak Alüminyum Gövde, 60mm Kalınlık',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 200 مم، سماكة 60 مم',
        },
        'QA20060Y': {
            'zh': 'FZY小型轴流风机，200mm圆形铝合金框架，60mm厚度，高转速版',
            'en': 'FZY Mini Axial Fan, 200mm Round Aluminum Frame, 60mm Thickness, High Speed',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 200mm, Độ Dày 60mm, Tốc Độ Cao',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 200mm, ความหนา 60mm, ความเร็วสูง',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 200mm, Ketebalan 60mm, Kelajuan Tinggi',
            'tr': 'FZY Mini Eksenel Fan, 200mm Yuvarlak Alüminyum Gövde, 60mm Kalınlık, Yüksek Hız',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 200 مم، سماكة 60 مم، سرعة عالية',
        },
        'QA22090': {
            'zh': 'FZY小型轴流风机，220mm圆形铝合金框架，90mm厚度，高转速版',
            'en': 'FZY Mini Axial Fan, 220mm Round Aluminum Frame, 90mm Thickness, High Speed',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 220mm, Độ Dày 90mm, Tốc Độ Cao',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 220mm, ความหนา 90mm, ความเร็วสูง',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 220mm, Ketebalan 90mm, Kelajuan Tinggi',
            'tr': 'FZY Mini Eksenel Fan, 220mm Yuvarlak Alüminyum Gövde, 90mm Kalınlık, Yüksek Hız',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 220 مم، سماكة 90 مم، سرعة عالية',
        },
        'QA22580': {
            'zh': 'FZY小型轴流风机，225mm圆形铝合金框架，80mm厚度，双电压',
            'en': 'FZY Mini Axial Fan, 225mm Round Aluminum Frame, 80mm Thickness, Dual Voltage',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 225mm, Độ Dày 80mm, Hai Điện Áp',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 225mm, ความหนา 80mm, แรงดันคู่',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 225mm, Ketebalan 80mm, Dua Voltan',
            'tr': 'FZY Mini Eksenel Fan, 225mm Yuvarlak Alüminyum Gövde, 80mm Kalınlık, Çift Voltaj',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 225 مم، سماكة 80 مم، جهد مزدوج',
        },
        'QA28080': {
            'zh': 'FZY小型轴流风机，280mm圆形铝合金框架，80mm厚度，双电压',
            'en': 'FZY Mini Axial Fan, 280mm Round Aluminum Frame, 80mm Thickness, Dual Voltage',
            'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 280mm, Độ Dày 80mm, Hai Điện Áp',
            'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 280mm, ความหนา 80mm, แรงดันคู่',
            'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 280mm, Ketebalan 80mm, Dua Voltan',
            'tr': 'FZY Mini Eksenel Fan, 280mm Yuvarlak Alüminyum Gövde, 80mm Kalınlık, Çift Voltaj',
            'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 280 مم، سماكة 80 مم، جهد مزدوج',
        },
    }
    
    for series_id in series_groups.keys():
        prefix = series_id.upper()
        if prefix in templates:
            descriptions[series_id] = templates[prefix]
        else:
            # 默认模板
            descriptions[series_id] = templates['QA8025']
    
    descriptions['default'] = templates['QA8025']
    return descriptions

def generate_features(series_groups):
    """生成多语言特性"""
    features = {}
    
    templates = {
        'QA8025': {
            'zh': ['体积小', '噪音低', '免维护', '安装便捷'],
            'en': ['Compact', 'Low Noise', 'Maintenance-free', 'Easy Install'],
            'vi': ['Nhỏ Gọn', 'Ồn Thấp', 'Không Bảo Trì', 'Dễ Lắp Đặt'],
            'th': ['กะทัดรัด', 'เสียงต่ำ', 'ไม่ต้องบำรุงรักษา', 'ติดตั้งง่าย'],
            'ms': ['Padat', 'Bunyi Rendah', 'Tanpa Penyelenggaraan', 'Mudah Pasang'],
            'tr': ['Kompakt', 'Düşük Gürültü', 'Bakımsız', 'Kolay Kurulum'],
            'ar': ['مدمجة', 'ضوضاء منخفضة', 'صيانة مجانية', 'تركيب سهل'],
        },
        'QA9225': {
            'zh': ['体积小巧', '大风量', '低噪音', '长寿命'],
            'en': ['Compact', 'High Airflow', 'Low Noise', 'Long Life'],
            'vi': ['Nhỏ Gọn', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'],
            'th': ['กะทัดรัด', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'],
            'ms': ['Padat', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'],
            'tr': ['Kompakt', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'],
            'ar': ['مدمجة', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل'],
        },
        'default': {
            'zh': ['工业级', '大风量', '低噪音', '长寿命'],
            'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'],
            'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'],
            'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'],
            'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'],
            'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'],
            'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل'],
        }
    }
    
    for series_id in series_groups.keys():
        prefix = series_id.upper()
        if prefix in templates:
            features[series_id] = templates[prefix]
        else:
            features[series_id] = templates['default']
    
    features['default'] = templates['default']
    return features

if __name__ == '__main__':
    main()
