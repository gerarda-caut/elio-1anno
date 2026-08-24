"use client";

import { useState } from "react";
import { useEffect } from "react";

const mesi = [
  "mese-01.jpeg",
  "mese-02.jpeg",
  "mese-03.jpeg",
  "mese-04.jpeg",
  "mese-05.jpeg",
  "mese-06.jpeg",
  "mese-07.jpeg",
  "mese-08.jpeg",
  "mese-09.jpeg",
  "mese-10.jpeg",
  "mese-11.jpeg",
];

const icone = [
  "🚗",
  "🚕",
  "🚓",
  "🚑",
  "🚒",
  "🚜",
  "🚚",
  "🏍️",
  "🚂",
  "🚌",
  "🏎️",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

 useEffect(() => {
const timer = setInterval(() => {
setCurrent((prev) => (prev + 1) % mesi.length);
}, 3000);
 
return () => clearInterval(timer);
}, []);
 
const prev = () =>
setCurrent((current - 1 + mesi.length) % mesi.length);
 
const next = () =>
setCurrent((current + 1) % mesi.length);

  return (
<main
className="min-h-screen bg-gradient-to-b from-neutral-100 via-white to-neutral-100"
style={{
backgroundImage: "url('https://tse2.mm.bing.net/th/id/OIP.aA2oTvr_QZtuYJJhQwpyRQHaF_?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')",
backgroundSize: "600px",
backgroundRepeat: "repeat",
opacity: 1,
}}
>
<div className="bg-white/90">
<img src="https://tse2.mm.bing.net/th/id/OIP.aA2oTvr_QZtuYJJhQwpyRQHaF_?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
alt="Ruote e bandiere" className="w-full h-12 object-cover"/>
     <section className="bg-gradient-to-r from-red-700 via-red-500 to-orange-500 text-white text-center py-10 md:py-16">
      <h1 className="text-3xl font-bold text-black-600">
  Gran Premio di Elio
</h1>

       <p className="mt-2 text-gray-600">
          Il viaggio verso il mio primo compleanno 🎂
        </p>
      </section>

      <section className="max-w-5xl mx-auto p-6">
        <h2 className="text-xl font-bold text-center mb-4">
          🚗 Il mio primo anno
        </h2>
<div className="max-w-5xl mx-auto px-3 py-4">
  <img
    src={"/" + mesi[current]}
    alt={"Mese " + (current + 1)}
    className="w-full max-h-[45vh] md:max-h-[55vh] object-contain"/>
<div className="text-center mt-4 mb-8">
<h3 className="text-2xl font-bold text-zinc-800">
🏁 Tappa {current + 1}
</h3>
 
<p className="text-lg text-gray-600">
Tappa {current + 1} di {mesi.length}
</p>
</div>
<div className="mt-2">
<div className="w-full bg-gray-200 rounded-full h-2 mt-4">
<div
className="bg-red-600 h-2 rounded-full"
style={{
width: `${((current + 1) / mesi.length) * 100}%`,
}}
/>
</div>
</div>
</div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="bg-red-600 text-white px-5 py-2 rounded-full"
            >
              ◀ Indietro
            </button>

            <button
              onClick={next}
              className="bg-red-600 text-white px-5 py-2 rounded-full"
            >
              Avanti ▶
            </button>
          </div>
      </section>
<section className="mb-8 px-6">
  <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6 text-center">

    <div className="max-w-sm mx-auto mb-8">
	<h2 className="text-4xl font-bold text-red-600 mb-4">
     Traguardo raggiunto!
</h2>
      <img
        src="/compleanno.jpeg"
        alt="Elio 1 anno"
        className="text-4xl font-bold text-red-600 mb-4"/>
    

    <p className="text-xl md:text-2xl mb-6 text-center whitespace-nowrap">
      🎂 Elio compie 1 anno 🎂
    </p>

    <p className="text-gray-600 mb-8">
      Dopo 11 mesi di sorrisi, scoperte e avventure,
      è arrivato il momento di festeggiare insieme!
    </p>

    <div className="space-y-4 text-xl">
      <p>📅 3 Settembre 2026</p>
      <p>🕒 Ore 18:00</p>
      <p>📍 Via Michelangelo Buonarroti 63</p>
    </div>

    <div className="flex justify-center">
      <a
        href="https://wa.me/393404167306?text=Ciao!%20Parteciper%C3%B2%20con%20piacere%20al%20Gran%20Premio%20di%20Elio"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold shadow-lg transition"
      >
        ✅ Conferma presenza
      </a>
    </div>

  </div>
  </div>
</section>
<div>
<img src="https://tse2.mm.bing.net/th/id/OIP.aA2oTvr_QZtuYJJhQwpyRQHaF_?r=0&amp;rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3" alt="Ruote e bandiere" class="w-full h-12 object-cover"/>
</div>
</div>
    </main>
  );
}