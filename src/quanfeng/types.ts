export type QuanfengLocale = "en" | "cn";

export interface QuanfengNavItem {
  label: string;
  href: string;
  children?: QuanfengNavItem[];
}

export interface QuanfengServiceItem {
  label: string;
  href: string;
  icon: string;
  activeIcon: string;
}

export interface QuanfengFeatureLink {
  label: string;
  href: string;
  icon: string;
  activeIcon: string;
}

export interface QuanfengProductItem {
  name: string;
  href: string;
  image: string;
}

export interface QuanfengNewsItem {
  title: string;
  href: string;
  image: string;
  date: string;
}

export interface QuanfengQuickLink {
  label: string;
  href: string;
  icon: string;
  panelType?: "text" | "qq" | "search" | "qr" | "link" | "top";
  panelText?: string;
}

export interface QuanfengMobileMenuGroup {
  label: string;
  href: string;
  children?: QuanfengMobileMenuGroup[];
}
