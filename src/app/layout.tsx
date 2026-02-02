import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lakshya Library - Where Aspirants Become Achievers.",
  description: "Book your seat. Build your future.",
  icons: [
    { rel: "icon", url: "/Fav_icons/favicon.ico" },
    { rel: "icon", url: "/Fav_icons/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/Fav_icons/favicon-96x96.png", sizes: "96x96" },
    { rel: "apple-touch-icon", url: "/Fav_icons/apple-icon.png" },
  ],
  manifest: "/Fav_icons/site.webmanifest.json",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
