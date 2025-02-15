import { Karla } from 'next/font/google';
import './globals.css';

const karla = Karla({ subsets: ['latin'] });

export const metadata = {
  title: 'Justinnn',
  description: "A crazy person who likes making things for a living 🎉",
  keywords: 'justinnn, justin, justinnn.dev, jqstln',
  authors: [{ name: 'Justinnn' }],
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico',
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen items-center justify-center bg-linear-to-tr from-gray-900 to-neutral-900 text-white ${karla.className}`}
      >
        {children}
      </body>
    </html>
  );
}
