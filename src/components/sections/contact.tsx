"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { SectionHeading } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactForm, site } from "@/content/site";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [copied, setCopied] = useState(false);
  const publicEmail = site.email;

  const update = (key: keyof FormState, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        mailto?: string;
        fallback?: string;
        message?: string;
      };

      if (data.mailto) {
        window.location.href = data.mailto;
        toast.success("Opening your email client.");
        setForm(empty);
        setStatus("idle");
        return;
      }

      if (data.ok) {
        toast.success("Message received. I will follow up shortly.");
        setForm(empty);
        setStatus("idle");
        return;
      }

      if (data.fallback === "linkedin") {
        toast.message(
          data.message ??
            "Email is not configured yet. Continue on LinkedIn or copy your message."
        );
        setStatus("idle");
        return;
      }

      throw new Error(data.message ?? "Unable to send.");
    } catch {
      setStatus("error");
      toast.error("The form could not be sent. Try LinkedIn or copy your note.");
    }
  }

  async function copyEmail() {
    if (!publicEmail) return;
    await navigator.clipboard.writeText(publicEmail);
    setCopied(true);
    toast.success("Email copied.");
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title={contactForm.headline}
          description={contactForm.description}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            {publicEmail ? (
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                <p className="text-xs tracking-[0.2em] text-zinc-500 uppercase">
                  Email
                </p>
                <p className="mt-2 text-zinc-100">{publicEmail}</p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4 rounded-full"
                  onClick={copyEmail}
                >
                  {copied ? <Check /> : <Copy />}
                  Copy email
                </Button>
              </div>
            ) : (
              <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-5">
                <p className="text-sm leading-relaxed text-zinc-400">
                  A public email is not configured in this environment. Use the
                  form (mailto fallback), or write on{" "}
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-300 hover:text-sky-200"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </div>
            )}
            <p className="text-xs text-zinc-600">
              Set <code>NEXT_PUBLIC_CONTACT_EMAIL</code> and optionally{" "}
              <code>RESEND_API_KEY</code> on the server. No secrets ship in the
              browser.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="glass-panel space-y-4 rounded-3xl p-5 sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) => update("name", event.target.value)}
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => update("email", event.target.value)}
                  className="h-10"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="projectType">Project type</Label>
                <Select
                  value={form.projectType || null}
                  onValueChange={(value) =>
                    update("projectType", value ?? "")
                  }
                >
                  <SelectTrigger
                    id="projectType"
                    className="h-10 w-full"
                    aria-label="Project type"
                  >
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactForm.projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget range</Label>
                <Select
                  value={form.budget || null}
                  onValueChange={(value) => update("budget", value ?? "")}
                >
                  <SelectTrigger
                    id="budget"
                    className="h-10 w-full"
                    aria-label="Budget range"
                  >
                    <SelectValue placeholder="Select a range" />
                  </SelectTrigger>
                  <SelectContent>
                    {contactForm.budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                className="min-h-32"
              />
            </div>

            {status === "error" ? (
              <p className="text-sm text-red-300" role="alert">
                Something went wrong. You can still reach out on LinkedIn.
              </p>
            ) : null}

            <Button
              type="submit"
              size="lg"
              className="h-11 rounded-full px-5"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
