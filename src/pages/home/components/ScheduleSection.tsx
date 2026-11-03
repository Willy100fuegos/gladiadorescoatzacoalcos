import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ClassCard {
  day: string;
  time: string;
  name: string;
  age?: string;
  icon: string;
}

const SCHEDULE_DATA: ClassCard[] = [
  {
    day: "Lunes, Miércoles y Viernes",
    time: "07:00 - 09:00 AM",
    name: "Matutino Mixto",
    icon: "ri-sun-line",
  },
  {
    day: "Lunes, Miércoles y Viernes",
    time: "05:00 - 06:00 PM",
    name: "MMA Kids",
    age: "4 a 9 años",
    icon: "ri-user-smile-line",
  },
  {
    day: "Lunes, Miércoles y Viernes",
    time: "06:00 - 07:30 PM",
    name: "MMA Kids",
    age: "10 a 14 años",
    icon: "ri-user-star-line",
  },
  {
    day: "Lunes, Miércoles y Viernes",
    time: "07:30 - 09:00 PM",
    name: "MMA Adultos",
    age: "+15 años",
    icon: "ri-shield-user-line",
  },
  {
    day: "Jueves",
    time: "05:00 - 09:00 PM",
    name: "Todas las Categorías",
    age: "Mismo horario L,M,V",
    icon: "ri-calendar-check-line",
  },
  {
    day: "Sábado",
    time: "07:00 - 09:00 AM",
    name: "Equipo de Competencia",
    icon: "ri-trophy-line",
  },
  {
    day: "Sábado",
    time: "09:00 - 11:00 AM",
    name: "Lucha Olímpica",
    icon: "ri-medal-line",
  },
  {
    day: "Domingo",
    time: "07:00 - 09:00 AM",
    name: "Equipo de Competencia",
    icon: "ri-fire-line",
  },
];

export default function ScheduleSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="horarios"
      className="relative py-24 md:py-32 parallax-bg"
      style={{
        backgroundImage: "url(https://imgfz.com/i/3DgXAKE.jpeg)",
      }}
    >
      <div className="absolute inset-0 bg-background-50/85" />

      <div ref={ref} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className={`scroll-reveal ${isVisible ? "visible" : ""}`}>
            <span className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Horarios
            </span>
            <h2 className="font-heading text-6xl md:text-7xl text-foreground-950 leading-[0.9] tracking-tight">
              CLASES
            </h2>
            <p className="mt-3 text-foreground-500 text-sm max-w-md">
              Sistema de entrenamiento 100% MMA. Clases para todas las edades y niveles.
            </p>
          </div>

          <div className={`scroll-reveal scroll-reveal-delay-2 ${isVisible ? "visible" : ""} mt-4 md:mt-0`}>
            <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-background-50 border border-foreground-950/10 text-foreground-500 text-xs font-semibold uppercase tracking-wider">
              <i className="ri-calendar-line mr-2" />
              Lunes a Domingo
            </span>
          </div>
        </div>

        <div className="overflow-x-auto pb-4 -mx-2">
          <div className="flex gap-4 md:gap-5 min-w-max px-2">
            {SCHEDULE_DATA.map((item, idx) => (
              <div
                key={`${item.name}-${item.time}`}
                className={`scroll-reveal bg-background-50 rounded-2xl border border-foreground-950/10 p-5 md:p-6 w-[240px] md:w-[260px] flex-shrink-0 transition-all duration-400 hover:-translate-y-2 hover:border-primary-500/40 group ${
                  isVisible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${idx * 0.08}s` }}
              >
                <div className="w-11 h-11 rounded-xl bg-background-100 border border-foreground-950/5 flex items-center justify-center mb-5 group-hover:bg-primary-500/10 transition-colors duration-400">
                  <i className={`${item.icon} text-xl text-primary-600`} />
                </div>

                <p className="text-foreground-400 text-[11px] font-semibold uppercase tracking-wider mb-2">
                  {item.day}
                </p>

                <p className="text-foreground-950 text-xl md:text-2xl font-bold mb-3 tracking-tight">
                  {item.time}
                </p>

                <div className="pt-3 border-t border-foreground-950/10">
                  <p className="text-foreground-700 text-sm font-semibold">
                    {item.name}
                  </p>
                  {item.age && (
                    <p className="text-foreground-500 text-xs mt-0.5">
                      {item.age}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`scroll-reveal scroll-reveal-delay-4 ${isVisible ? "visible" : ""} mt-12 flex justify-center`}>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 whitespace-nowrap h-[52px] px-8 rounded-full bg-foreground-950 text-background-50 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
          >
            <span>Quiero Empezar</span>
            <span className="w-7 h-7 rounded-full bg-primary-500 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <i className="ri-arrow-right-line text-foreground-950 text-sm" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}