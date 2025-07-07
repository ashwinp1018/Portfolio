
import nodemailer from "nodemailer";

const SMTP_USER = "ashwin";
const SMTP_PASS = "ashwin1810";

const transporter = nodemailer.createTransport({
  host: "mail.tneuserver.online",
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendMail = async ({
  from = "ashwin@tneuserver.online",
  to,
  subject,
  text,
  html,
}) => {
  try {
    const info = await transporter.sendMail({
      from: `Ashwin Mailer <${from}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("✅ Mail sent successfully!");
    console.log(`To: ${to}`);
    console.log(`📄 Message ID: ${info.messageId}`);
    console.log(`🔗 Preview URL: ${nodemailer.getTestMessageUrl(info) || "N/A"}`);
  } catch (error) {
    console.error("❌ Mail error:", error);
    throw error;
  }
};
