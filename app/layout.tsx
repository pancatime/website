import Link from "next/link";
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

const links = [
  { href: "/",      title: "Home" },
  { href: "/blog",  title: "Blog" },
  { href: "/about", title: "About" },
];

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-black text-orange-400`}>
        <div className="grid grid-cols-[500px_auto]">
          <nav className="h-screen grid place-items-center">
            <ul className={"*:py-2 text-2xl font-bold relative w-fit h-fit"}>
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition duration-300 hover:text-orange-400">
                    { item.title }
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
