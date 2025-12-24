import Image from 'next/image';
import './page.css';

export default function Home() {
  return (
    <>
      <section className="fullscreen-quote">
        <Image
          src="/LaCasaLibreLogo.png"
          alt="La Casa Libre Logo"
          className="logo"
          width={360}
          height={200}
          priority
        />
        <blockquote>
          "If I had fifty-three minutes to spend as I liked, I should walk at my leisure toward a spring of fresh water."<br />
          <span className="attribution">— The Little Prince, Chapter 23</span>
        </blockquote>
      </section>

      <section className="intro">
        <div className="title">La Casa Libre</div>
        <p>This is not just a house. It's a declaration — that life is best lived when it's free. Here, technology quietly takes care of the everyday, so I can live the days that matter. And yet, in a place where almost everything can run itself, I've left space for the things that deserve my own time and touch.</p>
      </section>

      <section className="three-freedoms">
        <div className="freedom">
          <h2>Freedom of Mind</h2>
          <p>Walls lined with books — novels that reshaped the world, poetry that shaped my own. Music spinning on warm vinyl, because pressing play on a streaming app will never match the ritual of lowering the needle. Design that is not decoration but conversation — chairs, lamps, and objects chosen because they make me think.</p>
        </div>
        <div className="freedom">
          <h2>Freedom of Motion</h2>
          <p>Bikes tuned and ready, because any morning might lead to the desert or the mountains. Long rides under a hard sun, open roads where the only measure of distance is the rhythm of the pedals. And even though every ride is tracked and recorded, I sometimes turn off the path — because, as Tolkien said, "Not all those who wander are lost."</p>
        </div>
        <div className="freedom">
          <h2>Freedom of Being</h2>
          <p>Coffee in the morning, poured slowly — not because the house can't make it for me, but because some rituals are worth keeping in my own hands. A bottle of wine opened for no reason but joy — the cork turned and eased out, the glass filled — because not every act should be rushed or automated. Photographs, letters, and keepsakes from those I've loved, and those who've loved me. My children, Kamma and Ivri, each with their own world, their own way, yet part of mine. And always, the horizon of the Ramon crater — a reminder that stillness can be as vast as motion.</p>
        </div>
      </section>

      <section className="visual"></section>

      <section className="closing">
        <p>A home that runs itself, so I can live as I choose — and where the best things are still worth doing slowly.</p>
      </section>

      <footer>
        © La Casa Libre
      </footer>
    </>
  );
}
