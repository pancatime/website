import Link from "next/link";
import { Fredoka, Nunito } from "next/font/google";

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const links = [
  { href: "/blog",      title: "Blog" },
  { href: "/about",     title: "About" },
];

export default function Home() {
  return (
    <div>
      <div className="max-w-[720px] m-auto p-4 box-border">
        <header className="mt-50">
          <h1 className={`${fredoka.className} text-7xl text-white text-shadow-[-4px_0px_4px_rgb(150_200_255_/_1)]`}>
            Pancatime
          </h1>
        </header>
        <main className="my-8">
          <nav>
            <ul className={"*:py-2 text-2xl font-bold"}>
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition duration-300 hover:text-white">
                    { item.title }
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </main>
        <footer className="col-start-1 mt-24">
          <p>Copyright 2025 © Panca</p>
        </footer>
      </div>
    </div>
  );
}
