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
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c6dd] bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#c1358e] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>{BUSINESS.location}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-balance font-heading text-4xl leading-[0.98] text-foreground sm:text-5xl lg:text-6xl">
              {HOME_HERO.headline}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-muted-foreground sm:text-2xl">
              {HOME_HERO.subheadline}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={220}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn Our Story</Link>
            </Button>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid w-full gap-4 sm:grid-cols-2">
            <ScrollReveal delay={260} direction="left">
              <a
                href={BUSINESS.contact.phoneHref}
                className="block rounded-[1.5rem] border border-white/70 bg-white/78 p-5 text-center shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center gap-3 text-[#063550]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Call directly
                  </p>
                </div>
                <p className="mt-4 text-2xl font-semibold text-foreground">
                  {BUSINESS.contact.phone}
                </p>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={320} direction="right">
              <a
                href={BUSINESS.contact.emailHref}
                className="block rounded-[1.5rem] border border-white/70 bg-[#fff4fb]/82 p-5 text-center shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center gap-3 text-[#063550]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Send a note
                  </p>
                </div>
                <p className="mt-4 text-lg font-semibold text-foreground">
                  {BUSINESS.contact.email}
                </p>
              </a>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid gap-5">
          <ScrollReveal direction="right" className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-glow">
            <Image
              src="/photos/care-team.jpg"
              alt="Care-focused photo for Precious Care Assisted Living Facility"
              width={5625}
              height={3750}
              priority
              className="h-[24rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06293f]/82 via-[#06293f]/28 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/72">
                Compassionate care
              </p>
              <p className="mt-3 max-w-lg font-heading text-3xl leading-tight">
                Support that feels personal, patient, and reassuring.
              </p>
              <p className="mt-3 text-base leading-7 text-white/82">
                Precious Care is presented as a warm, home-like place where
                dignity, comfort, and connection remain central to daily life.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
            <ScrollReveal
              delay={120}
              direction="left"
              className="rounded-[1.75rem] border border-[#e6d7e2] bg-[#fdf0f8]/90 p-6 text-center shadow-sm"
            >
              <div className="flex items-center justify-center gap-3 text-[#063550]">
                <Heart className="h-5 w-5" aria-hidden="true" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Family-owned setting
                </p>
              </div>
              <p className="mt-4 text-lg leading-8 text-[#063550]">
                Family-owned care in a smaller setting where residents can feel
                known, comfortable, and supported.
              </p>
              <p className="mt-4 text-base leading-7 text-[#4b6476]">
                The home-like environment is meant to feel calmer and more
                personal than a larger institutional setting.
              </p>
            </ScrollReveal>
            <ScrollReveal
              delay={180}
              direction="right"
              className="rounded-[1.75rem] bg-[#063550] p-6 text-center text-white shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
                First steps
              </p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-white/80">
                <li>Ask practical questions about care and routines</li>
                <li>See whether the setting feels right for your family</li>
                <li>Schedule a conversation or visit when ready</li>
              </ul>
              <div className="mt-5 flex items-start justify-center gap-3 text-white/72">
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
