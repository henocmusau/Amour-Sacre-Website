import '../globals.css';

import type { Metadata } from 'next';
import { Sidebar } from '@/components/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Management',
  description: 'A beautiful and responsive dashboard built with Next.js',
};

const inter = Inter({ subsets: ['latin'] });


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className=' h-dvh w-full flex'>
            <Sidebar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}