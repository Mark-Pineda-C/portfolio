"use client";

import { Button } from "@nextui-org/react";

export default function CustomButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Button
      variant="solid"
      className="bg-primary-700 hover:bg-primary-600 text-content1"
    >
      {children}
    </Button>
  );
}
