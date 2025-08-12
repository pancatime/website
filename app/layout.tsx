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
      <body className={`${nunito.className} bg-black text-blue-200`}>
        <div className="grid grid-cols-3 max-w-[800px] m-auto">
          {children}
          <footer className="col-start-1 mt-24 p-4">
            <p>Copyright 2025 © Panca</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
