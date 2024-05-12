"use client";

import { Button } from "@nextui-org/react";
import { BasilLinkedinSolid, FormkitGithub } from "./icons";

export default function SocialLinks({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center relative gap-4 w-64">
      <span>{children}</span>
      <div className="flex-1 h-px rounded-full bg-black dark:bg-white"></div>
      <Button
        size="sm"
        as="a"
        href="https://github.com/Mark-Pineda-C"
        target="_blank"
        isIconOnly
        variant="light"
      >
        <FormkitGithub className="text-lg" />
      </Button>
      <Button
        size="sm"
        as="a"
        href="https://www.linkedin.com/in/markpinedacubillas/"
        target="_blank"
        isIconOnly
        variant="light"
      >
        <BasilLinkedinSolid className="text-lg" />
      </Button>
      {/* <Button
        size="sm"
        as="a"
        href=""
        target="_blank"
        isIconOnly
        variant="light"
      >
        <BasilLinkedinSolid className="text-lg" />
      </Button> */}
    </div>
  );
}
