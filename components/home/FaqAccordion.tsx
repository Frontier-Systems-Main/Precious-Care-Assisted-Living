"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What kinds of support are typically included in assisted living?",
    answer:
      "Many assisted living communities provide help with daily routines such as dressing, bathing, grooming, medications, meals, housekeeping, transportation, and social engagement. The level of help is usually adjusted to the resident rather than delivered as a one-size-fits-all package.",
  },
  {
    question: "How is the right level of care usually determined?",
    answer:
      "A common first step is a nurse or care assessment that looks at daily routines, mobility, medications, preferences, and safety needs. That information is then used to shape an individualized care plan so support matches the resident instead of forcing the resident to fit a preset level.",
  },
  {
    question: "What happens if care needs change over time?",
    answer:
      "Many communities reassess residents regularly and adjust care as needs evolve. Families often look for a setting that can increase support gradually, so a loved one can stay in a familiar environment even if routines, reminders, or hands-on help need to change.",
  },
  {
    question: "Can family stay involved after a loved one moves in?",
    answer:
      "Yes. Real assisted living communities often encourage regular visits, participation in activities, and ongoing communication about care. Families are usually an important part of the resident experience, especially when staff and loved ones are sharing updates and staying aligned on preferences and routines.",
  },
  {
    question: "What should families pay attention to during a tour?",
    answer:
      "During a tour, it helps to look beyond appearances and ask practical questions: Does the community feel clean and well-kept? Do staff seem warm and attentive? How do residents interact with staff? What activities, dining, transportation, and communication practices are in place? Those details usually tell you more than the brochure does.",
  },
] as const;

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="rounded-[1.4rem] border border-white/60 bg-white/84 shadow-sm backdrop-blur sm:rounded-[1.75rem]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-[1.35rem] leading-tight text-foreground sm:text-2xl">
                {item.question}
              </span>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f7e3ef] text-[#063550] sm:h-10 sm:w-10">
                {isOpen ? (
                  <Minus className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                ) : (
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden px-4 transition-all duration-300 sm:px-6 ${
                isOpen ? "max-h-[34rem] pb-5 opacity-100 sm:max-h-80 sm:pb-6" : "max-h-0 pb-0 opacity-0"
              }`}
            >
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
