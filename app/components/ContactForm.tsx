"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type FormStatus = "idle" | "submitting" | "success" | "error" | "rate-limit";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      setStatus("error");
      setMessage("Please complete the required fields and check your email address.");
      return;
    }

    if (!ACCESS_KEY) {
      setStatus("error");
      setMessage("The form is not active yet. Please email perfectuniontheband@gmail.com.");
      return;
    }

    setStatus("submitting");
    setMessage("Sending your message…");

    const formData = new FormData(form);
    const inquiryType = String(formData.get("inquiry_type") || "General");
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
          access_key: ACCESS_KEY,
          subject: `Perfect Union website: ${inquiryType} inquiry`,
          from_name: "Perfect Union Website",
          page_url: window.location.href,
          submitted_at: new Date().toISOString(),
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.status === 429) {
        setStatus("rate-limit");
        setMessage("Too many messages were sent. Please wait and try again later.");
        return;
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      form.reset();
      setStatus("success");
      setMessage("Message received. We’ll get back to you as soon as we can.");
    } catch {
      setStatus("error");
      setMessage(
        "We couldn’t send that message. Your entries are still here—please try again."
      );
    }
  }

  return (
    <>
      <Script src="https://web3forms.com/client/script.js" strategy="afterInteractive" />
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="contact-inquiry">Inquiry type</label>
            <select id="contact-inquiry" name="inquiry_type" defaultValue="General" required>
              <option>General</option>
              <option>Booking</option>
              <option>Press</option>
              <option>Collaboration</option>
              <option>Merchandise Support</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="contact-order">Order number <span>(optional)</span></label>
            <input id="contact-order" name="order_number" autoComplete="off" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows={7} required />
        </div>

        <div className="botcheck" aria-hidden="true">
          <label htmlFor="contact-company">Leave this field empty</label>
          <input id="contact-company" name="botcheck" type="checkbox" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="h-captcha" data-captcha="true" aria-label="Spam protection verification" />

        <div className="form-submit-row">
          <button className="button pink" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send message ↗"}
          </button>
          <p className={`form-status ${status}`} role={status === "error" || status === "rate-limit" ? "alert" : "status"} aria-live="polite">
            {message}
          </p>
        </div>
      </form>
    </>
  );
}
