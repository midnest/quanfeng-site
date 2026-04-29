import "server-only";

import quanfengPageData from "@/quanfeng/lib/page-data.json";
import {
  buildQuanfengDataKey,
  buildQuanfengSourcePath,
  toLocalQuanfengPath,
} from "@/quanfeng/lib/routing";
import { getQuanfengLocaleFromPathname } from "@/quanfeng/lib/routing";
import type { QuanfengLocale } from "@/quanfeng/types";

export interface QuanfengMirrorPage {
  locale: QuanfengLocale;
  pathname: string;
  title: string;
  url: string;
  mainHtml: string;
}

const pageMap = quanfengPageData as Record<string, QuanfengMirrorPage>;

export function getQuanfengPage(pathname: string, pageValue?: string | string[] | null) {
  const sourcePath = buildQuanfengSourcePath(pathname, pageValue);
  const exactMatch = pageMap[buildQuanfengDataKey(sourcePath)];

  if (exactMatch) {
    return exactMatch;
  }

  const fallbackSourcePath = buildQuanfengSourcePath(pathname);
  return pageMap[buildQuanfengDataKey(fallbackSourcePath)] ?? null;
}

export function getAllQuanfengStaticPaths() {
  return [...new Set(Object.values(pageMap).map((page) => toLocalQuanfengPath(page.url)))]
    .filter((pathname) => pathname !== "/" && pathname !== "/cn")
    .sort((left, right) => left.localeCompare(right));
}

export function getQuanfengPageLocale(pathname: string) {
  return getQuanfengLocaleFromPathname(pathname);
}
