import Image from "next/image";
import Link from "next/link";

import { BRAND_ASSETS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href?: string;
  className?: string;
  variant?: "full" | "mark";
  priority?: boolean;
};

export function BrandLogo({
  href,
  className,
  variant = "full",
  priority = false,
}: BrandLogoProps) {
  const image = (
    <Image
      src={variant === "full" ? BRAND_ASSETS.fullLogo : BRAND_ASSETS.mark}
      alt={BUSINESS.name}
      width={variant === "full" ? 520 : 120}
      height={variant === "full" ? 190 : 120}
      priority={priority}
      className={cn("h-auto w-full", className)}
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link href={href} aria-label={BUSINESS.name}>
      {image}
    </Link>
  );
}
