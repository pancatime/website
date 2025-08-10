import Link from "next/link";

interface Props {
  classes: bool,
}

const links = [
  { href: "/blog",     title: "Blog" },
  { href: "/showcase", title: "Showcase" },
  { href: "/about",    title: "About" },
];

export default function Header({ horizontal }: Props) {
  return(
    <nav>
      <ul className={`${ horizontal ? "flex justify-between" : "" }` +
                     `*:m-2 text-xl font-bold`}>
        {links.map((item) => (
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
