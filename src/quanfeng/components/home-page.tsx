/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { QuanfengSiteShell } from "@/quanfeng/components/site-shell";
import { withBasePath } from "@/quanfeng/lib/base-path";
import { getQuanfengHomeData } from "@/quanfeng/lib/data";
import type { QuanfengLocale } from "@/quanfeng/types";

function HeroCarousel({ locale }: { locale: QuanfengLocale }) {
  const { heroSlides } = getQuanfengHomeData(locale);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="quanfeng-hero">
      {heroSlides.map((image, index) => (
        <div
          aria-hidden={activeIndex !== index}
          className={`quanfeng-hero-slide ${activeIndex === index ? "is-active" : ""}`}
          key={image}
        >
          <img alt="" src={withBasePath(image)} />
        </div>
      ))}
      <div className="quanfeng-hero-dots">
        {heroSlides.map((image, index) => (
          <button
            aria-label={`Go to slide ${index + 1}`}
            className={activeIndex === index ? "is-active" : ""}
            key={image}
            onClick={() => setActiveIndex(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="quanfeng-section-heading">
      <div className="quanfeng-section-heading-title">{title}</div>
    </div>
  );
}

function ServiceGrid({ locale }: { locale: QuanfengLocale }) {
  const { services, servicesTitle } = getQuanfengHomeData(locale);

  return (
    <section className="quanfeng-services">
      <SectionHeading title={servicesTitle} />
      <div className="quanfeng-container">
        <ul className="quanfeng-services-grid">
          {services.map((service) => (
            <li key={service.label}>
              <Link href={service.href}>
                <div className="quanfeng-service-icon">
                  <img
                    alt=""
                    className="quanfeng-service-icon-default"
                    src={withBasePath(service.icon)}
                  />
                  <img
                    alt=""
                    className="quanfeng-service-icon-active"
                    src={withBasePath(service.activeIcon)}
                  />
                </div>
                <div className="quanfeng-service-label">{service.label}</div>
                <div className="quanfeng-service-line" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AboutSection({ locale }: { locale: QuanfengLocale }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const data = getQuanfengHomeData(locale);
  const backgroundImage = withBasePath(
    locale === "cn" ? "/images/quanfeng/cn/about/background.jpg" : "/images/quanfeng/about/background.jpg",
  );
  const aboutStyle = {
    "--quanfeng-about-bg": `url("${backgroundImage}")`,
  } as CSSProperties;

  return (
    <section className="quanfeng-about" style={aboutStyle}>
      <div className="quanfeng-container">
        <div className="quanfeng-about-panel">
          <div className="quanfeng-about-copy">
            <div className="quanfeng-about-title">
              <span className="quanfeng-about-quote">“</span>
              <span>{data.aboutTitle}</span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: data.aboutHtml }} />
            <Link className="quanfeng-outline-button" href={data.aboutButtonHref}>
              {data.aboutButtonLabel}
            </Link>
          </div>
          <button className="quanfeng-about-video" onClick={() => setIsVideoOpen(true)} type="button">
            <img alt="Company video cover" src={withBasePath(data.aboutVideoPoster)} />
          </button>
          <div className="quanfeng-about-links">
            {data.aboutLinks.map((link) => (
              <Link href={link.href} key={link.label}>
                <div className="quanfeng-about-link-icon">
                  <img alt="" className="quanfeng-about-link-default" src={withBasePath(link.icon)} />
                  <img
                    alt=""
                    className="quanfeng-about-link-active"
                    src={withBasePath(link.activeIcon)}
                  />
                </div>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isVideoOpen ? (
        <div aria-modal="true" className="quanfeng-video-modal" role="dialog">
          <div className="quanfeng-video-backdrop" onClick={() => setIsVideoOpen(false)} />
          <div className="quanfeng-video-shell">
            <button
              aria-label={data.videoCloseLabel}
              className="quanfeng-video-close"
              onClick={() => setIsVideoOpen(false)}
              type="button"
            >
              ×
            </button>
            <video
              controls
              poster={withBasePath(data.aboutVideoPoster)}
              src={withBasePath(data.aboutVideoSrc)}
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ProductGrid({ locale }: { locale: QuanfengLocale }) {
  const { products, productsTitle } = getQuanfengHomeData(locale);

  if (!products.length) {
    return null;
  }

  return (
    <section className="quanfeng-products">
      <div className="quanfeng-container">
        <SectionHeading title={productsTitle} />
        <ul className="quanfeng-product-grid">
          {products.map((product) => (
            <li key={product.name}>
              <Link href={product.href}>
                <div className="quanfeng-product-image-wrap">
                  <img alt={product.name} src={withBasePath(product.image)} />
                </div>
                <div className="quanfeng-product-name">{product.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NewsSection({ locale }: { locale: QuanfengLocale }) {
  const isChinese = locale === "cn";
  const { news, newsMoreHref, newsMoreLabel, newsTitle } = getQuanfengHomeData(locale);

  return (
    <section className="quanfeng-news">
      <div className="quanfeng-container">
        <SectionHeading title={newsTitle} />
        <ul className="quanfeng-news-grid">
          {news.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <div className="quanfeng-news-image-wrap">
                  <img alt={item.title} src={withBasePath(item.image)} />
                </div>
                <div className="quanfeng-news-copy">
                  <h2>{item.title}</h2>
                  <div className="quanfeng-news-date">
                    {isChinese ? "发布时间：" : "POST TIME： "}
                    {item.date}
                  </div>
                  <div className="quanfeng-news-button">{isChinese ? "查看详情 >>" : "Details>>"}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link className="quanfeng-news-more" href={newsMoreHref}>
          {newsMoreLabel}
        </Link>
      </div>
    </section>
  );
}

export function QuanfengHomePage({ locale = "en" }: { locale?: QuanfengLocale }) {
  return (
    <QuanfengSiteShell locale={locale}>
      <HeroCarousel locale={locale} />
      <ServiceGrid locale={locale} />
      <AboutSection locale={locale} />
      <ProductGrid locale={locale} />
      <NewsSection locale={locale} />
    </QuanfengSiteShell>
  );
}
