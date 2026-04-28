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
  variants: ProductVariant[];
}

// Multi-language descriptions
export const productDescriptions: Record<string, Record<string, string>> = {
  qa8025: {
    zh: 'FZY小型轴流风机，80mm方型铝合金框架，PBT塑料风叶',
    en: 'FZY Mini Axial Fan, 80mm Square Aluminum Frame, PBT Plastic Blades',
    vi: 'Quạt Trục Mini FZY, Khung Nhôm Vuông 80mm, Cánh Quạt Nhựa PBT',
    th: 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 80mm, ใบพัดพลาสติก PBT',
    ms: 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 80mm, Bilah Plastik PBT',
    tr: 'FZY Mini Eksenel Fan, 80mm Kare Alüminyum Gövde, PBT Plastik Kanatlar',
    ar: 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 80 مم، شفرات بلاستيكية PBT',
  },
  qa9225: {
    zh: 'FZY小型轴流风机，92mm方型铝合金框架，PBT塑料风叶',
    en: 'FZY Mini Axial Fan, 92mm Square Aluminum Frame, PBT Plastic Blades',
    vi: 'Quạt Trục Mini FZY, Khung Nhôm Vuông 92mm, Cánh Quạt Nhựa PBT',
    th: 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 92mm, ใบพัดพลาสติก PBT',
    ms: 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 92mm, Bilah Plastik PBT',
    tr: 'FZY Mini Eksenel Fan, 92mm Kare Alüminyum Gövde, PBT Plastik Kanatlar',
    ar: 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 92 مم، شفرات بلاستيكية PBT',
  },
  qa11025: {
    zh: 'FZY小型轴流风机，110mm方型铝合金框架，PBT塑料风叶',
    en: 'FZY Mini Axial Fan, 110mm Square Aluminum Frame, PBT Plastic Blades',
    vi: 'Quạt Trục Mini FZY, Khung Nhôm Vuông 110mm, Cánh Quạt Nhựa PBT',
    th: 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 110mm, ใบพัดพลาสติก PBT',
    ms: 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 110mm, Bilah Plastik PBT',
    tr: 'FZY Mini Eksenel Fan, 110mm Kare Alüminyum Gövde, PBT Plastik Kanatlar',
    ar: 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 110 مم، شفرات بلاستيكية PBT',
  },
  qa12025: {
    zh: 'FZY小型轴流风机，120mm方型铝合金框架，标准25mm厚度',
    en: 'FZY Mini Axial Fan, 120mm Square Aluminum Frame, Standard 25mm Thickness',
    vi: 'Quạt Trục Mini FZY, Khung Nhôm Vuông 120mm, Độ Dày Tiêu Chuẩn 25mm',
    th: 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 120mm, ความหนามาตรฐาน 25mm',
    ms: 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 120mm, Ketebalan Piawai 25mm',
    tr: 'FZY Mini Eksenel Fan, 120mm Kare Alüminyum Gövde, Standart 25mm Kalınlık',
    ar: 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 120 مم، سماكة قياسية 25 مم',
  },
  qa12038: {
    zh: 'FZY小型轴流风机，120mm方型铝合金框架，38mm加厚设计',
    en: 'FZY Mini Axial Fan, 120mm Square Aluminum Frame, 38mm Thickened Design',
    vi: 'Quạt Trục Mini FZY, Khung Nhôm Vuông 120mm, Thiết Kế Dày 38mm',
    th: 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 120mm, การออกแบบหนา 38mm',
    ms: 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 120mm, Reka Bentuk Tebal 38mm',
    tr: 'FZY Mini Eksenel Fan, 120mm Kare Alüminyum Gövde, 38mm Kalınlaştırılmış Tasarım',
    ar: 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 120 مم، تصميم مُثخن 38 مم',
  },
  qa13538: {
    zh: 'FZY小型轴流风机，135mm方型铝合金框架，大风量设计',
    en: 'FZY Mini Axial Fan, 135mm Square Aluminum Frame, High Airflow Design',
    vi: 'Quạt Trục Mini FZY, Khung Nhôm Vuông 135mm, Thiết Kế Lưu Lượng Gió Cao',
    th: 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 135mm, การออกแบบปริมาณลมสูง',
    ms: 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 135mm, Reka Bentuk Aliran Tinggi',
    tr: 'FZY Mini Eksenel Fan, 135mm Kare Alüminyum Gövde, Yüksek Hava Akışı Tasarımı',
    ar: 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 135 مم، تصميم تدفق هواء عالي',
  },
  qa15050: {
    zh: 'FZY小型轴流风机，150mm方型铝合金框架，50mm厚度',
    en: 'FZY Mini Axial Fan, 150mm Square Aluminum Frame, 50mm Thickness',
    vi: 'Quạt Trục Mini FZY, Khung Nhôm Vuông 150mm, Độ Dày 50mm',
    th: 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 150mm, ความหนา 50mm',
    ms: 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 150mm, Ketebalan 50mm',
    tr: 'FZY Mini Eksenel Fan, 150mm Kare Alüminyum Gövde, 50mm Kalınlık',
    ar: 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 150 مم، سماكة 50 مم',
  },
  qa17250: {
    zh: 'FZY小型轴流风机，172mm圆形铝合金框架，大风量设计',
    en: 'FZY Mini Axial Fan, 172mm Round Aluminum Frame, High Airflow Design',
    vi: 'Quạt Trục Mini FZY, Khung Nhôm Tròn 172mm, Thiết Kế Lưu Lượng Gió Cao',
    th: 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 172mm, การออกแบบปริมาณลมสูง',
    ms: 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 172mm, Reka Bentuk Aliran Tinggi',
    tr: 'FZY Mini Eksenel Fan, 172mm Yuvarlak Alüminyum Gövde, Yüksek Hava Akışı Tasarımı',
    ar: 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 172 مم، تصميم تدفق هواء عالي',
  },
};

