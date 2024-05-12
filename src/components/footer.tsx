"use client";

import { Button, Divider } from "@nextui-org/react";
import { FormkitGithub, BasilLinkedinSolid } from "./icons";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="container">
        <Divider />
        <div className="flex items-center justify-center gap-4 py-4">
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
        </div>
      </div>
    </footer>
  );
}
