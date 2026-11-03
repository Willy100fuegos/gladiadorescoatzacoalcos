import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VIDEOS = [
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F886781593753538%2F&show_text=false&width=267&t=0",
    width: 267,
    height: 476,
    type: "vertical",
    label: "Entrenamiento",
    title: "Sesión GLADIADORES",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1452381006647218%2F&show_text=false&width=267&t=0",
    width: 267,
    height: 476,
    type: "vertical",
    label: "Competencia",
    title: "En la jaula",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F965981139634651%2F&show_text=false&width=560&t=0",
    width: 560,
    height: 314,
    type: "horizontal",
    label: "Cobertura Especial",
    title: "GLADIADORES en medios",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FMasDeportesRTV%2Fvideos%2F1299697947792911%2F&show_text=false&width=560&t=0",
    width: 560,
    height: 314,
    type: "horizontal",
    label: "Más Deportes RTV",
    title: "Entrevista GLADIADORES",
  },
];

export default function PressSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.08 });

  return (
    <section id="prensa" className="relative py-24 md:py-32 bg-background-50">
      <div ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className={`scroll-reveal ${isVisible ? "visible" : ""} md:w-[50%]`}>
            <span className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Prensa & Multimedia
            </span>
            <h2 className="font-heading text-6xl md:text-7xl text-foreground-950 leading-[0.9] tracking-tight">
              GLADIADORES
              <br />
              EN ACCIÓN
            </h2>
          </div>

          <div className={`scroll-reveal scroll-reveal-delay-2 ${isVisible ? "visible" : ""} md:w-[35%]`}>
            <p className="text-foreground-500 text-sm leading-relaxed">
              Mira a nuestros gladiadores en combate. Cobertura de competencias, entrenamientos y momentos destacados de nuestra familia marcial.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {VIDEOS.map((video, idx) => (
            <div
              key={video.src}
              className={`scroll-reveal bg-background-50 rounded-2xl border border-foreground-950/10 overflow-hidden ${
                isVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <div className="p-4 border-b border-foreground-950/10">
                <span className="text-foreground-400 text-[10px] font-bold uppercase tracking-wider">
                  {video.label}
                </span>
                <p className="text-foreground-800 text-sm font-semibold mt-1">
                  {video.title}
                </p>
              </div>
              <div className={video.type === "vertical" ? "aspect-[9/16] w-full max-w-[320px] mx-auto" : "aspect-video w-full"}>
                <iframe
                  src={video.src}
                  width="100%"
                  height="100%"
                  className="w-full h-full"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={`GLADIADORES MMA - ${video.title}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}