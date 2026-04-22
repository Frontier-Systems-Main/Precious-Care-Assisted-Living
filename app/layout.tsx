import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BRAND_ASSETS, buildMetadata, BUSINESS, SITE_URL } from "@/lib/constants";

import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicons/favicon-512.png", sizes: "512x512", type: "image/png" },
      { url: BRAND_ASSETS.mark, type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "512x512", type: "image/png" }],
  },
  ...buildMetadata(
    `${BUSINESS.name} | Assisted Living in Anchorage, Alaska`,
  ),
};

export const viewport: Viewport = {
  themeColor: "#063550",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />
          <main id="main-content" className="flex-1 pt-20 sm:pt-24 md:pt-28">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
