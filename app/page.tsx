import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Panca.no</h1>
        <nav>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/showcase">Showcase</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        Hey
      </main>
    </div>
  );
}
