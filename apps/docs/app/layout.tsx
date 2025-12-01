import { DonationButton } from '@/components/donation-button';
import { ThemeProvider } from '@/components/theme-provider';

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tulx - Utility Library Documentation',
  description:
    'Modern JavaScript/TypeScript utility functions library with live playground',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <DonationButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
