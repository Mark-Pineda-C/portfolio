"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const email = formData.get("email") as string;
  const name = (formData.get("name") as string) || "Anónimo";
  const message = formData.get("message") as string;

  try {
    const data = await resend.emails.send({
      from: "Admin <portfolio@mail.mark-pineda.dev>",
      to: ["mfpc1500@gmail.com"],
      subject: `Nuevo mensaje de ${name} <${email}>`,
      html: `
        <h1>Nuevo mensaje de ${name}</h1>
        <p>${message}</p>
      `,
    });
    if (data.error) {
      return { data: null, error: JSON.stringify(data.error) };
    }
    if (data.data) {
      return { data: data.data, error: null };
    }
    return { data: null, error: "Sin data" };
  } catch (error) {
    return { data: null, error: "Error al enviar el mensaje" };
  }
}
