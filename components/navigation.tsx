import Link from "next/link";

interface Props {
  navItems: { href: string, title: string }[]
}

export default function Navigation({ navItems } : Props) {
  return (
    <nav>
      <ul className="flex flex-horizontal">
        {navItems.map((item) => (
          <li key={item.title}>
            <Link href={item.href} className="text-2xl font-bold transform transition duration-300 hover:text-white">
              { item.title }
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
