interface Env {
  RESEND_API_KEY: string;
  CONTACT_FROM_EMAIL: string;
}

interface ContactFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
}

const recipient = "info@aasthafurniture.in";
const allowedServices = new Set([
  "custom-made-furniture",
  "bulk-wholesale-furniture",
  "furniture-repair-restoration",
  "other",
]);
const maxBodySize = 16_384;

function jsonResponse(body: { ok: false; error: string }, status: number) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function getFormValue(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;
  const contentLength = Number(request.headers.get("content-length"));

  if (Number.isFinite(contentLength) && contentLength > maxBodySize) {
    return jsonResponse({ ok: false, error: "Enquiry is too large." }, 413);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid form submission." }, 400);
  }

  const fields: ContactFields = {
    name: getFormValue(formData, "name"),
    email: getFormValue(formData, "email"),
    phone: getFormValue(formData, "phone"),
    service: getFormValue(formData, "service"),
    message: getFormValue(formData, "message"),
    website: getFormValue(formData, "website"),
  };

  if (fields.website) {
    return jsonResponse({ ok: false, error: "Invalid form submission." }, 400);
  }

  if (
    !fields.name ||
    fields.name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) ||
    fields.email.length > 254 ||
    !/^\+?[0-9 ().-]{7,25}$/.test(fields.phone) ||
    !allowedServices.has(fields.service) ||
    !fields.message ||
    fields.message.length > 5_000
  ) {
    return jsonResponse(
      { ok: false, error: "Please check the form fields and try again." },
      400,
    );
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_FROM_EMAIL) {
    console.error(
      "Contact form email environment variables are not configured.",
    );
    return jsonResponse(
      { ok: false, error: "Email delivery is not configured." },
      503,
    );
  }

  const emailText = [
    "New website enquiry",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Service: ${fields.service}`,
    "",
    "Message:",
    fields.message,
  ].join("\n");

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [recipient],
        reply_to: fields.email,
        subject: `Website enquiry from ${fields.name.replace(/[\r\n]/g, " ")}`,
        text: emailText,
      }),
    });

    if (!emailResponse.ok) {
      console.error(
        "Contact form email provider returned",
        emailResponse.status,
      );
      return jsonResponse(
        { ok: false, error: "Email delivery failed. Please try again later." },
        502,
      );
    }
  } catch (error) {
    console.error("Contact form email request failed.", error);
    return jsonResponse(
      { ok: false, error: "Email delivery failed. Please try again later." },
      502,
    );
  }

  return Response.json(
    { ok: true },
    { headers: { "Cache-Control": "no-store" } },
  );
}
