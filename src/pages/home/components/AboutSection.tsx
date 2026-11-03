import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="nosotros" className="relative py-24 md:py-32 bg-background-50">
      <div ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div
            className={`scroll-reveal ${isVisible ? "visible" : ""} lg:w-[45%]`}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://imgfz.com/i/3DgXAKE.jpeg"
                alt="Entrenamiento MMA en GLADIADORES"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-6 left-6 flex gap-2">
                {["MMA", "FAMILIA", "VALORES"].map((tag, i) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-background-50/80 backdrop-blur-md border border-foreground-950/10 text-foreground-800"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`scroll-reveal scroll-reveal-delay-2 ${isVisible ? "visible" : ""} lg:w-[55%] flex flex-col justify-center`}>
            <span className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              NOSOTROS
            </span>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-5 py-2 rounded-full border border-foreground-950 text-foreground-800 text-xs font-semibold uppercase tracking-wide">
                100% MMA
              </span>
              <span className="px-5 py-2 rounded-full border border-foreground-200 text-foreground-500 text-xs font-medium uppercase tracking-wide">
                Educación
              </span>
              <span className="px-5 py-2 rounded-full border border-foreground-200 text-foreground-500 text-xs font-medium uppercase tracking-wide">
                Competencia
              </span>
            </div>

            <div className="bg-background-50 rounded-2xl p-6 md:p-8 border border-foreground-950/10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-1">
                  <span className="text-primary-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
                    FILOSOFÍA
                  </span>
                  <p className="text-foreground-700 text-sm md:text-base leading-relaxed mb-6">
                    Las artes marciales mixtas nacen del deseo del hombre por saber qué arte marcial es más efectivo en un combate real (jiu jitsu, Karate, TKD, Boxeo, Wrestling, etc.). Con la evolución del deporte (UFC), ya no basta con aprenderlas por separado. Hoy en día <strong className="text-foreground-950 font-semibold">TODAS las artes marciales tienen sus propias adaptaciones a las MMA.</strong> Aprender distintas artes marciales por separado NO es aprender MMA. ¡En GLADIADORES nuestras clases son 100% MMA!
                  </p>
                </div>
                <div className="md:w-32 flex-shrink-0">
                  <div className="w-full aspect-square rounded-xl overflow-hidden border border-foreground-950/10">
                    <img
                      src="https://www.rtv.org.mx/masnoticias/wp-content/uploads/sites/13/2024/08/Image-13.jpeg"
                      alt="GLADIADORES MMA en acción"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-background-50 rounded-2xl p-6 md:p-8 border border-foreground-950/10">
              <span className="text-primary-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
                QUÉ TE OFRECEMOS
              </span>
              <p className="text-foreground-700 text-sm md:text-base leading-relaxed">
                Somos una academia con un sistema 100% MMA. Hemos formado campeones nacionales infantiles, juveniles y adultos. Atletas con carrera sólida avalada por la Federación Nacional. Headcoach con carrera profesional en Educación Física. Entrenadores con experiencia profesional comprobable. <strong className="text-foreground-950 font-semibold">NO SOLO SOMOS UNA ACADEMIA, SOMOS UNA FAMILIA MARCIAL.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}