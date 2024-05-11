import CustomButton from "@/components/custom-button";
import GridAnimation from "@/components/grid-animation";
import SocialLinks from "@/components/social-links";
import { Link, LocalizedPageProps } from "@/navigation";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

export default function Home({ params: { locale } }: LocalizedPageProps) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");

  return (
    <>
      <main className="h-[calc(100vh-64px)] container relative w-full overflow-hidden">
        <div className="overflow-hidden size-[300px] lg:size-[400px] rotate-45 absolute z-0 left-0 -translate-x-1/2 bottom-0">
          <GridAnimation />
        </div>
        <div className="overflow-hidden size-[300px] lg:size-[400px] -scale-x-100 -rotate-45 absolute z-0 right-0 translate-x-1/2 -top-5 md:top-auto md:bottom-0">
          <GridAnimation />
        </div>
        <div className="h-full relative z-10 flex flex-col items-center justify-center gap-14">
          <hgroup className="text-center flex flex-col items-center gap-6">
            <div className="p-0.5 rounded-small relative bg-background overflow-hidden">
              <p className="px-2 py-1 bg-background relative z-10 rounded-small max-sm:text-sm lg:text-xl">
                {t("hello")}
              </p>
              <div className="[clip-path:_polygon(60%_50%,_100%_25%,_100%_100%,_60%_100%)]  absolute z-0 top-0 grid place-items-center left-0 w-full h-full">
                <div className="absolute z-20 w-full h-full top-0 left-0 bg-gradient-to-b from-background from-20% to-transparent"></div>
                <div className="absolute z-10 -scale-x-100 tranlate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2 w-2 h-[50vh]">
                  <div
                    className=" blur-md bg-primary-700 h-full w-full animate-spin-clockwise animate-iteration-count-infinite"
                    style={{ animationDuration: "10s" }}
                  ></div>
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl text-primary-700 font-bold lg:text-7xl">
              {t("title")}
            </h1>
          </hgroup>
          <CustomButton>{t("more_info")}</CustomButton>
          <SocialLinks>{t("socials")}</SocialLinks>
        </div>
      </main>
      {/* <section className="container">
        <h1>alsdhalksdhasjd</h1>
      </section> */}
    </>
  );
}

