"use client";

import { Button } from "@nextui-org/react";
import { SolarDownloadMinimalisticBoldDuotone } from "./icons";
import { useLocale } from "next-intl";

export default function CvButton({ children }: { children: React.ReactNode }) {
  const lang = useLocale();
  return (
    <Button
      as="a"
      href={`/curriculum_vitae_mark_pineda_${lang}.pdf`}
      download
      variant="solid"
      className="bg-primary-700 hover:bg-primary-600 text-content1 font-ubuntu"
      startContent={
        <SolarDownloadMinimalisticBoldDuotone className="text-lg" />
      }
    >
      {children}
    </Button>
  );
}
