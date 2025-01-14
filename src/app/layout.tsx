import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@mui/material';
import theme from '@/theme/theme';

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
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
