// src/components/Collage.jsx
import wed1 from "../assets/image/wed6.jpg";   // focal (tall)
import wedA from "../assets/image/wed5.jpg";
import wedB from "../assets/image/wed3.jpg";
import wedC from "../assets/image/wed4.jpg";

export default function Collage() {
  return (
    <aside
      aria-label="Wedding photo collage"
      className="w-full max-w-md p-4 md:p-6 bg-[#fff4ef] rounded-3xl border-[6px] border-[#d5b48c] shadow-2xl
                 relative overflow-hidden"
    >
      {/* Decorative gold corner (top-left) */}
      <div className="absolute -left-3 -top-3 w-12 h-12 rounded-full bg-[#d5b48c] opacity-90 blur-sm pointer-events-none"></div>

      {/* inner padded area so photos don't touch border */}
      <div className="p-3 bg-transparent">
        <div className="grid grid-cols-2 gap-4 md:gap-5">

          {/* Top-left small */}
          <figure className="relative overflow-hidden rounded-xl bg-white drop-shadow-sm transform -translate-y-1 md:-translate-y-2">
            <img
              src={wedA}
              alt="Couple exchanging garlands"
              loading="lazy"
              className="w-full h-28 md:h-32 object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
            <figcaption className="absolute left-3 bottom-3 text-xs text-[#7a4a3d] bg-[#ffffffcc] px-2 py-1 rounded-md">
              Engagement
            </figcaption>
          </figure>

          {/* Top-right tall focal */}
          <figure className="relative row-span-2 overflow-hidden rounded-2xl bg-white drop-shadow-xl">
            <img
              src={wed1}
              alt="Bride and groom garlanding"
              loading="lazy"
              className="w-full h-full min-h-[200px] object-cover transition-transform duration-600 hover:scale-102"
              style={{ transitionTimingFunction: "cubic-bezier(.2,.9,.3,1)" }}
            />
            <div className="absolute right-3 top-3 text-xs px-2 py-1 rounded-md bg-[#fff7f2cc] text-[#a12727] font-semibold">
              Main Ceremony
            </div>
          </figure>

          {/* Bottom-left mehndi (staggered) */}
          <figure className="relative overflow-hidden rounded-xl bg-white drop-shadow-sm transform translate-y-2">
            <img
              src={wedB}
              alt="Mehendi hands"
              loading="lazy"
              className="w-full h-28 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
            />
            <figcaption className="absolute left-3 bottom-3 text-xs text-[#7a4a3d] bg-[#ffffffcc] px-2 py-1 rounded-md">
              Mehendi
            </figcaption>
          </figure>

          {/* Bottom-right party (small) */}
          <figure className="relative overflow-hidden rounded-xl bg-white drop-shadow-sm transform translate-y-1 md:translate-y-3">
            <img
              src={wedC}
              alt="Cocktail party lights"
              loading="lazy"
              className="w-full h-28 md:h-32 object-cover transition-transform duration-500 hover:scale-105"
            />
            <figcaption className="absolute left-3 bottom-3 text-xs text-[#7a4a3d] bg-[#ffffffcc] px-2 py-1 rounded-md">
              Cocktail
            </figcaption>
          </figure>

        </div>
      </div>

      {/* soft inner shadow line to match theme */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#f0d9c2]/30"></div>
    </aside>
  );
}
