import wed1 from "../assets/image/wed6.jpg";   // focal (tall)
import wedA from "../assets/image/wed5.jpg";
import wedB from "../assets/image/wed3.jpg";
import wedC from "../assets/image/wed4.jpg";

const collageConfig = {
  id: "wedding-collage-1",
  ariaLabel: "Wedding photo collage",
  wrapper: {
    bg: "#fff4ef",
    borderColor: "#d5b48c",
    cornerDotColor: "#d5b48c",
    ringColor: "#f0d9c2",
  },
  caption: {
    textColor: "#7a4a3d",
    bg: "#ffffffcc",
  },
  badge: {
    bg: "#fff7f2cc",
    textColor: "#a12727",
  },
  photos: [
    {
      id: "engagement",
      position: "top-left",
      src: wedA,
      alt: "Couple exchanging garlands",
      label: "Engagement",
      sizeClass: "h-28 md:h-32",
      extraFigureClass: "-translate-y-1 md:-translate-y-2",
    },
    {
      id: "main-ceremony",
      position: "top-right-tall",
      src: wed1,
      alt: "Bride and groom garlanding",
      label: "Main Ceremony",
      sizeClass: "min-h-[200px]",
    },
    {
      id: "mehendi",
      position: "bottom-left",
      src: wedB,
      alt: "Mehendi hands",
      label: "Mehendi",
      sizeClass: "h-28 md:h-32",
      extraFigureClass: "translate-y-2",
    },
    {
      id: "cocktail",
      position: "bottom-right",
      src: wedC,
      alt: "Cocktail party lights",
      label: "Cocktail",
      sizeClass: "h-28 md:h-32",
      extraFigureClass: "translate-y-1 md:translate-y-3",
    },
  ],
};

export default function Collage() {
  const { wrapper, caption, badge, photos } = collageConfig;

  const topLeft = photos.find((p) => p.position === "top-left");
  const topRightTall = photos.find((p) => p.position === "top-right-tall");
  const bottomLeft = photos.find((p) => p.position === "bottom-left");
  const bottomRight = photos.find((p) => p.position === "bottom-right");

  return (
    <aside
      aria-label={collageConfig.ariaLabel}
      className="w-full max-w-md p-4 md:p-6 rounded-3xl border-[6px] shadow-2xl relative overflow-hidden"
      style={{ backgroundColor: wrapper.bg, borderColor: wrapper.borderColor }}
    >
      {/* Decorative gold corner (top-left) */}
      <div
        className="absolute -left-3 -top-3 w-12 h-12 rounded-full opacity-90 blur-sm pointer-events-none"
        style={{ backgroundColor: wrapper.cornerDotColor }}
      ></div>

      {/* inner padded area so photos don't touch border */}
      <div className="p-3 bg-transparent">
        <div className="grid grid-cols-2 gap-4 md:gap-5">
          {/* Top-left small */}
          {topLeft && (
            <figure
              className={`relative overflow-hidden rounded-xl bg-white drop-shadow-sm transform ${
                topLeft.extraFigureClass || ""
              }`}
            >
              <img
                src={topLeft.src}
                alt={topLeft.alt}
                loading="lazy"
                className={`w-full ${topLeft.sizeClass} object-cover transition-transform duration-500 ease-out hover:scale-105`}
              />
              <figcaption
                className="absolute left-3 bottom-3 text-xs px-2 py-1 rounded-md"
                style={{
                  color: caption.textColor,
                  backgroundColor: caption.bg,
                }}
              >
                {topLeft.label}
              </figcaption>
            </figure>
          )}

          {/* Top-right tall focal */}
          {topRightTall && (
            <figure className="relative row-span-2 overflow-hidden rounded-2xl bg-white drop-shadow-xl">
              <img
                src={topRightTall.src}
                alt={topRightTall.alt}
                loading="lazy"
                className={`w-full h-full ${topRightTall.sizeClass} object-cover transition-transform duration-600 hover:scale-102`}
                style={{ transitionTimingFunction: "cubic-bezier(.2,.9,.3,1)" }}
              />
              <div
                className="absolute right-3 top-3 text-xs px-2 py-1 rounded-md font-semibold"
                style={{
                  backgroundColor: badge.bg,
                  color: badge.textColor,
                }}
              >
                {topRightTall.label}
              </div>
            </figure>
          )}

          {/* Bottom-left */}
          {bottomLeft && (
            <figure
              className={`relative overflow-hidden rounded-xl bg-white drop-shadow-sm transform ${
                bottomLeft.extraFigureClass || ""
              }`}
            >
              <img
                src={bottomLeft.src}
                alt={bottomLeft.alt}
                loading="lazy"
                className={`w-full ${bottomLeft.sizeClass} object-cover transition-transform duration-500 hover:scale-105`}
              />
              <figcaption
                className="absolute left-3 bottom-3 text-xs px-2 py-1 rounded-md"
                style={{
                  color: caption.textColor,
                  backgroundColor: caption.bg,
                }}
              >
                {bottomLeft.label}
              </figcaption>
            </figure>
          )}

          {/* Bottom-right */}
          {bottomRight && (
            <figure
              className={`relative overflow-hidden rounded-xl bg-white drop-shadow-sm transform ${
                bottomRight.extraFigureClass || ""
              }`}
            >
              <img
                src={bottomRight.src}
                alt={bottomRight.alt}
                loading="lazy"
                className={`w-full ${bottomRight.sizeClass} object-cover transition-transform duration-500 hover:scale-105`}
              />
              <figcaption
                className="absolute left-3 bottom-3 text-xs px-2 py-1 rounded-md"
                style={{
                  color: caption.textColor,
                  backgroundColor: caption.bg,
                }}
              >
                {bottomRight.label}
              </figcaption>
            </figure>
          )}
        </div>
      </div>

      {/* soft inner shadow line to match theme */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1"
        style={{ boxShadow: "inset 0 0 0 1px rgba(240, 217, 194, 0.3)" }}
      ></div>
    </aside>
  );
}
