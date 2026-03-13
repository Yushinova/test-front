import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import { TimerProvider } from '@/context/TimerContext';
import "./globals.css";

// Настройка Montserrat
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
})

// ✅ Добавляем Raleway
const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700'], // нужные насыщенности
})

export const metadata: Metadata = {
  title: "Test Task Front",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ✅ Добавляем обе переменные в className
    <html lang="ru" className={`${montserrat.variable} ${raleway.variable}`}>
      <body className="bg-white">
        <TimerProvider>
           {children}
        </TimerProvider>
       
      </body>
    </html>
  );
}