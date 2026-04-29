// Product data based on PDF catalog - 泉风牌交流风机图册（2026更新）
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
  qa11025: {'zh': 'FZY小型轴流风机，110mm方型铝合金框架，PBT塑料风叶', 'en': 'FZY Mini Axial Fan, 110mm Square Aluminum Frame, PBT Plastic Blades', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 110mm, Cánh Quạt Nhựa PBT', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 110mm, ใบพัดพลาสติก PBT', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 110mm, Bilah Plastik PBT', 'tr': 'FZY Mini Eksenel Fan, 110mm Kare Alüminyum Gövde, PBT Plastik Kanatlar', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 110 مم، شفرات بلاستيكية PBT'},
  qa12025: {'zh': 'FZY小型轴流风机，120mm方型铝合金框架，标准25mm厚度', 'en': 'FZY Mini Axial Fan, 120mm Square Aluminum Frame, Standard 25mm Thickness', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 120mm, Độ Dày Tiêu Chuẩn 25mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 120mm, ความหนามาตรฐาน 25mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 120mm, Ketebalan Piawai 25mm', 'tr': 'FZY Mini Eksenel Fan, 120mm Kare Alüminyum Gövde, Standart 25mm Kalınlık', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 120 مم، سماكة قياسية 25 مم'},
  qa12038: {'zh': 'FZY小型轴流风机，120mm方型铝合金框架，38mm加厚设计', 'en': 'FZY Mini Axial Fan, 120mm Square Aluminum Frame, 38mm Thickened Design', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 120mm, Thiết Kế Dày 38mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 120mm, การออกแบบหนา 38mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 120mm, Reka Bentuk Tebal 38mm', 'tr': 'FZY Mini Eksenel Fan, 120mm Kare Alüminyum Gövde, 38mm Kalınlaştırılmış Tasarım', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 120 مم، تصميم مُثخن 38 مم'},
  qa13538: {'zh': 'FZY小型轴流风机，135mm方型铝合金框架，大风量设计', 'en': 'FZY Mini Axial Fan, 135mm Square Aluminum Frame, High Airflow Design', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 135mm, Thiết Kế Lưu Lượng Gió Cao', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 135mm, การออกแบบปริมาณลมสูง', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 135mm, Reka Bentuk Aliran Tinggi', 'tr': 'FZY Mini Eksenel Fan, 135mm Kare Alüminyum Gövde, Yüksek Hava Akışı Tasarımı', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 135 مم، تصميم تدفق هواء عالي'},
  qa15050: {'zh': 'FZY小型轴流风机，150mm方型铝合金框架，50mm厚度', 'en': 'FZY Mini Axial Fan, 150mm Square Aluminum Frame, 50mm Thickness', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 150mm, Độ Dày 50mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 150mm, ความหนา 50mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 150mm, Ketebalan 50mm', 'tr': 'FZY Mini Eksenel Fan, 150mm Kare Alüminyum Gövde, 50mm Kalınlık', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 150 مم، سماكة 50 مم'},
  qa17250: {'zh': 'FZY小型轴流风机，172mm圆形铝合金框架，大风量设计', 'en': 'FZY Mini Axial Fan, 172mm Round Aluminum Frame, High Airflow Design', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 172mm, Thiết Kế Lưu Lượng Gió Cao', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 172mm, การออกแบบปริมาณลมสูง', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 172mm, Reka Bentuk Aliran Tinggi', 'tr': 'FZY Mini Eksenel Fan, 172mm Yuvarlak Alüminyum Gövde, Yüksek Hava Akışı Tasarımı', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 172 مم، تصميم تدفق هواء عالي'},
  qa18060: {'zh': 'FZY小型轴流风机，180mm圆形铝合金框架，60mm厚度', 'en': 'FZY Mini Axial Fan, 180mm Round Aluminum Frame, 60mm Thickness', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 180mm, Độ Dày 60mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 180mm, ความหนา 60mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 180mm, Ketebalan 60mm', 'tr': 'FZY Mini Eksenel Fan, 180mm Yuvarlak Alüminyum Gövde, 60mm Kalınlık', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 180 مم، سماكة 60 مم'},
  qa20060: {'zh': 'FZY小型轴流风机，200mm圆形铝合金框架，60mm厚度', 'en': 'FZY Mini Axial Fan, 200mm Round Aluminum Frame, 60mm Thickness', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 200mm, Độ Dày 60mm', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 200mm, ความหนา 60mm', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 200mm, Ketebalan 60mm', 'tr': 'FZY Mini Eksenel Fan, 200mm Yuvarlak Alüminyum Gövde, 60mm Kalınlık', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 200 مم، سماكة 60 مم'},
  qa20060y: {'zh': 'FZY小型轴流风机，200mm圆形铝合金框架，60mm厚度，高转速版', 'en': 'FZY Mini Axial Fan, 200mm Round Aluminum Frame, 60mm Thickness, High Speed', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 200mm, Độ Dày 60mm, Tốc Độ Cao', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 200mm, ความหนา 60mm, ความเร็วสูง', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 200mm, Ketebalan 60mm, Kelajuan Tinggi', 'tr': 'FZY Mini Eksenel Fan, 200mm Yuvarlak Alüminyum Gövde, 60mm Kalınlık, Yüksek Hız', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 200 مم، سماكة 60 مم، سرعة عالية'},
  qa22090y: {'zh': 'FZY小型轴流风机，80mm方型铝合金框架，PBT塑料风叶', 'en': 'FZY Mini Axial Fan, 80mm Square Aluminum Frame, PBT Plastic Blades', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 80mm, Cánh Quạt Nhựa PBT', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 80mm, ใบพัดพลาสติก PBT', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 80mm, Bilah Plastik PBT', 'tr': 'FZY Mini Eksenel Fan, 80mm Kare Alüminyum Gövde, PBT Plastik Kanatlar', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 80 مم، شفرات بلاستيكية PBT'},
  qa22580: {'zh': 'FZY小型轴流风机，225mm圆形铝合金框架，80mm厚度，双电压', 'en': 'FZY Mini Axial Fan, 225mm Round Aluminum Frame, 80mm Thickness, Dual Voltage', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 225mm, Độ Dày 80mm, Hai Điện Áp', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 225mm, ความหนา 80mm, แรงดันคู่', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 225mm, Ketebalan 80mm, Dua Voltan', 'tr': 'FZY Mini Eksenel Fan, 225mm Yuvarlak Alüminyum Gövde, 80mm Kalınlık, Çift Voltaj', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 225 مم، سماكة 80 مم، جهد مزدوج'},
  qa28080: {'zh': 'FZY小型轴流风机，280mm圆形铝合金框架，80mm厚度，双电压', 'en': 'FZY Mini Axial Fan, 280mm Round Aluminum Frame, 80mm Thickness, Dual Voltage', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Tròn 280mm, Độ Dày 80mm, Hai Điện Áp', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมกลม 280mm, ความหนา 80mm, แรงดันคู่', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Bulat 280mm, Ketebalan 80mm, Dua Voltan', 'tr': 'FZY Mini Eksenel Fan, 280mm Yuvarlak Alüminyum Gövde, 80mm Kalınlık, Çift Voltaj', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم دائري 280 مم، سماكة 80 مم، جهد مزدوج'},
  qa8025: {'zh': 'FZY小型轴流风机，80mm方型铝合金框架，PBT塑料风叶', 'en': 'FZY Mini Axial Fan, 80mm Square Aluminum Frame, PBT Plastic Blades', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 80mm, Cánh Quạt Nhựa PBT', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 80mm, ใบพัดพลาสติก PBT', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 80mm, Bilah Plastik PBT', 'tr': 'FZY Mini Eksenel Fan, 80mm Kare Alüminyum Gövde, PBT Plastik Kanatlar', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 80 مم، شفرات بلاستيكية PBT'},
  qa9225: {'zh': 'FZY小型轴流风机，92mm方型铝合金框架，PBT塑料风叶', 'en': 'FZY Mini Axial Fan, 92mm Square Aluminum Frame, PBT Plastic Blades', 'vi': 'Quạt Trục Mini FZY, Khung Nhôm Vuông 92mm, Cánh Quạt Nhựa PBT', 'th': 'พัดลมแกนมินิ FZY, กรอบอลูมิเนียมสี่เหลี่ยม 92mm, ใบพัดพลาสติก PBT', 'ms': 'Kipak Paksi Mini FZY, Rangka Aluminium Segi Empat 92mm, Bilah Plastik PBT', 'tr': 'FZY Mini Eksenel Fan, 92mm Kare Alüminyum Gövde, PBT Plastik Kanatlar', 'ar': 'مروحة محورية صغيرة FZY، إطار ألومنيوم مربع 92 مم، شفرات بلاستيكية PBT'},
};

