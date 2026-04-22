import { Mail, MapPinned, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";
import { buildMetadata, BUSINESS } from "@/lib/constants";

export const metadata = buildMetadata(
  "Contact Precious Care Assisted Living Facility",
  "Contact Precious Care Assisted Living Facility in Anchorage, Alaska to ask questions, request more information, or schedule a tour.",
  "/contact",
);

const contactCards = [
  {
    icon: MapPinned,
    label: "Address",
    value: BUSINESS.address,
  },
  {
    icon: Phone,
    label: "Phone",
    value: BUSINESS.contact.phone,
  },
  {
    icon: Mail,
    label: "Email",
    value: BUSINESS.contact.email,
  },
] as const;

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Reach out to schedule a conversation or tour"
      description="Families often want to ask a few questions before deciding on next steps. Use the information below to call, email, send a message, or pull up directions."
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="order-2 space-y-5 sm:space-y-6 lg:order-1">
          <ScrollReveal
            direction="left"
            className="rounded-[1.7rem] bg-[#063550] p-5 text-white shadow-glow sm:rounded-[2rem] sm:p-6"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-sm sm:tracking-[0.2em]">
              Reach us directly
            </p>
            <div className="mt-5 grid gap-4">
              {contactCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal
                    key={item.label}
                    delay={index * 80}
                    className="flex items-start gap-4 rounded-[1.35rem] border border-white/10 bg-white/6 p-4 sm:rounded-[1.5rem] sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                        {item.label}
                      </p>
                      {item.label === "Address" ? (
                        <a
                          href={BUSINESS.contact.mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block text-base leading-7 text-white transition-colors hover:text-[#ffd8ef] sm:text-lg sm:leading-8"
                        >
                          {item.value}
                        </a>
                      ) : null}
                      {item.label === "Phone" ? (
                        <a
                          href={BUSINESS.contact.phoneHref}
                          className="mt-2 inline-block text-base leading-7 text-white transition-colors hover:text-[#ffd8ef] sm:text-lg sm:leading-8"
                        >
                          {item.value}
                        </a>
                      ) : null}
                      {item.label === "Email" ? (
                        <a
                          href={BUSINESS.contact.emailHref}
                          className="mt-2 inline-block text-base leading-7 text-white transition-colors hover:text-[#ffd8ef] sm:text-lg sm:leading-8"
                        >
                          {item.value}
                        </a>
                      ) : null}
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal
            delay={100}
            direction="left"
            className="rounded-[1.7rem] border border-[#ecd6e4] bg-[#fff4fb]/88 p-5 shadow-sm sm:rounded-[2rem] sm:p-6"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c1358e] sm:text-sm sm:tracking-[0.2em]">
              Common reasons families reach out
            </p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-[#35556b] sm:mt-5 sm:text-lg sm:leading-8">
              <li>They are beginning to compare local assisted living options</li>
              <li>They want to ask a few direct questions before scheduling a visit</li>
              <li>They want clearer next steps for a conversation or tour</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal
            delay={180}
            direction="left"
            className="rounded-[1.7rem] border border-border/60 bg-[#063550] p-5 text-white shadow-glow sm:rounded-[2rem] sm:p-6"
          >
            <h2 className="font-heading text-[1.55rem] sm:text-2xl">Find us in Anchorage</h2>
            <p className="mt-3 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              View the facility location below and use the address card above
              for turn-by-turn directions.
            </p>
            <div className="mt-5 overflow-hidden rounded-[1.25rem] border border-white/15 bg-white/5 sm:mt-6 sm:rounded-[1.5rem]">
              <iframe
                title="Map showing Precious Care Assisted Living Facility in Anchorage"
                src={BUSINESS.contact.mapEmbedUrl}
                className="h-[260px] w-full border-0 sm:h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={120} direction="right" className="order-1 lg:order-2">
          <ContactForm />
        </ScrollReveal>
      </div>
    </Section>
  );
}
