import type { Metadata } from 'next';
import './global.scss';
import React from 'react';
import { Providers } from './providers';
import Header from 'src/components/Header';

export const metadata: Metadata = {
  title: 'Weather App',
  description:
    'Get real-time weather information and 5-day forecasts for any city worldwide.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <React.Suspense>
            <Header />
          </React.Suspense>
          {children}
        </Providers>
      </body>
    </html>
  );
}
