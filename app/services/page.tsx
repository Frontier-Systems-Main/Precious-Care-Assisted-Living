import Image from "next/image";
import { CheckCircle2, HelpingHand, House, MessageCircleQuestion } from "lucide-react";

import { CTA } from "@/components/CTA";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/constants";

export const metadata = buildMetadata(
  "Care Approach | Precious Care Assisted Living Facility",
  "Review the care approach at Precious Care Assisted Living Facility, including personalized support, assistance with daily living, and a comfortable home-like environment in Anchorage, Alaska.",
  "/services",
);

const approachCards = [
  {
    icon: CheckCircle2,
    title: "Personalized daily support",
    text: "Support may include help with bathing, dressing, grooming, toileting, and mobility so daily routines feel safer, steadier, and more comfortable.",
  },
  {
    icon: HelpingHand,
    title: "Meals, reminders, and household help",
    text: "Day-to-day care can include meal preparation, medication reminders, laundry, light housekeeping, and practical help that keeps the home orderly and reassuring.",
  },
  {
    icon: House,
    title: "Companionship in a home-like setting",
    text: "The setting emphasizes conversation, encouragement, comfort, and a calm residential environment where residents can feel known and supported.",
  },
] as const;

const questions = [
  "How are bathing, dressing, grooming, and mobility needs handled day to day?",
  "What do meals, medication reminders, and housekeeping support look like here?",
  "How does the home support safety, comfort, and companionship throughout the day?",
  "How are families kept informed when care needs or routines change?",
] as const;

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Our Care Approach"
        title="Support That's Tailored to Each Resident"
        description="We offer a range of supportive services designed to meet residents where they are — providing the right level of assistance while honoring their independence and preferences."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal
            direction="left"
            className="rounded-[1.7rem] bg-[#063550] p-5 text-white shadow-glow sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/65 sm:text-sm sm:tracking-[0.2em]">
              Getting to Know Each Resident
            </p>
            <div className="mt-4 space-y-4 text-base leading-7 text-white/82 sm:mt-6 sm:text-lg sm:leading-8">
              <p>
                Before a resident moves in, we take time to learn about their
                background, routines, preferences, and any specific care
                considerations. This helps us build a daily experience that
                feels familiar and supportive from day one.
              </p>
              <p>
                We believe the people who know a resident best are their
                family. That's why we actively involve families in care
                conversations, keep communication open, and welcome visits and
                engagement.
              </p>
              <p>
                Our goal is not just to provide assistance — it is to help each
                resident live as fully, comfortably, and joyfully as possible.
              </p>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.25rem] border border-white/10 sm:mt-8 sm:rounded-[1.5rem]">
              <Image
                src="/photos/home-3.webp"
                alt="Living space photo for Precious Care Assisted Living Facility"
                width={1600}
                height={1067}
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {approachCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ScrollReveal
                  key={card.title}
                  delay={index * 80}
                  direction="right"
                  className="rounded-[1.5rem] border border-white/60 bg-white/84 p-5 shadow-sm backdrop-blur sm:rounded-[1.75rem] sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-heading text-[1.55rem] text-foreground sm:text-2xl">
                        {card.title}
                      </h2>
                      <p className="mt-2 text-base leading-7 text-muted-foreground sm:mt-3 sm:text-lg sm:leading-8">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="For families evaluating options"
        title="Questions to ask when choosing assisted living"
        description="A thoughtful decision usually starts with the right questions. These prompts can help families compare settings in a practical, respectful way."
        className="pt-0"
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollReveal
            direction="left"
            className="rounded-[1.7rem] border border-border/60 bg-[#edf4fb] p-5 shadow-glow sm:rounded-[2rem] sm:p-8"
          >
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#063550] text-white">
                <MessageCircleQuestion className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="font-heading text-[1.55rem] text-[#063550] sm:text-2xl">
                Helpful conversation starters
              </p>
            </div>
            <ul className="space-y-3 text-base leading-7 text-[#24475f] sm:space-y-4 sm:text-lg sm:leading-8">
              {questions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-6 text-[#4b6476] sm:mt-6 sm:text-base sm:leading-7">
              A direct conversation is still the best way to confirm
              availability, routines, and the right fit for your loved one.
            </p>
          </ScrollReveal>

          <ScrollReveal
            delay={120}
            direction="right"
            className="rounded-[1.7rem] border border-[#ecd6e4] bg-[#fff4fb]/88 p-5 shadow-sm sm:rounded-[2rem] sm:p-8"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c1358e] sm:text-sm sm:tracking-[0.2em]">
              Practical reminder
            </p>
            <p className="mt-4 font-heading text-[1.8rem] leading-tight text-[#063550] sm:mt-5 sm:text-3xl">
              Good assisted living decisions usually come from a blend of facts
              and feeling.
            </p>
            <div className="mt-4 space-y-4 text-base leading-7 text-[#35556b] sm:mt-6 sm:text-lg sm:leading-8">
              <p>
                Families often need straightforward information first, but they
                also need a sense of whether a place feels calm, respectful, and
                personal.
              </p>
              <p>
                That is why this page focuses on clear support categories while
                still making room for the more human side of the decision.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <CTA
        eyebrow="Questions matter"
        title="Ask the questions that matter most to your family"
        description="If you want to discuss the setting, address, or next steps for a visit, the contact page is the best place to start."
        primaryHref="/contact"
        primaryLabel="Contact the Facility"
        points={[
          "Use the question list as a guide for your call or message",
          "Ask about daily routines, comfort, and family communication",
          "Schedule a visit if you want to see the setting in person",
        ]}
      />
    </>
  );
}
