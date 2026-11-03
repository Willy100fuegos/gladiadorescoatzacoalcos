import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function MissionVisionSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="relative overflow-hidden">
      {/* Misión — Parallax */}
      <div className="relative parallax-bg h-[600px] md:h-[700px] flex items-center"
        style={{ backgroundImage: "url(http://imgfz.com/i/E49BWDc.jpeg)" }}
      >
        <div className="absolute inset-0 bg-foreground-950/75" />
        <div ref={ref} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className={`scroll-reveal ${isVisible ? "visible" : ""} flex flex-col md:flex-row items-start md:items-end justify-between gap-10`}>
            <div className="md:w-[45%]">
              <span className="text-primary-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Nuestra Razón de Ser
              </span>
              <h3 className="font-heading text-7xl md:text-8xl text-background-50 leading-[0.9] tracking-tight">
                MISIÓN
              </h3>
            </div>
            <div className="md:w-[45%] md:text-right">
              <p className="text-background-50/90 text-base md:text-lg leading-relaxed font-light">
                Formar atletas y ciudadanos ejemplares a través de las Artes Marciales Mixtas, forjando seres humanos con valores sólidos que contribuyan a la grandeza de nuestro municipio y país.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Visión — Parallax */}
      <div className="relative parallax-bg h-[600px] md:h-[700px] flex items-center"
        style={{ backgroundImage: "url(http://imgfz.com/i/fb0x3vP.jpeg)" }}
      >
        <div className="absolute inset-0 bg-foreground-950/75" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className={`scroll-reveal scroll-reveal-delay-2 ${isVisible ? "visible" : ""} flex flex-col md:flex-row-reverse items-start md:items-end justify-between gap-10`}>
            <div className="md:w-[45%] md:text-right">
              <span className="text-primary-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                Hacia Dónde Vamos
              </span>
              <h3 className="font-heading text-7xl md:text-8xl text-background-50 leading-[0.9] tracking-tight">
                VISIÓN
              </h3>
            </div>
            <div className="md:w-[45%]">
              <p className="text-background-50/90 text-base md:text-lg leading-relaxed font-light">
                Consolidarnos como la principal cuna de campeones de MMA a nivel nacional desde Coatzacoalcos, Veracruz; siendo reconocidos por nuestra excelencia técnica y deportiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}