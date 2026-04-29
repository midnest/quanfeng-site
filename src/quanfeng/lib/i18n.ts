export type Locale = 'zh' | 'en' | 'vi' | 'th' | 'ms' | 'tr' | 'ar';

export const locales: { code: Locale; name: string; flag: string }[] = [
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'ms', name: 'Melayu', flag: '🇲🇾' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export const translations = {
  zh: {
    companyName: '泉风风机',
    nav: {
      company: '公司介绍',
      products: '产品中心',
      factory: '工厂实力',
      technology: '技术认证',
      catalog: '产品图册',
    },
    distributor: {
      btnText: '🤝 代理招募',
      title: '地区总代理 & 分销商招募',
      subtitle: '携手泉风，共创未来',
      description: '我们诚邀全球合作伙伴加入泉风大家庭，共同开拓散热风机市场。',
      benefits: [
        '独家区域代理权',
        '优惠的价格政策',
        '全面的技术支持',
        '专业的营销培训',
        '快速的产品交付',
      ],
      contactTitle: '立即联系我们',
      email: 'market@quanfeng.com',
      phone: '+86-595-2248 1780',
      whatsapp: '+86-138-1234-5678',
      wechat: 'QuanFeng_Official',
      form: {
        name: '您的姓名',
        company: '公司名称',
        country: '所在国家/地区',
        email: '电子邮箱',
        phone: '联系电话',
        message: '留言信息',
        submit: '提交申请',
      },
    },
    hero: {
      title: '专业轴流风机制造商',
      subtitle: '香港泉风实业投资企业 · 25年专注散热风机研发制造 · 产品畅销全球60+国家和地区',
      cta: '在线预览',
    },
    company: {
      title: '关于泉风',
      founded: '始创于1999年',
      description: '泉州泉风电机有限公司系香港泉风实业在海峡西岸名城—泉州投资创办的企业。公司主要生产"泉风"、"力迅"牌交、直流轴流风机、微特电机及防护网罩。公司下设有模具、注塑、五金、铝合金压铸等配套厂，形成完整的产业链。目前在中国内地及中国香港、韩国、台湾等国家或地区设有80多家授权代理商，出口产品约占总产量的50%。',
      description2: '公司以建立现代化企业为目标，坚持"科技是第一生产力"，于2000年通过ISO9001：2000国际质量体系认证。产品广泛应用于自动控制装置、电子设备、医疗设备、计算机、电源设备、电焊机、包装印刷设备、卫星通讯、数控机械、办公自动化、配电柜等领域通风散热。',
      philosophy: '经营理念：不断创新、永续经营',
      spirit: '企业精神：高效、敬业、拼搏、创新',
      honors: '🏆 福建省著名商标 · 福建省高新技术企业 · 25年行业经验',
      footerHonors: '🏆 福建省著名商标 · 福建省高新技术企业',
      stats: [
        { value: '25+', label: '年行业经验' },
        { value: '500+', label: '款产品型号' },
        { value: '60+', label: '出口国家地区' },
        { value: '1000万+', label: '年产量(台)' },
      ],
      history: [
        { year: '1999', event: '公司成立，开始生产轴流风机' },
        { year: '2000', event: '通过ISO9001国际质量体系认证' },
        { year: '2006', event: '被评为福建省高新技术企业、科技进步先进企业' },
        { year: '2009', event: '泉风牌商标被评为福建省著名商标' },
        { year: '2024', event: '年产销量突破1000万台，持续创新发展' },
      ],
    },
    products: {
      title: '产品中心',
      subtitle: '圆筒型铝合金外壳 · PBT塑料风叶 · 体积小 · 免维护 · 安装便捷',
      items: [
        { 
          name: '交流轴流风机', 
          desc: 'QA系列交流风机，220V电压，滚珠/含油轴承可选，噪音低、震动小、运行可靠。风量测试、噪声检测、温升测试均通过国家标准。',
          specs: 'QA9225 / QA12025 / QA12038 / QA13538 / QA17250 / QA18060 / QA20060 / QA22090',
          image: '/images/quanfeng/products/qa12038.jpg'
        },
        { 
          name: '直流轴流风机', 
          desc: 'DC直流风机，12V/24V/48V可选，智能调速，超长寿命，低功耗设计。适用于对噪音和能耗要求较高的场合。',
          specs: '多种规格可选，支持定制，可根据客户需求开发特殊电压规格',
          image: '/images/quanfeng/products/qa9225.jpg'
        },
        { 
          name: '微特电机', 
          desc: '精密微型电机，高效节能，广泛应用于自动化设备、医疗器械、精密仪器。采用F级或H级耐高温绝缘材料。',
          specs: '功率范围5W-100W，支持定制开发',
          image: '/images/quanfeng/products/qa20060.jpg'
        },
        { 
          name: '防护网罩', 
          desc: '风机配套防护网罩，安全防护，安装便捷，多种规格适配各型号风机。金属网罩表面可进行特殊防腐处理。',
          specs: '金属/塑料材质可选，可定制网孔规格',
          image: '/images/quanfeng/products/qa22090.jpg'
        },
      ],
      viewCatalog: '在线预览',
      productTable: {
        title: '产品规格参数表',
        description: '泉风QA系列交流轴流风机主要技术参数，详细规格请参考产品图册',
        headers: ['型号', '电压(V)', '频率(Hz)', '电流(A)', '功率(W)', '转速(RPM)', '风量(CFM)', '噪音(dB)', '轴承类型', '尺寸(mm)'],
        products: [
          { model: 'QA9225', voltage: '220', frequency: '50/60', current: '0.08/0.07', power: '15/14', speed: '2500/2700', airflow: '35/40', noise: '32/35', bearing: '含油/滚珠', size: '92×92×25' },
          { model: 'QA12025', voltage: '220', frequency: '50/60', current: '0.10/0.09', power: '18/17', speed: '2300/2500', airflow: '55/62', noise: '34/37', bearing: '含油/滚珠', size: '120×120×25' },
          { model: 'QA12038', voltage: '220', frequency: '50/60', current: '0.12/0.11', power: '22/20', speed: '2400/2600', airflow: '65/72', noise: '36/39', bearing: '含油/滚珠', size: '120×120×38' },
          { model: 'QA13538', voltage: '220', frequency: '50/60', current: '0.14/0.13', power: '26/24', speed: '2200/2400', airflow: '85/95', noise: '38/41', bearing: '含油/滚珠', size: '135×135×38' },
          { model: 'QA15050', voltage: '220', frequency: '50/60', current: '0.18/0.16', power: '35/32', speed: '2100/2300', airflow: '110/125', noise: '40/43', bearing: '含油/滚珠', size: '150×150×50' },
          { model: 'QA17250', voltage: '220', frequency: '50/60', current: '0.20/0.18', power: '40/36', speed: '2000/2200', airflow: '140/160', noise: '42/45', bearing: '含油/滚珠', size: '172×172×50' },
          { model: 'QA18060', voltage: '220', frequency: '50/60', current: '0.25/0.22', power: '48/44', speed: '1900/2100', airflow: '165/185', noise: '44/47', bearing: '含油/滚珠', size: '180×180×60' },
          { model: 'QA20060', voltage: '220', frequency: '50/60', current: '0.30/0.26', power: '58/52', speed: '1800/2000', airflow: '200/230', noise: '46/49', bearing: '含油/滚珠', size: '200×200×60' },
          { model: 'QA22090', voltage: '220', frequency: '50/60', current: '0.38/0.34', power: '75/68', speed: '1700/1900', airflow: '260/300', noise: '48/51', bearing: '含油/滚珠', size: '220×220×90' },
          { model: 'QA25489', voltage: '220', frequency: '50/60', current: '0.45/0.40', power: '90/82', speed: '1600/1800', airflow: '340/380', noise: '50/53', bearing: '含油/滚珠', size: '254×254×89' },
        ],
        notes: [
          '1. 以上参数为参考值，具体以实际产品为准',
          '2. 电压可选：110V/220V/380V，可定制特殊电压',
          '3. 轴承类型：B代表含油轴承，S代表滚珠轴承',
          '4. 工作温度：-20℃~+70℃',
          '5. 绝缘等级：Class B (130℃) / Class F (155℃)可选',
        ]
      },
      applications: {
        title: '应用领域',
        description: '泉风风机产品广泛应用于各行各业，为设备提供可靠的散热解决方案',
        items: [
          { name: '电子信息技术', desc: '个人电脑/服务器CPU散热、机箱排风、5G基站、交换机、路由器内部散热、LED照明散热', image: '/images/quanfeng/services/icon-1.jpg' },
          { name: '工业自动化', desc: '变频柜/控制柜散热、激光器/焊机内部冷却、3D打印机喷头散热、数控机床冷却', image: '/images/quanfeng/services/icon-2.jpg' },
          { name: '家用电器', desc: '微波炉、电磁炉、空调室外机、空气净化器、除湿机等通风散热', image: '/images/quanfeng/services/icon-3.jpg' },
          { name: '医疗设备', desc: '医疗仪器散热、CT机冷却、核磁共振设备通风、手术室净化系统', image: '/images/quanfeng/services/icon-4.jpg' },
          { name: '电力设备', desc: '配电柜、干式变压器、电焊机、UPS电源、充电桩等散热', image: '/images/quanfeng/services/icon-1.jpg' },
          { name: '通信设备', desc: '数据中心服务器散热、网络机柜、卫星通讯设备、基站冷却', image: '/images/quanfeng/services/icon-2.jpg' },
        ]
      }
    },
    factory: {
      title: '工厂实力',
      subtitle: '现代化生产基地 · 年产风机超过1000万台 · 配套产业链完整',
      images: [
        '/images/quanfeng/about/video-cover.jpg',
        '/images/quanfeng/cn/about/video-cover.jpg',
        '/images/quanfeng/about/background.jpg',
      ],
      features: [
        { title: '先进生产线', desc: '引进国际先进自动化生产线，从模具开发到成品组装全流程自主可控', icon: '⚙️' },
        { title: '配套产业链', desc: '自有模具、注塑、五金、铝合金压铸等配套厂，确保品质与交期', icon: '🏭' },
        { title: '严格品控', desc: 'ISO9001质量管理体系认证，全流程检测，确保每台产品出厂合格率100%', icon: '✅' },
        { title: '快速交付', desc: '充足原材料库存，月产能100万台，常规订单7天交货，紧急订单48小时响应', icon: '🚚' },
      ],
      testingCenter: {
        title: '检测技术中心',
        description: '泉州泉风电机检测技术中心是本公司自行创建的集科研、检测的工程技术检测中心，是国内民营企业第一家风机检测技术中心。中心与福州大学、华侨大学及福建省中心检验所横向联合，设备先进、齐全，可为众多风机企业提供服务。',
        tests: [
          '风量测试', '噪声检测', '高温检测', '低温检测',
          '恒温恒湿检测', '盐雾试验', '动平衡检测', '跌落冲击试验',
          '寿命测试', '绝缘耐压测试', '电磁兼容测试'
        ]
      }
    },
    technology: {
      title: '技术认证',
      subtitle: '多项国际认证 · 国家级荣誉 · 品质值得信赖',
      certifications: {
        title: '国际认证',
        items: [
          { name: 'ISO9001', desc: '质量管理体系认证（2000年通过）' },
          { name: 'CCC', desc: '中国强制性产品认证' },
          { name: 'UL', desc: '美国安全认证' },
          { name: 'CUL', desc: '加拿大安全认证' },
          { name: 'CE', desc: '欧盟安全认证' },
          { name: 'RoHS', desc: '环保认证' },
        ]
      },
      honors: {
        title: '企业荣誉',
        items: [
          '国家微电机产品检测中心授予"行业监督抽查合格单位"',
          '"九五质量水平优秀单位"',
          '"风机行业质量十佳放心品牌"（中国技术协会）',
          '"中国轴流风机十佳名优品牌"',
          '福建省新产品鉴定',
          '福建省科技成果奖',
          '省级优秀新产品奖',
          '省级科技进步奖',
          '福建省高新技术企业（2006年）',
          '科技进步先进企业',
          '福建知名科技企业',
          '泉州市知名商标',
          '福建省著名商标（2009年）'
        ]
      },
      ipr: {
        title: '知识产权',
        description: '公司高度重视技术创新和知识产权保护，累计获得多项专利和商标',
        patents: '国内专利34件',
        trademarks: '注册商标10个',
        certificates: '资质证书19个'
      },
      features: [
        { title: '研发实力', desc: '专业研发团队，持续技术创新，可根据客户需求定制开发' },
        { title: '检测设备', desc: '完善的实验室，风量、噪音、温升、寿命等全套检测设备' },
        { title: 'OEM/ODM', desc: '支持贴牌生产，可定制外观、规格、包装，满足个性化需求' },
        { title: '全球服务', desc: '产品远销60+国家和地区，80多家授权代理商，专业技术支持' },
      ],
    },
    catalog: {
      title: '产品图册',
      subtitle: '2026年最新产品目录 · 包含详细规格参数 · 选型指南',
      download: '下载PDF图册',
      view: '在线预览',
      features: [
        '完整QA系列产品规格参数',
        '产品选型指南',
        '技术性能曲线',
        '安装尺寸图',
        '认证证书展示'
      ]
    },
    footer: {
      contact: '联系我们',
      company: '泉州泉风电机有限公司',
      address: '地址：福建省泉州市丰泽区北峰街道丰发路1号',
      phone: '电话：+86-595-xxxx-xxxx',
      fax: '传真：+86-595-xxxx-xxxx',
      email: '邮箱：sales@quanfeng.com',
      website: '网址：www.quanfeng.com',
      copyright: '© 2024 泉风风机 版权所有 | 香港泉风实业投资企业',
    },
  },
  en: {
    companyName: 'Quanfeng Fan',
    nav: {
      company: 'Company',
      products: 'Products',
      factory: 'Factory',
      technology: 'Certifications',
      catalog: 'Catalog',
    },
    distributor: {
      btnText: '🤝 Distributor',
      title: 'Regional Distributor Recruitment',
      subtitle: 'Partner with Quanfeng for a Brighter Future',
      description: 'We sincerely invite global partners to join the Quanfeng family and explore the cooling fan market together.',
      benefits: [
        'Exclusive regional distribution rights',
        'Competitive pricing policy',
        'Comprehensive technical support',
        'Professional marketing training',
        'Fast product delivery',
      ],
      contactTitle: 'Contact Us Now',
      email: 'market@quanfeng.com',
      phone: '+86-595-2248 1780',
      whatsapp: '+86-138-1234-5678',
      wechat: 'QuanFeng_Official',
      form: {
        name: 'Your Name',
        company: 'Company Name',
        country: 'Country/Region',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Message',
        submit: 'Submit Application',
      },
    },
    hero: {
      title: 'Professional Axial Fan Manufacturer',
      subtitle: 'Hong Kong Quanfeng Industrial Investment · 25 Years of Expertise · Exported to 60+ Countries',
      cta: 'Preview Online',
    },
    company: {
      title: 'About Quanfeng',
      founded: 'Founded in 1999',
      description: 'Quanzhou Quanfeng Electric Co., Ltd. is an enterprise invested by Hong Kong Quanfeng Industrial in Quanzhou. We mainly produce "Quanfeng" and "Lixun" brand AC/DC axial fans, micro motors and protective nets. We have supporting factories for molds, injection molding, hardware, and aluminum alloy die-casting. We have over 80 authorized agents in Mainland China, Hong Kong, South Korea, Taiwan and other countries/regions, with exports accounting for approximately 50% of total production.',
      description2: 'Aiming to establish a modern enterprise, we adhere to "Technology is the primary productive force" and passed ISO9001:2000 certification in 2000. Our products are widely used in automatic control devices, electronic equipment, medical equipment, computers, power supplies, welding machines, packaging and printing equipment, satellite communications, CNC machinery, office automation, and power distribution cabinets for ventilation and heat dissipation.',
      philosophy: 'Business Philosophy: Continuous Innovation, Sustainable Operation',
      spirit: 'Enterprise Spirit: Efficiency, Dedication, Hard Work, Innovation',
      honors: '🏆 Famous Trademark of Fujian · High-Tech Enterprise · 25 Years Experience',
      footerHonors: '🏆 Famous Trademark of Fujian · High-Tech Enterprise',
      stats: [
        { value: '25+', label: 'Years Experience' },
        { value: '500+', label: 'Product Models' },
        { value: '60+', label: 'Export Countries' },
        { value: '10M+', label: 'Annual Output' },
      ],
      history: [
        { year: '1999', event: 'Company founded, began producing axial fans' },
        { year: '2000', event: 'Passed ISO9001 international quality certification' },
        { year: '2006', event: 'Recognized as Fujian High-Tech Enterprise' },
        { year: '2009', event: 'Quanfeng trademark recognized as Famous Trademark of Fujian Province' },
        { year: '2024', event: 'Annual production exceeded 10 million units' },
      ],
    },
    products: {
      title: 'Product Center',
      subtitle: 'Cylindrical aluminum housing · PBT plastic blades · Compact · Maintenance-free · Easy installation',
      items: [
        { 
          name: 'AC Axial Fans', 
          desc: 'QA series AC fans, 220V voltage, ball bearing/sleeve bearing options, low noise, low vibration, reliable operation. All products pass national airflow, noise and temperature rise tests.',
          specs: 'QA9225 / QA12025 / QA12038 / QA13538 / QA17250 / QA18060 / QA20060 / QA22090',
          image: '/images/quanfeng/products/qa12038.jpg'
        },
        { 
          name: 'DC Axial Fans', 
          desc: 'DC fans with 12V/24V/48V options, intelligent speed control, ultra-long life, low power design. Ideal for applications requiring low noise and energy consumption.',
          specs: 'Multiple specifications available, customization supported',
          image: '/images/quanfeng/products/qa9225.jpg'
        },
        { 
          name: 'Micro Motors', 
          desc: 'Precision micro motors, high efficiency and energy saving, widely used in automation equipment, medical devices. Using F-class or H-class high temperature resistant insulation materials.',
          specs: 'Power range 5W-100W',
          image: '/images/quanfeng/products/qa20060.jpg'
        },
        { 
          name: 'Protective Nets', 
          desc: 'Fan protective nets, safety protection, easy installation, multiple specifications for all fan models. Metal nets can be treated with special anti-corrosion coating.',
          specs: 'Metal/Plastic options',
          image: '/images/quanfeng/products/qa22090.jpg'
        },
      ],
      viewCatalog: 'Preview Online',
      productTable: {
        title: 'Product Specifications',
        description: 'Quanfeng QA Series AC Axial Fans Technical Parameters',
        headers: ['Model', 'Voltage(V)', 'Freq(Hz)', 'Current(A)', 'Power(W)', 'Speed(RPM)', 'Airflow(CFM)', 'Noise(dB)', 'Bearing', 'Size(mm)'],
        products: [
          { model: 'QA9225', voltage: '220', frequency: '50/60', current: '0.08/0.07', power: '15/14', speed: '2500/2700', airflow: '35/40', noise: '32/35', bearing: 'Sleeve/Ball', size: '92×92×25' },
          { model: 'QA12025', voltage: '220', frequency: '50/60', current: '0.10/0.09', power: '18/17', speed: '2300/2500', airflow: '55/62', noise: '34/37', bearing: 'Sleeve/Ball', size: '120×120×25' },
          { model: 'QA12038', voltage: '220', frequency: '50/60', current: '0.12/0.11', power: '22/20', speed: '2400/2600', airflow: '65/72', noise: '36/39', bearing: 'Sleeve/Ball', size: '120×120×38' },
          { model: 'QA13538', voltage: '220', frequency: '50/60', current: '0.14/0.13', power: '26/24', speed: '2200/2400', airflow: '85/95', noise: '38/41', bearing: 'Sleeve/Ball', size: '135×135×38' },
          { model: 'QA15050', voltage: '220', frequency: '50/60', current: '0.18/0.16', power: '35/32', speed: '2100/2300', airflow: '110/125', noise: '40/43', bearing: 'Sleeve/Ball', size: '150×150×50' },
          { model: 'QA17250', voltage: '220', frequency: '50/60', current: '0.20/0.18', power: '40/36', speed: '2000/2200', airflow: '140/160', noise: '42/45', bearing: 'Sleeve/Ball', size: '172×172×50' },
          { model: 'QA18060', voltage: '220', frequency: '50/60', current: '0.25/0.22', power: '48/44', speed: '1900/2100', airflow: '165/185', noise: '44/47', bearing: 'Sleeve/Ball', size: '180×180×60' },
          { model: 'QA20060', voltage: '220', frequency: '50/60', current: '0.30/0.26', power: '58/52', speed: '1800/2000', airflow: '200/230', noise: '46/49', bearing: 'Sleeve/Ball', size: '200×200×60' },
          { model: 'QA22090', voltage: '220', frequency: '50/60', current: '0.38/0.34', power: '75/68', speed: '1700/1900', airflow: '260/300', noise: '48/51', bearing: 'Sleeve/Ball', size: '220×220×90' },
          { model: 'QA25489', voltage: '220', frequency: '50/60', current: '0.45/0.40', power: '90/82', speed: '1600/1800', airflow: '340/380', noise: '50/53', bearing: 'Sleeve/Ball', size: '254×254×89' },
        ],
        notes: [
          '1. Parameters are reference values, subject to actual product',
          '2. Voltage options: 110V/220V/380V, special voltage available',
          '3. Bearing: B=Sleeve Bearing, S=Ball Bearing',
          '4. Operating temperature: -20℃~+70℃',
          '5. Insulation: Class B (130℃) / Class F (155℃) optional',
        ]
      },
      applications: {
        title: 'Applications',
        description: 'Quanfeng fans are widely used in various industries, providing reliable cooling solutions for equipment',
        items: [
          { name: 'Electronics & IT', desc: 'PC/servers CPU cooling, chassis ventilation, 5G base stations, switches, routers, LED lighting' },
          { name: 'Industrial Automation', desc: 'Inverter/control cabinet cooling, laser/welding equipment cooling, 3D printer cooling, CNC machine tools' },
          { name: 'Home Appliances', desc: 'Microwaves, induction cookers, air conditioners, air purifiers, dehumidifiers ventilation' },
          { name: 'Medical Equipment', desc: 'Medical instruments cooling, CT machines, MRI equipment ventilation, operating room systems' },
          { name: 'Power Equipment', desc: 'Distribution cabinets, dry transformers, welding machines, UPS, charging stations cooling' },
          { name: 'Communications', desc: 'Data center servers, network cabinets, satellite communications, base stations cooling' },
        ]
      }
    },
    factory: {
      title: 'Factory Strength',
      subtitle: 'Modern production base · Annual capacity 10+ million units · Complete supply chain',
      features: [
        { title: 'Advanced Production', desc: 'International automated production lines, full control from mold development to assembly', icon: '⚙️' },
        { title: 'Complete Supply Chain', desc: 'Own mold, injection, hardware, and die-casting factories ensure quality and delivery', icon: '🏭' },
        { title: 'Strict QC', desc: 'ISO9001 certified, full-process inspection, 100% pass rate for all products', icon: '✅' },
        { title: 'Fast Delivery', desc: 'Sufficient raw material stock, 1M units monthly capacity, 7-day delivery for standard orders', icon: '🚚' },
      ],
      testingCenter: {
        title: 'Testing & Technical Center',
        description: 'Quanzhou Quanfeng Motor Testing & Technical Center is the first fan testing center among private enterprises in China. Collaborating with Fuzhou University, Huaqiao University and Fujian Provincial Inspection Institute, we provide services to many fan companies with advanced and complete equipment.',
        tests: [
          'Airflow Testing', 'Noise Testing', 'High Temperature Testing', 'Low Temperature Testing',
          'Constant Temperature/Humidity', 'Salt Spray Testing', 'Dynamic Balance', 'Drop Impact Testing',
          'Life Testing', 'Insulation Withstand Voltage', 'EMC Testing'
        ]
      }
    },
    technology: {
      title: 'Certifications',
      subtitle: 'International Certifications · National Honors · Trusted Quality',
      certifications: {
        title: 'International Certifications',
        items: [
          { name: 'ISO9001', desc: 'Quality Management System (Since 2000)' },
          { name: 'CCC', desc: 'China Compulsory Certification' },
          { name: 'UL', desc: 'US Safety Certification' },
          { name: 'CUL', desc: 'Canada Safety Certification' },
          { name: 'CE', desc: 'EU Safety Certification' },
          { name: 'RoHS', desc: 'Environmental Certification' },
        ]
      },
      honors: {
        title: 'Enterprise Honors',
        items: [
          'Industry Supervision Qualified Unit - National Micro Motor Testing Center',
          'Excellent Quality Unit of the 9th Five-Year Plan',
          'Top Ten Trusted Brands in Fan Industry (China Technology Association)',
          'Top Ten Famous Brands of China Axial Fans',
          'Fujian New Product Appraisal',
          'Fujian Science and Technology Achievement Award',
          'Provincial Outstanding New Product Award',
          'Provincial Science and Technology Progress Award',
          'Fujian High-Tech Enterprise (2006)',
          'Advanced Enterprise in Science and Technology',
          'Fujian Famous Technology Enterprise',
          'Quanzhou Famous Trademark',
          'Fujian Provincial Famous Trademark (2009)'
        ]
      },
      ipr: {
        title: 'Intellectual Property',
        description: 'We attach great importance to technological innovation and IP protection, with multiple patents and trademarks obtained',
        patents: '34 Domestic Patents',
        trademarks: '10 Registered Trademarks',
        certificates: '19 Qualification Certificates'
      },
      features: [
        { title: 'R&D Capability', desc: 'Professional R&D team, continuous technical innovation, custom development available' },
        { title: 'Testing Equipment', desc: 'Complete laboratory with air flow, noise, temperature rise, and life testing equipment' },
        { title: 'OEM/ODM', desc: 'Support OEM production, customizable appearance, specifications, and packaging' },
        { title: 'Global Service', desc: 'Products exported to 60+ countries, 80+ authorized agents, professional technical support' },
      ],
    },
    catalog: {
      title: 'Product Catalog',
      subtitle: '2026 Latest Product Catalog · Detailed Specifications · Selection Guide',
      download: 'Download PDF',
      view: 'View Online',
      features: [
        'Complete QA series specifications',
        'Product selection guide',
        'Technical performance curves',
        'Installation dimensions',
        'Certification display'
      ]
    },
    footer: {
      contact: 'Contact Us',
      company: 'Quanzhou Quanfeng Electric Co., Ltd.',
      address: 'Address: No.1 Fengfa Road, Beifeng Street, Fengze District, Quanzhou, Fujian, China',
      phone: 'Tel: +86-595-xxxx-xxxx',
      fax: 'Fax: +86-595-xxxx-xxxx',
      email: 'Email: sales@quanfeng.com',
      website: 'Web: www.quanfeng.com',
      copyright: '© 2024 Quanfeng Fan. All rights reserved. | Hong Kong Quanfeng Industrial Investment',
    },
  },
  vi: {
    companyName: 'Quanfeng',
    nav: {
      company: 'Công ty',
      products: 'Sản phẩm',
      factory: 'Nhà máy',
      technology: 'Chứng nhận',
      catalog: 'Catalog',
    },
    distributor: {
      btnText: '🤝 Tuyển Đại Lý',
      title: 'Tuyển Dụng Đại Lý Khu Vực',
      subtitle: 'Hợp Tác Cùng Quanfeng, Xây Dựng Tương Lai',
      description: 'Chúng tôi trân trọng mởi các đối tác toàn cầu tham gia gia đình Quanfeng và cùng nhau khai phá thị trường quạt làm mát.',
      benefits: [
        'Quyền đại lý độc quyền khu vực',
        'Chính sách giá ưu đãi',
        'Hỗ trợ kỹ thuật toàn diện',
        'Đào tạo marketing chuyên nghiệp',
        'Giao hàng nhanh chóng',
      ],
      contactTitle: 'Liên Hệ Ngay',
      email: 'market@quanfeng.com',
      phone: '+86-595-2248 1780',
      whatsapp: '+86-138-1234-5678',
      wechat: 'QuanFeng_Official',
      form: {
        name: 'Họ và Tên',
        company: 'Tên Công Ty',
        country: 'Quốc Gia/Khu Vực',
        email: 'Địa Chỉ Email',
        phone: 'Số Điện Thoại',
        message: 'Tin Nhắn',
        submit: 'Gửi Đơn Đăng Ký',
      },
    },
    hero: {
      title: 'Nhà Sản Xuất Quạt Trục Chuyên Nghiệp',
      subtitle: 'Đầu tư từ Hong Kong · 25 năm kinh nghiệm · Xuất khẩu 60+ quốc gia',
      cta: 'Xem trước',
    },
    company: {
      title: 'Về Quanfeng',
      founded: 'Thành lập 1999',
      description: 'Quanzhou Quanfeng Electric Co., Ltd. là doanh nghiệp được đầu tư bởi Hong Kong Quanfeng Industrial. Chúng tôi sản xuất quạt trục AC/DC, động cơ vi và lưới bảo vệ thương hiệu "Quanfeng" và "Lixun".',
      description2: 'Sản phẩm được sử dụng rộng rãi trong thiết bị điều khiển tự động, thiết bị điện tử, thiết bị y tế, máy tính, nguồn điện, máy hàn, thiết bị đóng gói, truyền thông vệ tinh, máy CNC, tự động hóa văn phòng và tủ điện.',
      philosophy: 'Triết Lý Kinh Doanh: Đổi Mới Liên Tục, Phát Triển Bền Vững',
      spirit: 'Tinh Thần Doanh Nghiệp: Hiệu Quả, Tận Tâm, Nỗ Lực, Đổi Mới',
      honors: '🏆 Thương Hiệu Nổi Tiếng Fujian · Doanh Nghiệp Công Nghệ Cao · 25 Năm Kinh Nghiệm',
      footerHonors: '🏆 Thương Hiệu Nổi Tiếng Fujian · Doanh Nghiệp Công Nghệ Cao',
      stats: [
        { value: '25+', label: 'Năm Kinh Nghiệm' },
        { value: '500+', label: 'Mẫu Sản Phẩm' },
        { value: '60+', label: 'Quốc Gia' },
        { value: '10M+', label: 'Sản Lượng/Năm' },
      ],
      history: [
        { year: '1999', event: 'Thành lập công ty, bắt đầu sản xuất quạt trục' },
        { year: '2000', event: 'Đạt chứng nhận hệ thống chất lượng ISO9001' },
        { year: '2006', event: 'Doanh nghiệp công nghệ cao, tiên tiến khoa học kỹ thuật' },
        { year: '2009', event: 'Thương hiệu Quanfeng đạt thương hiệu nổi tiếng' },
        { year: '2024', event: 'Sản lượng vượt 10 triệu đơn vị, đổi mới liên tục' },
      ],
    },
    products: {
      title: 'Trung Tâm Sản Phẩm',
      subtitle: 'Vỏ nhôm hình trụ · Cánh quạt nhựa PBT · Nhỏ gọn · Không bảo trì',
      items: [
        { 
          name: 'Quạt Trục AC', 
          desc: 'Dòng QA, điện áp 220V, vòng bi bạc/vòng bi trượt, ồn thấp, độ tin cậy cao',
          specs: 'QA9225 / QA12025 / QA12038 / QA13538 / QA17250 / QA18060 / QA20060 / QA22090',
          image: '/images/quanfeng/products/qa12038.jpg'
        },
        { 
          name: 'Quạt Trục DC', 
          desc: 'Quạt DC 12V/24V/48V, điều khiển thông minh, tuổi thọ dài, tiết kiệm điện',
          specs: 'Nhiều kích cỡ, hỗ trợ OEM',
          image: '/images/quanfeng/products/qa9225.jpg'
        },
        { 
          name: 'Động Cơ Vi', 
          desc: 'Động cơ vi chính xác, hiệu suất cao, dùng trong thiết bị tự động, y tế',
          specs: 'Công suất 5W-100W',
          image: '/images/quanfeng/products/qa20060.jpg'
        },
        { 
          name: 'Lưới Bảo Vệ', 
          desc: 'Lưới bảo vệ quạt, an toàn, dễ lắp đặt, nhiều kích cỡ',
          specs: 'Kim loại/Nhựa',
          image: '/images/quanfeng/products/qa22090.jpg'
        },
      ],
      viewCatalog: 'Xem trước',
      productTable: {
        title: 'Thông Số Kỹ Thuật',
        description: 'Thông số quạt trục AC dòng QA của Quanfeng',
        headers: ['Model', 'Điện áp(V)', 'Tần số(Hz)', 'Dòng điện(A)', 'Công suất(W)', 'Tốc độ(RPM)', 'Lưu lượng(CFM)', 'Ồn(dB)', 'Vòng bi', 'Kích thước(mm)'],
        products: [
          { model: 'QA9225', voltage: '220', frequency: '50/60', current: '0.08/0.07', power: '15/14', speed: '2500/2700', airflow: '35/40', noise: '32/35', bearing: 'Bạc/Bi', size: '92×92×25' },
          { model: 'QA12025', voltage: '220', frequency: '50/60', current: '0.10/0.09', power: '18/17', speed: '2300/2500', airflow: '55/62', noise: '34/37', bearing: 'Bạc/Bi', size: '120×120×25' },
          { model: 'QA12038', voltage: '220', frequency: '50/60', current: '0.12/0.11', power: '22/20', speed: '2400/2600', airflow: '65/72', noise: '36/39', bearing: 'Bạc/Bi', size: '120×120×38' },
          { model: 'QA13538', voltage: '220', frequency: '50/60', current: '0.14/0.13', power: '26/24', speed: '2200/2400', airflow: '85/95', noise: '38/41', bearing: 'Bạc/Bi', size: '135×135×38' },
          { model: 'QA15050', voltage: '220', frequency: '50/60', current: '0.18/0.16', power: '35/32', speed: '2100/2300', airflow: '110/125', noise: '40/43', bearing: 'Bạc/Bi', size: '150×150×50' },
          { model: 'QA17250', voltage: '220', frequency: '50/60', current: '0.20/0.18', power: '40/36', speed: '2000/2200', airflow: '140/160', noise: '42/45', bearing: 'Bạc/Bi', size: '172×172×50' },
          { model: 'QA18060', voltage: '220', frequency: '50/60', current: '0.25/0.22', power: '48/44', speed: '1900/2100', airflow: '165/185', noise: '44/47', bearing: 'Bạc/Bi', size: '180×180×60' },
          { model: 'QA20060', voltage: '220', frequency: '50/60', current: '0.30/0.26', power: '58/52', speed: '1800/2000', airflow: '200/230', noise: '46/49', bearing: 'Bạc/Bi', size: '200×200×60' },
          { model: 'QA22090', voltage: '220', frequency: '50/60', current: '0.38/0.34', power: '75/68', speed: '1700/1900', airflow: '260/300', noise: '48/51', bearing: 'Bạc/Bi', size: '220×220×90' },
          { model: 'QA25489', voltage: '220', frequency: '50/60', current: '0.45/0.40', power: '90/82', speed: '1600/1800', airflow: '340/380', noise: '50/53', bearing: 'Bạc/Bi', size: '254×254×89' },
        ],
        notes: [
          '1. Thông số tham khảo, tùy thuộc sản phẩm thực tế',
          '2. Điện áp: 110V/220V/380V, hỗ trợ điện áp đặc biệt',
          '3. Vòng bi: B=Bạc, S=Bi',
          '4. Nhiệt độ làm việc: -20℃~+70℃',
          '5. Cách điện: Class B (130℃) / Class F (155℃)',
        ]
      },
      applications: {
        title: 'Lĩnh Vực Ứng Dụng',
        description: 'Sản phẩm Quanfeng được sử dụng rộng rãi trong nhiều ngành công nghiệp',
        items: [
          { name: 'Điều Khiển Tự Động', desc: 'Tủ biến tần, tủ điều khiển, máy laser, máy hàn, máy in 3D' },
          { name: 'Làm Mát Điện Tử', desc: 'PC/máy chủ, trạm 5G, switch, router, đèn LED' },
          { name: 'Thiết Bị Y Tế', desc: 'Thiết bị y tế, máy CT, máy MRI, hệ thống phòng mổ' },
          { name: 'Máy Chủ', desc: 'Trung tâm dữ liệu, tủ mạng, thiết bị viễn thông' },
          { name: 'Nguồn Điện', desc: 'Tủ điện, máy biến áp, máy hàn, UPS, trạm sạc' },
          { name: 'Máy CNC', desc: 'Máy CNC, tự động hóa văn phòng, tủ công nghiệp' },
        ]
      }
    },
    factory: {
      title: 'Năng Lực Nhà Máy',
      subtitle: 'Cơ sở hiện đại · Công suất 10+ triệu/năm · Chuỗi cung ứng đầy đủ',
      features: [
        { title: 'Dây Chuyền Hiện Đại', desc: 'Dây chuyền tự động quốc tế, kiểm soát từ khuôn đến lắp ráp', icon: '⚙️' },
        { title: 'Chuỗi Cung Ứng', desc: 'Nhà máy khuôn, ép nhựa, kim loại, đúc nhôm tự có', icon: '🏭' },
        { title: 'Kiểm Soát Chất Lượng', desc: 'Chứng nhận ISO9001, kiểm tra toàn diện, tỷ lệ đạt 100%', icon: '✅' },
        { title: 'Giao Hàng Nhanh', desc: 'Tồn kho đầy đủ, công suất 1M/tháng, giao 7 ngày', icon: '🚚' },
      ],
    },
    technology: {
      title: 'Chứng Nhận',
      subtitle: 'Chứng nhận quốc tế · Danh hiệu quốc gia · Chất lượng đáng tin cậy',
      certifications: {
        title: 'Chứng Nhận Quốc Tế',
        items: [
          { name: 'ISO9001', desc: 'Hệ thống quản lý chất lượng' },
          { name: 'CCC', desc: 'Chứng nhận bắt buộc Trung Quốc' },
          { name: 'UL', desc: 'Chứng nhận an toàn Mỹ' },
          { name: 'CUL', desc: 'Chứng nhận an toàn Canada' },
          { name: 'CE', desc: 'Chứng nhận an toàn EU' },
          { name: 'RoHS', desc: 'Chứng nhận môi trường' },
        ]
      },
      ipr: {
        title: 'Sở Hữu Trí Tuệ',
        description: 'Công ty coi trọng đổi mới kỹ thuật và bảo vệ quyền sở hữu trí tuệ, đã đạt được nhiều bằng sáng chế và thương hiệu',
        patents: '34 Bằng Sáng Chế Nội Địa',
        trademarks: '10 Thương Hiệu Đã Đăng Ký',
        certificates: '19 Chứng Chỉ Chất Lượng'
      },
      honors: {
        title: 'Danh Hiệu Doanh Nghiệp',
        items: [
          'Đơn vị đạt kiểm tra giám sát ngành',
          'Đơn vị chất lượng xuất sắc',
          'Top 10 thương hiệu tin cậy',
          'Top 10 thương hiệu nổi tiếng',
          'Chứng nhận sản phẩm mới',
          'Giải thưởng thành tựu khoa học'
        ]
      },
      features: [
        { title: 'Năng Lực R&D', desc: 'Đội ngũ R&D chuyên nghiệp, hỗ trợ phát triển tùy chỉnh' },
        { title: 'Thiết Bị Kiểm Tra', desc: 'Phòng thí nghiệm đầy đủ, kiểm tra lưu lượng, độ ồn, nhiệt độ' },
        { title: 'OEM/ODM', desc: 'Hỗ trợ OEM, tùy chỉnh ngoại hình, thông số, bao bì' },
        { title: 'Dịch Vụ Toàn Cầu', desc: 'Xuất khẩu 60+ quốc gia, hỗ trợ kỹ thuật chuyên nghiệp' },
      ],
    },
    catalog: {
      title: 'Catalog Sản Phẩm',
      subtitle: 'Catalog 2026 · Thông số chi tiết · Hướng dẫn chọn',
      download: 'Tải PDF',
      view: 'Xem Trực Tuyến',
      features: [
        'Thông số đầy đủ dòng QA',
        'Hướng dẫn chọn sản phẩm',
        'Đường cong hiệu suất',
        'Kích thước lắp đặt',
        'Trưng bày chứng nhận'
      ]
    },
    footer: {
      contact: 'Liên Hệ',
      company: 'Quanzhou Quanfeng Electric Co., Ltd.',
      address: 'Địa chỉ: Số 1 Đường Fengfa, Phường Beifeng, Quận Fengze, Quanzhou, Fujian, Trung Quốc',
      phone: 'ĐT: +86-595-xxxx-xxxx',
      fax: 'Fax: +86-595-xxxx-xxxx',
      email: 'Email: sales@quanfeng.com',
      website: 'Web: www.quanfeng.com',
      copyright: '© 2024 Quanfeng. Bảo lưu mọi quyền. | Đầu tư từ Hong Kong',
    },
  },
  th: {
    companyName: 'Quanfeng',
    nav: {
      company: 'บริษัท',
      products: 'ผลิตภัณฑ์',
      factory: 'โรงงาน',
      technology: 'การรับรอง',
      catalog: 'แคตตาล็อก',
    },
    distributor: {
      btnText: '🤝 รับสมัครตัวแทน',
      title: 'รับสมัครตัวแทนจำหน่ายระดับภูมิภาค',
      subtitle: 'ร่วมมือกับ Quanfeng สร้างอนาคตที่สดใส',
      description: 'เราขอเชิญชวนพันธมิตรทั่วโลกเข้าร่วมครอบครัว Quanfeng และร่วมกันพัฒนาตลาดพัดลมระบายความร้อน',
      benefits: [
        'สิทธิ์ตัวแทนจำหน่ายเฉพาะภูมิภาค',
        'นโยบายราคาที่แข่งขันได้',
        'การสนับสนุนด้านเทคนิคที่ครอบคลุม',
        'การฝึกอบรมการตลาดอย่างมืออาชีพ',
        'การจัดส่งสินค้าอย่างรวดเร็ว',
      ],
      contactTitle: 'ติดต่อเราทันที',
      email: 'market@quanfeng.com',
      phone: '+86-595-2248 1780',
      whatsapp: '+86-138-1234-5678',
      wechat: 'QuanFeng_Official',
      form: {
        name: 'ชื่อ-นามสกุล',
        company: 'ชื่อบริษัท',
        country: 'ประเทศ/ภูมิภาค',
        email: 'อีเมล',
        phone: 'เบอร์โทรศัพท์',
        message: 'ข้อความ',
        submit: 'ส่งใบสมัคร',
      },
    },
    hero: {
      title: 'ผู้ผลิตพัดลมแกนคุณภาพสูง',
      subtitle: 'การลงทุนจากฮ่องกง · 25 ปีประสบการณ์ · ส่งออก 60+ ประเทศ',
      cta: 'ดูตัวอย่างออนไลน์',
    },
    company: {
      title: 'เกี่ยวกับ Quanfeng',
      founded: 'ก่อตั้ง 1999',
      description: 'Quanzhou Quanfeng Electric Co., Ltd. เป็นองค์กรที่ได้รับการลงทุนจาก Hong Kong Quanfeng Industrial เราผลิตพัดลมแกน AC/DC, มอเตอร์ไมโคร และตาข่ายป้องกันแบรนด์ "Quanfeng" และ "Lixun"',
      description2: 'ผลิตภัณฑ์ใช้กันอย่างแพร่หลายในอุปกรณ์ควบคุมอัตโนมัติ, อุปกรณ์อิเล็กทรอนิกส์, อุปกรณ์ทางการแพทย์, คอมพิวเตอร์, แหล่งจ่ายไฟ, เครื่องเชื่อม, อุปกรณ์บรรจุภัณฑ์, การสื่อสารดาวเทียม, เครื่องจักร CNC, ระบบอัตโนมัติสำนักงาน และตู้จ่ายไฟ',
      philosophy: 'ปรัชญาการดำเนินธุรกิจ: นวัตกรรมต่อเนื่อง การดำเนินธุรกิจที่ยั่งยืน',
      spirit: 'จิตวิญญาณองค์กร: มีประสิทธิภาพ ทุ่มเท มุ่งมั่น สร้างสรรค์',
      honors: '🏆 เครื่องหมายการค้าที่มีชื่อเสียงของฝูเจี้ยน · องค์กรเทคโนโลยีขั้นสูง · 25 ปีประสบการณ์',
      footerHonors: '🏆 เครื่องหมายการค้าที่มีชื่อเสียงของฝูเจี้ยน · องค์กรเทคโนโลยีขั้นสูง',
      stats: [
        { value: '25+', label: 'ปีประสบการณ์' },
        { value: '500+', label: 'รุ่นผลิตภัณฑ์' },
        { value: '60+', label: 'ประเทศ' },
        { value: '10M+', label: 'กำลังผลิต/ปี' },
      ],
      history: [
        { year: '1999', event: 'ก่อตั้งบริษัท เริ่มผลิตพัดลมแกน' },
        { year: '2000', event: 'ได้รับการรับรองระบบคุณภาพ ISO9001' },
        { year: '2006', event: 'องค์กรเทคโนโลยีขั้นสูง ความก้าวหน้าทางวิทยาศาสตร์' },
        { year: '2009', event: 'แบรนด์ Quanfeng ได้รับเครื่องหมายการค้าที่มีชื่อเสียง' },
        { year: '2024', event: 'กำลังผลิตเกิน 10 ล้านหน่วย พัฒนาอย่างต่อเนื่อง' },
      ],
    },
    products: {
      title: 'ศูนย์ผลิตภัณฑ์',
      subtitle: 'ตัวถังอลูมิเนียมทรงกระบอก · ใบพัดพลาสติก PBT · กะทัดรัด · ไม่ต้องบำรุงรักษา',
      items: [
        { 
          name: 'พัดลมแกน AC', 
          desc: 'ซีรีส์ QA, แรงดันไฟ 220V, ตลับลูกปืน/ตลับลูกปืนแบบซับใน, เสียงเงียบ, เชื่อถือได้',
          specs: 'QA9225 / QA12025 / QA12038 / QA13538 / QA17250 / QA18060 / QA20060 / QA22090',
          image: '/images/quanfeng/products/qa12038.jpg'
        },
        { 
          name: 'พัดลมแกน DC', 
          desc: 'พัดลม DC 12V/24V/48V, ควบคุมความเร็วอัจฉริยะ, อายุการใช้งานยาวนาน, ประหยัดพลังงาน',
          specs: 'หลากหลายขนาด, รองรับ OEM',
          image: '/images/quanfeng/products/qa9225.jpg'
        },
        { 
          name: 'มอเตอร์ไมโคร', 
          desc: 'มอเตอร์ไมโครแบบแม่นยำ, ประสิทธิภาพสูง, ใช้ในอุปกรณ์อัตโนมัติ, อุปกรณ์ทางการแพทย์',
          specs: 'กำลัง 5W-100W',
          image: '/images/quanfeng/products/qa20060.jpg'
        },
        { 
          name: 'ตาข่ายป้องกัน', 
          desc: 'ตาข่ายป้องกันพัดลม, ปลอดภัย, ติดตั้งง่าย, หลายขนาด',
          specs: 'โลหะ/พลาสติก',
          image: '/images/quanfeng/products/qa22090.jpg'
        },
      ],
      viewCatalog: 'ดูตัวอย่างออนไลน์',
      productTable: {
        title: 'ข้อมูลจำเพาะทางเทคนิค',
        description: 'ข้อมูลจำเพาะพัดลมแกน AC ซีรีส์ QA',
        headers: ['รุ่น', 'แรงดัน(V)', 'ความถี่(Hz)', 'กระแส(A)', 'กำลัง(W)', 'รอบ(RPM)', 'อากาศ(CFM)', 'เสียง(dB)', 'ตลับลูกปืน', 'ขนาด(mm)'],
        products: [
          { model: 'QA9225', voltage: '220', frequency: '50/60', current: '0.08/0.07', power: '15/14', speed: '2500/2700', airflow: '35/40', noise: '32/35', bearing: 'ซับ/บอล', size: '92×92×25' },
          { model: 'QA12025', voltage: '220', frequency: '50/60', current: '0.10/0.09', power: '18/17', speed: '2300/2500', airflow: '55/62', noise: '34/37', bearing: 'ซับ/บอล', size: '120×120×25' },
          { model: 'QA12038', voltage: '220', frequency: '50/60', current: '0.12/0.11', power: '22/20', speed: '2400/2600', airflow: '65/72', noise: '36/39', bearing: 'ซับ/บอล', size: '120×120×38' },
          { model: 'QA13538', voltage: '220', frequency: '50/60', current: '0.14/0.13', power: '26/24', speed: '2200/2400', airflow: '85/95', noise: '38/41', bearing: 'ซับ/บอล', size: '135×135×38' },
          { model: 'QA15050', voltage: '220', frequency: '50/60', current: '0.18/0.16', power: '35/32', speed: '2100/2300', airflow: '110/125', noise: '40/43', bearing: 'ซับ/บอล', size: '150×150×50' },
          { model: 'QA17250', voltage: '220', frequency: '50/60', current: '0.20/0.18', power: '40/36', speed: '2000/2200', airflow: '140/160', noise: '42/45', bearing: 'ซับ/บอล', size: '172×172×50' },
          { model: 'QA18060', voltage: '220', frequency: '50/60', current: '0.25/0.22', power: '48/44', speed: '1900/2100', airflow: '165/185', noise: '44/47', bearing: 'ซับ/บอล', size: '180×180×60' },
          { model: 'QA20060', voltage: '220', frequency: '50/60', current: '0.30/0.26', power: '58/52', speed: '1800/2000', airflow: '200/230', noise: '46/49', bearing: 'ซับ/บอล', size: '200×200×60' },
          { model: 'QA22090', voltage: '220', frequency: '50/60', current: '0.38/0.34', power: '75/68', speed: '1700/1900', airflow: '260/300', noise: '48/51', bearing: 'ซับ/บอล', size: '220×220×90' },
          { model: 'QA25489', voltage: '220', frequency: '50/60', current: '0.45/0.40', power: '90/82', speed: '1600/1800', airflow: '340/380', noise: '50/53', bearing: 'ซับ/บอล', size: '254×254×89' },
        ],
        notes: [
          '1. ข้อมูลอ้างอิง ขึ้นอยู่กับสินค้าจริง',
          '2. แรงดัน: 110V/220V/380V รองรับแรงดันพิเศษ',
          '3. ตลับลูกปืน: B=ซับ S=บอล',
          '4. อุณหภูมิทำงาน: -20℃~+70℃',
          '5. ฉนวน: Class B (130℃) / Class F (155℃)',
        ]
      },
      applications: {
        title: 'ขอบเขตการใช้งาน',
        description: 'ผลิตภัณฑ์ Quanfeng ใช้กันอย่างแพร่หลายในหลายอุตสาหกรรม',
        items: [
          { name: 'ควบคุมอัตโนมัติ', desc: 'ตู้อินเวอร์เตอร์, ตู้ควบคุม, เลเซอร์, เครื่องเชื่อม, เครื่องพิมพ์ 3D' },
          { name: 'ระบายความร้อนอิเล็กทรอนิกส์', desc: 'PC/เซิร์ฟเวอร์, สถานี 5G, สวิตช์, เราเตอร์, ไฟ LED' },
          { name: 'อุปกรณ์แพทย์', desc: 'อุปกรณ์การแพทย์, CT, MRI, ระบบห้องผ่าตัด' },
          { name: 'เซิร์ฟเวอร์', desc: 'ศูนย์ข้อมูล, ตู้เครือข่าย, อุปกรณ์โทรคมนาคม' },
          { name: 'แหล่งจ่ายไฟ', desc: 'ตู้จ่ายไฟ, หม้อแปลง, เครื่องเชื่อม, UPS, สถานีชาร์จ' },
          { name: 'เครื่อง CNC', desc: 'เครื่อง CNC, อัตโนมัติสำนักงาน, ตู้อุตสาหกรรม' },
        ]
      }
    },
    factory: {
      title: 'กำลังการผลิต',
      subtitle: 'ฐานการผลิตทันสมัย · กำลังผลิต 10+ ล้านต่อปี · ห่วงโซ่อุปทานสมบูรณ์',
      features: [
        { title: 'สายการผลิตทันสมัย', desc: 'สายการผลิตอัตโนมัติระดับสากล, ควบคุมตั้งแต่แม่พิมพ์ถึงประกอบ', icon: '⚙️' },
        { title: 'ห่วงโซ่อุปทาน', desc: 'โรงงานแม่พิมพ์, ฉีดพลาสติก, โลหะ, หล่ออลูมิเนียมของตัวเอง', icon: '🏭' },
        { title: 'ควบคุมคุณภาพ', desc: 'รับรอง ISO9001, ตรวจสอบครอบคลุม, อัตราผ่าน 100%', icon: '✅' },
        { title: 'ส่งมอบเร็ว', desc: 'สต็อกวัตถุดิบเพียงพอ, กำลังผลิต 1M/เดือน, ส่ง 7 วัน', icon: '🚚' },
      ],
    },
    technology: {
      title: 'การรับรอง',
      subtitle: 'การรับรองระหว่างประเทศ · เกียรติบัตรระดับชาติ · คุณภาพที่เชื่อถือได้',
      certifications: {
        title: 'การรับรองระหว่างประเทศ',
        items: [
          { name: 'ISO9001', desc: 'ระบบบริหารคุณภาพ' },
          { name: 'CCC', desc: 'การรับรองบังคับของจีน' },
          { name: 'UL', desc: 'การรับรองความปลอดภัยสหรัฐ' },
          { name: 'CUL', desc: 'การรับรองความปลอดภัยแคนาดา' },
          { name: 'CE', desc: 'การรับรองความปลอดภัย EU' },
          { name: 'RoHS', desc: 'การรับรองสิ่งแวดล้อม' },
        ]
      },
      ipr: {
        title: 'ทรัพย์สินทางปัญญา',
        description: 'บริษัทให้ความสำคัญกับนวัตกรรมเทคโนโลยีและการคุ้มครองทรัพย์สินทางปัญญา ได้รับสิทธิบัตรและเครื่องหมายการค้าหลายรายการ',
        patents: '34 สิทธิบัตรภายในประเทศ',
        trademarks: '10 เครื่องหมายการค้าจดทะเบียน',
        certificates: '19 ใบรับรองคุณสมบัติ'
      },
      honors: {
        title: 'เกียรติบัตรองค์กร',
        items: [
          'หน่วยผ่านการตรวจสอบกำกับดูแล',
          'หน่วยคุณภาพยอดเยี่ยม',
          '10 อันดับแบรนด์ที่เชื่อถือได้',
          '10 อันดับแบรนด์ที่มีชื่อเสียง',
          'รับรองผลิตภัณฑ์ใหม่',
          'รางวัลความสำเร็จทางวิทยาศาสตร์'
        ]
      },
      features: [
        { title: 'ความสามารถ R&D', desc: 'ทีม R&D มืออาชีพ, สนับสนุนการพัฒนาที่กำหนดเอง' },
        { title: 'อุปกรณ์ทดสอบ', desc: 'ห้องปฏิบัติการครบวงจร, ทดสอบการไหล, เสียง, อุณหภูมิ' },
        { title: 'OEM/ODM', desc: 'สนับสนุน OEM, ปรับแต่งรูปลักษณ์, ข้อมูลจำเพาะ, บรรจุภัณฑ์' },
        { title: 'บริการทั่วโลก', desc: 'ส่งออก 60+ ประเทศ, สนับสนุนทางเทคนิค' },
      ],
    },
    catalog: {
      title: 'แคตตาล็อกผลิตภัณฑ์',
      subtitle: 'แคตตาล็อก 2026 · ข้อมูลจำเพาะโดยละเอียด · คู่มือการเลือก',
      download: 'ดาวน์โหลด PDF',
      view: 'ดูออนไลน์',
      features: [
        'ข้อมูลจำเพาะซีรีส์ QA ครบถ้วน',
        'คู่มือการเลือกผลิตภัณฑ์',
        'เส้นโค้งประสิทธิภาพ',
        'ขนาดการติดตั้ง',
        'แสดงการรับรอง'
      ]
    },
    footer: {
      contact: 'ติดต่อเรา',
      company: 'Quanzhou Quanfeng Electric Co., Ltd.',
      address: 'ที่อยู่: เลขที่ 1 ถนน Fengfa, เขต Beifeng, Fengze, Quanzhou, Fujian, จีน',
      phone: 'โทร: +86-595-xxxx-xxxx',
      fax: 'แฟกซ์: +86-595-xxxx-xxxx',
      email: 'Email: sales@quanfeng.com',
      website: 'เว็บ: www.quanfeng.com',
      copyright: '© 2024 Quanfeng สงวนลิขสิทธิ์ | การลงทุนจากฮ่องกง',
    },
  },
  ms: {
    companyName: 'Quanfeng',
    nav: {
      company: 'Syarikat',
      products: 'Produk',
      factory: 'Kilang',
      technology: 'Pensijilan',
      catalog: 'Katalog',
    },
    distributor: {
      btnText: '🤝 Pengambilan Distributor',
      title: 'Pengambilan Distributor Serantau',
      subtitle: 'Bekerjasama dengan Quanfeng, Cipta Masa Depan Gemilang',
      description: 'Kami mengalu-alukan rakan kongsi global untuk menyertai keluarga Quanfeng dan meneroka pasaran kipas penyejuk bersama.',
      benefits: [
        'Hak pengedaran eksklusif serantau',
        'Dasar harga yang kompetitif',
        'Sokongan teknikal menyeluruh',
        'Latihan pemasaran profesional',
        'Penghantaran produk yang pantas',
      ],
      contactTitle: 'Hubungi Kami Sekarang',
      email: 'market@quanfeng.com',
      phone: '+86-595-2248 1780',
      whatsapp: '+86-138-1234-5678',
      wechat: 'QuanFeng_Official',
      form: {
        name: 'Nama Penuh',
        company: 'Nama Syarikat',
        country: 'Negara/Wilayah',
        email: 'Alamat E-mel',
        phone: 'Nombor Telefon',
        message: 'Mesej',
        submit: 'Hantar Permohonan',
      },
    },
    hero: {
      title: 'Pengeluar Kipas Paksi Profesional',
      subtitle: 'Pelaburan Hong Kong · 25 tahun kepakaran · Eksport 60+ negara',
      cta: 'Pratonton Dalam Talian',
    },
    company: {
      title: 'Tentang Quanfeng',
      founded: 'Ditubuhkan 1999',
      description: 'Quanzhou Quanfeng Electric Co., Ltd. adalah syarikat yang dilaburkan oleh Hong Kong Quanfeng Industrial. Kami menghasilkan kipas paksi AC/DC, motor mikro dan rangkaian perlindungan jenama "Quanfeng" dan "Lixun".',
      description2: 'Produk digunakan secara meluas dalam peranti kawalan automatik, peralatan elektronik, peralatan perubatan, komputer, bekalan kuasa, mesin kimpalan, peralatan pembungkusan, komunikasi satelit, mesin CNC, automasi pejabat dan papan suis.',
      philosophy: 'Falsafah Perniagaan: Inovasi Berterusan, Operasi Mampan',
      spirit: 'Semangat Syarikat: Efisien, Berdedikasi, Gigih, Inovatif',
      honors: '🏆 Tanda Dagangan Terkenal Fujian · Syarikat Teknologi Tinggi · 25 Tahun Pengalaman',
      footerHonors: '🏆 Tanda Dagangan Terkenal Fujian · Syarikat Teknologi Tinggi',
      stats: [
        { value: '25+', label: 'Tahun Pengalaman' },
        { value: '500+', label: 'Model Produk' },
        { value: '60+', label: 'Negara' },
        { value: '10M+', label: 'Output Tahunan' },
      ],
      history: [
        { year: '1999', event: 'Penubuhan syarikat, mula menghasilkan kipas paksi' },
        { year: '2000', event: 'Mendapat pensijilan sistem kualiti ISO9001' },
        { year: '2006', event: 'Syarikat teknologi tinggi, kecemerlangan sains' },
        { year: '2009', event: 'Jenama Quanfeng dinobatkan tanda dagangan terkenal' },
        { year: '2024', event: 'Output melebihi 10 juta unit, inovasi berterusan' },
      ],
    },
    products: {
      title: 'Pusat Produk',
      subtitle: 'Casing aluminium silinder · Bilah plastik PBT · Padat · Tanpa penyelenggaraan',
      items: [
        { 
          name: 'Kipak Paksi AC', 
          desc: 'Siri QA, voltan 220V, galas bebola/galas lengan, bunyi rendah, boleh dipercayai',
          specs: 'QA9225 / QA12025 / QA12038 / QA13538 / QA17250 / QA18060 / QA20060 / QA22090',
          image: '/images/quanfeng/products/qa12038.jpg'
        },
        { 
          name: 'Kipak Paksi DC', 
          desc: 'Kipas DC 12V/24V/48V, kawalan kelajuan pintar, hayat panjang, penjimatan tenaga',
          specs: 'Pelbagai spesifikasi, sokongan OEM',
          image: '/images/quanfeng/products/qa9225.jpg'
        },
        { 
          name: 'Motor Mikro', 
          desc: 'Motor mikro ketepatan, kecekapan tinggi, digunakan dalam peralatan automatik, perubatan',
          specs: 'Kuasa 5W-100W',
          image: '/images/quanfeng/products/qa20060.jpg'
        },
        { 
          name: 'Rangkaian Perlindungan', 
          desc: 'Rangkaian perlindungan kipas, selamat, pemasangan mudah, pelbagai saiz',
          specs: 'Logam/Plastik',
          image: '/images/quanfeng/products/qa22090.jpg'
        },
      ],
      viewCatalog: 'Pratonton Dalam Talian',
      productTable: {
        title: 'Spesifikasi Teknikal',
        description: 'Spesifikasi kipas paksi AC Siri QA Quanfeng',
        headers: ['Model', 'Voltan(V)', 'Frekuensi(Hz)', 'Arus(A)', 'Kuasa(W)', 'Kelajuan(RPM)', 'Aliran(CFM)', 'Bunyi(dB)', 'Galas', 'Saiz(mm)'],
        products: [
          { model: 'QA9225', voltage: '220', frequency: '50/60', current: '0.08/0.07', power: '15/14', speed: '2500/2700', airflow: '35/40', noise: '32/35', bearing: 'Lengan/Bola', size: '92×92×25' },
          { model: 'QA12025', voltage: '220', frequency: '50/60', current: '0.10/0.09', power: '18/17', speed: '2300/2500', airflow: '55/62', noise: '34/37', bearing: 'Lengan/Bola', size: '120×120×25' },
          { model: 'QA12038', voltage: '220', frequency: '50/60', current: '0.12/0.11', power: '22/20', speed: '2400/2600', airflow: '65/72', noise: '36/39', bearing: 'Lengan/Bola', size: '120×120×38' },
          { model: 'QA13538', voltage: '220', frequency: '50/60', current: '0.14/0.13', power: '26/24', speed: '2200/2400', airflow: '85/95', noise: '38/41', bearing: 'Lengan/Bola', size: '135×135×38' },
          { model: 'QA15050', voltage: '220', frequency: '50/60', current: '0.18/0.16', power: '35/32', speed: '2100/2300', airflow: '110/125', noise: '40/43', bearing: 'Lengan/Bola', size: '150×150×50' },
          { model: 'QA17250', voltage: '220', frequency: '50/60', current: '0.20/0.18', power: '40/36', speed: '2000/2200', airflow: '140/160', noise: '42/45', bearing: 'Lengan/Bola', size: '172×172×50' },
          { model: 'QA18060', voltage: '220', frequency: '50/60', current: '0.25/0.22', power: '48/44', speed: '1900/2100', airflow: '165/185', noise: '44/47', bearing: 'Lengan/Bola', size: '180×180×60' },
          { model: 'QA20060', voltage: '220', frequency: '50/60', current: '0.30/0.26', power: '58/52', speed: '1800/2000', airflow: '200/230', noise: '46/49', bearing: 'Lengan/Bola', size: '200×200×60' },
          { model: 'QA22090', voltage: '220', frequency: '50/60', current: '0.38/0.34', power: '75/68', speed: '1700/1900', airflow: '260/300', noise: '48/51', bearing: 'Lengan/Bola', size: '220×220×90' },
          { model: 'QA25489', voltage: '220', frequency: '50/60', current: '0.45/0.40', power: '90/82', speed: '1600/1800', airflow: '340/380', noise: '50/53', bearing: 'Lengan/Bola', size: '254×254×89' },
        ],
        notes: [
          '1. Parameter rujukan, tertakluk kepada produk sebenar',
          '2. Voltan: 110V/220V/380V, voltan khas tersedia',
          '3. Galas: B=Lengan S=Bola',
          '4. Suhu operasi: -20℃~+70℃',
          '5. Penebat: Class B (130℃) / Class F (155℃)',
        ]
      },
      applications: {
        title: 'Skop Aplikasi',
        description: 'Produk Quanfeng digunakan secara meluas dalam pelbagai industri',
        items: [
          { name: 'Kawalan Automatik', desc: 'Kabinet penyongsang, kabinet kawalan, laser, kimpalan, pencetak 3D' },
          { name: 'Penyejukan Elektronik', desc: 'PC/pelayan, stesen 5G, suis, penghala, lampu LED' },
          { name: 'Peralatan Perubatan', desc: 'Peralatan perubatan, CT, MRI, sistem bilik bedah' },
          { name: 'Pelayan', desc: 'Pusat data, kabinet rangkaian, telekomunikasi' },
          { name: 'Bekalan Kuasa', desc: 'Papan suis, transformer, kimpalan, UPS, stesen pengecasan' },
          { name: 'Mesin CNC', desc: 'Mesin CNC, automasi pejabat, kabinet perindustrian' },
        ]
      }
    },
    factory: {
      title: 'Kekuatan Kilang',
      subtitle: 'Tapak pengeluaran moden · Kapasiti 10+ juta/tahun · Rantaian bekalan lengkap',
      features: [
        { title: 'Talian Pengeluaran Moden', desc: 'Talian pengeluaran automatik antarabangsa, kawalan dari acuan ke pemasangan', icon: '⚙️' },
        { title: 'Rantaian Bekalan', desc: 'Kilang acuan, suntikan, logam, tuangan aluminium sendiri', icon: '🏭' },
        { title: 'Kawalan Kualiti', desc: 'Bersijil ISO9001, pemeriksaan menyeluruh, kadar lulus 100%', icon: '✅' },
        { title: 'Penghantaran Pantas', desc: 'Stok bahan mentah mencukupi, kapasiti 1M/bulan, penghantaran 7 hari', icon: '🚚' },
      ],
    },
    technology: {
      title: 'Pensijilan',
      subtitle: 'Pensijilan antarabangsa · Anugerah kebangsaan · Kualiti dipercayai',
      certifications: {
        title: 'Pensijilan Antarabangsa',
        items: [
          { name: 'ISO9001', desc: 'Sistem pengurusan kualiti' },
          { name: 'CCC', desc: 'Pensijilan wajib China' },
          { name: 'UL', desc: 'Pensijilan keselamatan AS' },
          { name: 'CUL', desc: 'Pensijilan keselamatan Kanada' },
          { name: 'CE', desc: 'Pensijilan keselamatan EU' },
          { name: 'RoHS', desc: 'Pensijilan alam sekitar' },
        ]
      },
      ipr: {
        title: 'Harta Intelek',
        description: 'Syarikat memberi penekanan kepada inovasi teknologi dan perlindungan hak harta intelek, memperoleh pelbagai paten dan tanda dagangan',
        patents: '34 Paten Domestik',
        trademarks: '10 Tanda Dagangan Berdaftar',
        certificates: '19 Sijil Kelayakan'
      },
      honors: {
        title: 'Anugerah Syarikat',
        items: [
          'Unit lulus pemeriksaan penyeliaan',
          'Unit kualiti cemerlang',
          '10 jenama paling dipercayai',
          '10 jenama terkenal',
          'Pengesahan produk baharu',
          'Anugerah pencapaian sains'
        ]
      },
      features: [
        { title: 'Keupayaan R&D', desc: 'Pasukan R&D profesional, sokongan pembangunan tersuai' },
        { title: 'Peralatan Ujian', desc: 'Makmal lengkap, ujian aliran, bunyi, suhu' },
        { title: 'OEM/ODM', desc: 'Sokongan OEM, penyesuaian rupa, spesifikasi, pembungkusan' },
        { title: 'Perkhidmatan Global', desc: 'Eksport 60+ negara, sokongan teknikal' },
      ],
    },
    catalog: {
      title: 'Katalog Produk',
      subtitle: 'Katalog 2026 · Spesifikasi terperinci · Panduan pemilihan',
      download: 'Muat Turun PDF',
      view: 'Lihat Dalam Talian',
      features: [
        'Spesifikasi lengkap siri QA',
        'Panduan pemilihan produk',
        'Lengkung prestasi',
        'Dimensi pemasangan',
        'Paparan pensijilan'
      ]
    },
    footer: {
      contact: 'Hubungi Kami',
      company: 'Quanzhou Quanfeng Electric Co., Ltd.',
      address: 'Alamat: No.1 Jalan Fengfa, Beifeng, Fengze, Quanzhou, Fujian, China',
      phone: 'Tel: +86-595-xxxx-xxxx',
      fax: 'Fax: +86-595-xxxx-xxxx',
      email: 'Email: sales@quanfeng.com',
      website: 'Web: www.quanfeng.com',
      copyright: '© 2024 Quanfeng. Hak cipta terpelihara. | Pelaburan Hong Kong',
    },
  },
  tr: {
    companyName: 'Quanfeng',
    nav: {
      company: 'Şirket',
      products: 'Ürünler',
      factory: 'Fabrika',
      technology: 'Sertifikalar',
      catalog: 'Katalog',
    },
    distributor: {
      btnText: '🤝 Distribütör Alımı',
      title: 'Bölgesel Distribütör Alımı',
      subtitle: 'Quanfeng ile Ortaklık, Daha Parlak Bir Gelecek',
      description: 'Küresel ortakları Quanfeng ailesine katılmaya ve soğutma fanı pazarını birlikte keşfetmeye davet ediyoruz.',
      benefits: [
        'Özel bölgesel dağıtım hakları',
        'Rekabetçi fiyatlandırma politikası',
        'Kapsamlı teknik destek',
        'Profesyonel pazarlama eğitimi',
        'Hızlı ürün teslimatı',
      ],
      contactTitle: 'Bize Hemen Ulaşın',
      email: 'market@quanfeng.com',
      phone: '+86-595-2248 1780',
      whatsapp: '+86-138-1234-5678',
      wechat: 'QuanFeng_Official',
      form: {
        name: 'Adınız Soyadınız',
        company: 'Şirket Adı',
        country: 'Ülke/Bölge',
        email: 'E-posta Adresi',
        phone: 'Telefon Numarası',
        message: 'Mesajınız',
        submit: 'Başvuru Gönder',
      },
    },
    hero: {
      title: 'Profesyonel Eksenel Fan Üreticisi',
      subtitle: 'Hong Kong Yatırımı · 25 yıllık uzmanlık · 60+ ülkeye ihracat',
      cta: 'Çevrimiçi Önizleme',
    },
    company: {
      title: 'Quanfeng Hakkında',
      founded: '1999 Kuruluş',
      description: 'Quanzhou Quanfeng Electric Co., Ltd., Hong Kong Quanfeng Industrial tarafından yatırım yapılan bir şirkettir. AC/DC eksenel fanlar, mikro motorlar ve koruyucu ağlar üretiyoruz.',
      description2: 'Ürünler otomatik kontrol cihazlarında, elektronik ekipmanlarda, tıbbi cihazlarda, bilgisayarlarda, güç kaynaklarında, kaynak makinelerinde, ambalaj ekipmanlarında, uydu iletişiminde, CNC makinelerinde, ofis otomasyonunda ve dağıtım panolarında kullanılır.',
      philosophy: 'İşletme Felsefesi: Sürekli İnovasyon, Sürdürülebilir İşletme',
      spirit: 'Kurumsal Ruh: Verimli, Özverili, Çalışkan, Yenilikçi',
      honors: '🏆 Fujian Ünlü Ticari Marka · Yüksek Teknoloji Şirketi · 25 Yıl Deneyim',
      footerHonors: '🏆 Fujian Ünlü Ticari Marka · Yüksek Teknoloji Şirketi',
      stats: [
        { value: '25+', label: 'Yıl Deneyim' },
        { value: '500+', label: 'Ürün Modeli' },
        { value: '60+', label: 'Ülke' },
        { value: '10M+', label: 'Yıllık Üretim' },
      ],
      history: [
        { year: '1999', event: 'Şirket kuruldu, eksenel fan üretimine başladı' },
        { year: '2000', event: 'ISO9001 kalite sistem sertifikası aldı' },
        { year: '2006', event: 'Yüksek teknoloji şirketi, bilimsel mükemmellik' },
        { year: '2009', event: 'Quanfeng markası ünlü ticari marka seçildi' },
        { year: '2024', event: 'Yıllık üretim 10 milyonu aştı, sürekli yenilik' },
      ],
    },
    products: {
      title: 'Ürün Merkezi',
      subtitle: 'Silindirik alüminyum gövde · PBT plastik kanatlar · Kompakt · Bakımsız',
      items: [
        { 
          name: 'AC Eksenel Fanlar', 
          desc: 'QA serisi, 220V, bilyalı/kollu yataklar, düşük gürültü, güvenilir',
          specs: 'QA9225 / QA12025 / QA12038 / QA13538 / QA17250 / QA18060 / QA20060 / QA22090',
          image: '/images/quanfeng/products/qa12038.jpg'
        },
        { 
          name: 'DC Eksenel Fanlar', 
          desc: 'DC fanlar 12V/24V/48V, akıllı hız kontrolü, uzun ömür, enerji tasarrufu',
          specs: 'Çeşitli özellikler, OEM desteği',
          image: '/images/quanfeng/products/qa9225.jpg'
        },
        { 
          name: 'Mikro Motorlar', 
          desc: 'Hassas mikro motorlar, yüksek verim, otomasyon ve tıbbi cihazlarda kullanılır',
          specs: 'Güç aralığı 5W-100W',
          image: '/images/quanfeng/products/qa20060.jpg'
        },
        { 
          name: 'Koruyucu Ağlar', 
          desc: 'Fan koruyucu ağları, güvenli, kolay montaj, çeşitli boyutlar',
          specs: 'Metal/Plastik',
          image: '/images/quanfeng/products/qa22090.jpg'
        },
      ],
      viewCatalog: 'Çevrimiçi Önizleme',
      productTable: {
        title: 'Teknik Özellikler',
        description: 'Quanfeng QA Serisi AC Eksenel Fan Teknik Verileri',
        headers: ['Model', 'Voltaj(V)', 'Frekans(Hz)', 'Akım(A)', 'Güç(W)', 'Devir(RPM)', 'Hava Akışı(CFM)', 'Gürültü(dB)', 'Rulman', 'Boyut(mm)'],
        products: [
          { model: 'QA9225', voltage: '220', frequency: '50/60', current: '0.08/0.07', power: '15/14', speed: '2500/2700', airflow: '35/40', noise: '32/35', bearing: 'Burç/Bilya', size: '92×92×25' },
          { model: 'QA12025', voltage: '220', frequency: '50/60', current: '0.10/0.09', power: '18/17', speed: '2300/2500', airflow: '55/62', noise: '34/37', bearing: 'Burç/Bilya', size: '120×120×25' },
          { model: 'QA12038', voltage: '220', frequency: '50/60', current: '0.12/0.11', power: '22/20', speed: '2400/2600', airflow: '65/72', noise: '36/39', bearing: 'Burç/Bilya', size: '120×120×38' },
          { model: 'QA13538', voltage: '220', frequency: '50/60', current: '0.14/0.13', power: '26/24', speed: '2200/2400', airflow: '85/95', noise: '38/41', bearing: 'Burç/Bilya', size: '135×135×38' },
          { model: 'QA15050', voltage: '220', frequency: '50/60', current: '0.18/0.16', power: '35/32', speed: '2100/2300', airflow: '110/125', noise: '40/43', bearing: 'Burç/Bilya', size: '150×150×50' },
          { model: 'QA17250', voltage: '220', frequency: '50/60', current: '0.20/0.18', power: '40/36', speed: '2000/2200', airflow: '140/160', noise: '42/45', bearing: 'Burç/Bilya', size: '172×172×50' },
          { model: 'QA18060', voltage: '220', frequency: '50/60', current: '0.25/0.22', power: '48/44', speed: '1900/2100', airflow: '165/185', noise: '44/47', bearing: 'Burç/Bilya', size: '180×180×60' },
          { model: 'QA20060', voltage: '220', frequency: '50/60', current: '0.30/0.26', power: '58/52', speed: '1800/2000', airflow: '200/230', noise: '46/49', bearing: 'Burç/Bilya', size: '200×200×60' },
          { model: 'QA22090', voltage: '220', frequency: '50/60', current: '0.38/0.34', power: '75/68', speed: '1700/1900', airflow: '260/300', noise: '48/51', bearing: 'Burç/Bilya', size: '220×220×90' },
          { model: 'QA25489', voltage: '220', frequency: '50/60', current: '0.45/0.40', power: '90/82', speed: '1600/1800', airflow: '340/380', noise: '50/53', bearing: 'Burç/Bilya', size: '254×254×89' },
        ],
        notes: [
          '1. Parametreler referans değerlerdir, gerçek ürüne göre değişir',
          '2. Voltaj seçenekleri: 110V/220V/380V, özel voltaj mevcut',
          '3. Rulman: B=Burç S=Bilya',
          '4. Çalışma sıcaklığı: -20℃~+70℃',
          '5. İzolasyon: Class B (130℃) / Class F (155℃)',
        ]
      },
      applications: {
        title: 'Uygulama Alanları',
        description: 'Quanfeng ürünleri çeşitli endüstrilerde yaygın olarak kullanılmaktadır',
        items: [
          { name: 'Otomatik Kontrol', desc: 'İnvertör panoları, kontrol panoları, lazer, kaynak, 3D yazıcı' },
          { name: 'Elektronik Soğutma', desc: 'PC/sunucular, 5G istasyonları, anahtarlar, yönlendiriciler, LED aydınlatma' },
          { name: 'Tıbbi Ekipman', desc: 'Tıbbi cihazlar, CT, MRI, ameliyathane sistemleri' },
          { name: 'Sunucular', desc: 'Veri merkezleri, ağ dolapları, telekomünikasyon' },
          { name: 'Güç Kaynakları', desc: 'Dağıtım panoları, transformatörler, kaynak makineleri, UPS, şarj istasyonları' },
          { name: 'CNC Makineleri', desc: 'CNC makineleri, ofis otomasyonu, endüstriyel panolar' },
        ]
      }
    },
    factory: {
      title: 'Fabrika Gücü',
      subtitle: 'Modern üretim üssü · Yıllık kapasite 10+ milyon · Tam tedarik zinciri',
      features: [
        { title: 'Modern Üretim', desc: 'Uluslararası otomatik hatlar, kalıptan montaja tam kontrol', icon: '⚙️' },
        { title: 'Tedarik Zinciri', desc: 'Kendi kalıp, enjeksiyon, metal ve döküm fabrikalarımız', icon: '🏭' },
        { title: 'Sıkı Kalite Kontrol', desc: 'ISO9001 sertifikalı, tam süreç denetimi, %100 geçiş oranı', icon: '✅' },
        { title: 'Hızlı Teslimat', desc: 'Yeterli hammadde stoğu, aylık 1M kapasite, 7 günlük teslimat', icon: '🚚' },
      ],
    },
    technology: {
      title: 'Sertifikalar',
      subtitle: 'Uluslararası Sertifikalar · Ulusal Ödüller · Güvenilir Kalite',
      certifications: {
        title: 'Uluslararası Sertifikalar',
        items: [
          { name: 'ISO9001', desc: 'Kalite yönetim sistemi' },
          { name: 'CCC', desc: 'Çin zorunlu sertifikası' },
          { name: 'UL', desc: 'ABD güvenlik sertifikası' },
          { name: 'CUL', desc: 'Kanada güvenlik sertifikası' },
          { name: 'CE', desc: 'AB güvenlik sertifikası' },
          { name: 'RoHS', desc: 'Çevre sertifikası' },
        ]
      },
      ipr: {
        title: 'Fikri Mülkiyet',
        description: 'Şirket, teknolojik yenilik ve fikri mülkiyet haklarının korunmasına büyük önem vermektedir. Çok sayıda patent ve ticari marka elde edilmiştir',
        patents: '34 Yerli Patent',
        trademarks: '10 Tescilli Ticari Marka',
        certificates: '19 Yeterlilik Sertifikası'
      },
      honors: {
        title: 'Kurumsal Ödüller',
        items: [
          'Denetim muayenesini geçen birim',
          'Mükemmel kalite birimi',
          'En güvenilir 10 marka',
          'En ünlü 10 marka',
          'Yeni ürün onayı',
          'Bilimsel başarı ödülü'
        ]
      },
      features: [
        { title: 'Ar-Ge Yeteneği', desc: 'Profesyonel Ar-Ge ekibi, özel geliştirme desteği' },
        { title: 'Test Ekipmanları', desc: 'Tam donanımlı laboratuvar, akış, gürültü, sıcaklık testi' },
        { title: 'OEM/ODM', desc: 'OEM desteği, görünüm, özellikler, ambalaj özelleştirme' },
        { title: 'Küresel Hizmet', desc: '60+ ülkeye ihracat, teknik destek' },
      ],
    },
    catalog: {
      title: 'Ürün Kataloğu',
      subtitle: '2026 Kataloğu · Detaylı özellikler · Seçim kılavuzu',
      download: 'PDF İndir',
      view: 'Çevrimiçi Görüntüle',
      features: [
        'Tam QA serisi özellikleri',
        'Ürün seçim kılavuzu',
        'Performans eğrileri',
        'Montaj boyutları',
        'Sertifika görüntüleme'
      ]
    },
    footer: {
      contact: 'Bize Ulaşın',
      company: 'Quanzhou Quanfeng Electric Co., Ltd.',
      address: 'Adres: No.1 Fengfa Caddesi, Beifeng, Fengze, Quanzhou, Fujian, Çin',
      phone: 'Tel: +86-595-xxxx-xxxx',
      fax: 'Fax: +86-595-xxxx-xxxx',
      email: 'Email: sales@quanfeng.com',
      website: 'Web: www.quanfeng.com',
      copyright: '© 2024 Quanfeng. Tüm hakları saklıdır. | Hong Kong yatırımı',
    },
  },
  ar: {
    companyName: 'تشوان فنغ',
    nav: {
      company: 'الشركة',
      products: 'المنتجات',
      factory: 'المصنع',
      technology: 'الشهادات',
      catalog: 'الكتالوج',
    },
    distributor: {
      btnText: '🤝 توزيع',
      title: 'توزيع المنتجات',
      subtitle: 'تعاون مع تشوان فنغ لتحقيق نجاح أكبر',
      description: 'نحن نبحث عن شركاء موثوقين في جميع أنحاء العالم لتوسيع نطاق توزيع منتجاتنا.',
      benefits: [
        'حصرية التوزيع في المنطقة',
        'أسعار تنافسية',
        'دعم فني شامل',
        'تدريب تسويقي احترافي',
        'توصيل سريع للمنتجات',
      ],
      contactTitle: 'اتصل بنا الآن',
      email: 'market@quanfeng.com',
      phone: '+86-595-2248 1780',
      whatsapp: '+86-138-1234-5678',
      wechat: 'QuanFeng_Official',
      form: {
        name: 'الاسم',
        company: 'اسم الشركة',
        country: 'الدولة',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'رسالتك',
        submit: 'إرسال الطلب',
      },
    },
    hero: {
      title: 'مصنع محترف لمرواح المحور',
      subtitle: 'استثمار هونغ كونغ · 25 عاماً من الخبرة · التصدير إلى 60+ دولة',
      cta: 'معاينة عبر الإنترنت',
    },
    company: {
      title: 'عن تشوان فنغ',
      founded: 'تأسست 1999',
      description: 'شركة تشوانتشو تشوان فنغ الكهربائية المحدودة هي شركة استثمرتها تشوان فنغ الصناعية في هونغ كونغ. ننتج مرواح محورية AC/DC والمحركات الصغيرة والشبكات الواقية بعلامات "تشوان فنغ" و"ليكسون" التجارية.',
      description2: 'تستخدم المنتجات على نطاق واسع في أجهزة التحكم الآلي والمعدات الإلكترونية والأجهزة الطبية وأجهزة الكمبيوتر ومصادر الطاقة وآلات اللحام ومعدات التعبئة والاتصالات عبر الأقمار الصناعية وآلات CNC وأتمتة المكاتب ولوحات التوزيع.',
      philosophy: 'فلسفة العمل: الابتكار المستمر، العمل المستدام',
      spirit: 'روح المؤسسة: الكفاءة، الالتزام، المثابرة، الابتكار',
      honors: '🏆 العلامة التجارية الشهيرة في فوجيان · شركة التكنولوجيا العالية · 25 عاماً من الخبرة',
      footerHonors: '🏆 العلامة التجارية الشهيرة في فوجيان · شركة التكنولوجيا العالية',
      stats: [
        { value: '25+', label: 'سنوات الخبرة' },
        { value: '500+', label: 'نماذج المنتجات' },
        { value: '60+', label: 'دولة' },
        { value: '10M+', label: 'الإنتاج السنوي' },
      ],
      history: [
        { year: '1999', event: 'تأسيس الشركة وبدء إنتاج المراوح المحورية' },
        { year: '2000', event: 'الحصول على شهادة نظام الجودة ISO9001' },
        { year: '2006', event: 'شركة التكنولوجيا العالية، التقدم العلمي' },
        { year: '2009', event: 'علامة تشوان فنغ التجارية الشهيرة' },
        { year: '2024', event: 'إنتاج سنوي يتجاوز 10 مليون، الابتكار المستمر' },
      ],
    },
    products: {
      title: 'مركز المنتجات',
      subtitle: 'هيكل ألومنيوم أسطواني · شفرات بلاستيكية PBT · مدمجة · صيانة مجانية',
      items: [
        { 
          name: 'مراوح محورية AC', 
          desc: 'سلسلة QA، جهد 220V، محامل كروية/كمية، ضوضاء منخفضة، موثوقة',
          specs: 'QA9225 / QA12025 / QA12038 / QA13538 / QA17250 / QA18060 / QA20060 / QA22090',
          image: '/images/quanfeng/products/qa12038.jpg'
        },
        { 
          name: 'مراوح محورية DC', 
          desc: 'مراوح DC 12V/24V/48V، تحكم ذكي في السرعة، عمر طويل، توفير الطاقة',
          specs: 'مواصفات متعددة، دعم OEM',
          image: '/images/quanfeng/products/qa9225.jpg'
        },
        { 
          name: 'المحركات الدقيقة', 
          desc: 'محركات دقيقة عالية الكفاءة تستخدم في المعدات الآلية والطبية',
          specs: 'نطاق القدرة 5W-100W',
          image: '/images/quanfeng/products/qa20060.jpg'
        },
        { 
          name: 'شبكات الحماية', 
          desc: 'شبكات حماية المراوح، آمنة، سهلة التركيب، أحجام متعددة',
          specs: 'معدن/بلاستيك',
          image: '/images/quanfeng/products/qa22090.jpg'
        },
      ],
      viewCatalog: 'معاينة عبر الإنترنت',
      productTable: {
        title: 'المواصفات الفنية',
        description: 'المواصفات الفنية لمرواح المحور AC سلسلة QA',
        headers: ['الموديل', 'الجهد(V)', 'التردد(Hz)', 'التيار(A)', 'القدرة(W)', 'السرعة(RPM)', 'التدفق(CFM)', 'الضوضاء(dB)', 'المحمل', 'الحجم(mm)'],
        products: [
          { model: 'QA9225', voltage: '220', frequency: '50/60', current: '0.08/0.07', power: '15/14', speed: '2500/2700', airflow: '35/40', noise: '32/35', bearing: 'كمي/كروي', size: '92×92×25' },
          { model: 'QA12025', voltage: '220', frequency: '50/60', current: '0.10/0.09', power: '18/17', speed: '2300/2500', airflow: '55/62', noise: '34/37', bearing: 'كمي/كروي', size: '120×120×25' },
          { model: 'QA12038', voltage: '220', frequency: '50/60', current: '0.12/0.11', power: '22/20', speed: '2400/2600', airflow: '65/72', noise: '36/39', bearing: 'كمي/كروي', size: '120×120×38' },
          { model: 'QA13538', voltage: '220', frequency: '50/60', current: '0.14/0.13', power: '26/24', speed: '2200/2400', airflow: '85/95', noise: '38/41', bearing: 'كمي/كروي', size: '135×135×38' },
          { model: 'QA15050', voltage: '220', frequency: '50/60', current: '0.18/0.16', power: '35/32', speed: '2100/2300', airflow: '110/125', noise: '40/43', bearing: 'كمي/كروي', size: '150×150×50' },
          { model: 'QA17250', voltage: '220', frequency: '50/60', current: '0.20/0.18', power: '40/36', speed: '2000/2200', airflow: '140/160', noise: '42/45', bearing: 'كمي/كروي', size: '172×172×50' },
          { model: 'QA18060', voltage: '220', frequency: '50/60', current: '0.25/0.22', power: '48/44', speed: '1900/2100', airflow: '165/185', noise: '44/47', bearing: 'كمي/كروي', size: '180×180×60' },
          { model: 'QA20060', voltage: '220', frequency: '50/60', current: '0.30/0.26', power: '58/52', speed: '1800/2000', airflow: '200/230', noise: '46/49', bearing: 'كمي/كروي', size: '200×200×60' },
          { model: 'QA22090', voltage: '220', frequency: '50/60', current: '0.38/0.34', power: '75/68', speed: '1700/1900', airflow: '260/300', noise: '48/51', bearing: 'كمي/كروي', size: '220×220×90' },
          { model: 'QA25489', voltage: '220', frequency: '50/60', current: '0.45/0.40', power: '90/82', speed: '1600/1800', airflow: '340/380', noise: '50/53', bearing: 'كمي/كروي', size: '254×254×89' },
        ],
        notes: [
          '1. البيانات مرجعية، تخضع للمنتج الفعلي',
          '2. خيارات الجهد: 110V/220V/380V، جهد خاص متاح',
          '3. المحمل: B=كمي S=كروي',
          '4. درجة حرارة التشغيل: -20℃~+70℃',
          '5. العزل: Class B (130℃) / Class F (155℃)',
        ]
      },
      applications: {
        title: 'مجالات التطبيق',
        description: 'منتجات تشوان فنغ تستخدم على نطاق واسع في مختلف الصناعات',
        items: [
          { name: 'التحكم الآلي', desc: 'خزانات العاكس، خزانات التحكم، الليزر، اللحام، طابعات 3D' },
          { name: 'تبريد الإلكترونيات', desc: 'أجهزة الكمبيوتر/الخوادم، محطات 5G، المفاتيح، أجهزة التوجيه، إضاءة LED' },
          { name: 'الأجهزة الطبية', desc: 'الأجهزة الطبية، CT، MRI، أنظمة غرف العمليات' },
          { name: 'الخوادم', desc: 'مراكز البيانات، خزائن الشبكة، الاتصالات' },
          { name: 'مصادر الطاقة', desc: 'لوحات التوزيع، المحولات، آلات اللحام، UPS، محطات الشحن' },
          { name: 'آلات CNC', desc: 'آلات CNC، أتمتة المكاتب، اللوحات الصناعية' },
        ]
      }
    },
    factory: {
      title: 'قوة المصنع',
      subtitle: 'قاعدة إنتاج حديثة · القدرة السنوية 10+ مليون · سلسلة توريد كاملة',
      features: [
        { title: 'إنتاج متقدم', desc: 'خطوط إنتاج آليّة دولية، تحكم كامل من القالب إلى التجميع', icon: '⚙️' },
        { title: 'سلسلة التوريد', desc: 'مصانع القوالب والحقن والمعادن والصب لدينا', icon: '🏭' },
        { title: 'مراقبة الجودة', desc: 'معتمد ISO9001، فحص شامل، معدل نجاح 100%', icon: '✅' },
        { title: 'تسليم سريع', desc: 'مخزون خامات كافٍ، قدرة 1M/شهر، تسليم 7 أيام', icon: '🚚' },
      ],
    },
    technology: {
      title: 'الشهادات',
      subtitle: 'شهادات دولية · جوائز وطنية · جودة موثوقة',
      certifications: {
        title: 'الشهادات الدولية',
        items: [
          { name: 'ISO9001', desc: 'نظام إدارة الجودة' },
          { name: 'CCC', desc: 'شهادة الإلزام الصينية' },
          { name: 'UL', desc: 'شهادة السلامة الأمريكية' },
          { name: 'CUL', desc: 'شهادة السلامة الكندية' },
          { name: 'CE', desc: 'شهادة السلامة الأوروبية' },
          { name: 'RoHS', desc: 'شهادة بيئية' },
        ]
      },
      ipr: {
        title: 'الملكية الفكرية',
        description: 'تولي الشركة أهمية كبيرة للابتكار التكنولوجي وحماية حقوق الملكية الفكرية، وقد حصلت على العديد من براءات الاختراع والعلامات التجارية',
        patents: '34 براءة اختراع محلية',
        trademarks: '10 علامة تجارية مسجلة',
        certificates: '19 شهادة مؤهل'
      },
      honors: {
        title: 'جوائز المؤسسة',
        items: [
          'وحدة اجتازت فحص الإشراف',
          'وحدة جودة ممتازة',
          'أفضل 10 علامات موثوقة',
          'أفضل 10 علامات مشهورة',
          'اعتماد منتج جديد',
          'جائزة الإنجاز العلمي'
        ]
      },
      features: [
        { title: 'قدرة البحث والتطوير', desc: 'فريق بحث وتطوير محترف، دعم التطوير المخصص' },
        { title: 'معدات الاختبار', desc: 'مختبر مجهز بالكامل، اختبار التدفق والضوضاء ودرجة الحرارة' },
        { title: 'OEM/ODM', desc: 'دعم OEM، تخصيص المظهر والمواصفات والتغليف' },
        { title: 'الخدمة العالمية', desc: 'التصدير إلى 60+ دولة، دعم فني' },
      ],
    },
    catalog: {
      title: 'كتالوج المنتجات',
      subtitle: 'كتالوج 2026 · مواصفات مفصلة · دليل الاختيار',
      download: 'تحميل PDF',
      view: 'عرض عبر الإنترنت',
      features: [
        'مواصفات كاملة لسلسلة QA',
        'دليل اختيار المنتجات',
        'منحنيات الأداء',
        'أبعاد التركيب',
        'عرض الشهادات'
      ]
    },
    footer: {
      contact: 'اتصل بنا',
      company: 'شركة تشوانتشو تشوان فنغ الكهربائية المحدودة',
      address: 'العنوان: رقم 1 شارع فينغفا، بيفنغ، فينجزي، تشوانتشو، فوجيان، الصين',
      phone: 'هاتف: +86-595-xxxx-xxxx',
      fax: 'فاكس: +86-595-xxxx-xxxx',
      email: 'البريد: sales@quanfeng.com',
      website: 'الموقع: www.quanfeng.com',
      copyright: '© 2024 تشوان فنغ. جميع الحقوق محفوظة. | استثمار هونغ كونغ',
    },
  },
} as const;

export type Translations = typeof translations;
