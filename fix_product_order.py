#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修复产品数据顺序，使其与Excel一致
"""

import pandas as pd
import re

def get_size_from_model(model):
    """从型号提取尺寸"""
    match = re.search(r'QA(\d+)', model)
    if match:
        size = match.group(1)
        if len(size) == 4:
            return f'{size[:2]}×{size[:2]}×{size[2:]}mm'
        elif len(size) == 5:
            return f'{size[:3]}×{size[:3]}×{size[3:]}mm'
    return 'Unknown'

def get_pdf_page(series_id):
    """获取PDF页码"""
    page_map = {
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
        'qa22090': 7,
        'qa22580': 7,
        'qa28080': 8,
    }
    return page_map.get(series_id, 1)

def generate_typescript():
    # 读取Excel
    df = pd.read_excel('泉风轴流风机参数2026-5(1).xlsx', header=0)
    
    # 按Excel顺序收集数据
    series_order = []
    series_data = {}
    
    for idx, row in df.iterrows():
        model = str(row.iloc[0]).strip()
        match = re.match(r'(QA\d+)', model)
        if not match:
            continue
        
        series_id = match.group(1).lower()
        
        if series_id not in series_data:
            series_order.append(series_id)
            series_data[series_id] = {
                'id': series_id,
                'name': series_id.upper(),
                'nameEn': f'{series_id.upper()} Axial Fan',
                'size': get_size_from_model(model),
                'dimensions': get_size_from_model(model),
                'pdfPage': get_pdf_page(series_id),
                'variants': []
            }
        
        # 解析参数
        voltage = str(row.iloc[1]).strip().replace('AC', '') if pd.notna(row.iloc[1]) else ''
        power = str(row.iloc[2]).strip() if pd.notna(row.iloc[2]) else ''
        frequency = str(row.iloc[3]).strip() if pd.notna(row.iloc[3]) else ''
        current = str(row.iloc[4]).strip() if pd.notna(row.iloc[4]) else ''
        speed = str(row.iloc[5]).strip() if pd.notna(row.iloc[5]) else ''
        airflow = str(row.iloc[6]).strip() if pd.notna(row.iloc[6]) else ''
        noise = str(row.iloc[7]).strip() if pd.notna(row.iloc[7]) else ''
        insulation = str(row.iloc[9]).strip() if pd.notna(row.iloc[9]) else 'AC1500V- 100MΩ'
        dielectric = str(row.iloc[10]).strip().replace('V/min', '').replace('V', '') if pd.notna(row.iloc[10]) else '1500'
        weight = str(row.iloc[11]).strip() if pd.notna(row.iloc[11]) else ''
        
        variant = {
            'model': model,
            'bearing': '滚珠',
            'bearingType': 'ball',
            'voltage': voltage,
            'power': power,
            'frequency': frequency,
            'current': current,
            'speed': speed,
            'airflow': airflow,
            'noise': noise,
            'insulation': insulation,
            'dielectricStrength': dielectric,
            'weight': weight
        }
        series_data[series_id]['variants'].append(variant)
    
    # 生成多语言描述
    descriptions = {
        'qa8025': {'zh': 'FZY小型轴流风机，80mm方型铝合金框架，PBT塑料风叶', 'en': 'FZY Mini Axial Fan, 80mm Square Aluminum Frame, PBT Plastic Blades', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 80mm, Cánh Quạt Nhựa PBT', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 80mm, ใบพัดพลาสติก PBT', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 80mm, Bilah Plastik PBT', 'tr': 'FZY Mini Eksenel Fan, 80mm Kare Alüminyum Gövde, PBT Plastik Kanatlar', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 80 مم، شفرات بلاستيكية PBT'},
        'qa9225': {'zh': 'FZY小型轴流风机，92mm方型铝合金框架，PBT塑料风叶', 'en': 'FZY Mini Axial Fan, 92mm Square Aluminum Frame, PBT Plastic Blades', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 92mm, Cánh Quạt Nhựa PBT', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 92mm, ใบพัดพลาสติก PBT', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 92mm, Bilah Plastik PBT', 'tr': 'FZY Mini Eksenel Fan, 92mm Kare Alüminyum Gövde, PBT Plastik Kanatlar', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 92 مم، شفرات بلاستيكية PBT'},
        'qa11025': {'zh': 'FZY小型轴流风机，110mm方型铝合金框架，PBT塑料风叶', 'en': 'FZY Mini Axial Fan, 110mm Square Aluminum Frame, PBT Plastic Blades', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 110mm, Cánh Quạt Nhựa PBT', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 110mm, ใบพัดพลาสติก PBT', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 110mm, Bilah Plastik PBT', 'tr': 'FZY Mini Eksenel Fan, 110mm Kare Alüminyum Gövde, PBT Plastik Kanatlar', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 110 مم، شفرات بلاستيكية PBT'},
        'qa12025': {'zh': 'FZY小型轴流风机，120mm方型铝合金框架，标准25mm厚度', 'en': 'FZY Mini Axial Fan, 120mm Square Aluminum Frame, Standard 25mm Thickness', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 120mm, Độ Dày Tiêu Chuẩn 25mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 120mm, ความหนามาตรฐาน 25mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 120mm, Ketebalan Piawai 25mm', 'tr': 'FZY Mini Eksenel Fan, 120mm Kare Alüminyum Gövde, Standart 25mm Kalınlık', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 120 مم، سماكة قياسية 25 مم'},
        'qa12038': {'zh': 'FZY小型轴流风机，120mm方型铝合金框架，38mm加厚设计', 'en': 'FZY Mini Axial Fan, 120mm Square Aluminum Frame, 38mm Thickened Design', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 120mm, Thiết Kế Dày 38mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 120mm, การออกแบบหนา 38mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 120mm, Reka Bentuk Tebal 38mm', 'tr': 'FZY Mini Eksenel Fan, 120mm Kare Alüminyum Gövde, 38mm Kalınlaştırılmış Tasarım', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 120 مم، تصميم مُثخن 38 مم'},
        'qa13538': {'zh': 'FZY小型轴流风机，135mm方型铝合金框架，大风量设计', 'en': 'FZY Mini Axial Fan, 135mm Square Aluminum Frame, High Airflow Design', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 135mm, Thiết Kế Lưu Lượng Gió Cao', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 135mm, การออกแบบปริมาณลมสูง', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 135mm, Reka Bentuk Aliran Tinggi', 'tr': 'FZY Mini Eksenel Fan, 135mm Kare Alüminyum Gövde, Yüksek Hava Akışı Tasarımı', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 135 مم، تصميم تدفق هواء عالي'},
        'qa15050': {'zh': 'FZY小型轴流风机，150mm方型铝合金框架，50mm厚度', 'en': 'FZY Mini Axial Fan, 150mm Square Aluminum Frame, 50mm Thickness', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 150mm, Độ Dày 50mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 150mm, ความหนา 50mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 150mm, Ketebalan 50mm', 'tr': 'FZY Mini Eksenel Fan, 150mm Kare Alüminyum Gövde, 50mm Kalınlık', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 150 مم، سماكة 50 مم'},
        'qa17250': {'zh': 'FZY小型轴流风机，172mm圆形铝合金框架，大风量设计', 'en': 'FZY Mini Axial Fan, 172mm Round Aluminum Frame, High Airflow Design', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 172mm, Thiết Kế Lưu Lượng Gió Cao', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 172mm, การออกแบบปริมาณลมสูง', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 172mm, Reka Bentuk Aliran Tinggi', 'tr': 'FZY Mini Eksenel Fan, 172mm Yuvarlak Alüminyum Gövde, Yüksek Hava Akışı Tasarımı', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 172 مم، تصميم تدفق هواء عالي'},
        'qa18060': {'zh': 'FZY小型轴流风机，180mm圆形铝合金框架，60mm厚度', 'en': 'FZY Mini Axial Fan, 180mm Round Aluminum Frame, 60mm Thickness', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 180mm, Độ Dày 60mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 180mm, ความหนา 60mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 180mm, Ketebalan 60mm', 'tr': 'FZY Mini Eksenel Fan, 180mm Yuvarlak Alüminyum Gövde, 60mm Kalınlık', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 180 مم، سماكة 60 مم'},
        'qa20060': {'zh': 'FZY小型轴流风机，200mm圆形铝合金框架，60mm厚度', 'en': 'FZY Mini Axial Fan, 200mm Round Aluminum Frame, 60mm Thickness', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 200mm, Độ Dày 60mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 200mm, ความหนา 60mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 200mm, Ketebalan 60mm', 'tr': 'FZY Mini Eksenel Fan, 200mm Yuvarlak Alüminyum Gövde, 60mm Kalınlık', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 200 مم، سماكة 60 مم'},
        'qa22090': {'zh': 'FZY小型轴流风机，220mm圆形铝合金框架，90mm厚度，高转速', 'en': 'FZY Mini Axial Fan, 220mm Round Aluminum Frame, 90mm Thickness, High Speed', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 220mm, Độ Dày 90mm, Tốc Độ Cao', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 220mm, ความหนา 90mm, ความเร็วสูง', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 220mm, Ketebalan 90mm, Kelajuan Tinggi', 'tr': 'FZY Mini Eksenel Fan, 220mm Yuvarlak Alüminyum Gövde, 90mm Kalınlık, Yüksek Hız', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 220 مم، سماكة 90 مم، سرعة عالية'},
        'qa22580': {'zh': 'FZY小型轴流风机，225mm圆形铝合金框架，80mm厚度，双电压', 'en': 'FZY Mini Axial Fan, 225mm Round Aluminum Frame, 80mm Thickness, Dual Voltage', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 225mm, Độ Dày 80mm, Hai Điện Áp', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 225mm, ความหนา 80mm, แรงดันคู่', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 225mm, Ketebalan 80mm, Dua Voltan', 'tr': 'FZY Mini Eksenel Fan, 225mm Yuvarlak Alüminyum Gövde, 80mm Kalınlık, Çift Voltaj', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 225 مم، سماكة 80 مم، جهد مزدوج'},
        'qa28080': {'zh': 'FZY小型轴流风机，280mm圆形铝合金框架，80mm厚度，双电压', 'en': 'FZY Mini Axial Fan, 280mm Round Aluminum Frame, 80mm Thickness, Dual Voltage', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 280mm, Độ Dày 80mm, Hai Điện Áp', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 280mm, ความหนา 80mm, แรงดันคู่', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 280mm, Ketebalan 80mm, Dua Voltan', 'tr': 'FZY Mini Eksenel Fan, 280mm Yuvarlak Alüminyum Gövde, 80mm Kalınlık, Çift Voltaj', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 280 مم، سماكة 80 مم، جهد مزدوج'},
    }
    
    # 生成多语言特性
    features_common = {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']}
    features_small = {'zh': ['体积小', '噪音低', '免维护', '安装便捷'], 'en': ['Compact', 'Low Noise', 'Maintenance-free', 'Easy Install'], 'vi': ['Nhỏ Gọn', 'Ồn Thấp', 'Không Bảo Trì', 'Dễ Lắp Đặt'], 'th': ['กะทัดรัด', 'เสียงต่ำ', 'ไม่ต้องบำรุงรักษา', 'ติดตั้งง่าย'], 'ms': ['Padat', 'Bunyi Rendah', 'Tanpa Penyelenggaraan', 'Mudah Pasang'], 'tr': ['Kompakt', 'Düşük Gürültü', 'Bakımsız', 'Kolay Kurulum'], 'ar': ['مدمجة', 'ضوضاء منخفضة', 'صيانة مجانية', 'تركيب سهل']}
    
    features = {
        'qa8025': features_small,
        'qa9225': {'zh': ['体积小巧', '大风量', '低噪音', '长寿命'], 'en': ['Compact', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Nhỏ Gọn', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['กะทัดรัด', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Padat', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Kompakt', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['مدمجة', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
    }
    for sid in series_order:
        if sid not in features:
            features[sid] = features_common
    
    # 生成TypeScript代码
    ts_lines = [
        '// Product data based on PDF catalog - 泉风牌交流风机图册（2026更新）',
        '// Auto-generated from 泉风轴流风机参数2026-5(1).xlsx',
        '',
        'export interface ProductVariant {',
        '  model: string;',
        '  bearing: string;',
        '  bearingType: \'ball\' | \'sleeve\';',
        '  voltage: string;',
        '  power: string;',
        '  frequency: string;',
        '  current: string;',
        '  speed: string;',
        '  airflow: string;',
        '  noise: string;',
        '  insulation: string;',
        '  dielectricStrength: string;',
        '  weight: string;',
        '}',
        '',
        'export interface ProductSeries {',
        '  id: string;',
        '  name: string;',
        '  nameEn: string;',
        '  size: string;',
        '  dimensions: string;',
        '  pdfPage: number;',
        '  variants: ProductVariant[];',
        '}',
        '',
    ]
    
    # 按Excel顺序生成描述
    ts_lines.append('// Multi-language descriptions')
    ts_lines.append('export const productDescriptions: Record<string, Record<string, string>> = {')
    for i, sid in enumerate(series_order):
        desc = descriptions.get(sid, descriptions['qa11025'])
        comma = ',' if i < len(series_order) - 1 else ''
        ts_lines.append(f"  {sid}: {desc}{comma}")
    ts_lines.append('};')
    ts_lines.append('')
    
    # 按Excel顺序生成特性
    ts_lines.append('// Multi-language features')
    ts_lines.append('export const productFeatures: Record<string, Record<string, string[]>> = {')
    for i, sid in enumerate(series_order):
        feat = features.get(sid, features_common)
        comma = ',' if i < len(series_order) - 1 else ''
        ts_lines.append(f"  {sid}: {feat}{comma}")
    ts_lines.append('};')
    ts_lines.append('')
    
    # 添加辅助函数
    ts_lines.extend([
        '// Helper function to get description',
        'export function getProductDescription(productId: string, locale: string): string {',
        '  const descriptions = productDescriptions[productId];',
        '  if (!descriptions) return \'\';',
        '  return descriptions[locale] || descriptions.zh || \'\';',
        '}',
        '',
        '// Helper function to get features',
        'export function getProductFeatures(productId: string, locale: string): string[] {',
        '  const features = productFeatures[productId];',
        '  if (!features) return [];',
        '  return features[locale] || features.zh || [];',
        '}',
        '',
    ])
    
    # 按Excel顺序生成产品系列数据
    ts_lines.append('// Product data from PDF catalog')
    ts_lines.append('export const productSeries: ProductSeries[] = [')
    
    for i, sid in enumerate(series_order):
        series = series_data[sid]
        comma = ',' if i < len(series_order) - 1 else ''
        
        ts_lines.append(f"  {{")
        ts_lines.append(f"    id: '{series['id']}',")
        ts_lines.append(f"    name: '{series['name']}',")
        ts_lines.append(f"    nameEn: '{series['nameEn']}',")
        ts_lines.append(f"    size: '{series['size']}',")
        ts_lines.append(f"    dimensions: '{series['dimensions']}',")
        ts_lines.append(f"    pdfPage: {series['pdfPage']},")
        ts_lines.append(f"    variants: [")
        
        for j, v in enumerate(series['variants']):
            v_comma = ',' if j < len(series['variants']) - 1 else ''
            ts_lines.append(f"      {{ model: '{v['model']}', bearing: '{v['bearing']}', bearingType: '{v['bearingType']}', voltage: '{v['voltage']}', power: '{v['power']}', frequency: '{v['frequency']}', current: '{v['current']}', speed: '{v['speed']}', airflow: '{v['airflow']}', noise: '{v['noise']}', insulation: '{v['insulation']}', dielectricStrength: '{v['dielectricStrength']}', weight: '{v['weight']}' }}{v_comma}")
        
        ts_lines.append(f"    ],")
        ts_lines.append(f"  }}{comma}")
    
    ts_lines.append('];')
    ts_lines.append('')
    
    # 添加表格表头和翻译
    ts_lines.extend([
        '// Table headers for different languages',
        'export const tableHeaders = {',
        "  zh: ['型号', '轴承', '电压(V)', '功率(W)', '频率(Hz)', '电流(A)', '转速(RPM)', '风量(m³/min)', '噪声(dB)', '绝缘电阻', '耐压(V)', '重量(kg)'],",
        "  en: ['Model', 'Bearing', 'Voltage(V)', 'Power(W)', 'Frequency(Hz)', 'Current(A)', 'Speed(RPM)', 'Airflow(m³/min)', 'Noise(dB)', 'Insulation', 'Dielectric(V)', 'Weight(kg)'],",
        "  vi: ['Mẫu', 'Ổ bi', 'Điện áp(V)', 'Công suất(W)', 'Tần số(Hz)', 'Dòng điện(A)', 'Tốc độ(RPM)', 'Lưu lượng(m³/min)', 'Ồn(dB)', 'Cách điện', 'Điện áp(V)', 'Trọng lượng(kg)'],",
        "  th: ['รุ่น', 'ลูกปืน', 'แรงดัน(V)', 'กำลัง(W)', 'ความถี่(Hz)', 'กระแส(A)', 'ความเร็ว(RPM)', 'ปริมาณลม(m³/min)', 'เสียง(dB)', 'ฉนวน', 'แรงดันไฟ(V)', 'น้ำหนัก(kg)'],",
        "  ms: ['Model', 'Bearing', 'Voltan(V)', 'Kuasa(W)', 'Frekuensi(Hz)', 'Arus(A)', 'Kelajuan(RPM)', 'Aliran(m³/min)', 'Bunyi(dB)', 'Penebat', 'Dielektrik(V)', 'Berat(kg)'],",
        "  tr: ['Model', 'Rulman', 'Voltaj(V)', 'Güç(W)', 'Frekans(Hz)', 'Akım(A)', 'Hız(RPM)', 'Hava Akışı(m³/min)', 'Gürültü(dB)', 'İzolasyon', 'Dielektrik(V)', 'Ağırlık(kg)'],",
        "  ar: ['الموديل', 'المحمل', 'الجهد(V)', 'القوة(W)', 'التردد(Hz)', 'التيار(A)', 'السرعة(RPM)', 'تدفق الهواء(m³/min)', 'الضوضاء(dB)', 'العزل', 'الضغط(V)', 'الوزن(kg)'],",
        '};',
        '',
        '// Feature translations',
        'export const featureTranslations = {',
        "  zh: { ball: '滚珠', sleeve: '含油' },",
        "  en: { ball: 'Ball', sleeve: 'Sleeve' },",
        "  vi: { ball: 'Bi', sleeve: 'Bạc' },",
        "  th: { ball: 'ลูกปืน', sleeve: 'บูช' },",
        "  ms: { ball: 'Bebola', sleeve: 'Lengan' },",
        "  tr: { ball: 'Bilyalı', sleeve: 'Burç' },",
        "  ar: { ball: 'كروي', sleeve: 'كم' },",
        '};',
    ])
    
    return '\n'.join(ts_lines)

def main():
    ts_content = generate_typescript()
    
    with open('src/quanfeng/lib/productData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print("✅ 产品数据已更新，顺序与Excel一致")
    print(f"\n产品系列顺序:")
    
    # 验证顺序
    df = pd.read_excel('泉风轴流风机参数2026-5(1).xlsx', header=0)
    current_series = None
    for idx, row in df.iterrows():
        model = str(row.iloc[0]).strip()
        match = re.match(r'(QA\d+)', model)
        if match:
            series = match.group(1)
            if series != current_series:
                current_series = series
                print(f"  {idx+1:2d}. {series}")

if __name__ == '__main__':
    main()
