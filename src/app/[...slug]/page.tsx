import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuanfengInnerPage } from "@/quanfeng/components/inner-page";
import { getAllQuanfengStaticPaths, getQuanfengPage } from "@/quanfeng/lib/pages";

function pathFromSlug(slug: string[]) {
  return `/${slug.join("/")}`;
}

export async function generateStaticParams() {
  return getAllQuanfengStaticPaths()
    .filter((pathname) => pathname !== "/")
    .map((pathname) => ({
      slug: pathname.replace(/^\/+/, "").split("/"),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pathname = pathFromSlug(slug);
  const page = getQuanfengPage(pathname);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.title,
  };
}

export default async function QuanfengDynamicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const pathname = pathFromSlug(slug);
  const page = getQuanfengPage(pathname);

  if (!page) {
    notFound();
  }

  return <QuanfengInnerPage page={page} pathname={pathname} />;
}
