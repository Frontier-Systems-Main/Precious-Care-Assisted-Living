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
    <section id={id} className={cn("px-6 py-20 lg:px-8", className)}>
      <div className="mx-auto w-full max-w-7xl">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#c1358e]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-balance font-heading text-4xl leading-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-lg leading-8 text-muted-foreground sm:text-xl">
              {description}
            </p>
          ) : null}
        </ScrollReveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
