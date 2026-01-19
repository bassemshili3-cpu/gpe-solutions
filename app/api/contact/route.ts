import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // important: pas edge
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Debug: vérifier que les env sont chargées
    const envCheck = {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: !!process.env.SMTP_PORT,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
    };

    if (!envCheck.SMTP_HOST || !envCheck.SMTP_PORT || !envCheck.SMTP_USER || !envCheck.SMTP_PASS) {
      return NextResponse.json(
        { error: "Variables SMTP manquantes dans .env.local", envCheck },
        { status: 500 }
      );
    }

    const port = Number(process.env.SMTP_PORT);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,     // 465 => true
      requireTLS: port === 587, // 587 => true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1) Vérifie la connexion SMTP (donne l’erreur exacte)
    await transporter.verify();

    // 2) Envoi
    await transporter.sendMail({
      from: `"GPE Solutions" <${process.env.SMTP_USER}>`,
      to: "contact@gpe-solutions.fr",
      replyTo: data.email,
      subject: "Nouvelle demande via le site",
      text:
        `Raison sociale: ${data.raisonSociale}\n` +
        `Effectif: ${data.effectif}\n` +
        `Email: ${data.email}\n` +
        `Téléphone: ${data.telephone}\n\n` +
        `Message:\n${data.message}\n`,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err);

    return NextResponse.json(
      {
        error: "Erreur serveur",
        name: err?.name,
        code: err?.code,
        message: err?.message,
        response: err?.response,
        command: err?.command,
      },
      { status: 500 }
    );
  }
}
