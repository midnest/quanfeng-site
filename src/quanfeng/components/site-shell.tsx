"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  getQuanfengFooterFacts,
  getQuanfengFriendLinks,
  getQuanfengMobileMenu,
  getQuanfengNavItems,
  getQuanfengQuickLinks,
  getQuanfengSiteUrl,
} from "@/quanfeng/lib/data";
import { withBasePath } from "@/quanfeng/lib/base-path";
import { isExternalQuanfengHref, toLocalQuanfengPath } from "@/quanfeng/lib/routing";
import type { QuanfengLocale } from "@/quanfeng/types";

function QuanfengSmartLink({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  const localHref = toLocalQuanfengPath(href);

  if (isExternalQuanfengHref(localHref)) {
    return (
      <a className={className} href={localHref} rel="noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={localHref}>
      {children}
    </Link>
  );
}

function DesktopQuickRail({ locale }: { locale: QuanfengLocale }) {
  const isChinese = locale === "cn";
  const headIcon =
    locale === "cn" ? "/images/quanfeng/cn/quick/head.png" : "/images/quanfeng/quick/head.png";

  return (
    <aside className="quanfeng-quick-rail">
      <ul>
        {getQuanfengQuickLinks(locale).map((item) => {
          const panel =
            item.panelType === "text" ? (
              <div className="quanfeng-quick-panel quanfeng-quick-phone">{item.panelText}</div>
            ) : item.panelType === "qq" ? (
              <div className="quanfeng-quick-panel quanfeng-quick-qq">
                <div className="quanfeng-quick-qq-title">
                  {isChinese ? "客服咨询" : "Customer service consultation"}
                </div>
                <QuanfengSmartLink className="quanfeng-quick-qq-link" href={item.href}>
                  <img alt="" height={12} src={withBasePath(headIcon)} width={10} />
                  <span>{isChinese ? "在线咨询" : "on-line"}</span>
                </QuanfengSmartLink>
              </div>
            ) : item.panelType === "search" ? (
              <div className="quanfeng-quick-panel quanfeng-quick-search">
                <input
                  aria-label={isChinese ? "请输入关键词" : "Please enter your keyword"}
                  placeholder={isChinese ? "请输入关键词" : "Please enter your keyword"}
                />
              </div>
            ) : item.panelType === "qr" ? (
              <div className="quanfeng-quick-panel quanfeng-quick-qr">
                <img
                  alt={isChinese ? "微信公众号" : "WeChat QR code"}
                  className="size-[120px]"
                  src={withBasePath(
                    locale === "cn"
                      ? "/images/quanfeng/cn/footer/wechat.jpg"
                      : "/images/quanfeng/footer/wechat.jpg",
                  )}
                />
              </div>
            ) : null;

          const clickable =
            item.panelType === "link" ? (
              <QuanfengSmartLink href={item.href}>
                <img alt="" src={withBasePath(item.icon)} />
              </QuanfengSmartLink>
            ) : item.panelType === "top" ? (
              <button
                aria-label={isChinese ? "返回顶部" : "Back to top"}
                className="quanfeng-quick-button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                type="button"
              >
                <img alt="" src={withBasePath(item.icon)} />
              </button>
            ) : (
              <img alt="" src={withBasePath(item.icon)} />
            );

          return (
            <li key={item.icon}>
              <div className="quanfeng-quick-icon">{clickable}</div>
              {panel}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

function Header({
  isMenuOpen,
  locale,
  onToggleMenu,
}: {
  isMenuOpen: boolean;
  locale: QuanfengLocale;
  onToggleMenu: () => void;
}) {
  const navItems = getQuanfengNavItems(locale);
  const logo = locale === "cn" ? "/images/quanfeng/cn/logo.png" : "/images/quanfeng/logo.png";
  const menuIcon =
    locale === "cn" ? "/images/quanfeng/cn/menuicon.png" : "/images/quanfeng/menuicon.png";

  return (
    <header className="quanfeng-header" id="top">
      <div className="quanfeng-container quanfeng-header-inner">
        <QuanfengSmartLink className="quanfeng-logo" href={getQuanfengSiteUrl(locale)}>
          <img alt="Quanfeng logo" src={withBasePath(logo)} />
        </QuanfengSmartLink>
        <nav aria-label="Primary" className="quanfeng-desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <QuanfengSmartLink href={item.href}>
                  <span>{item.label}</span>
                </QuanfengSmartLink>
                {item.children ? (
                  <div className="quanfeng-nav-dropdown">
                    {item.children.map((child) => (
                      <QuanfengSmartLink href={child.href} key={child.label}>
                        {child.label}
                      </QuanfengSmartLink>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <button
          aria-expanded={isMenuOpen}
          aria-label={locale === "cn" ? "打开导航" : "Open navigation"}
          className="quanfeng-menu-button"
          onClick={onToggleMenu}
          type="button"
        >
          <img alt="" src={withBasePath(menuIcon)} />
        </button>
      </div>
    </header>
  );
}

function MobileDrawer({
  isOpen,
  locale,
  onClose,
}: {
  isOpen: boolean;
  locale: QuanfengLocale;
  onClose: () => void;
}) {
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);

  return (
    <>
      <div className={`quanfeng-mobile-overlay ${isOpen ? "is-open" : ""}`} onClick={onClose} />
      <aside className={`quanfeng-mobile-drawer ${isOpen ? "is-open" : ""}`}>
        <div className="quanfeng-mobile-drawer-title">
          <button onClick={onClose} type="button">
            x
          </button>
          <span>{locale === "cn" ? "快速导航" : "Quick navigation"}</span>
        </div>
        <ul>
          {getQuanfengMobileMenu(locale).map((group) => {
            const hasChildren = Boolean(group.children?.length);
            const expanded = expandedLabel === group.label;

            return (
              <li key={group.label}>
                <div className="quanfeng-mobile-drawer-row">
                  <QuanfengSmartLink href={group.href}>{group.label}</QuanfengSmartLink>
                  {hasChildren ? (
                    <button
                      aria-expanded={expanded}
                      onClick={() => setExpandedLabel(expanded ? null : group.label)}
                      type="button"
                    >
                      +
                    </button>
                  ) : null}
                </div>
                {hasChildren ? (
                  <div className={`quanfeng-mobile-submenu ${expanded ? "is-open" : ""}`}>
                    {group.children?.map((child) => (
                      <QuanfengSmartLink href={child.href} key={child.label}>
                        <i />
                        <span>{child.label}</span>
                      </QuanfengSmartLink>
                    ))}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

function Footer({
  isSearchOpen,
  locale,
  onOpenMenu,
  onToggleSearch,
}: {
  isSearchOpen: boolean;
  locale: QuanfengLocale;
  onOpenMenu: () => void;
  onToggleSearch: () => void;
}) {
  const isChinese = locale === "cn";
  const footerImageBase = isChinese ? "/images/quanfeng/cn/footer" : "/images/quanfeng/footer";
  const quickIconBase = isChinese ? "/images/quanfeng/cn/quick" : "/images/quanfeng/quick";
  const footerStyle = {
    "--quanfeng-footer-bg": `url("${withBasePath(`${footerImageBase}/background.jpg`)}")`,
  } as CSSProperties;

  return (
    <footer className="quanfeng-footer">
      <div className="quanfeng-friend-links">
        <div className="quanfeng-container">
          <h4>
            <img alt="" src={withBasePath(`${footerImageBase}/friend.png`)} />
            <span>{isChinese ? "友情链接：" : "FriendLink："}</span>
          </h4>
          {getQuanfengFriendLinks(locale).map((item) => (
            <QuanfengSmartLink href={item.href} key={item.label}>
              {item.label}
            </QuanfengSmartLink>
          ))}
        </div>
      </div>
      <div className="quanfeng-footer-main" style={footerStyle}>
        <div className="quanfeng-container quanfeng-footer-main-inner">
          <div className="quanfeng-footer-logo">
            <img alt="Quanfeng footer logo" src={withBasePath(`${footerImageBase}/footer-logo.png`)} />
          </div>
          <div className="quanfeng-footer-copy">
            {getQuanfengFooterFacts(locale).map((item) => (
              <div key={item}>{item}</div>
            ))}
            {isChinese ? (
              <div>
                Copyright 2020 泉州泉风电机有限公司 版权所有 技术支持：
                <QuanfengSmartLink href="http://www.12t.cn/">厦门易尔通网络科技有限公司</QuanfengSmartLink>
                工信备案：
                <QuanfengSmartLink href="https://beian.miit.gov.cn">闽ICP备11018036号-1</QuanfengSmartLink>
              </div>
            ) : (
              <div>
                Copyright 2020 Quanzhou Quanfeng Motor Co., Ltd technical support：
                <QuanfengSmartLink href="http://www.12t.cn/">
                  Xiamen yiertong Network Technology Co., Ltd
                </QuanfengSmartLink>
                Record No：
                <QuanfengSmartLink href="https://beian.miit.gov.cn">闽ICP备11018036号-1</QuanfengSmartLink>
              </div>
            )}
          </div>
          <div className="quanfeng-footer-qr">
            <img
              alt={isChinese ? "微信公众号" : "WeChat QR code"}
              src={withBasePath(`${footerImageBase}/wechat.jpg`)}
            />
            <div>{isChinese ? "微信公众号" : "WeChat"}</div>
          </div>
        </div>
      </div>
      <div className="quanfeng-footer-mobile-qr">
        <img
          alt={isChinese ? "微信公众号" : "WeChat QR code"}
          src={withBasePath(`${footerImageBase}/wechat.jpg`)}
        />
        <div>{isChinese ? "微信公众号" : "WeChat"}</div>
      </div>
      <div className={`quanfeng-mobile-search ${isSearchOpen ? "is-open" : ""}`}>
        <input
          aria-label={isChinese ? "请输入搜索关键词" : "Please enter the search keyword"}
          placeholder={isChinese ? "请输入搜索关键词" : "Please enter the search keyword"}
        />
        <button type="button">{isChinese ? "搜索" : "Search"}</button>
      </div>
      <div className="quanfeng-mobile-footer-bar">
        <button onClick={onOpenMenu} type="button">
          <img alt="" src={withBasePath(`${quickIconBase}/ico-1.png`)} />
          <span>{isChinese ? "导航" : "nav"}</span>
        </button>
        <a href="tel:0595-22683818">
          <img alt="" src={withBasePath(`${quickIconBase}/ico-2.png`)} />
          <span>{isChinese ? "电话" : "phone"}</span>
        </a>
        <QuanfengSmartLink href="http://wpa.qq.com/msgrd?v=3&uin=1375572782&site=qq&menu=yes">
          <img alt="" src={withBasePath(`${quickIconBase}/ico-3.png`)} />
          <span>{isChinese ? "客服" : "Customer"}</span>
        </QuanfengSmartLink>
        <QuanfengSmartLink
          href={
            isChinese
              ? "http://api.map.baidu.com/marker?location=24.942255,118.580808&title=%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE&content=%E6%B3%89%E5%B7%9E%E6%B3%89%E9%A3%8E%E7%94%B5%E6%9C%BA%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&output=html"
              : "http://api.map.baidu.com/marker?location=24.942255,118.580808&title=%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE&content=Quanzhou%20Quanfeng%20Motor%20Co.,%20Ltd&output=html"
          }
        >
          <img alt="" src={withBasePath(`${quickIconBase}/ico-4.png`)} />
          <span>{isChinese ? "地图" : "Map"}</span>
        </QuanfengSmartLink>
        <button onClick={onToggleSearch} type="button">
          <img alt="" src={withBasePath(`${quickIconBase}/ico-5.png`)} />
          <span>{isChinese ? "搜索" : "Search"}</span>
        </button>
      </div>
    </footer>
  );
}

export function QuanfengSiteShell({
  children,
  locale,
}: {
  children: ReactNode;
  locale: QuanfengLocale;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("quanfeng-lock-scroll", isMenuOpen);
    return () => {
      document.body.classList.remove("quanfeng-lock-scroll");
    };
  }, [isMenuOpen]);

  return (
    <main className={`quanfeng-page ${locale === "cn" ? "is-cn" : "is-en"}`}>
      <DesktopQuickRail locale={locale} />
      <Header
        isMenuOpen={isMenuOpen}
        locale={locale}
        onToggleMenu={() => {
          setIsMenuOpen((current) => !current);
          setIsSearchOpen(false);
        }}
      />
      {children}
      <Footer
        isSearchOpen={isSearchOpen}
        locale={locale}
        onOpenMenu={() => {
          setIsMenuOpen(true);
          setIsSearchOpen(false);
        }}
        onToggleSearch={() => {
          setIsSearchOpen((current) => !current);
          setIsMenuOpen(false);
        }}
      />
      <MobileDrawer isOpen={isMenuOpen} locale={locale} onClose={() => setIsMenuOpen(false)} />
    </main>
  );
}
