import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Section Cover */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/cover.png"
          alt="Cover Amour Létal"
          fill
          className="object-cover opacity-80"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Amour Létal
          </h1>
          <p className="mt-4 text-lg">EPK Officiel — Liloo</p>
        </div>
      </section>

      {/* Bio */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-6">
        <h2 className="text-3xl font-bold">Biographie</h2>
        <p className="text-lg text-white/80 leading-relaxed">
          Liloo, artiste plurielle, trace une route entre lumière et ombre.
          Son univers mêle RnB, rap, gospel, et éclats de soul. Dans ses textes,
          la passion flirte avec la douleur, la fragilité s’embrase en puissance.
          Avec l’EP <em>Amour Létal</em>, elle raconte un voyage — de l’espoir
          à l’impuissance, du désir à la colère, jusqu’à la liberté retrouvée.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src="/portrait.png"
            alt="Liloo portrait"
            width={600}
            height={800}
            className="rounded-2xl object-cover"
          />
          <Image
            src="/scene.png"
            alt="Liloo sur scène"
            width={600}
            height={800}
            className="rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* Tracklist */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Tracklist</h2>
        <div className="space-y-6">
          {[
            {
              n: 1,
              t: "Le Saut (Intro)",
              e: (
                <img
                  src="/sky-wide.png"
                  alt="Le Saut"
                  className="h-6 w-6 inline-block"
                />
              ),
              d: "Plonger dans la musique, c’est sauter dans le vide sans filet — et renaître à chaque note.",
            },
            {
              n: 2,
              t: "Mes Repères (feat. LVTI)",
              e: (
                <img
                  src="/moon.png"
                  alt="Mes Repères"
                  className="h-6 w-6 inline-block"
                />
              ),
              d: "Quand l’amour qu’on croyait solide s’effondre, il faut apprendre à marcher sans béquilles.",
            },
            {
              n: 3,
              t: "Amour Létal",
              e: (
                <img
                  src="/bullet-wide.png"
                  alt="Amour Létal"
                  className="h-6 w-6 inline-block"
                />
              ),
              d: "Un baiser peut être une balle, un “je t’aime” une arme — l’amour tue autant qu’il fait vivre.",
            },
            {
              n: 4,
              t: "Veneno",
              e: (
                <img
                  src="/lips.png"
                  alt="Veneno"
                  className="h-6 w-6 inline-block"
                />
              ),
              d: "Désir vénéneux, attirance irrésistible : parfois, le poison devient la seule drogue qu’on réclame.",
            },
            {
              n: 5,
              t: "Jusqu’à ce que je tombe (feat. Marshall Ibk)",
              e: (
                <img
                  src="/ring-wide.png"
                  alt="Jusqu’à ce que je tombe"
                  className="h-6 w-6 inline-block"
                />
              ),
              d: "Sur le ring de l’amour, deux âmes s’affrontent, encaissent les coups et se relèvent encore — jusqu’à la dernière chute.",
            },
            {
              n: 6,
              t: "Entre Nous",
              e: (
                <img
                  src="/mirror-refined.png"
                  alt="Entre Nous"
                  className="h-6 w-6 inline-block"
                />
              ),
              d: "Dans le clair-obscur d’une relation toxique, deux âmes se consument jusqu’à la dernière braise.",
            },
          ].map((track) => (
            <div key={track.n} className="flex items-start space-x-3">
              <div className="flex-shrink-0">{track.e}</div>
              <div>
                <p className="font-semibold">{track.t}</p>
                <p className="text-sm text-white/70">{track.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacts */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
        <h2 className="text-3xl font-bold">Contacts & Liens</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="mailto:lilooqueen976@gmail.com"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10"
          >
            Email
          </a>
          <a
            href="https://www.instagram.com/liloomusikoff"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@liloomusikoff"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10"
          >
            YouTube
          </a>
          <a
            href="https://open.spotify.com/artist/TON_ID_ARTISTE"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10"
          >
            Spotify
          </a>
        </div>
      </section>
    </main>
  );
}
