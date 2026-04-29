import type {
  QuanfengFeatureLink,
  QuanfengLocale,
  QuanfengMobileMenuGroup,
  QuanfengNavItem,
  QuanfengNewsItem,
  QuanfengProductItem,
  QuanfengQuickLink,
  QuanfengServiceItem,
} from "@/quanfeng/types";

export interface QuanfengHomeData {
  aboutButtonHref: string;
  aboutButtonLabel: string;
  aboutHtml: string;
  aboutLinks: QuanfengFeatureLink[];
  aboutTitle: string;
  aboutVideoPoster: string;
  aboutVideoSrc: string;
  heroSlides: string[];
  news: QuanfengNewsItem[];
  newsMoreHref: string;
  newsMoreLabel: string;
  newsTitle: string;
  products: QuanfengProductItem[];
  productsTitle: string;
  services: QuanfengServiceItem[];
  servicesTitle: string;
  videoCloseLabel: string;
}

const quanfengEnNavItems: QuanfengNavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/category/54",
    children: [
      { label: "Company profile", href: "/category/62" },
      { label: "Enterprise honor", href: "/category/82" },
      { label: "Corporate culture", href: "/category/131" },
    ],
  },
  {
    label: "News",
    href: "/category/55",
    children: [
      { label: "Notice", href: "/category/56" },
      { label: "Technology", href: "/category/132" },
      { label: "News", href: "/category/133" },
    ],
  },
  {
    label: "Products",
    href: "/category/57",
    children: [
      { label: "AC fan", href: "/category/134" },
      { label: "DC fan", href: "/category/135" },
      { label: "Motor series", href: "/category/136" },
      { label: "Protective net", href: "/category/140" },
      { label: "Die casting", href: "/category/137" },
    ],
  },
  { label: "Technology", href: "/category/78" },
  { label: "Video", href: "/category/80" },
  { label: "Feedback", href: "/category/60" },
  { label: "Contact", href: "/category/61" },
  { label: "中文版", href: "/cn" },
];

const quanfengCnNavItems: QuanfengNavItem[] = [
  { label: "网站首页", href: "/cn" },
  {
    label: "走进泉风",
    href: "/cn/category/1",
    children: [
      { label: "公司简介", href: "/cn/category/7" },
      { label: "公司结构", href: "/cn/category/95" },
      { label: "企业荣誉", href: "/cn/category/120" },
      { label: "企业文化", href: "/cn/category/96" },
    ],
  },
  {
    label: "新闻动态",
    href: "/cn/category/2",
    children: [
      { label: "网站公告", href: "/cn/category/121" },
      { label: "技术应用", href: "/cn/category/5" },
      { label: "新闻动态", href: "/cn/category/4" },
    ],
  },
  {
    label: "产品展示",
    href: "/cn/category/3",
    children: [
      { label: "交流风机", href: "/cn/category/122" },
      { label: "压铸加工", href: "/cn/category/141" },
      { label: "电机系列", href: "/cn/category/124" },
      { label: "防护网罩", href: "/cn/category/128" },
      { label: "直流风机", href: "/cn/category/123" },
    ],
  },
  { label: "技术中心", href: "/cn/category/30" },
  { label: "视频中心", href: "/cn/category/24" },
  { label: "留言板", href: "/cn/category/23" },
  { label: "联系我们", href: "/cn/category/19" },
  { label: "ENGLISH", href: "/" },
];

const quanfengEnMobileMenu: QuanfengMobileMenuGroup[] = quanfengEnNavItems.map((item) => ({
  label: item.label,
  href: item.href,
  children: item.children,
}));

const quanfengCnMobileMenu: QuanfengMobileMenuGroup[] = quanfengCnNavItems.map((item) => ({
  label: item.label,
  href: item.href,
  children: item.children,
}));

