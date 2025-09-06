"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

/** Images locales dans /public */
const COVER_URL = "/cover.png";
const SCENE_URL = "/scene.png";   // scène 1
const SCENE2_URL = "/scene2.png"; // scène 2 (toi en train de chanter)

export default function Page() {
  // Scroll fluide pour les ancres
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#05050b] text-zinc-200 selection:bg-red-700/40 selection:text-zinc-50">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-zinc-800/60">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="font-semibold tracking-widest uppercase text-zinc-100">
            Liloo · <span className="text-zinc-300">Amour Létal</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#bio" className="hover:text-zinc-50">Bio</a>
            <a href="#story" className="hover:text-zinc-50">Story</a>
            <a href="#tracks" className="hover:text-zinc-50">Tracklist</a>
            <a href="#gallery" className="hover:text-zinc-50">Visuels</a>
            <a href="#contacts" className="hover:text-zinc-50">Contacts</a>
          </div>
        </nav>
      </header>

      {/* HERO / COVER */}
      <section className="relative pt-14">
        <div className="relative h-[80vh] w-full">
          <img src={COVER_URL} alt="Cover officielle de l’EP Amour Létal" className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 max-w-6xl mx-auto px-6 pb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100"
            >
              Liloo — <span className="text-zinc-300">Amour Létal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-3 max-w-2xl text-zinc-300 italic"
            >
              « Quand l’amour devient poison, la musique devient une arme. »
            </motion.p>
          </div>
        </div>
      </section>

      {/* BIO */}
      <section id="bio" className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Bio</h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-red-700 to-transparent rounded-full" />
            <p className="mt-6 leading-7 text-zinc-300">
              <strong>Liloo</strong> livre avec <em>Amour Létal</em> un projet intense où chaque titre trace les cicatrices
              et les éclats d’un amour passionnel et toxique. Entre désir brûlant, colère sourde et quête de liberté,
              elle transforme sa douleur en une arme sonore universelle. Artiste capable de mêler fragilité et rage,
              Liloo navigue entre RnB, rap et mélodies profondes. Sa voix habitée capture la violence des émotions
              et la renaissance qui en jaillit. Plus qu’un EP, c’est un combat intime devenu un manifeste universel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img src={SCENE_URL} alt="Liloo sur scène, visuel presse" className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10" />
            <div className="absolute -inset-2 -z-10 bg-gradient-to-tr from-red-700/20 to-transparent blur-2xl rounded-3xl" />
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Storytelling de l’EP</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-zinc-400 to-transparent rounded-full" />
          <p className="mt-6 leading-7 text-zinc-300">
            <em>Amour Létal</em> raconte le voyage d’une passion toxique — un poison qui enivre, un combat qui détruit,
            une addiction qui attire, puis une renaissance qui libère. À travers six morceaux liés entre eux comme les chapitres d’un roman,
            Liloo dévoile les étapes d’un parcours intime et universel : l’espoir, l’impuissance, le désir, la colère, la liberté, puis la puissance retrouvée.
            Chaque titre est incarné visuellement par un symbole de la cover, tissant une œuvre complète entre musique et image.
          </p>
        </div>
      </section>

      {/* TRACKLIST (icônes PNG + hover zoom) */}
      <section id="tracks" className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Tracklist & Punchlines</h2>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-red-700 to-transparent rounded-full" />
        <ul className="mt-10 grid sm:grid-cols-2 gap-8">
          {[
            { n: 1, t: "Le Saut (Intro)", icon: "/sky-wide.png", d: "Plonger dans la musique, c’est sauter dans le vide sans filet — et renaître à chaque note." },
            { n: 2, t: "Mes Repères (feat. LVTI)", icon: "/moon.png", d: "Quand l’amour qu’on croyait solide s’effondre, il faut apprendre à marcher sans béquilles." },
            { n: 3, t: "Amour Létal", icon: "/bullet-wide.png", d: "Un baiser peut être une balle, un “je t’aime” une arme — l’amour tue autant qu’il fait vivre." },
            { n: 4, t: "Veneno", icon: "/lips.png", d: "Désir vénéneux, attirance irrésistible : parfois, le poison devient la seule drogue qu’on réclame." },
            { n: 5, t: "Jusqu’à ce que je tombe (feat. Marshall Ibk)", icon: "/ring-wide.png", d: "Sur le ring de l’amour, deux âmes s’affrontent, encaissent les coups et se relèvent encore — jusqu’à la dernière chute." },
            { n: 6, t: "Entre Nous", icon: "/mirror-refined.png", d: "Dans le clair-obscur d’une relation toxique, deux âmes se consument jusqu’à la dernière braise." },
          ].map((it) => (
            <li key={it.n} className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-zinc-600 to-zinc-800 border border-white/10 overflow-hidden transform transition-transform duration-300 group-hover:scale-125">
                  <img src={it.icon} alt={it.t} className="h-6 w-6 object-contain" />
                </span>
                <h3 className="text-lg font-semibold text-zinc-100">{it.n}. {it.t}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-300/90">{it.d}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* VISUELS PRESSE (deux photos de scène) */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 pb-10 sm:pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Visuels Presse</h2>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-zinc-400 to-transparent rounded-full" />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative">
            <img src={SCENE_URL} alt="Liloo sur scène — visuel 1" className="w-full h-full object-cover rounded-2xl ring-1 ring-white/10" />
            <div className="absolute -inset-2 -z-10 bg-gradient-to-tr from-red-700/20 to-transparent blur-2xl rounded-3xl" />
          </div>
          <div className="relative">
            <img src={SCENE2_URL} alt="Liloo sur scène — visuel 2" className="w-full h-full object-cover rounded-2xl ring-1 ring-white/10" />
            <div className="absolute -inset-2 -z-10 bg-gradient-to-tr from-red-700/20 to-transparent blur-2xl rounded-3xl" />
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <footer id="contacts" className="relative border-t border-white/10 bg-black/60">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100">Contacts & Liens</h2>
        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-red-700 to-transparent rounded-full" />
          <div className="mt-8">
            <p className="text-zinc-300">
              Booking / Presse :{" "}
              <a className="underline hover:text-zinc-50" href="mailto:lilooqueen976@gmail.com">
                lilooqueen976@gmail.com
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://instagram.com/liloomusikoff"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 transition duration-300 hover:shadow-[0_0_12px_rgba(220,38,38,0.5)]"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@liloomusikoff"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 transition duration-300 hover:shadow-[0_0_12px_rgba(220,38,38,0.5)]"
              >
                YouTube
              </a>
              <a
                href="https://open.spotify.com/search/Liloo%20Queen"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 transition duration-300 hover:shadow-[0_0_12px_rgba(220,38,38,0.5)]"
              >
                Spotify
              </a>
            </div>
          </div>
          <div className="mt-10 text-xs text-zinc-500">© {new Date().getFullYear()} Liloo — Amour Létal · EPK</div>
        </div>
      </footer>
    </div>
  );
}
