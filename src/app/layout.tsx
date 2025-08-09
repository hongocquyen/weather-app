import type { Metadata } from 'next';
import './global.scss';
import React from 'react';
import { Providers } from './providers';

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
