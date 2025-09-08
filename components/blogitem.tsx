import Link from "next/link";

type Props = {
  path: string,
  text: string,
  date: string,
}

export default function BlogItem({ path, text, date}: Props) {
  return (
    <Link href={path}>
      <p className="text-2xl font-bold">{text}</p>
      <p className="text-l">{date}</p>
    </Link>
  );
}
