import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Mail,
  MapPinned,
  Phone,
  Sparkles,
} from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";
import { BUSINESS, HOME_HERO } from "@/lib/constants";

import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-grain" aria-hidden="true" />
      <div
        className="absolute -right-24 top-4 h-[30rem] w-[30rem] rounded-full bg-[#7bb0d6]/18 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute left-10 top-12 h-[28rem] w-[28rem] rounded-full bg-[#ff66c4]/14 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c6dd] bg-white/80 px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#c1358e] shadow-sm backdrop-blur sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.18em]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>{BUSINESS.location}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1 className="mt-5 max-w-[17ch] text-balance font-heading text-[2rem] leading-[1.02] text-foreground sm:mt-6 sm:max-w-4xl sm:text-5xl sm:leading-[0.98] lg:text-6xl">
              {HOME_HERO.headline}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:mt-6 sm:max-w-2xl sm:text-xl sm:leading-9 lg:text-2xl">
              {HOME_HERO.subheadline}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/about">Learn Our Story</Link>
            </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={250} className="mt-5 w-full sm:hidden">
            <div className="rounded-[1.2rem] border border-[#ecd6e4] bg-white/82 px-4 py-4 text-center shadow-sm backdrop-blur">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#c1358e]">
                Family-owned care
              </p>
              <p className="mt-2 text-sm leading-6 text-[#35556b]">
                A smaller home-like setting centered on comfort, dignity, and
                steady day-to-day support.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-2 sm:hidden">
            <a
              href={BUSINESS.contact.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-[#e6d7e2] bg-white/82 px-4 py-2 text-sm font-semibold text-[#063550] shadow-sm"
            >
              Call
            </a>
            <a
              href={BUSINESS.contact.emailHref}
              className="inline-flex items-center justify-center rounded-full border border-[#e6d7e2] bg-white/82 px-4 py-2 text-sm font-semibold text-[#063550] shadow-sm"
            >
              Email
            </a>
          </div>
          <div className="mt-8 hidden w-full gap-4 sm:grid sm:grid-cols-2">
            <ScrollReveal delay={260} direction="left">
              <a
                href={BUSINESS.contact.phoneHref}
                className="block rounded-[1.35rem] border border-white/70 bg-white/78 p-4 text-center shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 sm:rounded-[1.5rem] sm:p-5"
              >
                <div className="flex items-center justify-center gap-3 text-[#063550]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Call directly
                  </p>
                </div>
                <p className="mt-3 text-[1.4rem] font-semibold text-foreground sm:mt-4 sm:text-2xl">
                  {BUSINESS.contact.phone}
                </p>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={320} direction="right">
              <a
                href={BUSINESS.contact.emailHref}
                className="block rounded-[1.35rem] border border-white/70 bg-[#fff4fb]/82 p-4 text-center shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 sm:rounded-[1.5rem] sm:p-5"
              >
                <div className="flex items-center justify-center gap-3 text-[#063550]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Send a note
                  </p>
                </div>
                <p className="mt-3 text-base font-semibold text-foreground sm:mt-4 sm:text-lg">
                  {BUSINESS.contact.email}
                </p>
              </a>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid gap-5">
          <ScrollReveal direction="right" className="relative overflow-hidden rounded-[1.75rem] border border-white/70 shadow-glow sm:rounded-[2rem]">
            <Image
              src="/photos/care-team.webp"
              alt="Care-focused photo for Precious Care Assisted Living Facility"
              width={1600}
              height={1067}
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="h-[16.5rem] w-full object-cover sm:h-[24rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06293f]/82 via-[#06293f]/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-center text-white sm:p-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/72 sm:text-sm sm:tracking-[0.2em]">
                Compassionate care
              </p>
              <p className="mx-auto mt-2 max-w-md font-heading text-[1.7rem] leading-tight sm:mt-3 sm:max-w-lg sm:text-3xl">
                Support that feels personal, patient, and reassuring.
              </p>
              <p className="mt-2 hidden text-sm leading-6 text-white/82 sm:block sm:mt-3 sm:text-base sm:leading-7">
                Precious Care is presented as a warm, home-like place where
                dignity, comfort, and connection remain central to daily life.
              </p>
            </div>
          </ScrollReveal>
          <div className="hidden gap-5 md:grid md:grid-cols-[1.05fr_0.95fr]">
            <ScrollReveal
              delay={120}
              direction="left"
              className="rounded-[1.5rem] border border-[#e6d7e2] bg-[#fdf0f8]/90 p-5 text-center shadow-sm sm:rounded-[1.75rem] sm:p-6"
            >
              <div className="flex items-center justify-center gap-3 text-[#063550]">
                <Heart className="h-5 w-5" aria-hidden="true" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Family-owned setting
                </p>
              </div>
              <p className="mt-3 text-base leading-7 text-[#063550] sm:mt-4 sm:text-lg sm:leading-8">
                Family-owned care in a smaller setting where residents can feel
                known, comfortable, and supported.
              </p>
              <p className="mt-3 text-sm leading-6 text-[#4b6476] sm:mt-4 sm:text-base sm:leading-7">
                The home-like environment is meant to feel calmer and more
                personal than a larger institutional setting.
              </p>
            </ScrollReveal>
            <ScrollReveal
              delay={180}
              direction="right"
              className="rounded-[1.5rem] bg-[#063550] p-5 text-center text-white shadow-sm sm:rounded-[1.75rem] sm:p-6"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/65 sm:text-sm sm:tracking-[0.2em]">
                First steps
              </p>
              <ul className="mt-3 space-y-2.5 text-sm leading-6 text-white/80 sm:mt-4 sm:space-y-3 sm:text-base sm:leading-7">
                <li>Ask practical questions about care and routines</li>
                <li>See whether the setting feels right for your family</li>
                <li>Schedule a conversation or visit when ready</li>
              </ul>
              <div className="mt-4 flex items-start justify-center gap-3 text-white/72 sm:mt-5">
                <MapPinned className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-6">{BUSINESS.address}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
