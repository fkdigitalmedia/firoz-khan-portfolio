"use client";

import { useState, type FormEvent } from "react";

const RECIPIENT = "hello@fkdigitalmedia.com";

/**
 * Front-end-only contact form. On submit it composes a pre-filled email in
 * the visitor's own mail client (mailto:) — no backend, no fake "sent" claims.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Project enquiry from ${name.trim() || "your website"}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      "",
      message.trim(),
    ].join("\n");
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-medium text-slate-300">
            Your name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Sharma"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-slate-300">
            Your email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
            className="field"
          />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-slate-300">
          Project details
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project — what you need, timeline, budget range…"
          className="field resize-y"
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white sm:w-auto sm:px-10"
      >
        Send via Email
      </button>
      {opened && (
        <p className="text-sm text-slate-400" role="status">
          Your mail app should have opened with the message pre-filled — just hit send.
          Prefer WhatsApp? Use the button above instead.
        </p>
      )}
    </form>
  );
}