const quanfengEnQuickLinks: QuanfengQuickLink[] = [
  {
    label: "0595-22683818",
    href: "tel:0595-22683818",
    icon: "/images/quanfeng/quick/ico-2.png",
    panelType: "text",
    panelText: "0595-22683818",
  },
  {
    label: "Customer service consultation on-line",
    href: "http://wpa.qq.com/msgrd?v=3&uin=1375572782&site=qq&menu=yes",
    icon: "/images/quanfeng/quick/ico-3.png",
    panelType: "qq",
  },
  {
    label: "Map",
    href: "http://api.map.baidu.com/marker?location=24.942255,118.580808&title=%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE&content=Quanzhou%20Quanfeng%20Motor%20Co.,%20Ltd&output=html",
    icon: "/images/quanfeng/quick/ico-4.png",
    panelType: "link",
  },
  {
    label: "Search",
    href: "#search",
    icon: "/images/quanfeng/quick/ico-5.png",
    panelType: "search",
  },
  {
    label: "QR",
    href: "#wechat",
    icon: "/images/quanfeng/quick/ico-6.png",
    panelType: "qr",
  },
  {
    label: "TOP",
    href: "#top",
    icon: "/images/quanfeng/quick/ico-7.png",
    panelType: "top",
  },
];

const quanfengCnQuickLinks: QuanfengQuickLink[] = [
  {
    label: "0595-22683818",
    href: "tel:0595-22683818",
    icon: "/images/quanfeng/cn/quick/ico-2.png",
    panelType: "text",
    panelText: "0595-22683818",
  },
  {
    label: "客服咨询",
    href: "http://wpa.qq.com/msgrd?v=3&uin=1375572782&site=qq&menu=yes",
    icon: "/images/quanfeng/cn/quick/ico-3.png",
    panelType: "qq",
  },
  {
    label: "地图",
    href: "http://api.map.baidu.com/marker?location=24.942255,118.580808&title=%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE&content=%E6%B3%89%E5%B7%9E%E6%B3%89%E9%A3%8E%E7%94%B5%E6%9C%BA%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&output=html",
    icon: "/images/quanfeng/cn/quick/ico-4.png",
    panelType: "link",
  },
  {
    label: "搜索",
    href: "#search",
    icon: "/images/quanfeng/cn/quick/ico-5.png",
    panelType: "search",
  },
  {
    label: "二维码",
    href: "#wechat",
    icon: "/images/quanfeng/cn/quick/ico-6.png",
    panelType: "qr",
  },
  {
    label: "TOP",
    href: "#top",
    icon: "/images/quanfeng/cn/quick/ico-7.png",
    panelType: "top",
  },
];

const quanfengEnFriendLinks = [
  { label: "BAIDU", href: "http://www.baidu.com" },
  { label: "12t", href: "http://www.12t.cn" },
];

const quanfengCnFriendLinks = [{ label: "百度", href: "https://www.baidu.com/" }];

const quanfengEnFooterFacts = [
  "Service hotline：0595-22683818",
  "Email：quanfeng22683818@126.com",
  "Address：No.1, Fengfa Road, Beifeng Industrial Zone, Quanzhou, Fujian",
];

const quanfengCnFooterFacts = [
  "服务热线：0595-22683818",
  "邮箱：1375572782@qq.com",
  "地址：福建泉州北峰工业区丰发路1号",
];

