import Image from "next/image";
import { Heart, Home, MapPin, Users } from "lucide-react";

import { CTA } from "@/components/CTA";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";
import { buildMetadata, BUSINESS } from "@/lib/constants";

export const metadata = buildMetadata(
  "About Precious Care Assisted Living Facility",
  "Learn about the family-owned philosophy behind Precious Care Assisted Living Facility in Anchorage, Alaska, with a focus on dignity, comfort, and companionship.",
  "/about",
);

const values = [
  {
    icon: Heart,
    title: "Compassion",
    body: "Every interaction is guided by genuine care and kindness. We treat each resident as we would our own family.",
  },
  {
    icon: Home,
    title: "Dignity",
    body: "We honor each resident's individuality, history, and preferences while supporting independence alongside the care they need.",
  },
  {
    icon: Users,
    title: "Comfort",
    body: "Our home is designed to feel like exactly that — familiar, welcoming, and safe for the people who live here.",
  },
  {
    icon: MapPin,
    title: "Companionship",
    body: "Connection matters. We work to create an environment of warmth, belonging, and everyday human presence.",
  },
] as const;

const missionPoints = [
  "Personalized assisted living support",
  "A safe, home-like environment in Anchorage",
  "Comfort, dignity, and belonging in daily life",
  "Close partnership and communication with families",
] as const;

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About"
        title="A Family-Owned Facility Built on Love and Commitment"
        description="At Precious Care, we believe every senior deserves to live with dignity, comfort, and genuine connection in a place that truly feels like home."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal
            direction="left"
            className="rounded-[1.7rem] border border-border/60 bg-white/85 p-5 shadow-glow backdrop-blur sm:rounded-[2rem] sm:p-8"
          >
            <p className="font-heading text-[1.8rem] leading-tight text-foreground sm:text-3xl">
              Rooted in Anchorage, built on family values.
            </p>
            <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
              <p>
                Precious Care Assisted Living was founded on a simple but
                powerful belief: seniors deserve to live in an environment
                filled with warmth, respect, and meaningful personal attention
                — not just clinical care.
              </p>
              <p>
                As a family-owned facility, we bring the values of a close-knit
                household to everything we do. Our residents are not just
                clients — they are members of our extended family, and we take
                that responsibility to heart every single day.
              </p>
              <p>
                Situated in Anchorage, Alaska, our home is close to the
                community, accessible to families, and connected to the city
                and surroundings that make Alaska so special.
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-white/60 sm:mt-8 sm:rounded-[1.5rem]">
              <Image
                src="/photos/home-6.webp"
                alt="Interior photo for Precious Care Assisted Living Facility"
                width={1600}
                height={1067}
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal
            delay={120}
            direction="right"
            className="relative overflow-hidden rounded-[1.7rem] bg-[#063550] p-5 text-white shadow-glow sm:rounded-[2rem] sm:p-8"
          >
            <div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#ff9fd3]/18 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#8fc6e8]/16 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-sm sm:tracking-[0.2em]">
                Our Mission
              </p>
              <h2 className="mt-3 font-heading text-[1.8rem] leading-tight text-white sm:mt-4 sm:text-3xl">
                Caring for each person as an individual
              </h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/78 sm:mt-4 sm:text-base sm:leading-7">
                Our mission is to provide compassionate, personalized assisted
                living care that honors each resident's dignity, supports their
                comfort, and nurtures a sense of belonging — all within a safe,
                home-like environment in Anchorage, Alaska.
              </p>

              <div className="mt-6 rounded-[1.35rem] bg-white/8 p-4 backdrop-blur-sm sm:mt-8 sm:rounded-[1.5rem] sm:p-5">
                <ul className="space-y-4">
                  {missionPoints.map((point) => (
                    <li
                      key={point}
                        className="flex items-start gap-3 rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 sm:rounded-[1.15rem]"
                    >
                      <span
                        className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff9fd3]"
                        aria-hidden="true"
                      />
                      <span className="text-base leading-7 text-white/92 sm:text-lg sm:leading-8">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section
        eyebrow="Our Location"
        title="A home in the heart of Anchorage"
        description="We are located at 3773 Scenic View Drive in Anchorage, Alaska — a residential neighborhood setting that reinforces our commitment to a true home-like environment."
        className="pt-0"
      >
        <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <div className="grid gap-4">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={item.title}
                  delay={index * 80}
                  className="rounded-[1.5rem] border border-white/60 bg-white/84 p-5 shadow-sm backdrop-blur sm:rounded-[1.75rem] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-heading text-[1.55rem] text-foreground sm:text-2xl">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-base leading-7 text-muted-foreground sm:mt-3 sm:text-lg sm:leading-8">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal
            delay={120}
            direction="right"
            className="rounded-[1.7rem] border border-[#e3dbe2] bg-[#eef5fb]/88 p-5 shadow-glow sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#48687c] sm:text-sm sm:tracking-[0.2em]">
              Anchorage roots
            </p>
            <p className="mt-4 font-heading text-[1.8rem] leading-tight text-[#063550] sm:mt-5 sm:text-3xl">
              Being based in Anchorage helps residents stay close to their city,
              their community, and the people who matter most.
            </p>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#35556b] sm:mt-6 sm:text-lg sm:leading-8">
              <p>
                Families can visit more easily, and residents can remain
                connected to the routines, relationships, and local familiarity
                that bring comfort.
              </p>
              <p>
                Our location at {BUSINESS.address} reflects the kind of setting
                we believe in: residential, grounded, and centered on daily
                life rather than an institutional atmosphere.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <CTA
        eyebrow="About the setting"
        title="Talk through what your family is looking for"
        description="If you are comparing options in Anchorage, a direct conversation can help clarify whether the environment and care philosophy feel like the right fit."
        primaryHref="/contact"
        primaryLabel="Schedule a Tour"
        points={[
          "Use the website to understand the tone and basics first",
          "Use a direct conversation to confirm what matters most",
          "Visit if the setting seems aligned with your family’s needs",
        ]}
      />
    </>
  );
}
