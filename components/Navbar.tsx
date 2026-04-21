"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BUSINESS, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const normalizedPathname =
    pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50">
      <div className="mx-auto w-full max-w-[58rem] px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-auto h-[3.3rem] overflow-visible rounded-full border border-white bg-white px-3 shadow-[0_20px_50px_rgba(6,53,80,0.16)]">
        <div className="flex h-full items-center justify-between gap-3">
          <Link
            href="/"
            className="ml-3 flex items-center self-center rounded-2xl transition-colors hover:text-primary sm:ml-4"
          >
            <div className="translate-y-[5px] w-[8.4rem] sm:w-[9.45rem]">
              <Image
                src="/icon/precious-care-landscape-v2.svg"
                alt={BUSINESS.name}
                width={520}
                height={190}
                priority
                className="h-auto w-full"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-3 md:flex">
            <nav
              aria-label="Primary"
              className="flex items-center rounded-full bg-[#f6eef4] p-1"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = normalizedPathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "inline-flex h-8 items-center rounded-full px-3 text-[0.88rem] font-semibold leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-accent/80 hover:text-accent-foreground",
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span
                        className="ml-2 h-1.5 w-1.5 rounded-full bg-[#ff66c4]"
                        aria-hidden="true"
                      />
                    ) : null}
                  </Link>
                );
              })}
            </nav>
            <a
              href={BUSINESS.contact.phoneHref}
              className="hidden items-center gap-2 text-[0.82rem] font-semibold text-[#35556b] transition-colors hover:text-primary lg:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{BUSINESS.contact.phone}</span>
            </a>
            <Button asChild variant="secondary" className="h-8 min-w-0 px-3.5 text-[0.82rem]">
              <Link href="/contact">Schedule Tour</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-white/90 text-foreground shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        </div>

        {isMobileMenuOpen ? (
          <div
            id="mobile-navigation"
            className="pointer-events-auto mt-3 rounded-[1.75rem] border border-border/60 bg-white/92 p-4 shadow-glow md:hidden"
          >
            <nav aria-label="Mobile primary" className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = normalizedPathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "inline-flex items-center rounded-2xl px-4 py-3 text-[1.02rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-foreground hover:bg-accent",
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span
                        className="ml-2 h-1.5 w-1.5 rounded-full bg-[#ff66c4]"
                        aria-hidden="true"
                      />
                    ) : null}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 space-y-3 rounded-[1.5rem] border border-border/60 bg-[#f9edf5] p-4 text-sm text-[#24475f]">
              <a
                href={BUSINESS.contact.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{BUSINESS.contact.phone}</span>
              </a>
              <a
                href={BUSINESS.contact.emailHref}
                className="flex items-center gap-3 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{BUSINESS.contact.email}</span>
              </a>
              <a
                href={BUSINESS.contact.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-primary"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{BUSINESS.address}</span>
              </a>
            </div>
            <Button asChild variant="secondary" className="mt-4 w-full">
              <Link href="/contact">Schedule a Tour</Link>
            </Button>
          </div>
        ) : null}
      </div>
    </header>
  );
}
