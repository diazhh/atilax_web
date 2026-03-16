import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "mail.atilax.io",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "info@atilax.io",
    pass: process.env.SMTP_PASS || "",
  },
  tls: { rejectUnauthorized: false },
});

function adminEmailHTML(data: {
  name: string;
  email: string;
  company: string;
  phone: string;
  solution: string;
  message: string;
}) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <tr><td style="background:linear-gradient(135deg,#0c1929 0%,#1a365d 100%);padding:32px 40px;">
          <h1 style="margin:0;color:#f59e0b;font-size:24px;">ATILAX</h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:14px;">Nueva solicitud de contacto</p>
        </td></tr>
        <tr><td style="padding:32px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
              <span style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Nombre</span><br>
              <span style="color:#18181b;font-size:16px;font-weight:600;">${data.name}</span>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
              <span style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Email</span><br>
              <a href="mailto:${data.email}" style="color:#2563eb;font-size:16px;font-weight:600;text-decoration:none;">${data.email}</a>
            </td></tr>
            <tr><td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
              <span style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Empresa</span><br>
              <span style="color:#18181b;font-size:16px;font-weight:600;">${data.company}</span>
            </td></tr>
            ${data.phone ? `<tr><td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
              <span style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Telefono</span><br>
              <span style="color:#18181b;font-size:16px;">${data.phone}</span>
            </td></tr>` : ""}
            <tr><td style="padding:12px 0;border-bottom:1px solid #e4e4e7;">
              <span style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Solucion de interes</span><br>
              <span style="display:inline-block;background:#f59e0b;color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:600;">${data.solution}</span>
            </td></tr>
            ${data.message ? `<tr><td style="padding:12px 0;">
              <span style="color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;">Mensaje</span><br>
              <p style="color:#18181b;font-size:14px;line-height:1.6;margin:8px 0 0;background:#f4f4f5;padding:16px;border-radius:8px;">${data.message}</p>
            </td></tr>` : ""}
          </table>
        </td></tr>
        <tr><td style="background:#f4f4f5;padding:20px 40px;text-align:center;">
          <p style="margin:0;color:#71717a;font-size:12px;">Responder directamente a este correo contactara al solicitante.</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function autoReplyHTML(name: string) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
        <tr><td style="background:linear-gradient(135deg,#0c1929 0%,#1a365d 100%);padding:40px;text-align:center;">
          <h1 style="margin:0;color:#f59e0b;font-size:28px;letter-spacing:1px;">ATILAX</h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:13px;letter-spacing:2px;">PLATAFORMA IoT INDUSTRIAL</p>
        </td></tr>
        <tr><td style="padding:40px;">
          <h2 style="margin:0 0 16px;color:#18181b;font-size:22px;">Hola ${name},</h2>
          <p style="color:#52525b;font-size:15px;line-height:1.7;margin:0 0 20px;">
            Gracias por contactarnos. Hemos recibido su solicitud y nuestro equipo la esta revisando.
          </p>
          <p style="color:#52525b;font-size:15px;line-height:1.7;margin:0 0 24px;">
            Nos pondremos en contacto con usted en las proximas <strong>24 horas habiles</strong> para coordinar una demostracion personalizada de la plataforma ATILAX.
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#fffbeb;border-radius:8px;border-left:4px solid #f59e0b;margin:0 0 24px;">
            <tr><td style="padding:16px 20px;">
              <p style="margin:0;color:#92400e;font-size:14px;font-weight:600;">Mientras tanto, puede:</p>
              <ul style="margin:8px 0 0;padding-left:20px;color:#92400e;font-size:14px;line-height:1.8;">
                <li>Explorar nuestra <a href="https://panel.atilax.io" style="color:#d97706;font-weight:600;">plataforma demo</a></li>
                <li>Conocer mas sobre nuestras <a href="https://atilax.io/soluciones" style="color:#d97706;font-weight:600;">soluciones</a></li>
              </ul>
            </td></tr>
          </table>
          <p style="color:#52525b;font-size:15px;line-height:1.7;margin:0;">
            Saludos cordiales,<br>
            <strong>Equipo ATILAX</strong>
          </p>
        </td></tr>
        <tr><td style="background:#0c1929;padding:24px 40px;text-align:center;">
          <p style="margin:0 0 8px;color:rgba(255,255,255,0.9);font-size:13px;font-weight:600;">ATILAX - Inteligencia Digital para la Industria</p>
          <p style="margin:0;color:rgba(255,255,255,0.5);font-size:12px;">
            info@atilax.io | +58 412 609 9040 | atilax.io
          </p>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.3);font-size:11px;">
            Desarrollado por CONTROLTECH
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, solution, message } = body;

    if (!name || !email || !company || !solution) {
      return NextResponse.json(
        { error: "Campos obligatorios faltantes" },
        { status: 400 }
      );
    }

    // Send admin notification to diazhh@gmail.com
    await transporter.sendMail({
      from: `"ATILAX Web" <${process.env.SMTP_USER || "info@atilax.io"}>`,
      to: process.env.ADMIN_EMAIL || "diazhh@gmail.com",
      replyTo: email,
      subject: `[ATILAX] Nueva solicitud de ${name} - ${company}`,
      html: adminEmailHTML({ name, email, company, phone, solution, message }),
    });

    // Send auto-reply to the person
    await transporter.sendMail({
      from: `"ATILAX" <${process.env.SMTP_USER || "info@atilax.io"}>`,
      to: email,
      subject: "Hemos recibido su solicitud - ATILAX",
      html: autoReplyHTML(name),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
