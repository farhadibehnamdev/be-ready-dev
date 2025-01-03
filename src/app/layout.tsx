import type { Metadata } from "next";
import "./globals.css";
import { CenteredFooter } from "./_components/footer/footer";
import NextUIProviderClient from "@/providers/nextui-provider";
import QueryProvider from "@/providers/react-query-provider";
import Header from "./_components/header/header";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.className} antialiased dark`}>
      <body
        className={`${GeistSans.className} dark text-foreground bg-background`}
      >
        <NextUIProviderClient>
          <QueryProvider>
            <Header />
            <main>{children}</main>
            <CenteredFooter />
          </QueryProvider>
        </NextUIProviderClient>
      </body>
    </html>
  );
}
