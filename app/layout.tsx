import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProviders } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  description:
    "I'm a Full Stack Engineer who builds scalable web applications and ai agents",
  title: "Santosh Marar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={cn(
        jetBrainsMono.variable,
        "font-sans",
        "overflow-y-scroll",
        plus_jakarta_sans.variable
      )}
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${plus_jakarta_sans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProviders>{children}</ThemeProviders>
        <Analytics />
      </body>
    </html>
  );
}