const quanfengEnHomeData: QuanfengHomeData = {
  aboutButtonHref: "/category/62",
  aboutButtonLabel: "MORE +",
  aboutHtml:
    'Quanzhou Quanfeng Motor Co., Ltd. is one of the enterprises invested and founded by Hong Kong Quanfeng Industry in Quanzhou, a famous city on the west coast of the Straits. The company mainly produces "Quanfeng", "Lixun" brand AC, DC axial fan, micro special motor and protective net cover. The company has mold, injection molding, hardware, aluminum alloy die casting and other supporting plants.',
  aboutLinks: [
    {
      label: "Company profile",
      href: "/category/62",
      icon: "/images/quanfeng/about/icon-1.png",
      activeIcon: "/images/quanfeng/about/icon-1-hover.png",
    },
    {
      label: "Enterprise honor",
      href: "/category/82",
      icon: "/images/quanfeng/about/icon-2.png",
      activeIcon: "/images/quanfeng/about/icon-2-hover.png",
    },
    {
      label: "Corporate culture",
      href: "/category/131",
      icon: "/images/quanfeng/about/icon-3.png",
      activeIcon: "/images/quanfeng/about/icon-3-hover.png",
    },
  ],
  aboutTitle: "About Us",
  aboutVideoPoster: "/images/quanfeng/about/video-cover.jpg",
  aboutVideoSrc: "/videos/quanfeng/about.mp4",
  heroSlides: [
    "/images/quanfeng/hero/slide-1.jpg",
    "/images/quanfeng/hero/slide-2.jpg",
    "/images/quanfeng/hero/slide-3.jpg",
  ],
  news: [
    {
      title: "Can undertake aluminum alloy die casting processing",
      href: "/show/802",
      image: "/images/quanfeng/news/news-1.jpg",
      date: "2020-09-29",
    },
    {
      title: "About the anti-counterfeiting QR code can not be recognized notice",
      href: "/show/801",
      image: "/images/quanfeng/news/news-2.jpg",
      date: "2020-09-29",
    },
    {
      title: "New FCC certification for AC series",
      href: "/show/800",
      image: "/images/quanfeng/news/news-3.jpg",
      date: "2020-09-29",
    },
    {
      title: "Statement",
      href: "/show/799",
      image: "/images/quanfeng/news/news-4.jpg",
      date: "2020-09-29",
    },
  ],
  newsMoreHref: "/category/55",
  newsMoreLabel: "More +",
  newsTitle: "News",
  products: [
    {
      name: "QA22090",
      href: "/show/746",
      image: "/images/quanfeng/products/qa22090.jpg",
    },
    {
      name: "QA20060",
      href: "/show/744",
      image: "/images/quanfeng/products/qa20060.jpg",
    },
    {
      name: "QA12038",
      href: "/show/739",
      image: "/images/quanfeng/products/qa12038.jpg",
    },
    {
      name: "QA9225",
      href: "/show/736",
      image: "/images/quanfeng/products/qa9225.jpg",
    },
  ],
  productsTitle: "Products",
  services: [
    {
      label: "AC fan",
      href: "/category/134",
      icon: "/images/quanfeng/services/icon-1.jpg",
      activeIcon: "/images/quanfeng/services/icon-1-hover.jpg",
    },
    {
      label: "DC fan",
      href: "/category/135",
      icon: "/images/quanfeng/services/icon-2.jpg",
      activeIcon: "/images/quanfeng/services/icon-2-hover.jpg",
    },
    {
      label: "Motor series",
      href: "/category/136",
      icon: "/images/quanfeng/services/icon-3.jpg",
      activeIcon: "/images/quanfeng/services/icon-3-hover.jpg",
    },
    {
      label: "Protective net",
      href: "/category/140",
      icon: "/images/quanfeng/services/icon-4.jpg",
      activeIcon: "/images/quanfeng/services/icon-4-hover.jpg",
    },
  ],
  servicesTitle: "Products",
  videoCloseLabel: "Close video",
};

