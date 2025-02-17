import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "GigAuth",
  description: "Auth system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
