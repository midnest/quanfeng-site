// Product data based on PDF catalog - 泉风牌交流风机图册（2026更新）
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
  insulation: string;
  dielectricStrength: string;
  weight: string;
}

export interface ProductSeries {
  id: string;
  name: string;
  nameEn: string;
  size: string;
  dimensions: string;
  pdfPage: number;
  description: string;
  features: string[];
  variants: ProductVariant[];
}

// Product data from PDF catalog (8 pages, 16 products)
export const productSeries: ProductSeries[] = [
  {
    id: 'qa8025',
    name: 'QA8025',
    nameEn: 'QA8025 Axial Fan',
    size: '80×80×25mm',
    dimensions: '80×80×25mm',
    pdfPage: 1,
    description: 'FZY小型轴流风机，80mm方型铝合金框架，PBT塑料风叶',
    features: ['体积小', '噪音低', '免维护', '安装便捷'],
    variants: [
      { model: 'QA8025HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110', power: '13/11', frequency: '50/60', current: '0.14/0.12', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.24' },
      { model: 'QA8025HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220', power: '13/11', frequency: '50/60', current: '0.07/0.06', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.24' },
      { model: 'QA8025HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110', power: '13/11', frequency: '50/60', current: '0.14/0.12', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.24' },
      { model: 'QA8025HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220', power: '13/11', frequency: '50/60', current: '0.07/0.06', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.24' },
      { model: 'QA8025HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380', power: '13/11', frequency: '50/60', current: '0.05', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800', weight: '0.24' },
    ],
  },
  {
    id: 'qa9225',
    name: 'QA9225',
    nameEn: 'QA9225 Axial Fan',
    size: '92×92×25mm',
    dimensions: '92×92×25mm',
    pdfPage: 1,
    description: 'FZY小型轴流风机，92mm方型铝合金框架，PBT塑料风叶',
    features: ['体积小巧', '大风量', '低噪音', '长寿命'],
    variants: [
      { model: 'QA9225HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110', power: '13/11', frequency: '50/60', current: '0.14/0.12', speed: '2200/2600', airflow: '0.65/0.8', noise: '40/42', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.25' },
      { model: 'QA9225HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220', power: '13/11', frequency: '50/60', current: '0.07/0.06', speed: '2200/2600', airflow: '0.65/0.8', noise: '40/42', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.25' },
      { model: 'QA9225HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110', power: '13/11', frequency: '50/60', current: '0.14/0.12', speed: '2200/2600', airflow: '0.65/0.8', noise: '40/42', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.25' },
      { model: 'QA9225HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220', power: '13/11', frequency: '50/60', current: '0.07/0.06', speed: '2200/2600', airflow: '0.65/0.8', noise: '40/42', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.25' },
      { model: 'QA9225HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380', power: '13/11', frequency: '50/60', current: '0.05', speed: '2200/2600', airflow: '0.65/0.8', noise: '40/42', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800', weight: '0.25' },
    ],
  },
  {
    id: 'qa11025',
    name: 'QA11025',
    nameEn: 'QA11025 Axial Fan',
    size: '110×110×25mm',
    dimensions: '110×110×25mm',
    pdfPage: 2,
    description: 'FZY小型轴流风机，110mm方型铝合金框架，PBT塑料风叶',
    features: ['中等尺寸', '高效散热', '稳定运行', '广泛应用'],
    variants: [
      { model: 'QA11025HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110', power: '17/15', frequency: '50/60', current: '0.20/0.18', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.29' },
      { model: 'QA11025HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220', power: '17/15', frequency: '50/60', current: '0.10/0.09', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.29' },
      { model: 'QA11025HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110', power: '17/15', frequency: '50/60', current: '0.20/0.18', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.29' },
      { model: 'QA11025HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220', power: '17/15', frequency: '50/60', current: '0.10/0.09', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.29' },
      { model: 'QA11025HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380', power: '17/15', frequency: '50/60', current: '0.06', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800', weight: '0.29' },
    ],
  },
  {
    id: 'qa12025',
    name: 'QA12025',
    nameEn: 'QA12025 Axial Fan',
    size: '120×120×25mm',
    dimensions: '120×120×25mm',
    pdfPage: 2,
    description: 'FZY小型轴流风机，120mm方型铝合金框架，标准25mm厚度',
    features: ['标准尺寸', '兼容性强', '高效能', '低功耗'],
    variants: [
      { model: 'QA12025HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110', power: '17/15', frequency: '50/60', current: '0.20/0.18', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.30' },
      { model: 'QA12025HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220', power: '17/15', frequency: '50/60', current: '0.10/0.09', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.30' },
      { model: 'QA12025HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110', power: '17/15', frequency: '50/60', current: '0.20/0.18', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.30' },
      { model: 'QA12025HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220', power: '17/15', frequency: '50/60', current: '0.10/0.09', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.30' },
      { model: 'QA12025HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380', power: '17/15', frequency: '50/60', current: '0.06', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800', weight: '0.30' },
    ],
  },
  {
    id: 'qa12038',
    name: 'QA12038',
    nameEn: 'QA12038 Axial Fan',
    size: '120×120×38mm',
    dimensions: '120×120×38mm',
    pdfPage: 3,
    description: 'FZY小型轴流风机，120mm方型铝合金框架，38mm加厚设计',
    features: ['加厚设计', '更大风量', '更强风压', '工业级'],
    variants: [
      { model: 'QA12038HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110', power: '21/20', frequency: '50/60', current: '0.28/0.26', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.53' },
      { model: 'QA12038HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220', power: '21/20', frequency: '50/60', current: '0.14/0.13', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.53' },
      { model: 'QA12038HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110', power: '21/20', frequency: '50/60', current: '0.28/0.26', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.53' },
      { model: 'QA12038HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220', power: '21/20', frequency: '50/60', current: '0.14/0.13', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.53' },
      { model: 'QA12038HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380', power: '21/20', frequency: '50/60', current: '0.11', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800', weight: '0.53' },
    ],
  },
  {
    id: 'qa13538',
    name: 'QA13538',
    nameEn: 'QA13538 Axial Fan',
    size: '135×135×38mm',
    dimensions: '135×135×38mm',
    pdfPage: 3,
    description: 'FZY小型轴流风机，135mm方型铝合金框架，大风量设计',
    features: ['大风量', '高风压', '工业散热', '稳定耐用'],
    variants: [
      { model: 'QA13538HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110', power: '23/21', frequency: '50/60', current: '0.30/0.28', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.55' },
      { model: 'QA13538HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220', power: '23/21', frequency: '50/60', current: '0.15/0.14', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.55' },
      { model: 'QA13538HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110', power: '23/21', frequency: '50/60', current: '0.30/0.28', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.55' },
      { model: 'QA13538HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220', power: '23/21', frequency: '50/60', current: '0.15/0.14', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.55' },
      { model: 'QA13538HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380', power: '23/21', frequency: '50/60', current: '0.12', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800', weight: '0.55' },
    ],
  },
  {
    id: 'qa15050',
    name: 'QA15050',
    nameEn: 'QA15050 Axial Fan',
    size: '150×150×50mm',
    dimensions: '150×150×50mm',
    pdfPage: 4,
    description: 'FZY小型轴流风机，150mm方型铝合金框架，50mm厚度',
    features: ['大功率', '超大风量', '工业级散热', '双电压'],
    variants: [
      { model: 'QA15050HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110', power: '36', frequency: '50/60', current: '0.50', speed: '2500', airflow: '5.0', noise: '52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.85' },
      { model: 'QA15050HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220', power: '36', frequency: '50/60', current: '0.25', speed: '2500', airflow: '5.0', noise: '52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.85' },
      { model: 'QA15050HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220', power: '36', frequency: '50/60', current: '0.25', speed: '2500', airflow: '5.0', noise: '52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.85' },
      { model: 'QA15050HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380', power: '36', frequency: '50/60', current: '0.19', speed: '2500', airflow: '5.0', noise: '52', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800', weight: '0.85' },
    ],
  },
  {
    id: 'qa17250',
    name: 'QA17250',
    nameEn: 'QA17250 Axial Fan',
    size: '172×150×50mm',
    dimensions: '172×150×50mm',
    pdfPage: 4,
    description: 'FZY小型轴流风机，172mm圆形铝合金框架，大风量设计',
    features: ['圆形设计', '超大风量', '工业级', '三电压可选'],
    variants: [
      { model: 'QA17250HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110', power: '36', frequency: '50/60', current: '0.50', speed: '2500', airflow: '5.0', noise: '55', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500', weight: '0.80' },
      { model: 'QA17250HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220', power: '36', frequency: '50/60', current: '0.25', speed: '2500', airflow: '5.0', noise: '55', insulation: 'AC1500V-100MΩ', dielectricStrength: '1800', weight: '0.80' },
      { model: 'QA17250HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '36', frequency: '50/60', current: '0.19', speed: '2500', airflow: '5.0', noise: '55', insulation: 'AC1800V-100MΩ', dielectricStrength: '2200', weight: '0.80' },
    ],
  },
];

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
