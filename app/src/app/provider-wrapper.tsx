"use client";
import { ThemeProvider } from "@/components/providers/theme";
import { SessionProvider } from "next-auth/react";

export default function ProvidersWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
