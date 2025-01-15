import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme/theme';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--inconsolata',
});

export const metadata: Metadata = {
  title: 'Facundo Reartes',
  description: 'Facundo Reartes personal portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en" className={inconsolata.className}>
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
