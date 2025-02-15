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
        <meta name="apple-mobile-web-app-title" content="Justinnn" />
        <meta name="keywords" content="justinnn,justin,justinnn.dev,jqstln" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Justinnn" />
        <title>{metadata.title}</title>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <body
        className={`flex min-h-screen items-center justify-center bg-gradient-to-tr from-gray-900 to-neutral-900 text-white ${karla.className}`}
      >
        {children}
      </body>
    </html>
  );
}
