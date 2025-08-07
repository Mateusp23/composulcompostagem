// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Composul Compostagem",
    template: "%s | Composul Compostagem",
  },
  description: "Especialistas em compostagem industrial e soluções sustentáveis para resíduos orgânicos.",
  keywords: [
    "compostagem",
    "resíduos orgânicos",
    "sustentabilidade",
    "compostagem industrial",
    "tratamento de resíduos",
    "meio ambiente",
    "Composul"
  ],
  authors: [{ name: "Composul", url: "https://composul.com.br" }],
  creator: "Composul",
  generator: "Next.js",
  metadataBase: new URL("https://composul.com.br"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Composul Compostagem",
    description: "Soluções sustentáveis para o tratamento de resíduos orgânicos.",
    url: "https://composul.com.br",
    siteName: "Composul",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Composul Compostagem",
    description: "Soluções sustentáveis para resíduos orgânicos.",
    creator: "@composul",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ✅ Mover viewport para export separado
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${roboto.variable} bg-background antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
