import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/header';
import FloatingContact from '@/components/layout/floating-contact';

export const metadata: Metadata = {
  title: '휴렌터카',
  description: '신차 장기렌트 전문',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* font */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />

        {/* OG meta tags */}
        <meta property="og:title" content="휴렌터카" />
        <meta property="og:description" content="신차 장기렌트 전문" />
        <meta property="og:image" content="/images/og-image.jpeg" />
        <meta property="og:url" content="https://hue-car-rental.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="휴렌터카" />

        {/* favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="antialiased relative">
        <Header />
        <main className="w-full min-h-dvh">{children}</main>
        <FloatingContact />
      </body>
    </html>
  );
}
