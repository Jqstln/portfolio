// src/app/layout.js

import Head from 'next/head';
import { Karla } from 'next/font/google';
import './globals.css';

const karla = Karla({ subsets: ['latin'] });

export const metadata = {
  title: 'Justinnn',
  description: "Justinnn's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`bg-gradient-to-tr from-gray-900 to-neutral-900 text-white flex items-center justify-center min-h-screen ${karla.className}`}>
        {children}
      </body>
    </html>
  );
}
