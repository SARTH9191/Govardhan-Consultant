// Centralized enquiry handler for Govardhan Consultant
// Primary: gcs.gpr77@gmail.com | Secondary (CC): sarthp9191@gmail.com
// WhatsApp: +91 99750 42346

export const PRIMARY_ENQUIRY_EMAIL = "gcs.gpr77@gmail.com";
export const SECONDARY_ENQUIRY_EMAIL = "sarthp9191@gmail.com";
export const CONTACT_PHONE = "+91 99750 42346";

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  service?: string;
  budget?: string;
  plotSize?: string;
  message?: string;
  date?: string;
  type?: "contact" | "estimate" | "site-visit" | "general";
}

export interface EnquiryResult {
  success: boolean;
  subject: string;
  body: string;
  mailtoUrl: string;
  gmailWebUrl: string;
  whatsappUrl: string;
}

export function buildEnquiryContent(payload: EnquiryPayload) {
  const city = payload.city || "Solapur / Pandharpur / Sangola / Mangalwedha";
  const subject = `[Govardhan Consultant] New Construction Enquiry - ${payload.name} (${city})`;

  const body = `NEW WEBSITE ENQUIRY - GOVARDHAN CONSULTANT
==================================================
Date & Time: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
Customer Name: ${payload.name}
Mobile Number: ${payload.phone}
Customer Email: ${payload.email || "Not provided"}
Construction City: ${city}
Service / Category: ${payload.service || "Turnkey Construction / Estimation"}
Budget Range: ${payload.budget || "Not specified"}
Plot Area: ${payload.plotSize ? payload.plotSize + " sq.ft." : "Not specified"}
Preferred Schedule / Slot: ${payload.date || "Immediate"}
Enquiry Type: ${payload.type || "General Enquiry"}

Message / Project Details:
${payload.message || "Customer requested detailed consultation, structural estimate, and site inspection."}
==================================================
Recipients:
Primary: ${PRIMARY_ENQUIRY_EMAIL}
Secondary (CC): ${SECONDARY_ENQUIRY_EMAIL}

Govardhan Consultant • Engineers & Turnkey Contractors
Pandharpur • Solapur • Sangola • Mangalwedha
Phone: ${CONTACT_PHONE}`;

  const mailtoUrl = `mailto:${PRIMARY_ENQUIRY_EMAIL}?cc=${SECONDARY_ENQUIRY_EMAIL}&subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PRIMARY_ENQUIRY_EMAIL}&cc=${SECONDARY_ENQUIRY_EMAIL}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const whatsappText = `*NEW WEBSITE ENQUIRY - GOVARDHAN CONSULTANT*\n` +
    `👤 *Name:* ${payload.name}\n` +
    `📱 *Phone:* ${payload.phone}\n` +
    `📧 *Email:* ${payload.email || "N/A"}\n` +
    `📍 *City:* ${city}\n` +
    `🏗️ *Service:* ${payload.service || "Turnkey Construction"}\n` +
    `💰 *Budget:* ${payload.budget || "N/A"}\n` +
    `📝 *Details:* ${payload.message || "Site consultation required."}\n\n` +
    `_Forwarded to ${PRIMARY_ENQUIRY_EMAIL} & ${SECONDARY_ENQUIRY_EMAIL}_`;

  const whatsappUrl = `https://wa.me/919975042346?text=${encodeURIComponent(whatsappText)}`;

  return { subject, body, mailtoUrl, gmailWebUrl, whatsappUrl };
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  const { subject, body, mailtoUrl, gmailWebUrl, whatsappUrl } = buildEnquiryContent(payload);

  // 1. Post to local / production backend API to log and store the enquiry
  try {
    await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        subject,
        recipients: [PRIMARY_ENQUIRY_EMAIL, SECONDARY_ENQUIRY_EMAIL],
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.warn("Backend enquiry API log warning:", err);
  }

  // 2. Trigger mailto cleanly via hidden iframe (does not create orphan about:blank tabs)
  try {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = mailtoUrl;
    document.body.appendChild(iframe);
    setTimeout(() => {
      try {
        document.body.removeChild(iframe);
      } catch {
        /* ignore */
      }
    }, 2000);
  } catch (e) {
    console.warn("Mailto iframe trigger error:", e);
  }

  return {
    success: true,
    subject,
    body,
    mailtoUrl,
    gmailWebUrl,
    whatsappUrl,
  };
}
