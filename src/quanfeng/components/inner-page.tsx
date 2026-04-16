"use client";

import Link from "next/link";
import { QuanfengSiteShell } from "@/quanfeng/components/site-shell";
import {
  getQuanfengLocaleFromPathname,
  getQuanfengSectionNav,
  normalizeQuanfengHtml,
} from "@/quanfeng/lib/routing";
import type { QuanfengMirrorPage } from "@/quanfeng/lib/pages";

export function QuanfengInnerPage({
  page,
  pathname,
}: {
  page: QuanfengMirrorPage;
  pathname: string;
}) {
  const locale = getQuanfengLocaleFromPathname(pathname);
  const sectionNav = getQuanfengSectionNav(pathname, page.title);

  return (
    <QuanfengSiteShell locale={locale}>
      <section className="quanfeng-inner-hero">
        <div className="quanfeng-container">
          <div className="quanfeng-inner-hero-title">{sectionNav.title}</div>
          {sectionNav.items.length > 1 ? (
            <div className="quanfeng-inner-hero-nav">
              {sectionNav.items.map((item) => (
                <Link
                  className={item.label === sectionNav.activeLabel ? "is-active" : ""}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>
      <section className="quanfeng-inner-content">
        <div className="quanfeng-container">
          <div
            className="quanfeng-legacy-html"
            dangerouslySetInnerHTML={{ __html: normalizeQuanfengHtml(page.mainHtml) }}
          />
        </div>
      </section>
    </QuanfengSiteShell>
  );
}
