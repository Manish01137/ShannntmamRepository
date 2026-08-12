"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-patina bg-patina-light/40 p-8 text-center">
        <p className="font-display text-xl text-bronze">Thank you.</p>
        <p className="mt-2 font-sans text-sm text-charcoal/80">
          Your message has been sent — we&rsquo;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-sans text-sm text-charcoal/80">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full border border-bronze/25 bg-transparent px-4 py-3 font-sans text-base text-charcoal outline-none focus:border-bronze"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-sm text-charcoal/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-bronze/25 bg-transparent px-4 py-3 font-sans text-base text-charcoal outline-none focus:border-bronze"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-sm text-charcoal/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-2 w-full border border-bronze/25 bg-transparent px-4 py-3 font-sans text-base text-charcoal outline-none focus:border-bronze"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="font-sans text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-block bg-bronze px-8 py-3 font-sans text-sm tracking-wide text-ivory transition-colors hover:bg-gold disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
