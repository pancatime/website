import Navigation from "../components/navigation";

export default function Showcase() {
  return (
    <>
      <header className="col-start-2 col-end-3">
        <h1>Panca.no</h1>
        <Navigation navItems={[
          { href: "/", title: "⌂ Home" },
        ]}/>
      </header>
      <main>
        Epic showcase
      </main>
    </>
  );
}
