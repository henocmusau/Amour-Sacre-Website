import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import { defaultMetadata } from "@/utils/constants";
import Navbar from "@/components/LeftNav/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh w-dvw flex`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <SidebarProvider> */}
          {/* <AppSidebar /> */}
          <Navbar />
          <main className=" min-h-dvh w-dvw max-w-full basis-4/5">
            {/* TOPBAR */}
            <aside className="min-h-12 border-b border-primary/30">
              <ModeToggle />
            </aside>

            {/* MAIN CONTENT */}
            <div className="h-full w-full p-8 pt-4">
              {children}
            </div>

          </main>
          {/* </SidebarProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
