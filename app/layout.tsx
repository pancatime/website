import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panca.no",
  description: "My website",
};

interface Props {
  children: Readonly<{ children: React.ReactNode; }>,
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-black text-orange-400`}>
        {children}
      </body>
    </html>
  );
}
