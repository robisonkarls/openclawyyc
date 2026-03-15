import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tsunami AI Assistant Services | Calgary",
  description:
    "White-glove AI assistant deployment and managed care for founders and executive teams in Calgary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
