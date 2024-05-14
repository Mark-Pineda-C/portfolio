import type { Metadata } from "next";
import { Orbitron, Ubuntu } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Header from "@/components/header";
import { useTranslations } from "next-intl";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";

const orbitron = Orbitron({ subsets: ["latin"] });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-ubuntu",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
    keywords: [
      "Mark Pineda",
      "Mark",
      "Pineda",
      "Software Engineer",
      "Developer",
      "Web Developer",
      "Frontend Developer",
      "Fullstack Developer",
      "React",
      "Next.js",
      "Web Development",
    ],
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return (
    <html lang="en" className="dark">
      <body
        className={`bg-background overflow-x-hidden ${ubuntu.variable} ${orbitron.className}`}
      >
        <Providers>
          <Header
            translations={{
              projects: t("header.projects"),
              experience: t("header.experience"),
              contact: t("header.contact"),
              english: t("header.english"),
              spanish: t("header.spanish"),
            }}
          />
          {children}
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

