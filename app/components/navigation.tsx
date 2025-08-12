import Link from "next/link";

interface Props {
  horizontal: bool,
  isHomePage: bool,
}

const links = [
  { href: "/",          title: "Home" },
  { href: "/blog",      title: "Blog" },
  { href: "/showcase",  title: "Showcase" },
  { href: "/about",     title: "About" },
];

export default function Header({ horizontal, isHomePage }: Props) {
  return(
    <nav>
      <ul className={`${ horizontal ? "flex justify-between " : "" }` +
                     `*:px-4 *:py-2 text-xl font-bold`}>
        {links.filter((item) => !(item.title == "Home" && isHomePage))
              .map((item) => (
          <li key={item.href}>
            <Link href={item.href}
                  className="transform transition duration-300 hover:text-white">
              { item.title }
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
