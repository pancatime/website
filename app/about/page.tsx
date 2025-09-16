import Navigation from "@/components/navigation";

export default function About() {
  return (
    <div className="max-w-[720px] m-auto p-4 box-border">
      <header className="mt-50">
        <Navigation navItems={[ { href: "/", title: "< About" }, ]}/>
      </header>
      <main className="mt-20">
        <p className="text-xl">Hi, my name is Panca.</p>
      </main>
    </div>
  );
}
