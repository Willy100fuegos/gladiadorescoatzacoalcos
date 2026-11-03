import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeadCoachSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="relative py-24 md:py-32 bg-background-100 overflow-hidden">
      <div ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div
            className={`scroll-reveal ${isVisible ? "visible" : ""} lg:w-[60%] flex flex-col justify-center`}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              <span className="text-foreground-500 text-xs font-bold tracking-[0.2em] uppercase">
                Head Coach
              </span>
            </div>

            <div className="relative mb-8">
              <span className="absolute -top-6 -left-4 text-8xl text-foreground-200 font-serif leading-none select-none">
                &ldquo;
              </span>
              <p className="relative font-serif italic text-2xl md:text-3xl lg:text-4xl text-foreground-800 leading-relaxed font-light">
                Somos una academia con un sistema 100% MMA. Hemos formado campeones nacionales infantiles, juveniles y adultos. NO SOLO SOMOS UNA ACADEMIA,&nbsp;
                <strong className="text-foreground-950 font-bold not-italic">
                  SOMOS UNA FAMILIA MARCIAL.
                </strong>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <p className="text-foreground-950 text-lg font-bold">Frank Hernández Medel</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-primary-600">
                    <i className="ri-verified-badge-fill text-sm" />
                  </span>
                  <span className="text-foreground-500 text-xs font-medium uppercase tracking-wider">
                    Head Coach & Fundador
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Educación Física", "Federación Nacional", "Campeones Nacionales"].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-background-50 border border-foreground-950/10 text-foreground-600 text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`scroll-reveal scroll-reveal-delay-2 ${isVisible ? "visible" : ""} lg:w-[40%] relative`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-foreground-950/10">
                <img
                  src="http://imgfz.com/i/2t4eUI3.jpeg"
                  alt="Frank Hernández Medel - Head Coach GLADIADORES MMA"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}