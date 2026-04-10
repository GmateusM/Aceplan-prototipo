import type { Metadata } from "next";
import { Inter, Mitr } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mitr = Mitr({
  weight: ["300", "400", "500", "700"],
  variable: "--font-mitr",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aceplanvr.com.br'),
  title: "Aceplan - Apartamentos em Volta Redonda",
  description: "Encontre seu apartamento em Volta Redonda. Empreendimentos incríveis com a Aceplan.",
  openGraph: {
    title: 'Aceplan - Apartamentos e Lotes em Volta Redonda',
    description: 'Encontre seu imóvel em Volta Redonda e Região. Obras primas de design com o Grupo Aceplan.',
    url: 'https://aceplanvr.com.br',
    siteName: 'Grupo Aceplan',
    images: [
      {
        url: '/sgw.aceplanvr.com.br/storage/conteudo/1/348/20231002161353_651b167135b78.png', 
        width: 1200,
        height: 630,
        alt: 'Grupo Aceplan',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aceplan VR',
    description: 'A nova dimensão dos seus sonhos.',
    images: ['/sgw.aceplanvr.com.br/storage/conteudo/1/348/20231002161353_651b167135b78.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${mitr.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans pt-20">
        <Analytics />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
