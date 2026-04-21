import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-14 sm:px-6 sm:py-20 lg:px-8", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#c1358e] sm:text-sm sm:tracking-[0.24em]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-balance font-heading text-[2rem] leading-tight text-foreground sm:mt-4 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8 lg:text-xl">
              {description}
            </p>
          ) : null}
        </ScrollReveal>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
