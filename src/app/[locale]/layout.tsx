import type { Metadata } from "next";
import { Orbitron, Ubuntu } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import { unstable_setRequestLocale } from "next-intl/server";
import Header from "@/components/header";
import { useTranslations } from "next-intl";

const orbitron = Orbitron({ subsets: ["latin"] });
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Portafolio personal",
  description: "Portafolio personal de Mark Pineda",
};

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
        </Providers>
      </body>
    </html>
  );
}

