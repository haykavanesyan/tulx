import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Utilkit - Utility Library Documentation',
  description: 'Documentation for Utilkit utility library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
