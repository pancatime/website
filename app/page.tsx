import Link from "next/link";
import { Fredoka, Nunito } from "next/font/google";

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const links = [
  { href: "/",          title: "Home" },
  { href: "/blog",      title: "Blog" },
  { href: "/showcase",  title: "Showcase" },
  { href: "/about",     title: "About" },
];

export default function Home() {
  return (
    <div className="grid h-screen content-center">
      <div className="w-[720px] h-[500px] m-auto">
        <header>
          <h1 className={`${fredoka.className} text-7xl text-white text-shadow-[-4px_0px_4px_rgb(150_200_255_/_1)]`}>
            Pancatime
          </h1>
        </header>
        <main className="my-8">
          <nav>
            <ul className={"*:py-2 text-xl font-bold"}>
              {links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transform transition duration-300 hover:text-white">
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
