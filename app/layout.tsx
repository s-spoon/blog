import Head from "next/head";
import "./global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { ResponsiveCarousel } from "./components/CarouselNav";
import { OurCompany } from "./components/OurCompany";
import { OurServices } from "./components/OurServices";
import { Industries } from "./components/Industries";
import { DiscoverNow } from "./components/DiscoverNow";
import { FromOurBlog } from "./components/FromOurBlog";
import FAQAccordion from "./components/FAQAccordion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import questions from "../public/FaqQA.json";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Full Stack Development Agency in USA",
    template: "%s | Full Stack Development Agency in USA",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <Head>
          <link
            rel="icon"
            href="/imgs/softnix-icon.png"
            sizes="32x32"
            type="image/png"
          />
        </Head>
        <main>
          <Navbar />
          <ResponsiveCarousel />
          <OurCompany />
          <OurServices />
          <Industries />
          <DiscoverNow />
          <FromOurBlog />
          <FAQAccordion questions={questions} />
          {/* {children} */}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
