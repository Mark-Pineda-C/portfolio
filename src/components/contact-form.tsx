"use client";

import { sendEmail } from "@/actions";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useActionState, useMemo, useState } from "react";
import { useFormStatus } from "react-dom";
import { IcRoundCheck, SolarSendSquareBoldDuotone } from "./icons";

interface ContactFormProps {
  translations: {
    name: string;
    message: string;
    send: string;
    complete_error: string;
  };
}

export default function ContactForm({ translations }: ContactFormProps) {
  return (
    <form action={sendEmail} className="w-full max-w-[450px] space-y-4">
      <Input
        classNames={{ input: "font-ubuntu" }}
        label="Email"
        variant="underlined"
        color="primary"
        name="email"
        required
        isRequired
        type="email"
      />
      <Input
        classNames={{ input: "font-ubuntu" }}
        label={translations.name}
        variant="underlined"
        color="primary"
        name="name"
      />
      <Textarea
        required
        isRequired
        label={translations.message}
        variant="underlined"
        color="primary"
        classNames={{
          input: "font-ubuntu",
        }}
        name="message"
      />
      <SubmitButton>{translations.send}</SubmitButton>
    </form>
  );
}

interface SubmitButtonProps {
  children: React.ReactNode;
}

const SubmitButton = ({ children }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      <Button
        type="submit"
        variant="solid"
        isLoading={pending}
        className="bg-primary-700 hover:bg-primary-600 text-content1"
        endContent={
          <SolarSendSquareBoldDuotone className="rotate-180 text-xl text-primary-200" />
        }
      >
        {children}
      </Button>
    </>
  );
};
