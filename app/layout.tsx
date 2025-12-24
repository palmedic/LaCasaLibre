import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'La Casa Libre',
  description: 'A home that runs itself, so I can live as I choose',
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
