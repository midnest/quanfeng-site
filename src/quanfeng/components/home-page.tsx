/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { QuanfengSiteShell } from "@/quanfeng/components/site-shell";
import { withBasePath } from "@/quanfeng/lib/base-path";
import { getQuanfengHomeData } from "@/quanfeng/lib/data";
import type { QuanfengLocale } from "@/quanfeng/types";

function HeroSection({ locale }: { locale: QuanfengLocale }) {
  const isChinese = locale === "cn";
  return (
    <section className="simple-hero">
      <div className="simple-hero-content">
        <h1>{isChinese ? "专业风机制造" : "Professional Fan Manufacturing"}</h1>
        <p>
          {isChinese
            ? "20年专注风机研发与生产，为您提供高品质散热解决方案"
            : "20 years of expertise in fan R&D and manufacturing, providing high-quality thermal solutions"}
        </p>
        <div className="simple-hero-buttons">
          <Link href={locale === "cn" ? "/cn/category/3" : "/category/57"} className="simple-btn-primary">
            {isChinese ? "查看产品" : "View Products"}
          </Link>
          <Link href={locale === "cn" ? "/cn/category/1" : "/category/54"} className="simple-btn-outline">
            {isChinese ? "了解我们" : "About Us"}
          </Link>
        </div>
      </div>
      <div className="simple-hero-image">
        <img src={withBasePath("/images/quanfeng/hero/slide-1.jpg")} alt="Hero" />
      </div>
    </section>
  );
}

function ServicesSection({ locale }: { locale: QuanfengLocale }) {
  const isChinese = locale === "cn";
  const services = isChinese
    ? [
        { title: "交流风机", desc: "高效节能，稳定可靠", icon: "/images/quanfeng/cn/services/icon-1.jpg" },
        { title: "直流风机", desc: "低噪音，长寿命", icon: "/images/quanfeng/cn/services/icon-2.jpg" },
        { title: "电机系列", desc: "精密制造，性能卓越", icon: "/images/quanfeng/cn/services/icon-3.jpg" },
        { title: "防护网罩", desc: "安全防护，品质保障", icon: "/images/quanfeng/cn/services/icon-4.jpg" },
      ]
    : [
        { title: "AC Fan", desc: "High efficiency, stable performance", icon: "/images/quanfeng/services/icon-1.jpg" },
        { title: "DC Fan", desc: "Low noise, long lifespan", icon: "/images/quanfeng/services/icon-2.jpg" },
        { title: "Motor Series", desc: "Precision manufacturing", icon: "/images/quanfeng/services/icon-3.jpg" },
        { title: "Protective Net", desc: "Safety protection", icon: "/images/quanfeng/services/icon-4.jpg" },
      ];

  return (
    <section className="simple-services">
      <div className="simple-container">
        <h2 className="simple-section-title">{isChinese ? "核心产品" : "Core Products"}</h2>
        <div className="simple-services-grid">
          {services.map((service, index) => (
            <Link key={index} href={locale === "cn" ? "/cn/category/3" : "/category/57"} className="simple-service-card">
              <div className="simple-service-icon">
                <img src={withBasePath(service.icon)} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection({ locale }: { locale: QuanfengLocale }) {
  const isChinese = locale === "cn";
  return (
    <section className="simple-about">
      <div className="simple-container">
        <div className="simple-about-grid">
          <div className="simple-about-content">
            <h2>{isChinese ? "关于泉风" : "About Quanfeng"}</h2>
            <p>
              {isChinese
                ? "泉风公司成立于2004年，专注于风机、电机的研发、生产与销售。公司拥有先进的生产设备和完善的质量管理体系，产品广泛应用于电子设备、家用电器、工业设备等领域。"
                : "Founded in 2004, Quanfeng specializes in R&D, production and sales of fans and motors. With advanced equipment and quality management systems, our products are widely used in electronics, home appliances, and industrial equipment."}
            </p>
            <Link href={locale === "cn" ? "/cn/category/1" : "/category/54"} className="simple-link">
              {isChinese ? "了解更多 →" : "Learn More →"}
            </Link>
          </div>
          <div className="simple-about-image">
            <img src={withBasePath(locale === "cn" ? "/images/quanfeng/cn/about/video-cover.jpg" : "/images/quanfeng/about/video-cover.jpg")} alt="About" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection({ locale }: { locale: QuanfengLocale }) {
  const isChinese = locale === "cn";
  const products = isChinese
    ? [
        { name: "QA9225 交流风机", image: "/images/quanfeng/products/qa9225.jpg" },
        { name: "QA12038 交流风机", image: "/images/quanfeng/products/qa12038.jpg" },
        { name: "QA20060 交流风机", image: "/images/quanfeng/products/qa20060.jpg" },
        { name: "QA22090 交流风机", image: "/images/quanfeng/products/qa22090.jpg" },
      ]
    : [
        { name: "QA9225 AC Fan", image: "/images/quanfeng/products/qa9225.jpg" },
        { name: "QA12038 AC Fan", image: "/images/quanfeng/products/qa12038.jpg" },
        { name: "QA20060 AC Fan", image: "/images/quanfeng/products/qa20060.jpg" },
        { name: "QA22090 AC Fan", image: "/images/quanfeng/products/qa22090.jpg" },
      ];

  return (
    <section className="simple-products">
      <div className="simple-container">
        <h2 className="simple-section-title">{isChinese ? "热销产品" : "Hot Products"}</h2>
        <div className="simple-products-grid">
          {products.map((product, index) => (
            <Link key={index} href={locale === "cn" ? "/cn/category/3" : "/category/57"} className="simple-product-card">
              <div className="simple-product-image">
                <img src={withBasePath(product.image)} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
            </Link>
          ))}
        </div>
        <div className="simple-center">
          <Link href={locale === "cn" ? "/cn/category/3" : "/category/57"} className="simple-btn-primary">
            {isChinese ? "查看全部产品" : "View All Products"}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ locale }: { locale: QuanfengLocale }) {
  const isChinese = locale === "cn";
  return (
    <section className="simple-contact">
      <div className="simple-container">
        <div className="simple-contact-content">
          <h2>{isChinese ? "联系我们" : "Contact Us"}</h2>
          <p>
            {isChinese
              ? "如有任何疑问或需求，请随时与我们联系"
              : "Feel free to contact us with any questions or requirements"}
          </p>
          <Link href={locale === "cn" ? "/cn/category/61" : "/category/61"} className="simple-btn-primary">
            {isChinese ? "立即咨询" : "Contact Now"}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function QuanfengHomePage({ locale = "en" }: { locale?: QuanfengLocale }) {
  return (
    <QuanfengSiteShell locale={locale}>
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <AboutSection locale={locale} />
      <ProductsSection locale={locale} />
      <ContactSection locale={locale} />
    </QuanfengSiteShell>
  );
}
