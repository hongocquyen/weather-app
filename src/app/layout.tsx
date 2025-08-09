import type { Metadata } from 'next';
import './global.scss';
import React from 'react';

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
      <body>{children}</body>
    </html>
  );
}
