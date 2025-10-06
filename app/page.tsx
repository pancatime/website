import { Passion_One } from "next/font/google";

const passion_one = Passion_One({
  weight: ["400", "700"],
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div className="grid content-center h-full">
      <div className="p-4 box-border h-fit w-full">
        <main>
          <header className="w-fit">
            <h1 className={`${passion_one.className} text-9xl text-orange-400`}>
              CodingPancake
            </h1>
            <p className="text-right">Copyright 2025 © Panca</p>
          </header>
        </main>
      </div>
    </div>
  );
}
