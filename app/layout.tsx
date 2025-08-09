import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panca.no",
  description: "My website",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={fredoka.className} >
        {children}
      </body>
      <footer>
        <p>Copyright 2025 © - Panca</p>
      </footer>
    </html>
  );
}
