import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GALLERY_IMAGES = [
  {
    src: "http://imgfz.com/i/E49BWDc.jpeg",
    alt: "Entrenamiento GLADIADORES MMA - Sparring en jaula",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "http://imgfz.com/i/fb0x3vP.jpeg",
    alt: "Clase de MMA GLADIADORES - Técnica de golpeo",
    span: "",
  },
  {
    src: "http://imgfz.com/i/M4Y7KiN.jpeg",
    alt: "Competencia GLADIADORES MMA - Atleta en acción",
    span: "",
  },
  {
    src: "http://imgfz.com/i/rPawmM6.jpeg",
    alt: "Equipo GLADIADORES MMA - Foto grupal",
    span: "lg:col-span-2",
  },
  {
    src: "http://imgfz.com/i/FE4yArG.jpeg",
    alt: "GLADIADORES MMA - Entrenamiento infantil",
    span: "",
  },
  {
    src: "http://imgfz.com/i/Okm8XxN.jpeg",
    alt: "GLADIADORES MMA - Técnica de grappling",
    span: "",
  },
  {
    src: "http://imgfz.com/i/3DgXAKE.jpeg",
    alt: "GLADIADORES MMA - Campeones en podio",
    span: "lg:col-span-2",
  },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.08 });
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-background-100">
      <div ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className={`scroll-reveal ${isVisible ? "visible" : ""} md:w-[55%]`}>
            <span className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Galería
            </span>
            <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl text-foreground-950 leading-[0.85] tracking-tight">
              EXPERIENCIA
              <br />
              GLADIADORES
            </h2>
          </div>

          <div className={`scroll-reveal scroll-reveal-delay-2 ${isVisible ? "visible" : ""} md:w-[35%]`}>
            <p className="text-foreground-500 text-sm leading-relaxed">
              Momentos que capturan la esencia de nuestro entrenamiento, la hermandad en el gimnasio y la gloria en la competencia. Así se vive ser un Gladiador.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={img.src}
              className={`scroll-reveal relative rounded-2xl overflow-hidden cursor-pointer group bg-background-50 border border-foreground-950/10 ${
                img.span
              } ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedImg(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground-950/0 group-hover:bg-foreground-950/10 transition-all duration-400" />
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full bg-foreground-950/90 flex items-center justify-center">
                  <i className="ri-add-line text-background-50 text-xl" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-background-950/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background-50 flex items-center justify-center text-foreground-700 hover:text-foreground-950 transition-colors duration-300 z-10 border border-foreground-950/10"
            onClick={() => setSelectedImg(null)}
          >
            <i className="ri-close-line text-2xl" />
          </button>
          <img
            src={selectedImg}
            alt="Galería GLADIADORES"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}