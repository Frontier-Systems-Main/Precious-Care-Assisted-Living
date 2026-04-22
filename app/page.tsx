import { HeartHandshake, Home, MapPin, ShieldCheck } from "lucide-react";

import { CTA } from "@/components/CTA";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { Hero } from "@/components/Hero";
import { PhotoCarousel } from "@/components/home/PhotoCarousel";
import { ReviewCarousel } from "@/components/home/ReviewCarousel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/constants";

export const metadata = buildMetadata(
  "Compassionate Care, Close to Home",
  "Explore a warm, family-owned assisted living setting in Anchorage, Alaska with a personalized, home-like approach focused on comfort, safety, and companionship.",
  "/",
);

const trustItems = [
  {
    icon: HeartHandshake,
    title: "Family-Owned & Operated",
    description:
      "We're not a corporate chain. Precious Care is a family-owned facility where every resident is treated with genuine warmth and personal attention.",
  },
  {
    icon: Home,
    title: "A Real Home Environment",
    description:
      "Our setting is intentionally residential and comfortable because we believe where you live should truly feel like home.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care for Each Resident",
    description:
      "We take the time to understand each resident's routines, preferences, and needs, offering support that's tailored to the individual.",
  },
  {
    icon: ShieldCheck,
    title: "Safety, Dignity & Respect",
    description:
      "Every resident deserves to feel safe, respected, and valued. Dignity and compassion are at the core of everything we do.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Come see for yourself"
        title="A Commitment You Can Feel"
        description="Precious Care is a family-owned assisted living facility in Anchorage, Alaska — offering personalized support, dignity, and a warm, welcoming environment for your loved one."
        className="pt-8"
      >
        <ScrollReveal>
          <PhotoCarousel />
        </ScrollReveal>
      </Section>

      <Section
        id="why-us"
        eyebrow="Why families choose us"
        title="Resident-Centerd Living in Anchorage"
        description="Families comparing assisted living are balancing trust, comfort, and practical care needs at the same time. This section makes those priorities easier to understand at a glance."
      >
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <ScrollReveal
            direction="left"
            className="rounded-[1.7rem] border border-white/60 bg-white/82 p-5 text-center shadow-glow backdrop-blur sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c1358e] sm:text-sm sm:tracking-[0.2em]">
              Support That's Tailored to Each Resident
            </p>
            <p className="mt-4 font-heading text-[1.8rem] leading-tight text-foreground sm:mt-5 sm:text-3xl">
              A Place That Truly Feels Like Home
            </p>
            <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              <p>
                Families want more than availability. They want a place where
                their loved one feels safe, known, and respected.
              </p>
            </div>
            <ul className="mt-5 space-y-3 text-left text-sm leading-6 text-[#4b6476] sm:mt-6 sm:text-base sm:leading-7">
              {[
                "Individualized attention in a small, home-like setting",
                "Compassionate staff committed to resident well-being",
                "Comfortable, welcoming living environment",
                "Located in Anchorage — close to family and community",
                "Supportive daily routines built around each resident",
                "Open communication and partnership with families",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c1358e]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal
            delay={120}
            direction="right"
            className="rounded-[1.7rem] bg-[#063550] p-5 text-white shadow-glow sm:rounded-[2rem] sm:p-6"
          >
            <div className="grid gap-4">
              {trustItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal
                    key={item.title}
                    delay={index * 70}
                    direction="up"
                    className="flex items-start gap-4 rounded-[1.35rem] border border-white/10 bg-white/6 p-4 text-left backdrop-blur-sm sm:flex-col sm:items-center sm:rounded-[1.5rem] sm:p-5 sm:text-center"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-[1.55rem] text-white sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/78 sm:text-base sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section
        eyebrow="Care philosophy"
        title="Supportive Living, Every Day"
        description="Daily life at Precious Care is built around practical support, comfort, safety, and companionship in a warm home-like setting."
        className="pt-0"
      >
        <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <ScrollReveal
            direction="left"
            className="rounded-[1.7rem] bg-[#063550] p-5 text-center text-white shadow-glow sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-sm sm:tracking-[0.2em]">
              What a first conversation can cover
            </p>
            <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-5">
              {[
                "Whether the home-like setting feels aligned with what your loved one needs",
                "The day-to-day support areas families usually want to understand first",
                "What the next step looks like if you want to continue the conversation",
              ].map((item, index) => (
                <ScrollReveal
                  key={item}
                  delay={index * 80}
                  className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/6 p-4 text-left sm:flex-col sm:gap-4 sm:rounded-[1.5rem] sm:p-5 sm:text-center"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff66c4] font-semibold text-[#063550]">
                    {index + 1}
                  </div>
                  <p className="text-base leading-7 text-white/82 sm:text-lg sm:leading-8">{item}</p>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal
            delay={120}
            direction="right"
            className="rounded-[1.7rem] border border-[#ecd6e4] bg-[#fff4fb]/88 p-5 shadow-sm sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c1358e] sm:text-sm sm:tracking-[0.2em]">
              Resident-Centered Living in Anchorage
            </p>
            <p className="mt-4 font-heading text-[1.8rem] leading-tight text-[#063550] sm:mt-5 sm:text-3xl">
              Care begins with the individual.
            </p>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#35556b] sm:mt-6 sm:text-lg sm:leading-8">
              <p>
                Quality care starts with knowing the resident — their story,
                their preferences, and what helps them feel comfortable. Our
                home-like setting is designed to support independence while
                keeping help close by.
              </p>
              <p>
                We work closely with families so the transition feels smoother,
                communication stays open, and what matters most continues to
                shape daily life here.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <CTA
        eyebrow="Start with a conversation"
        title="See whether the setting feels right for your family"
        description="Questions about assisted living are personal. A conversation or tour can help you understand whether this home-like environment matches what your loved one needs."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/services"
        secondaryLabel="View Care Approach"
        points={[
          "Ask practical questions before making a larger decision",
          "Learn more about the atmosphere and support approach",
          "Schedule a conversation or tour when your family is ready",
        ]}
      />

      <Section
        eyebrow="What the Anchorage community says"
        title="Feedback From Real Families"
        description="Here's what the Anchorage community says about our dedication to their loved ones."
        className="pt-0"
      >
        <ScrollReveal>
          <ReviewCarousel />
        </ScrollReveal>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Questions families often ask first"
        description="The FAQ sits at the bottom of the page so visitors can quickly resolve the most common questions before reaching out."
        className="pt-0"
      >
        <ScrollReveal>
          <FaqAccordion />
        </ScrollReveal>
      </Section>
    </>
  );
}
