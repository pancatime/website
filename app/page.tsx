import Navigation from "./components/navigation";
import { Fredoka, Nunito } from "next/font/google";

const fredoka = Fredoka({
  weight: ["400", "700"],
  subsets: ["latin"],
});


export default function Home() {
  return (
    <>
      <header className="col-start-1 col-end-3 mt-32">
        <h1 className={`${fredoka.className} text-7xl`}>Panca.no</h1>
      </header>
      <main className="col-start-1 col-end-3 my-4">
        <Navigation/>
      </main>
    </>
  );
}
