import Link from "next/link";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

type CTAProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  points?: string[];
};

export function CTA({
  eyebrow = "Next step",
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  points,
}: CTAProps) {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.85rem] bg-[#063550] px-5 py-8 text-white shadow-glow sm:rounded-[2.25rem] sm:px-10 sm:py-12">
          <div
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ff66c4]/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-14 left-8 h-40 w-40 rounded-full bg-[#7bb0d6]/16 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <ScrollReveal
              direction="left"
              className="text-center lg:text-left"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-sm sm:tracking-[0.24em]">
                {eyebrow}
              </p>
              <h2 className="mt-3 max-w-3xl font-heading text-[2rem] leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:mt-5 sm:text-lg sm:leading-8">
                {description}
              </p>
            </ScrollReveal>
            <ScrollReveal
              delay={120}
              direction="right"
              className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 text-center backdrop-blur-sm sm:rounded-[1.75rem] sm:p-6"
            >
              {points?.length ? (
                <ul className="mb-5 space-y-3 text-sm leading-6 text-white/80 sm:mb-6 sm:text-base sm:leading-7">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff9fd3]"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Link href={primaryHref}>{primaryLabel}</Link>
                </Button>
                {secondaryHref && secondaryLabel ? (
                  <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto">
                    <Link href={secondaryHref}>{secondaryLabel}</Link>
                  </Button>
                ) : null}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
