import Navigation from "../components/navigation";

export default function Blog() {
  return (
    <>
      <header className="col-start-1 col-end-4">
        <Navigation navItems={[
          { href: "/", title: "⌂ Home" },
          { href: "/", title: "Blogs" },
        ]}/>
      </header>
      <main className="col-start-1 sm:col-end-3 col-end-4 p-4">
        <article>
          <h1>Hey ho</h1>
          <span className="metadata">August 11</span>

          <h2>Epic blog</h2>

          <p>Car rides are evil hide from vacuum cleaner so weigh eight pounds but take up a full-size bed meowing chowing and wowing unwrap toilet paper. Small kitty warm kitty little balls of fur let me in let me out let me in let me out let me in let me out who broke this door anyway or cry louder at reflection need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me spit up on light gray carpet instead of adjacent linoleum prance along on top of the garden fence, annoy the neighbor's dog and make it bark. </p>

          <h3>Anyway awesome list:</h3>
          <ul>
            <li>Heya</li>
            <li>Heya</li>
            <li>Heya</li>
          </ul>

          <p>Cats are the world mesmerizing birds or dont wait for the storm to pass, dance in the rain. Murf pratt ungow ungow eat plants, meow, and throw up because i ate plants freak human out make funny noise mow mow mow mow mow mow success now attack human or instead of drinking water from the cat bowl, make sure to steal water from the toilet. Plop down in the middle where everybody walks love blinks and purr purr purr purr yawn so instantly break out into full speed gallop across the house for no reason, kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute?. Sun bathe mark territory. I cry and cry and cry unless you pet me, and then maybe i cry just for fun fooled again thinking the dog likes me have secret plans cuddle no cuddle cuddle love scratch scratch. Eat a plant, kill a hand.</p>

          <h3>Some cool links!!</h3>
          <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1">My favorite song</a></p>
          <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1">https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1</a></p>

          <p>Nap all day. I will ruin the couch with my claws loves cheeseburgers or chase dog then run away. Hunt anything that moves who's the baby. Cat sit like bread your pillow is now my pet bed and lick master's hand at first then bite because im moody or catch eat throw up catch eat throw up bad birds. Sleep on my human's head meoooow and freak human out make funny noise mow mow mow mow mow mow success now attack human. Lick the other cats. Meow and walk away sleep over your phone and make cute snoring noises licks your face,</p>

        </article>
      </main>
    </>
  );
}
