'use client';

import { ThemeProvider } from '@/context/theme-provider';
import { AuthProvider } from '@/context/auth-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <AuthProvider>
        <Header />
        {children}
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
}