const quanfengCnHomeData: QuanfengHomeData = {
  aboutButtonHref: "/cn/category/7",
  aboutButtonLabel: "更多 +",
  aboutHtml:
    "泉州泉风电机有限公司系香港泉风实业在海峡西岸名城泉州投资创办的企业之一。公司主要生产“泉风”“力迅”牌交、直流轴流风机、微特电机及防护网罩，并配套模具、注塑、五金、铝合金压铸等生产体系。",
  aboutLinks: [
    {
      label: "公司简介",
      href: "/cn/category/7",
      icon: "/images/quanfeng/cn/about/icon-1.png",
      activeIcon: "/images/quanfeng/cn/about/icon-1-hover.png",
    },
    {
      label: "公司结构",
      href: "/cn/category/95",
      icon: "/images/quanfeng/cn/about/icon-2.png",
      activeIcon: "/images/quanfeng/cn/about/icon-2-hover.png",
    },
    {
      label: "企业荣誉",
      href: "/cn/category/120",
      icon: "/images/quanfeng/cn/about/icon-3.png",
      activeIcon: "/images/quanfeng/cn/about/icon-3-hover.png",
    },
    {
      label: "企业文化",
      href: "/cn/category/96",
      icon: "/images/quanfeng/cn/about/icon-4.png",
      activeIcon: "/images/quanfeng/cn/about/icon-4-hover.png",
    },
  ],
  aboutTitle: "走进泉风",
  aboutVideoPoster: "/images/quanfeng/cn/about/video-cover.jpg",
  aboutVideoSrc: "/videos/quanfeng/cn/about.mp4",
  heroSlides: [
    "/images/quanfeng/cn/hero/slide-1.gif",
    "/images/quanfeng/cn/hero/slide-2.jpg",
    "/images/quanfeng/cn/hero/slide-3.gif",
  ],
  news: [
    {
      title: "泉风轴流风机标签及标准号更新",
      href: "/cn/show/814",
      image: "/images/quanfeng/cn/news/news-1.jpg",
      date: "2024-05-30",
    },
    {
      title: "关于防伪二维码无法识别公告",
      href: "/cn/show/694",
      image: "/images/quanfeng/cn/news/news-2.jpg",
      date: "2020-08-27",
    },
    {
      title: "国家高新企业认定成功",
      href: "/cn/show/811",
      image: "/images/quanfeng/cn/news/news-3.jpg",
      date: "2022-08-01",
    },
    {
      title: "交流系列新增FCC认证",
      href: "/cn/show/785",
      image: "/images/quanfeng/cn/news/news-4.jpg",
      date: "2020-09-25",
    },
  ],
  newsMoreHref: "/cn/category/2",
  newsMoreLabel: "查看更多资讯 +",
  newsTitle: "新闻动态",
  products: [],
  productsTitle: "",
  services: [
    {
      label: "交流风机",
      href: "/cn/category/122",
      icon: "/images/quanfeng/cn/services/icon-1.jpg",
      activeIcon: "/images/quanfeng/cn/services/icon-1-hover.jpg",
    },
    {
      label: "压铸加工",
      href: "/cn/category/141",
      icon: "/images/quanfeng/cn/services/icon-2.jpg",
      activeIcon: "/images/quanfeng/cn/services/icon-2-hover.jpg",
    },
    {
      label: "电机系列",
      href: "/cn/category/124",
      icon: "/images/quanfeng/cn/services/icon-3.jpg",
      activeIcon: "/images/quanfeng/cn/services/icon-3-hover.jpg",
    },
    {
      label: "防护网罩",
      href: "/cn/category/128",
      icon: "/images/quanfeng/cn/services/icon-4.jpg",
      activeIcon: "/images/quanfeng/cn/services/icon-4-hover.jpg",
    },
  ],
  servicesTitle: "产品展示",
  videoCloseLabel: "关闭视频",
};

export function getQuanfengSiteUrl(locale: QuanfengLocale) {
  return locale === "cn" ? "/cn" : "/";
}

export function getQuanfengNavItems(locale: QuanfengLocale) {
  return locale === "cn" ? quanfengCnNavItems : quanfengEnNavItems;
}

export function getQuanfengMobileMenu(locale: QuanfengLocale) {
  return locale === "cn" ? quanfengCnMobileMenu : quanfengEnMobileMenu;
}

export function getQuanfengQuickLinks(locale: QuanfengLocale) {
  return locale === "cn" ? quanfengCnQuickLinks : quanfengEnQuickLinks;
}

export function getQuanfengFriendLinks(locale: QuanfengLocale) {
  return locale === "cn" ? quanfengCnFriendLinks : quanfengEnFriendLinks;
}

export function getQuanfengFooterFacts(locale: QuanfengLocale) {
  return locale === "cn" ? quanfengCnFooterFacts : quanfengEnFooterFacts;
}

export function getQuanfengHomeData(locale: QuanfengLocale) {
  return locale === "cn" ? quanfengCnHomeData : quanfengEnHomeData;
}
