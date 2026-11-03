import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.08 });

  return (
    <footer className="relative pt-16 md:pt-20 pb-8 bg-background-100">
      <div ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">
          <div className={`scroll-reveal ${isVisible ? "visible" : ""}`}>
            <h4 className="text-foreground-950 text-sm font-bold uppercase tracking-wider mb-4">
              Nosotros
            </h4>
            <div className="w-8 h-px bg-primary-500 mb-5" />
            <div className="flex flex-col gap-3">
              {[
                { label: "Filosofía", href: "#nosotros" },
                { label: "Misión", href: "#nosotros" },
                { label: "Visión", href: "#nosotros" },
                { label: "Head Coach", href: "#nosotros" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(ev) => {
                    ev.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-foreground-500 text-sm hover:text-foreground-950 hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className={`scroll-reveal scroll-reveal-delay-1 ${isVisible ? "visible" : ""}`}>
            <h4 className="text-foreground-950 text-sm font-bold uppercase tracking-wider mb-4">
              Clases
            </h4>
            <div className="w-8 h-px bg-primary-500 mb-5" />
            <div className="flex flex-col gap-3">
              {[
                { label: "Horarios", href: "#horarios" },
                { label: "MMA Kids (4-9)", href: "#horarios" },
                { label: "MMA Kids (10-14)", href: "#horarios" },
                { label: "MMA Adultos", href: "#horarios" },
                { label: "Competencia", href: "#horarios" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(ev) => {
                    ev.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-foreground-500 text-sm hover:text-foreground-950 hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className={`scroll-reveal scroll-reveal-delay-2 ${isVisible ? "visible" : ""}`}>
            <h4 className="text-foreground-950 text-sm font-bold uppercase tracking-wider mb-4">
              Prensa
            </h4>
            <div className="w-8 h-px bg-primary-500 mb-5" />
            <div className="flex flex-col gap-3">
              {[
                { label: "Galería", href: "#galeria" },
                { label: "Videos", href: "#prensa" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(ev) => {
                    ev.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-foreground-500 text-sm hover:text-foreground-950 hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className={`scroll-reveal scroll-reveal-delay-3 ${isVisible ? "visible" : ""}`}>
            <h4 className="text-foreground-950 text-sm font-bold uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <div className="w-8 h-px bg-primary-500 mb-5" />
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/529211177811"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-500 text-sm hover:text-foreground-950 hover:translate-x-1 transition-all duration-200"
              >
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100063067727403"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-500 text-sm hover:text-foreground-950 hover:translate-x-1 transition-all duration-200"
              >
                Facebook
              </a>
              <span className="text-foreground-500 text-sm">
                Zamora esq. Abasolo, Coatzacoalcos, Ver. 96400
              </span>
            </div>
          </div>
        </div>

        <div className={`scroll-reveal scroll-reveal-delay-4 ${isVisible ? "visible" : ""} flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-foreground-950/10`}>
          <div>
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-6xl md:text-7xl lg:text-8xl text-foreground-950 leading-none tracking-tight">
                GLADIADORES
              </span>
              <span className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-foreground-400 font-light leading-none">
                MMA
              </span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-px bg-primary-500" />
              <span className="text-foreground-500 text-xs">
                Zamora esquina Abasolo, Coatzacoalcos, México, 96400
              </span>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-foreground-950/10 mt-12">
          <p className="text-foreground-400 text-xs">
            &copy; {new Date().getFullYear()} GLADIADORES MMA. Todos los derechos reservados. | Coatzacoalcos, Veracruz, México.
          </p>
        </div>
      </div>
    </footer>
  );
}