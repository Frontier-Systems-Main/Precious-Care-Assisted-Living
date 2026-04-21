"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Family of a Resident",
    rating: 5,
    quote:
      "The people and caregivers at this facility are wonderful. They took excellent care of my father when we could no longer physically care for him. The staff treated him with dignity and love. He was always cleaned and groomed when we visited with him.",
  },
  {
    name: "Anchorage Community Member",
    rating: 5,
    quote:
      "Best assisted living in Anchorage. If you are looking for the best care for a loved one, Precious Care Assisted Living is the place. From the moment you walk in, you can feel the love.",
  },
  {
    name: "Daughter of a Resident",
    rating: 5,
    quote:
      "With their attention to detail, spick-and-span cleaning, activities, and resident engagement, I feel very comfortable that my mother has found her new forever home. She loves it here!",
  },
] as const;

export function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const previous = () =>
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  const next = () => setActiveIndex((current) => (current + 1) % reviews.length);

  const getRelativePosition = (index: number) => {
    const offset = index - activeIndex;

    if (offset === 0) return 0;
    if (offset === 1 || offset === -(reviews.length - 1)) return 1;
    if (offset === -1 || offset === reviews.length - 1) return -1;

    return 2;
  };

  return (
    <div className="relative overflow-hidden rounded-[2.25rem] bg-[#063550] px-6 py-8 text-white shadow-glow sm:px-8 sm:py-10">
      <div
        className="absolute -right-12 top-0 h-36 w-36 rounded-full bg-[#ff66c4]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-8 left-8 h-28 w-28 rounded-full bg-[#7bb0d6]/16 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <Quote className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/62">
                Community feedback
              </p>
              <p className="mt-1 font-heading text-2xl text-white sm:text-3xl">
                What families appreciate most
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={previous}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-transform hover:scale-105"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-transform hover:scale-105"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden">
          {reviews.map((review, index) => {
            const relativePosition = getRelativePosition(index);

            return (
              <article
                key={review.name}
                className={cn(
                  "absolute top-0 w-full rounded-[1.85rem] border border-white/10 bg-white/8 p-6 text-center backdrop-blur-sm transition-all duration-500 sm:w-[68%] sm:p-8",
                  relativePosition === 0 &&
                    "left-1/2 z-20 -translate-x-1/2 scale-100 opacity-100 shadow-[0_20px_60px_rgba(0,0,0,0.18)]",
                  relativePosition === -1 &&
                    "left-0 z-10 hidden scale-[0.9] opacity-45 sm:block",
                  relativePosition === 1 &&
                    "right-0 z-10 hidden scale-[0.9] opacity-45 sm:block",
                  Math.abs(relativePosition) > 1 && "pointer-events-none opacity-0",
                )}
                aria-hidden={relativePosition !== 0}
              >
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-5 w-5 fill-[#ffd77b] text-[#ffd77b]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/62">
                  {review.rating}.0 / 5.0 stars
                </p>
                <h3 className="mt-4 font-heading text-3xl leading-tight sm:text-4xl">
                  {review.name}
                </h3>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
                  “{review.quote}”
                </p>
              </article>
            );
          })}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 sm:mt-5">
          <button
            type="button"
            onClick={previous}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-transform hover:scale-105 sm:hidden"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center justify-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-[#ff9fd3]"
                    : "w-2.5 bg-white/35"
                }`}
                aria-label={`Show review ${index + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition-transform hover:scale-105 sm:hidden"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
