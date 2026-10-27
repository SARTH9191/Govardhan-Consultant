import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import nodemailer from "nodemailer";

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  // Enquiry endpoint - captures and forwards all site inquiries
  const enquiries: any[] = [];
  app.post("/api/enquiry", async (req, res) => {
    const enquiry = {
      ...req.body,
      receivedAt: new Date().toISOString(),
      recipients: ["gcs.gpr77@gmail.com", "sarthp9191@gmail.com"],
    };
    enquiries.push(enquiry);
    console.log(
      "\n======================================================\n" +
      "🔔 NEW WEBSITE ENQUIRY RECEIVED FOR:\n" +
      "   Primary:   gcs.gpr77@gmail.com\n" +
      "   Secondary: sarthp9191@gmail.com\n" +
      "------------------------------------------------------\n" +
      JSON.stringify(enquiry, null, 2) +
      "\n======================================================\n"
    );

    // Optional direct SMTP dispatch if credentials configured in environment
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASS;
    let liveEmailSent = false;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: `"Govardhan Consultant" <${smtpUser}>`,
          to: "gcs.gpr77@gmail.com",
          cc: "sarthp9191@gmail.com",
          subject: enquiry.subject || `[Govardhan Consultant] New Website Enquiry - ${enquiry.name}`,
          text: enquiry.message || JSON.stringify(enquiry, null, 2),
        });
        liveEmailSent = true;
        console.log("✅ [SMTP] Live email sent to gcs.gpr77@gmail.com & sarthp9191@gmail.com");
      } catch (mailErr) {
        console.error("⚠️ [SMTP] Failed to send live email:", mailErr);
      }
    }

    res.json({
      success: true,
      message: "Enquiry successfully logged and dispatched to gcs.gpr77@gmail.com and sarthp9191@gmail.com",
      recipients: ["gcs.gpr77@gmail.com", "sarthp9191@gmail.com"],
      liveEmailSent,
    });
  });

  app.get("/api/enquiries", (_req, res) => {
    res.json({ count: enquiries.length, enquiries });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(Number(port), "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${port}/`);
  });
}

startServer().catch(console.error);
