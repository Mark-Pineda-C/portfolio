"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import {
  Button,
  Card,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { FormkitGithub, IconoirWebWindow } from "./icons";
import { useLocale } from "next-intl";

interface ProjectCardProps {
  thumbnail: StaticImageData;
  title: string;
  stack: string[];
  category: "web page" | "app" | "design" | "landing page";
  links?: {
    github?: string;
    live?: string;
  };
  credits?: {
    name: string;
    link?: string;
  };
  description?: string;
}

interface Props {
  projects: ProjectCardProps[];
}

export default function ProjectSlider({ projects }: Props) {
  return (
    <div className="w-full relative">
      <div className="absolute max-lg:hidden top-0 left-0 z-10 pointer-events-none w-full h-full bg-gradient-to-l from-background from-10%  via-background/50 via-20% to-background/0 to-30%"></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{
          horizontalClass: "swiper-pagination-horizontal",
          clickable: true,
          dynamicBullets: true,
        }}
        wrapperClass="!pb-9"
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3, pagination: { dynamicBullets: false } },
          1280: { slidesPerView: 4, pagination: { dynamicBullets: false } },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={`project_${index}`}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function ProjectCard({
  category,
  stack,
  thumbnail,
  title,
  links,
  credits,
  description,
}: ProjectCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const lang = useLocale();
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex items-center gap-2">
            <span>{title}</span>
            <span className="text-content4 text-small">{category}</span>
          </ModalHeader>
          <ModalBody className="flex flex-col py-4">
            <div className="relative w-full aspect-video rounded-medium overflow-hidden">
              <Image
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex items-center gap-2">
              {stack.map((tech, idx) => (
                <Chip
                  key={`project_${title}_${idx}_${tech}`}
                  color="primary"
                  variant="flat"
                  className="font-ubuntu"
                  size="sm"
                >
                  {tech}
                </Chip>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 grid items-center">
                {links && (
                  <div className="flex items-center gap-4">
                    {links.github && (
                      <Button
                        as="a"
                        href={links.github}
                        target="_blank"
                        className="w-min"
                        startContent={<FormkitGithub className="text-xl" />}
                      >
                        Github
                      </Button>
                    )}
                    {links.live && (
                      <Button
                        as="a"
                        href={links.live}
                        target="_blank"
                        className="w-min"
                        startContent={<IconoirWebWindow className="text-xl" />}
                      >
                        Live
                      </Button>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-1">
                {credits && (
                  <>
                    <h4 className="font-medium text-small">
                      {lang === "es" ? "Diseño por" : "Design by"}
                    </h4>
                    {credits.link ? (
                      <Chip
                        variant="flat"
                        as="a"
                        target="_blank"
                        href={credits.link}
                        className="font-ubuntu text-xs"
                        size="sm"
                      >
                        @ {credits.name}
                      </Chip>
                    ) : (
                      <Chip className="font-ubuntu text-xs" size="sm">
                        @ {credits.name}
                      </Chip>
                    )}
                  </>
                )}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Card
        isPressable
        className="bg-transparent shadow-none p-2 !flex !flex-col !gap-2"
      >
        <div
          onClick={onOpen}
          className="relative w-full aspect-video rounded-medium overflow-hidden"
        >
          <Image
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex items-center gap-2">
          {stack.slice(0, 3).map((tech, idx) => (
            <Chip
              key={`project_${title}_${idx}_${tech}`}
              color="primary"
              variant="flat"
              className="font-ubuntu"
              size="sm"
            >
              {tech}
            </Chip>
          ))}
        </div>
        <span className="text-small font-ubuntu text-content4">{category}</span>
        <h3 className="font-medium text-start">{title}</h3>
      </Card>
    </>
  );
}
