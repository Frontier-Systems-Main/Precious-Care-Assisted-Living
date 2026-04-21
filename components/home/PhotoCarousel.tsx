"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/photos/care-team.jpg",
    alt: "Care-focused photo for Precious Care Assisted Living Facility",
    label: "Compassionate support",
    description: "Daily care should feel attentive, respectful, and reassuring for both residents and families.",
  },
  {
    src: "/photos/home-1.png",
    alt: "Feature photo of Precious Care Assisted Living Facility",
    label: "Home-like comfort",
    description: "A warm residential atmosphere can make assisted living feel more familiar and less clinical.",
  },
  {
    src: "/photos/home-2.png",
    alt: "Additional view of Precious Care Assisted Living Facility",
    label: "Personal attention",
    description: "Smaller-scale care settings can make it easier to focus on routines, comfort, and individual needs.",
  },
  {
    src: "/photos/home-3.png",
    alt: "Additional room view at Precious Care Assisted Living Facility",
    label: "Daily reassurance",
    description: "Families often look for a place where everyday support feels steady, clear, and thoughtfully handled.",
  },
  {
    src: "/photos/home-4.png",
    alt: "Interior details at Precious Care Assisted Living Facility",
    label: "Meaningful connection",
    description: "Companionship and human connection are part of what helps a setting feel genuinely supportive.",
  },
  {
    src: "/photos/home-6.png",
    alt: "Interior image for Precious Care Assisted Living Facility",
    label: "Practical care",
    description: "Assistance with meals, routines, and day-to-day needs should be delivered with patience and dignity.",
  },
  {
    src: "/photos/home-8.png",
    alt: "Additional bright view of Precious Care Assisted Living Facility",
    label: "Calm environment",
    description: "A peaceful, well-kept setting can help residents and loved ones feel more at ease.",
  },
] as const;

export function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const syncViewport = () => setIsMobile(mediaQuery.matches);

    syncViewport();

    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  const goTo = (index: number) => setActiveIndex(index);
  const previous = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setActiveIndex((current) => (current + 1) % slides.length);

  const renderedSlideIndexes = useMemo(() => {
    if (!isMobile) {
      return slides.map((_, index) => index);
    }

    const previousIndex = (activeIndex - 1 + slides.length) % slides.length;
    const nextIndex = (activeIndex + 1) % slides.length;

    return [previousIndex, activeIndex, nextIndex];
  }, [activeIndex, isMobile]);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 shadow-glow sm:rounded-[2rem] sm:bg-white/55 sm:backdrop-blur-xl">
      <div className="relative h-[20rem] overflow-hidden sm:h-[30rem]">
        {renderedSlideIndexes.map((index) => {
          const slide = slides[index];

          return (
          <div
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-out",
              index === activeIndex
                ? "translate-x-0 scale-100 opacity-100"
                : "translate-x-8 scale-[1.03] opacity-0",
            )}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={455}
              height={240}
              priority={index === 0}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06293f]/82 via-[#06293f]/24 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-center text-white sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/72 sm:text-sm sm:tracking-[0.24em]">
                {slide.label}
              </p>
              <p className="mt-2 font-heading text-[1.55rem] leading-tight sm:mt-3 sm:text-4xl">
                {slide.description}
              </p>
            </div>
          </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-3 sm:px-4">
        <button
          type="button"
          onClick={previous}
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#06293f]/58 text-white transition-transform hover:scale-105 sm:h-11 sm:w-11 sm:backdrop-blur"
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#06293f]/58 text-white transition-transform hover:scale-105 sm:h-11 sm:w-11 sm:backdrop-blur"
          aria-label="Next photo"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
      </div>

      <div className="hidden grid-cols-3 gap-2 p-4 sm:grid sm:grid-cols-4 lg:grid-cols-7">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(index)}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all",
              index === activeIndex
                ? "border-[#ff66c4] shadow-sm"
                : "border-white/50 opacity-65 hover:opacity-100",
            )}
            aria-label={`View ${slide.label.toLowerCase()} photo`}
          >
            <Image
              src={slide.src}
              alt=""
              width={120}
              height={80}
              className="h-16 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
