import type { Metadata } from 'next';
import './global.scss';
import React from 'react';
import { Providers } from './providers';
import Header from 'src/components/Header';

export const metadata: Metadata = {
  title: 'Foo',
  description: 'Description Foo',
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
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
