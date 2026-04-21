import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import { BUSINESS, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#f5b8dd] bg-[#063550] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 text-right sm:gap-10 lg:grid-cols-[1.05fr_0.9fr_1fr] lg:gap-12 lg:text-left">
          <div className="ml-auto lg:ml-0">
            <div className="inline-flex rounded-[1.25rem] bg-white px-4 py-1.5 shadow-sm sm:rounded-[1.4rem]">
              <div className="w-[11.5rem] sm:w-[13rem]">
                <Image
                  src="/icon/precious-care-landscape-v2.svg"
                  alt={BUSINESS.name}
                  width={520}
                  height={190}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <p className="ml-auto mt-5 max-w-md text-[0.9rem] leading-7 text-white/72 lg:ml-0 lg:mt-7 lg:text-[0.94rem]">
              A family-owned assisted living facility in Anchorage, Alaska,
              dedicated to compassionate, personalized care in a warm,
              home-like environment.
            </p>
          </div>

          <div>
            <p className="text-[1.05rem] font-semibold uppercase tracking-[0.16em] text-[#c1358e]">
              Navigate
            </p>
            <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.92rem] text-white/80 transition-colors hover:text-white sm:text-[0.96rem]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[1.05rem] font-semibold uppercase tracking-[0.16em] text-[#c1358e]">
              Contact Us
            </p>
            <div className="mt-4 space-y-3 text-[0.9rem] text-white/80 sm:mt-5 sm:space-y-4 sm:text-[0.94rem]">
              <div className="flex items-start justify-end gap-3 lg:justify-start">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#c1358e]" aria-hidden="true" />
                <a
                  href={BUSINESS.contact.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.address}
                </a>
              </div>
              <div className="flex items-start justify-end gap-3 lg:justify-start">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#c1358e]" aria-hidden="true" />
                <a
                  href={BUSINESS.contact.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.contact.phone}
                </a>
              </div>
              <div className="flex items-start justify-end gap-3 lg:justify-start">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#c1358e]" aria-hidden="true" />
                <a
                  href={BUSINESS.contact.emailHref}
                  className="transition-colors hover:text-white"
                >
                  {BUSINESS.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/12 pt-5 sm:mt-12 sm:pt-6">
          <div className="flex flex-col gap-2 text-right text-[0.82rem] text-white/45 sm:gap-3 sm:text-[0.86rem] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Precious Care Assisted Living. All rights reserved.</p>
            <p>{BUSINESS.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