// Multi-language features
export const productFeatures: Record<string, Record<string, string[]>> = {
  qa8025: {
    zh: ['体积小', '噪音低', '免维护', '安装便捷'],
    en: ['Compact', 'Low Noise', 'Maintenance-free', 'Easy Install'],
    vi: ['Nhỏ Gọn', 'Ồn Thấp', 'Không Bảo Trì', 'Dễ Lắp Đặt'],
    th: ['กะทัดรัด', 'เสียงต่ำ', 'ไม่ต้องบำรุงรักษา', 'ติดตั้งง่าย'],
    ms: ['Padat', 'Bunyi Rendah', 'Tanpa Penyelenggaraan', 'Mudah Pasang'],
    tr: ['Kompakt', 'Düşük Gürültü', 'Bakımsız', 'Kolay Kurulum'],
    ar: ['مدمجة', 'ضوضاء منخفضة', 'صيانة مجانية', 'تركيب سهل'],
  },
  qa9225: {
    zh: ['体积小巧', '大风量', '低噪音', '长寿命'],
    en: ['Compact', 'High Airflow', 'Low Noise', 'Long Life'],
    vi: ['Nhỏ Gọn', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'],
    th: ['กะทัดรัด', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'],
    ms: ['Padat', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'],
    tr: ['Kompakt', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'],
    ar: ['مدمجة', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل'],
  },
  qa11025: {
    zh: ['中等尺寸', '高效散热', '稳定运行', '广泛应用'],
    en: ['Medium Size', 'Efficient Cooling', 'Stable Operation', 'Wide Application'],
    vi: ['Kích Thước Trung Bình', 'Tản Nhiệt Hiệu Quả', 'Vận Hành Ổn Định', 'Ứng Dụng Rộng Rãi'],
    th: ['ขนาดกลาง', 'ระบายความร้อนมีประสิทธิภาพ', 'การทำงานเสถียร', 'การใช้งานกว้างขวาง'],
    ms: ['Saiz Sederhana', 'Penyejukan Cekap', 'Operasi Stabil', 'Aplikasi Luas'],
    tr: ['Orta Boy', 'Verimli Soğutma', 'Kararlı Çalışma', 'Geniş Uygulama'],
    ar: ['حجم متوسط', 'تبريد فعال', 'تشغيل مستقر', 'تطبيق واسع'],
  },
  qa12025: {
    zh: ['标准尺寸', '兼容性强', '高效能', '低功耗'],
    en: ['Standard Size', 'High Compatibility', 'High Efficiency', 'Low Power'],
    vi: ['Kích Thước Tiêu Chuẩn', 'Tương Thích Cao', 'Hiệu Suất Cao', 'Tiêu Thụ Thấp'],
    th: ['ขนาดมาตรฐาน', 'ความเข้ากันได้สูง', 'ประสิทธิภาพสูง', 'กำลังไฟต่ำ'],
    ms: ['Saiz Piawai', 'Keserasian Tinggi', 'Kecekapan Tinggi', 'Kuasa Rendah'],
    tr: ['Standart Boy', 'Yüksek Uyumluluk', 'Yüksek Verim', 'Düşük Güç'],
    ar: ['حجم قياسي', 'توافق عالي', 'كفاءة عالية', 'استهلاك منخفض'],
  },
  qa12038: {
    zh: ['加厚设计', '更大风量', '更强风压', '工业级'],
    en: ['Thickened Design', 'Higher Airflow', 'Stronger Pressure', 'Industrial Grade'],
    vi: ['Thiết Kế Dày', 'Lưu Lượng Cao Hơn', 'Áp Suất Cao Hơn', 'Công Nghiệp'],
    th: ['การออกแบบหนา', 'ปริมาณลมสูงกว่า', 'แรงดันสูงกว่า', 'เกรดอุตสาหกรรม'],
    ms: ['Reka Bentuk Tebal', 'Aliran Lebih Tinggi', 'Tekanan Lebih Kuat', 'Gred Perindustrian'],
    tr: ['Kalınlaştırılmış Tasarım', 'Daha Yüksek Hava Akışı', 'Daha Güçlü Basınç', 'Endüstriyel Sınıf'],
    ar: ['تصميم مُثخن', 'تدفق هواء أعلى', 'ضغط أقوى', 'درجة صناعية'],
  },
  qa13538: {
    zh: ['大风量', '高风压', '工业散热', '稳定耐用'],
    en: ['High Airflow', 'High Pressure', 'Industrial Cooling', 'Stable & Durable'],
    vi: ['Lưu Lượng Cao', 'Áp Suất Cao', 'Tản Nhiệt Công Nghiệp', 'Ổn Định & Bền'],
    th: ['ปริมาณลมสูง', 'แรงดันสูง', 'ระบายความร้อนอุตสาหกรรม', 'เสถียรและทนทาน'],
    ms: ['Aliran Tinggi', 'Tekanan Tinggi', 'Penyejukan Perindustrian', 'Stabil & Tahan Lama'],
    tr: ['Yüksek Hava Akışı', 'Yüksek Basınç', 'Endüstriyel Soğutma', 'Kararlı & Dayanıklı'],
    ar: ['تدفق هواء عالي', 'ضغط عالي', 'تبريد صناعي', 'مستقر ومتين'],
  },
  qa15050: {
    zh: ['大功率', '超大风量', '工业级散热', '双电压'],
    en: ['High Power', 'Ultra High Airflow', 'Industrial Cooling', 'Dual Voltage'],
    vi: ['Công Suất Cao', 'Lưu Lượng Cực Cao', 'Tản Nhiệt Công Nghiệp', 'Hai Điện Áp'],
    th: ['กำลังสูง', 'ปริมาณลมสูงมาก', 'ระบายความร้อนอุตสาหกรรม', 'แรงดันคู่'],
    ms: ['Kuasa Tinggi', 'Aliran Sangat Tinggi', 'Penyejukan Perindustrian', 'Dua Voltan'],
    tr: ['Yüksek Güç', 'Ultra Yüksek Hava Akışı', 'Endüstriyel Soğutma', 'Çift Voltaj'],
    ar: ['قوة عالية', 'تدفق هواء فائق', 'تبريد صناعي', 'جهد مزدوج'],
  },
  qa17250: {
    zh: ['圆形设计', '超大风量', '工业级', '三电压可选'],
    en: ['Round Design', 'Ultra High Airflow', 'Industrial Grade', 'Triple Voltage'],
    vi: ['Thiết Kế Tròn', 'Lưu Lượng Cực Cao', 'Công Nghiệp', 'Ba Điện Áp'],
    th: ['การออกแบบกลม', 'ปริมาณลมสูงมาก', 'เกรดอุตสาหกรรม', 'สามแรงดัน'],
    ms: ['Reka Bentuk Bulat', 'Aliran Sangat Tinggi', 'Gred Perindustrian', 'Tiga Voltan'],
    tr: ['Yuvarlak Tasarım', 'Ultra Yüksek Hava Akışı', 'Endüstriyel Sınıf', 'Üç Voltaj'],
    ar: ['تصميم دائري', 'تدفق هواء فائق', 'درجة صناعية', 'ثلاثة جهد'],
  },
};

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

// Product data from PDF catalog (8 pages, 16 products)
export const productSeries: ProductSeries[] = [
  {
    id: 'qa8025',
    name: 'QA8025',
    nameEn: 'QA8025 Axial Fan',
    size: '80×80×25mm',
    dimensions: '80×80×25mm',
    pdfPage: 1,
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