// Multi-language features
export const productFeatures: Record<string, Record<string, string[]>> = {
  qa11025: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa12025: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa12038: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa13538: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa15050: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa17250: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa18060: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa20060: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa20060y: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa22090y: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa22580: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa28080: {'zh': ['工业级', '大风量', '低噪音', '长寿命'], 'en': ['Industrial Grade', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Công Nghiệp', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['เกรดอุตสาหกรรม', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Gred Perindustrian', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Endüstriyel Sınıf', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['درجة صناعية', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
  qa8025: {'zh': ['体积小', '噪音低', '免维护', '安装便捷'], 'en': ['Compact', 'Low Noise', 'Maintenance-free', 'Easy Install'], 'vi': ['Nhỏ Gọn', 'Ồn Thấp', 'Không Bảo Trì', 'Dễ Lắp Đặt'], 'th': ['กะทัดรัด', 'เสียงต่ำ', 'ไม่ต้องบำรุงรักษา', 'ติดตั้งง่าย'], 'ms': ['Padat', 'Bunyi Rendah', 'Tanpa Penyelenggaraan', 'Mudah Pasang'], 'tr': ['Kompakt', 'Düşük Gürültü', 'Bakımsız', 'Kolay Kurulum'], 'ar': ['مدمجة', 'ضوضاء منخفضة', 'صيانة مجانية', 'تركيب سهل']},
  qa9225: {'zh': ['体积小巧', '大风量', '低噪音', '长寿命'], 'en': ['Compact', 'High Airflow', 'Low Noise', 'Long Life'], 'vi': ['Nhỏ Gọn', 'Lưu Lượng Cao', 'Ồn Thấp', 'Tuổi Thọ Cao'], 'th': ['กะทัดรัด', 'ปริมาณลมสูง', 'เสียงต่ำ', 'อายุการใช้งานยาวนาน'], 'ms': ['Padat', 'Aliran Tinggi', 'Bunyi Rendah', 'Hayat Panjang'], 'tr': ['Kompakt', 'Yüksek Hava Akışı', 'Düşük Gürültü', 'Uzun Ömür'], 'ar': ['مدمجة', 'تدفق هواء عالي', 'ضوضاء منخفضة', 'عمر طويل']},
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

// Product data from PDF catalog
export const productSeries: ProductSeries[] = [
  {
    id: 'qa11025',
    name: 'QA11025',
    nameEn: 'QA11025 Axial Fan',
    size: '110×110×25mm',
    dimensions: '110×110×25mm',
    pdfPage: 2,
    variants: [
      { model: 'QA11025HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '17', frequency: '50/60', current: '0.2', speed: '2200', airflow: '1.25', noise: '47', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.29', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA11025HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '17', frequency: '50/60', current: '0.1', speed: '2200', airflow: '1.25', noise: '47', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.29', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA11025HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '17', frequency: '50/60', current: '0.06', speed: '2200', airflow: '1.25', noise: '47', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.29', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
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
      { model: 'QA12025HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '17', frequency: '50/60', current: '0.2', speed: '2200', airflow: '1.6', noise: '47', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.3', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA12025HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '17', frequency: '50/60', current: '0.1', speed: '2200', airflow: '1.6', noise: '47', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.3', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA12025HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '17', frequency: '50/60', current: '0.06', speed: '2200', airflow: '1.6', noise: '47', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.3', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
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
      { model: 'QA12038HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '21', frequency: '50/60', current: '0.28', speed: '2500', airflow: '2.3', noise: '48', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.53', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA12038HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '21', frequency: '50/60', current: '0.14', speed: '2500', airflow: '2.3', noise: '48', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.53', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA12038HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '21', frequency: '50/60', current: '0.11', speed: '2500', airflow: '2.3', noise: '48', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.53', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
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
      { model: 'QA13538HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '23', frequency: '50/60', current: '0.3', speed: '2500', airflow: '3', noise: '55', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.55', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA13538HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '23', frequency: '50/60', current: '0.15', speed: '2500', airflow: '3', noise: '55', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.55', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA13538HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '23', frequency: '50/60', current: '0.12', speed: '2500', airflow: '3', noise: '55', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.55', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
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
      { model: 'QA15050HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '36', frequency: '50/60', current: '0.5', speed: '2500', airflow: '5', noise: '60', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.88', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA15050HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '36', frequency: '50/60', current: '0.25', speed: '2500', airflow: '5', noise: '60', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.88', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA15050HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '36', frequency: '50/60', current: '0.19', speed: '2500', airflow: '5', noise: '60', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.88', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
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
      { model: 'QA17250HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '36', frequency: '50/60', current: '0.5', speed: '2500', airflow: '5', noise: '60', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.88', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA17250HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '36', frequency: '50/60', current: '0.25', speed: '2500', airflow: '5', noise: '60', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.88', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA17250HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '36', frequency: '50/60', current: '0.19', speed: '2500', airflow: '5', noise: '60', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.88', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
    ],
  },
  {
    id: 'qa18060',
    name: 'QA18060',
    nameEn: 'QA18060 Axial Fan',
    size: '180×180×60mm',
    dimensions: '180×180×60mm',
    pdfPage: 5,
    variants: [
      { model: 'QA18060HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '50', frequency: '50/60', current: '0.7', speed: '2600', airflow: '7.8', noise: '65', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.35', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA18060HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '50', frequency: '50/60', current: '0.35', speed: '2600', airflow: '7.8', noise: '65', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.35', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA18060HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '50', frequency: '50/60', current: '0.27', speed: '2600', airflow: '7.8', noise: '65', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.35', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
    ],
  },
  {
    id: 'qa20060',
    name: 'QA20060',
    nameEn: 'QA20060 Axial Fan',
    size: '200×200×60mm',
    dimensions: '200×200×60mm',
    pdfPage: 6,
    variants: [
      { model: 'QA20060HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '65', frequency: '50/60', current: '0.9', speed: '2600', airflow: '9.8', noise: '70', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.45', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA20060HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '65', frequency: '50/60', current: '0.45', speed: '2600', airflow: '9.8', noise: '70', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.45', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA20060HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '65', frequency: '50/60', current: '0.3', speed: '2600', airflow: '9.8', noise: '70', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.45', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
    ],
  },
  {
    id: 'qa20060y',
    name: 'QA20060Y',
    nameEn: 'QA20060Y Axial Fan',
    size: '200×200×60mm',
    dimensions: '200×200×60mm',
    pdfPage: 6,
    variants: [
      { model: 'QA20060YHBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '65', frequency: '50/60', current: '0.9', speed: '2600', airflow: '9.8', noise: '70', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.4', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA20060YHBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '65', frequency: '50/60', current: '0.45', speed: '2600', airflow: '9.8', noise: '70', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.4', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA20060YHBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '65', frequency: '50/60', current: '0.3', speed: '2600', airflow: '9.8', noise: '70', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.4', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
    ],
  },
  {
    id: 'qa22090y',
    name: 'QA22090Y',
    nameEn: 'QA22090Y Axial Fan',
    size: '220×220×90mm',
    dimensions: '220×220×90mm',
    pdfPage: 7,
    variants: [
      { model: 'QA22090YHBL2D', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '75', frequency: '50/60', current: '0.35', speed: '2600', airflow: '20', noise: '72', insulationClass: 'F', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '2', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: '铁片 Iron' },
      { model: 'QA22090YHBL3D', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '75', frequency: '50/60', current: '0.16', speed: '2600', airflow: '20', noise: '72', insulationClass: 'F', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '2', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: '铁片 Iron' },
    ],
  },
  {
    id: 'qa22580',
    name: 'QA22580',
    nameEn: 'QA22580 Axial Fan',
    size: '225×225×80mm',
    dimensions: '225×225×80mm',
    pdfPage: 7,
    variants: [
      { model: 'QA22580HBL2D', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '90', frequency: '50/60', current: '0.45', speed: '2600', airflow: '16', noise: '65', insulationClass: 'F', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.85', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: '铁片 Iron' },
      { model: 'QA22580HBL3D', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '90', frequency: '50/60', current: '0.2', speed: '2600', airflow: '16', noise: '65', insulationClass: 'F', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '1.85', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: '铁片 Iron' },
    ],
  },
  {
    id: 'qa28080',
    name: 'QA28080',
    nameEn: 'QA28080 Axial Fan',
    size: '280×280×80mm',
    dimensions: '280×280×80mm',
    pdfPage: 8,
    variants: [
      { model: 'QA28080HBL2D', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '100', frequency: '50/60', current: '0.6', speed: '2600', airflow: '28', noise: '70', insulationClass: 'F', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '2.6', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: '铁片 Iron' },
      { model: 'QA28080HBL3D', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '100', frequency: '50/60', current: '0.25', speed: '2600', airflow: '28', noise: '70', insulationClass: 'F', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '2.6', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: '铁片 Iron' },
    ],
  },
  {
    id: 'qa8025',
    name: 'QA8025',
    nameEn: 'QA8025 Axial Fan',
    size: '80×80×25mm',
    dimensions: '80×80×25mm',
    pdfPage: 1,
    variants: [
      { model: 'QA8025HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '13', frequency: '50/60', current: '0.14', speed: '2200', airflow: '0.4', noise: '38', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.24', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA8025HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '13', frequency: '50/60', current: '0.07', speed: '2200', airflow: '0.4', noise: '38', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.24', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA8025HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '13', frequency: '50/60', current: '0.05', speed: '2200', airflow: '0.4', noise: '38', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.24', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
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
      { model: 'QA9225HBL1', bearing: '滚珠', bearingType: 'ball', voltage: '110/120', power: '13', frequency: '50/60', current: '0.14', speed: '2200', airflow: '0.65', noise: '40', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.25', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA9225HBL2', bearing: '滚珠', bearingType: 'ball', voltage: '220/240', power: '13', frequency: '50/60', current: '0.07', speed: '2200', airflow: '0.65', noise: '40', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.25', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
      { model: 'QA9225HBL3', bearing: '滚珠', bearingType: 'ball', voltage: '380', power: '13', frequency: '50/60', current: '0.05', speed: '2200', airflow: '0.65', noise: '40', insulationClass: 'B', insulation: 'AC1500V- 100MΩ', dielectricStrength: '1500', weight: '0.25', coilMaterial: '铜线 Enameled Copper Wire', housingMaterial: '铝合金 Aluminum Alloy', bladeMaterial: 'PBT （V0级阻燃/UL94 V-0 rated）' },
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
