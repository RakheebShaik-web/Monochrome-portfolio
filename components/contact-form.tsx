"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/site-data";

type FormState = { kind: "idle" | "sending" | "success" | "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ kind: "idle", message: "" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    setState({ kind: "sending", message: "Sending…" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Message could not be sent.");
      form.reset();
      setState({ kind: "success", message: "Message received. I’ll reply by email." });
    } catch (error) {
      setState({ kind: "error", message: error instanceof Error ? error.message : "Message could not be sent." });
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-row"><label>Name<input name="name" autoComplete="name" minLength={2} maxLength={80} required /></label><label>Email<input name="email" type="email" autoComplete="email" maxLength={160} required /></label></div>
      <label>Message<textarea name="message" minLength={10} maxLength={2000} rows={6} required /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-actions"><button className="button submit-button" disabled={state.kind === "sending"} type="submit">{state.kind === "sending" ? "Sending…" : "Send message"}</button><a href={`mailto:${profile.email}`}>Email directly ↗</a></div>
      <p className={`form-status ${state.kind}`} aria-live="polite">{state.message}</p>
    </form>
  );
}
