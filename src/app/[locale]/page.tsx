import ContactForm from "@/components/contact-form";
import CustomButton from "@/components/custom-button";
import CvButton from "@/components/cv-button";
import ExperienceTimeline from "@/components/experience-timeline";
import GridAnimation from "@/components/grid-animation";
import ProjectSlider from "@/components/project-slider";
import SocialLinks from "@/components/social-links";
import { LocalizedPageProps } from "@/navigation";
import { Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import LathamPreview from "@/assets/latham-preview.png";
import LosChavezPreview from "@/assets/los_chavez_preview.png";
import RangelPreview from "@/assets/rangel-preview.png";
import QuatrobusPreview from "@/assets/quatrobus-preview.png";
import TurismomerPreview from "@/assets/turismomer-preview.png";
import PortfolioPreview from "@/assets/portfolio-preview.png";

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
      <section
        id="about"
        className="container scroll-m-20 lg:scroll-m-40 py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10"
      >
        <div className="flex flex-col items-center col-span-1 gap-4 lg:col-span-3 md:items-start">
          <h2 className="font-bold text-2xl lg:text-4xl text-primary-700">
            {t("about_title")}
          </h2>
          <p className="text-center max-sm:text-sm lg:text-base font-ubuntu md:text-start text-balance">
            {t("about_me")}
          </p>
          <CvButton>{t("cv")}</CvButton>
        </div>
        <div className="max-lg:max-w-[450px] w-full max-lg:place-self-center flex flex-col col-span-1 justify-center lg:col-span-2 lg:col-start-5">
          <div className="flex items-center gap-6">
            <span className="min-w-14 lg:min-w-20 text-3xl lg:text-4xl flex items-center gap-2">
              3 <p className="text-primary-700">+</p>
            </span>
            <span className="font-ubuntu">{t("yoe")}</span>
          </div>
          <Divider className="my-4" />
          <div className="flex items-center gap-6">
            <span className="min-w-14 lg:min-w-20 text-3xl lg:text-4xl flex items-center gap-2">
              20 <p className="text-primary-700">+</p>
            </span>
            <span className="font-ubuntu">{t("projects_made")}</span>
          </div>
        </div>
      </section>
      <section
        id="experience"
        className="container scroll-m-10 lg:scroll-m-32 py-10 lg:py-20 flex flex-col items-center gap-8"
      >
        <h2 className="font-bold text-2xl lg:text-4xl text-primary-700">
          {t("my_experience")}
        </h2>
        <ExperienceTimeline
          jobs={[
            {
              time: `03 / 22 — ${t("jobs.today")}`,
              title: t("jobs.0.title"),
              company: "MCeTS del Perú",
              description: [
                t("jobs.0.text.0"),
                t("jobs.0.text.1"),
                t("jobs.0.text.2"),
              ],
            },
            {
              time: "03 / 21 — 02 / 22",
              title: t("jobs.1.title"),
              company: "JABES Asesores y Consultores",
              description: [t("jobs.1.text")],
            },
            {
              time: "08 / 20 — 02 / 21",
              title: t("jobs.2.title"),
              company: "Freelance",
              description: [t("jobs.2.text")],
            },
          ]}
        />
      </section>
      <section
        id="projects"
        className="container scroll-m-10 lg:scroll-m-20 py-10 lg:py-20 flex flex-col max-lg:items-center gap-8"
      >
        <h2 className="font-bold text-2xl lg:text-4xl text-primary-700">
          {t("latest_projects")}
        </h2>
        <ProjectSlider
          projects={[
            {
              title: t("portfolio"),
              category: "landing page",
              stack: ["Next.js", "Tailwind", "NextUI"],
              thumbnail: PortfolioPreview,
              links: {
                github: "https://github.com/Mark-Pineda-C/portfolio",
              },
              credits: {
                name: "Mark Pineda",
              },
            },
            {
              title: "Turismo Mer",
              category: "landing page",
              stack: ["Next.js", "NextUI", "Tailwind"],
              thumbnail: TurismomerPreview,
              credits: {
                name: "Adriana Cerrón",
                link: "https://www.linkedin.com/in/adriana-cerron-revilla/",
              },
            },
            {
              title: "Autobuses Los Chavez",
              category: "landing page",
              stack: ["Next.js", "Tailwind", "NextUI", "Mapbox", "Tanstack"],
              thumbnail: LosChavezPreview,
              links: {
                live: "https://autobusesloschavez.com",
              },
              credits: {
                name: "Fiorella Palomino",
                link: "https://www.linkedin.com/in/fiorella-jeannette-palomino-huallpa-6a84171a7/",
              },
            },
            {
              title: "Quatrobus",
              category: "web page",
              stack: ["Qwik.js", "Tailwind"],
              thumbnail: QuatrobusPreview,
              links: {
                live: "https://quatrobus.com",
              },
              credits: {
                name: "Natalia Rigacci",
                link: "https://www.linkedin.com/in/natalia-rigacci-a54471178/",
              },
            },
            {
              title: "Latham Perú",
              category: "web page",
              stack: ["Next.js", "Tailwind", "NextUI", "Next Themes"],
              thumbnail: LathamPreview,
              links: {
                live: "https://lathamperu.com.pe",
              },
              credits: {
                name: "Adriana Cerrón",
                link: "https://www.linkedin.com/in/adriana-cerron-revilla/",
              },
            },
            {
              title: "Transportes Rangel",
              category: "web page",
              stack: ["Next.js", "Tailwind"],
              thumbnail: RangelPreview,
              links: {
                live: "https://transportesrangel.com",
              },
              credits: {
                name: "Fiorella Palomino",
                link: "https://www.linkedin.com/in/fiorella-jeannette-palomino-huallpa-6a84171a7/",
              },
            },
          ]}
        />
      </section>
      {/* <section
        id="contact"
        className="container py-10 lg:py-20 flex flex-col items-center gap-8 lg:flex-row lg:justify-between"
      >
        <h2 className="font-bold text-2xl lg:text-4xl text-primary-700 text-center lg:text-start">
          <span className="max-lg:hidden text-xl text-foreground">
            {t("contact.0")} <br />
          </span>
          {t("contact.1")}
        </h2>
        <ContactForm
          translations={{
            name: t("contact.name"),
            message: t("contact.message"),
            send: t("contact.send"),
            complete_error: t("contact.complete_error"),
          }}
        />
      </section> */}
    </>
  );
}

