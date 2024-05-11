"use client";

import { Button } from "@nextui-org/react";
import { SolarDownloadMinimalisticBoldDuotone } from "./icons";

export default function CvButton({ children }: { children: React.ReactNode }) {
  return (
    <Button
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
