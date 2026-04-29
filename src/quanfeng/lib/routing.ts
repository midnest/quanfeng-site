import { getQuanfengNavItems } from "@/quanfeng/lib/data";
import { withBasePath } from "@/quanfeng/lib/base-path";
import type { QuanfengLocale, QuanfengNavItem } from "@/quanfeng/types";

const quanfengOrigin = "http://quanfeng.com";

const specialLocalPaths = new Map<string, string>([
  ["/cn/category/129", "/"],
  ["/en/category/130", "/cn"],
]);

const englishSectionPathByLabel: Record<string, string> = {
  "AC fan": "/category/134",
  "DC fan": "/category/135",
  "Motor series": "/category/136",
  "Protective net": "/category/140",
  "Die casting": "/category/137",
  News: "/category/133",
  Notice: "/category/56",
  Technology: "/category/132",
};

const chineseSectionPathByLabel: Record<string, string> = {
  交流风机: "/cn/category/122",
  直流风机: "/cn/category/123",
  电机系列: "/cn/category/124",
  防护网罩: "/cn/category/128",
  压铸加工: "/cn/category/141",
  网站公告: "/cn/category/121",
  技术应用: "/cn/category/5",
  新闻动态: "/cn/category/4",
};

const paginationPathPattern = /^(.*)\/page\/([1-9]\d*)$/;

function getCanonicalPageValue(value?: string | string[] | null) {
  const pageValue = Array.isArray(value) ? value[0] : value;

  if (!pageValue) {
    return null;
  }

  const trimmed = pageValue.trim();
  return /^[1-9]\d*$/.test(trimmed) && trimmed !== "1" ? trimmed : null;
}

function toCanonicalPathname(pathname: string) {
  if (!pathname) {
    return "/";
  }

  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
}

function splitLocalPaginationPath(pathname: string) {
  const normalizedPathname = toCanonicalPathname(pathname);
  const paginationMatch = normalizedPathname.match(paginationPathPattern);

  if (!paginationMatch) {
    return { pathname: normalizedPathname, pageValue: null };
  }

  return {
    pathname: paginationMatch[1] || "/",
    pageValue: getCanonicalPageValue(paginationMatch[2]),
  };
}

function buildLocalPaginationPath(pathname: string, pageValue: string | null) {
  return pageValue ? `${pathname}/page/${pageValue}` : pathname;
}

function toQuanfengUrl(href: string) {
  try {
    return new URL(href, quanfengOrigin);
  } catch {
    return null;
  }
}

export function getQuanfengLocaleFromPathname(pathname: string): QuanfengLocale {
  const normalized = toCanonicalPathname(pathname);
  return normalized === "/cn" || normalized.startsWith("/cn/") ? "cn" : "en";
}

export function stripQuanfengPaginationPath(pathname: string) {
  return splitLocalPaginationPath(pathname).pathname;
}

export function buildQuanfengDataKey(pathnameWithSearch: string) {
  return encodeURIComponent(pathnameWithSearch);
}

export function buildQuanfengSourcePath(pathname: string, pageValue?: string | string[] | null) {
  const { pathname: normalizedPathname, pageValue: embeddedPageValue } =
    splitLocalPaginationPath(pathname);
  const canonicalPage = getCanonicalPageValue(pageValue) ?? embeddedPageValue;
  const sourcePath =
    normalizedPathname === "/" || normalizedPathname === "/en"
      ? "/en"
      : normalizedPathname.startsWith("/cn/")
        ? normalizedPathname
        : normalizedPathname === "/cn"
          ? "/cn"
          : normalizedPathname.startsWith("/en/")
            ? normalizedPathname
            : `/en${normalizedPathname}`;

  return canonicalPage ? `${sourcePath}?page=${canonicalPage}` : sourcePath;
}

export function toLocalQuanfengPath(href: string) {
  if (!href) {
    return href;
  }

  if (
    href.startsWith("#") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("javascript:")
  ) {
    return href;
  }

  const url = toQuanfengUrl(href);

  if (!url || url.origin !== quanfengOrigin) {
    return href;
  }

  const pathname = toCanonicalPathname(url.pathname);
  const pageValue = getCanonicalPageValue(url.searchParams.get("page"));
  const specialLocalPath = specialLocalPaths.get(pathname);

  if (specialLocalPath) {
    return specialLocalPath;
  }

  if (pathname === "/" || pathname === "/en") {
    return "/";
  }

  if (pathname === "/cn") {
    return "/cn";
  }

  if (pathname.startsWith("/en/")) {
    return buildLocalPaginationPath(pathname.slice(3), pageValue);
  }

  if (pathname.startsWith("/cn/")) {
    return buildLocalPaginationPath(pathname, pageValue);
  }

  if (pathname.startsWith("/res/") || pathname.startsWith("/upload/")) {
    return `${quanfengOrigin}${pathname}`;
  }

  return href;
}

