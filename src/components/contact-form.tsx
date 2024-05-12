"use client";

import { sendEmail } from "@/actions";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useFormStatus } from "react-dom";
import { IconamoonSendDuotone } from "./icons";
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
        className="bg-primary-700 hover:bg-primary-600 text-background"
        endContent={<IconamoonSendDuotone className="text-xl" />}
      >
        {children}
      </Button>
    </>
  );
};
