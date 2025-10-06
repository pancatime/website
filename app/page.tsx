import Link from "next/link";
import { Fredoka, Nunito, Passion_One } from "next/font/google";

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const passion_one = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"]
})

const links = [
  { href: "/blog",  title: "Blog" },
  { href: "/about", title: "About" },
];

export default function Home() {
  return (
    <div>
      <div className="max-w-[720px] m-auto p-4 box-border">
        <header className="mt-50">
          <h1 className={`${passion_one.className} text-7xl text-orange-400`}>
            CodingPancake
          </h1>
        </header>
        <main className="my-8">
          <nav>
            <ul className={"*:py-2 text-2xl font-bold"}>
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition duration-300 hover:text-orange-400">
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