function toAbsoluteQuanfengAssetPath(value: string) {
  if (
    !value ||
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("data:") ||
    value.startsWith("//")
  ) {
    return value;
  }

  return value.startsWith("/") ? `${quanfengOrigin}${value}` : value;
}

export function normalizeQuanfengHtml(html: string) {
  return html
    .replace(/href=(["'])(.*?)\1/g, (_match, quote: string, value: string) => {
      const normalizedValue =
        value === "javascript:;" ? "#" : withBasePath(toLocalQuanfengPath(value));
      return `href=${quote}${normalizedValue}${quote}`;
    })
    .replace(/src=(["'])(.*?)\1/g, (_match, quote: string, value: string) => {
      return `src=${quote}${toAbsoluteQuanfengAssetPath(value)}${quote}`;
    })
    .replace(/poster=(["'])(.*?)\1/g, (_match, quote: string, value: string) => {
      return `poster=${quote}${toAbsoluteQuanfengAssetPath(value)}${quote}`;
    })
    .replace(/url\((['"]?)(\/[^)'"]+)\1\)/g, (_match, quote: string, value: string) => {
      const wrappedQuote = quote || "";
      return `url(${wrappedQuote}${toAbsoluteQuanfengAssetPath(value)}${wrappedQuote})`;
    })
    .replace(/onclick="window\.history\.go\(-1\);"/g, "")
    .replace(/<!-- Root element of PhotoSwipe[\s\S]*$/i, "")
    .replace(/<div class="pswp"[\s\S]*$/i, "");
}

function flattenNavItems(items: QuanfengNavItem[]) {
  return items.flatMap((item) => [item, ...(item.children ?? [])]);
}

function findSectionForHref(href: string, locale: QuanfengLocale) {
  const localHref = toLocalQuanfengPath(href);

  for (const item of getQuanfengNavItems(locale)) {
    if (toLocalQuanfengPath(item.href) === localHref) {
      return { item, activeLabel: item.label };
    }

    const matchingChild = item.children?.find(
      (child) => toLocalQuanfengPath(child.href) === localHref,
    );

    if (matchingChild) {
      return { item, activeLabel: matchingChild.label };
    }
  }

  return null;
}

export function getQuanfengSectionNav(pathname: string, pageTitle?: string) {
  const locale = getQuanfengLocaleFromPathname(pathname);
  const canonicalPathname = stripQuanfengPaginationPath(pathname);
  const fromCategory = findSectionForHref(canonicalPathname, locale);

  if (fromCategory) {
    return {
      title: fromCategory.item.label,
      activeLabel: fromCategory.activeLabel,
      items: fromCategory.item.children?.length
        ? [
            { label: fromCategory.item.label, href: toLocalQuanfengPath(fromCategory.item.href) },
            ...fromCategory.item.children.map((child) => ({
              label: child.label,
              href: toLocalQuanfengPath(child.href),
            })),
          ]
        : [{ label: fromCategory.item.label, href: toLocalQuanfengPath(fromCategory.item.href) }],
    };
  }

  if (canonicalPathname.includes("/show/")) {
    const titleParts = pageTitle?.split("_") ?? [];
    const sectionLabel = titleParts[1] ?? "";
    const inferredPath =
      locale === "cn"
        ? chineseSectionPathByLabel[sectionLabel] ?? "/cn/category/3"
        : englishSectionPathByLabel[sectionLabel] ?? "/category/57";
    const section = findSectionForHref(inferredPath, locale);

    if (section) {
      return {
        title: section.item.label,
        activeLabel: titleParts[0] ?? section.item.label,
        items: section.item.children?.length
          ? [
              { label: section.item.label, href: toLocalQuanfengPath(section.item.href) },
              ...section.item.children.map((child) => ({
                label: child.label,
                href: toLocalQuanfengPath(child.href),
              })),
            ]
          : [{ label: section.item.label, href: toLocalQuanfengPath(section.item.href) }],
      };
    }
  }

  const homeLabel = locale === "cn" ? "首页" : "Home";
  const shellTitle = locale === "cn" ? "泉风电机" : "Quanfeng";
  const homeHref = locale === "cn" ? "/cn" : "/";

  return {
    title: shellTitle,
    activeLabel: shellTitle,
    items: [{ label: homeLabel, href: homeHref }],
  };
}

export function isExternalQuanfengHref(href: string) {
  const localHref = toLocalQuanfengPath(href);
  return (
    localHref.startsWith("http://") ||
    localHref.startsWith("https://") ||
    localHref.startsWith("tel:") ||
    localHref.startsWith("mailto:")
  );
}

export function getQuanfengSectionItems(locale: QuanfengLocale) {
  return flattenNavItems(getQuanfengNavItems(locale));
}
