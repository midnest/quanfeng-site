// Product data based on PDF catalog
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
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  images: {
    main: string;
    side: string;
    back: string;
    dimension: string;
  };
  description: string;
  features: string[];
  variants: ProductVariant[];
}

// Product data extracted from PDF catalog
export const productSeries: ProductSeries[] = [
  {
    id: 'qa8025',
    name: 'QA8025',
    nameEn: 'QA8025 Axial Fan',
    size: '80×80×25mm',
    dimensions: { length: 80, width: 80, height: 25 },
    images: {
      main: '/images/products/new/docx_image1.png',
      side: '/images/products/new/docx_image2.png',
      back: '/images/products/new/docx_image3.png',
      dimension: '/images/products/new/docx_image4.png',
    },
    description: 'FZY小型轴流风机，80mm方型铝合金框架，PBT塑料风叶',
    features: ['体积小', '噪音低', '免维护', '安装便捷'],
    variants: [
      { model: 'QA8025HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '13/11W', frequency: '50/60Hz', current: '0.14/0.12A', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.24' },
      { model: 'QA8025HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '13/11W', frequency: '50/60Hz', current: '0.07/0.06A', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.24' },
      { model: 'QA8025HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110V', power: '13/11W', frequency: '50/60Hz', current: '0.14/0.12A', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.24' },
      { model: 'QA8025HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220V', power: '13/11W', frequency: '50/60Hz', current: '0.07/0.06A', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.24' },
      { model: 'QA8025HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380V', power: '13/11W', frequency: '50/60Hz', current: '0.05A', speed: '2200/2700', airflow: '0.4/0.5', noise: '38/40', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800V', weight: '0.24' },
    ],
  },
  {
    id: 'qa9225',
    name: 'QA9225',
    nameEn: 'QA9225 Axial Fan',
    size: '92×92×25mm',
    dimensions: { length: 92, width: 92, height: 25 },
    images: {
      main: '/images/products/new/docx_image5.png',
      side: '/images/products/new/docx_image6.png',
      back: '/images/products/new/docx_image7.png',
      dimension: '/images/products/new/docx_image8.png',
    },
    description: 'FZY小型轴流风机，92mm方型铝合金框架，PBT塑料风叶',
    features: ['体积小巧', '大风量', '低噪音', '长寿命'],
    variants: [
      { model: 'QA9225HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '14/12W', frequency: '50/60Hz', current: '0.14/0.12A', speed: '2200/2600', airflow: '0.65/0.8', noise: '40/42', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.25' },
      { model: 'QA9225HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '14/12W', frequency: '50/60Hz', current: '0.07/0.06A', speed: '2200/2600', airflow: '0.65/0.8', noise: '40/42', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.25' },
      { model: 'QA9225HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110V', power: '14/12W', frequency: '50/60Hz', current: '0.14/0.12A', speed: '2200/2600', airflow: '0.65/0.8', noise: '40/42', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.25' },
      { model: 'QA9225HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220V', power: '14/12W', frequency: '50/60Hz', current: '0.07/0.06A', speed: '2200/2600', airflow: '0.65/0.8', noise: '40/42', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.25' },
    ],
  },
  {
    id: 'qa11025',
    name: 'QA11025',
    nameEn: 'QA11025 Axial Fan',
    size: '110×110×25mm',
    dimensions: { length: 110, width: 110, height: 25 },
    images: {
      main: '/images/products/new/docx_image9.png',
      side: '/images/products/new/docx_image10.png',
      back: '/images/products/new/docx_image11.png',
      dimension: '/images/products/new/docx_image12.png',
    },
    description: 'FZY小型轴流风机，110mm方型铝合金框架，PBT塑料风叶',
    features: ['中等尺寸', '高效散热', '稳定运行', '广泛应用'],
    variants: [
      { model: 'QA11025HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '17/15W', frequency: '50/60Hz', current: '0.20/0.18A', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.35' },
      { model: 'QA11025HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '17/15W', frequency: '50/60Hz', current: '0.10/0.09A', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.35' },
      { model: 'QA11025HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110V', power: '17/15W', frequency: '50/60Hz', current: '0.20/0.18A', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.35' },
      { model: 'QA11025HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220V', power: '17/15W', frequency: '50/60Hz', current: '0.10/0.09A', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.35' },
      { model: 'QA11025HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380V', power: '17/15W', frequency: '50/60Hz', current: '0.06A', speed: '2200/2500', airflow: '1.3/1.5', noise: '42/45', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800V', weight: '0.35' },
    ],
  },
  {
    id: 'qa12025',
    name: 'QA12025',
    nameEn: 'QA12025 Axial Fan',
    size: '120×120×25mm',
    dimensions: { length: 120, width: 120, height: 25 },
    images: {
      main: '/images/products/new/docx_image13.png',
      side: '/images/products/new/docx_image14.png',
      back: '/images/products/new/docx_image15.png',
      dimension: '/images/products/new/docx_image16.png',
    },
    description: 'FZY小型轴流风机，120mm方型铝合金框架，标准25mm厚度',
    features: ['标准尺寸', '兼容性强', '高效能', '低功耗'],
    variants: [
      { model: 'QA12025HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '17/15W', frequency: '50/60Hz', current: '0.20/0.18A', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.40' },
      { model: 'QA12025HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '17/15W', frequency: '50/60Hz', current: '0.10/0.09A', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.40' },
      { model: 'QA12025HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110V', power: '17/15W', frequency: '50/60Hz', current: '0.20/0.18A', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.40' },
      { model: 'QA12025HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220V', power: '17/15W', frequency: '50/60Hz', current: '0.10/0.09A', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.40' },
      { model: 'QA12025HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380V', power: '17/15W', frequency: '50/60Hz', current: '0.06A', speed: '2200/2500', airflow: '1.6/1.8', noise: '42/45', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800V', weight: '0.40' },
    ],
  },
  {
    id: 'qa12038',
    name: 'QA12038',
    nameEn: 'QA12038 Axial Fan',
    size: '120×120×38mm',
    dimensions: { length: 120, width: 120, height: 38 },
    images: {
      main: '/images/products/new/docx_image17.png',
      side: '/images/products/new/docx_image18.png',
      back: '/images/products/new/docx_image19.png',
      dimension: '/images/products/new/docx_image20.png',
    },
    description: 'FZY小型轴流风机，120mm方型铝合金框架，38mm加厚设计',
    features: ['加厚设计', '更大风量', '更强风压', '工业级'],
    variants: [
      { model: 'QA12038HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '21/20W', frequency: '50/60Hz', current: '0.28/0.26A', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.55' },
      { model: 'QA12038HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '21/20W', frequency: '50/60Hz', current: '0.14/0.13A', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.55' },
      { model: 'QA12038HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110V', power: '21/20W', frequency: '50/60Hz', current: '0.28/0.26A', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.55' },
      { model: 'QA12038HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220V', power: '21/20W', frequency: '50/60Hz', current: '0.14/0.13A', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.55' },
      { model: 'QA12038HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380V', power: '21/20W', frequency: '50/60Hz', current: '0.11A', speed: '2500/2900', airflow: '2.3/2.7', noise: '46/50', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800V', weight: '0.55' },
    ],
  },
  {
    id: 'qa13538',
    name: 'QA13538',
    nameEn: 'QA13538 Axial Fan',
    size: '135×135×38mm',
    dimensions: { length: 135, width: 135, height: 38 },
    images: {
      main: '/images/products/new/docx_image21.png',
      side: '/images/products/new/docx_image22.png',
      back: '/images/products/new/docx_image23.png',
      dimension: '/images/products/new/docx_image24.png',
    },
    description: 'FZY小型轴流风机，135mm方型铝合金框架，大风量设计',
    features: ['大风量', '高风压', '工业散热', '稳定耐用'],
    variants: [
      { model: 'QA13538HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '23/21W', frequency: '50/60Hz', current: '0.30/0.28A', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.65' },
      { model: 'QA13538HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '23/21W', frequency: '50/60Hz', current: '0.15/0.14A', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.65' },
      { model: 'QA13538HSL1', bearing: '含油', bearingType: 'sleeve', voltage: '110V', power: '23/21W', frequency: '50/60Hz', current: '0.30/0.28A', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.65' },
      { model: 'QA13538HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220V', power: '23/21W', frequency: '50/60Hz', current: '0.15/0.14A', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.65' },
      { model: 'QA13538HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380V', power: '23/21W', frequency: '50/60Hz', current: '0.12A', speed: '2500/2900', airflow: '3.0/3.4', noise: '48/52', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800V', weight: '0.65' },
    ],
  },
  {
    id: 'qa15050',
    name: 'QA15050',
    nameEn: 'QA15050 Axial Fan',
    size: '150×150×50mm',
    dimensions: { length: 150, width: 150, height: 50 },
    images: {
      main: '/images/products/new/docx_image25.png',
      side: '/images/products/new/docx_image26.png',
      back: '/images/products/new/docx_image27.png',
      dimension: '/images/products/new/docx_image28.png',
    },
    description: 'FZY小型轴流风机，150mm方型铝合金框架，50mm厚度',
    features: ['大功率', '超大风量', '工业级散热', '双电压'],
    variants: [
      { model: 'QA15050HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '36W', frequency: '50/60Hz', current: '0.50A', speed: '2500', airflow: '5.0', noise: '52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.85' },
      { model: 'QA15050HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '36W', frequency: '50/60Hz', current: '0.25A', speed: '2500', airflow: '5.0', noise: '52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.85' },
      { model: 'QA15050HSL2', bearing: '含油', bearingType: 'sleeve', voltage: '220V', power: '36W', frequency: '50/60Hz', current: '0.25A', speed: '2500', airflow: '5.0', noise: '52', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '0.85' },
      { model: 'QA15050HSL3', bearing: '含油', bearingType: 'sleeve', voltage: '380V', power: '36W', frequency: '50/60Hz', current: '0.19A', speed: '2500', airflow: '5.0', noise: '52', insulation: 'AC1800V-100MΩ', dielectricStrength: '1800V', weight: '0.85' },
    ],
  },
  {
    id: 'qa17250',
    name: 'QA17250 / QA18060 / QA20060',
    nameEn: 'Large Size Axial Fan Series',
    size: '172×172×50mm / 180×180×60mm / 200×200×60mm',
    dimensions: { length: 172, width: 172, height: 50 },
    images: {
      main: '/images/products/new/docx_image29.png',
      side: '/images/products/new/docx_image30.png',
      back: '/images/products/new/docx_image31.png',
      dimension: '/images/products/new/docx_image32.png',
    },
    description: 'FZY大型轴流风机系列，包含17250、18060、20060三种规格',
    features: ['超大功率', '工业级散热', '强制风冷', '重载设计'],
    variants: [
      { model: 'QA17250HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '36W', frequency: '50/60Hz', current: '0.50A', speed: '2500', airflow: '5.0', noise: '55', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '1.20' },
      { model: 'QA17250HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '36W', frequency: '50/60Hz', current: '0.25A', speed: '2500', airflow: '5.0', noise: '55', insulation: 'AC1500V-100MΩ', dielectricStrength: '1800V', weight: '1.20' },
      { model: 'QA17250HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380V', power: '36W', frequency: '50/60Hz', current: '0.19A', speed: '2500', airflow: '5.0', noise: '55', insulation: 'AC1800V-100MΩ', dielectricStrength: '2200V', weight: '1.20' },
      { model: 'QA18060HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '50W', frequency: '50/60Hz', current: '0.70A', speed: '2600', airflow: '7.8', noise: '58', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '1.35' },
      { model: 'QA18060HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '50W', frequency: '50/60Hz', current: '0.35A', speed: '2600', airflow: '7.8', noise: '58', insulation: 'AC1500V-100MΩ', dielectricStrength: '1800V', weight: '1.35' },
      { model: 'QA18060HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380V', power: '50W', frequency: '50/60Hz', current: '0.27A', speed: '2600', airflow: '7.8', noise: '58', insulation: 'AC1800V-100MΩ', dielectricStrength: '2200V', weight: '1.35' },
      { model: 'QA20060HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110V', power: '65W', frequency: '50/60Hz', current: '0.90A', speed: '2600', airflow: '9.8', noise: '62', insulation: 'AC1500V-100MΩ', dielectricStrength: '1500V', weight: '1.45' },
      { model: 'QA20060HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220V', power: '65W', frequency: '50/60Hz', current: '0.45A', speed: '2600', airflow: '9.8', noise: '62', insulation: 'AC1500V-100MΩ', dielectricStrength: '1800V', weight: '1.45' },
      { model: 'QA20060HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380V', power: '65W', frequency: '50/60Hz', current: '0.30A', speed: '2600', airflow: '9.8', noise: '62', insulation: 'AC1800V-100MΩ', dielectricStrength: '2200V', weight: '1.45' },
    ],
  },
];

// Table headers for different languages
export const tableHeaders = {
  zh: ['型号', '轴承', '电压', '功率', '频率', '电流', '转速', '风量', '噪声', '绝缘电阻', '耐压', '重量'],
  en: ['Model', 'Bearing', 'Voltage', 'Power', 'Frequency', 'Current', 'Speed', 'Airflow', 'Noise', 'Insulation', 'Dielectric', 'Weight'],
  vi: ['Mẫu', 'Ổ bi', 'Điện áp', 'Công suất', 'Tần số', 'Dòng điện', 'Tốc độ', 'Lưu lượng', 'Ồn', 'Cách điện', 'Điện áp', 'Trọng lượng'],
  th: ['รุ่น', 'ลูกปืน', 'แรงดัน', 'กำลัง', 'ความถี่', 'กระแส', 'ความเร็ว', 'ปริมาณลม', 'เสียง', 'ฉนวน', 'แรงดันไฟ', 'น้ำหนัก'],
  ms: ['Model', 'Bearing', 'Voltan', 'Kuasa', 'Frekuensi', 'Arus', 'Kelajuan', 'Aliran', 'Bunyi', 'Penebat', 'Dielektrik', 'Berat'],
  tr: ['Model', 'Rulman', 'Voltaj', 'Güç', 'Frekans', 'Akım', 'Hız', 'Hava Akışı', 'Gürültü', 'İzolasyon', 'Dielektrik', 'Ağırlık'],
  ar: ['الموديل', 'المحمل', 'الجهد', 'القوة', 'التردد', 'التيار', 'السرعة', 'تدفق الهواء', 'الضوضاء', 'العزل', 'الضغط', 'الوزن'],
};

// Feature translations
export const featureTranslations = {
  zh: { ball: '滚珠', sleeve: '含油', voltage110: '110V', voltage220: '220V', voltage380: '380V' },
  en: { ball: 'Ball', sleeve: 'Sleeve', voltage110: '110V', voltage220: '220V', voltage380: '380V' },
  vi: { ball: 'Bi', sleeve: 'Bạc', voltage110: '110V', voltage220: '220V', voltage380: '380V' },
  th: { ball: 'ลูกปืน', sleeve: 'บูช', voltage110: '110V', voltage220: '220V', voltage380: '380V' },
  ms: { ball: 'Bebola', sleeve: 'Lengan', voltage110: '110V', voltage220: '220V', voltage380: '380V' },
  tr: { ball: 'Bilyalı', sleeve: 'Burç', voltage110: '110V', voltage220: '220V', voltage380: '380V' },
  ar: { ball: 'كروي', sleeve: 'كم', voltage110: '110V', voltage220: '220V', voltage380: '380V' },
};
