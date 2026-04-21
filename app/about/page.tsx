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
            className="rounded-[2rem] border border-border/60 bg-white/85 p-8 shadow-glow backdrop-blur"
          >
            <p className="font-heading text-3xl leading-tight text-foreground">
              Rooted in Anchorage, built on family values.
            </p>
            <div className="mt-6 space-y-4 text-lg leading-8 text-muted-foreground">
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
            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/60">
              <Image
                src="/photos/home-6.png"
                alt="Interior photo for Precious Care Assisted Living Facility"
                width={6082}
                height={4055}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal
            delay={120}
            direction="right"
            className="relative overflow-hidden rounded-[2rem] bg-[#063550] p-8 text-white shadow-glow"
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
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
                Our Mission
              </p>
              <h2 className="mt-4 font-heading text-3xl leading-tight text-white">
                Caring for each person as an individual
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-white/78">
                Our mission is to provide compassionate, personalized assisted
                living care that honors each resident's dignity, supports their
                comfort, and nurtures a sense of belonging — all within a safe,
                home-like environment in Anchorage, Alaska.
              </p>

              <div className="mt-8 rounded-[1.5rem] bg-white/8 p-5 backdrop-blur-sm">
                <ul className="space-y-4">
                  {missionPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-[1.15rem] border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span
                        className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff9fd3]"
                        aria-hidden="true"
                      />
                      <span className="text-lg leading-8 text-white/92">
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
                  className="rounded-[1.75rem] border border-white/60 bg-white/84 p-6 shadow-sm backdrop-blur"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl text-foreground">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-lg leading-8 text-muted-foreground">
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
            className="rounded-[2rem] border border-[#e3dbe2] bg-[#eef5fb]/88 p-8 shadow-glow"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#48687c]">
              Anchorage roots
            </p>
            <p className="mt-5 font-heading text-3xl leading-tight text-[#063550]">
              Being based in Anchorage helps residents stay close to their city,
              their community, and the people who matter most.
            </p>
            <div className="mt-6 space-y-4 text-lg leading-8 text-[#35556b]">
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
