"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import { Chip } from "@nextui-org/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface Props {
  projects: {
    thumbnail: StaticImageData;
    title: string;
    stack: string[];
    category: "web page" | "app" | "design" | "landing page";
    links?: {
      github?: string;
      live?: string;
    };
  }[];
}

export default function ProjectSlider({ projects }: Props) {
  return (
    <div className="w-full relative">
      <div className="absolute max-lg:hidden top-0 left-0 z-10 pointer-events-none w-full h-full bg-gradient-to-l from-background from-10% to-trasnparent to-20%"></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        modules={[Pagination, Autoplay]}
        pagination={{
          horizontalClass: "swiper-pagination-horizontal",
          clickable: true,
          dynamicBullets: true,
        }}
        wrapperClass="!pb-9"
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3, pagination: { dynamicBullets: false } },
          1280: { slidesPerView: 4 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide
            key={`project_${index}`}
            className="p-2 !flex !flex-col !gap-2"
          >
            <div className="relative w-full aspect-video rounded-medium overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex items-center gap-2">
              {project.stack.map((tech) => (
                <Chip
                  key={`project_${index}_${tech}`}
                  color="primary"
                  variant="flat"
                  className="font-ubuntu"
                  size="sm"
                >
                  {tech}
                </Chip>
              ))}
            </div>
            <span className="text-small font-ubuntu text-content4">
              {project.category}
            </span>
            <h3 className="text-lg font-medium">{project.title}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
