export default function HeroSection() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative w-full">
      <img
        src="http://imgfz.com/i/LC6FRIG.png"
        alt="GLADIADORES MMA - Entrenamiento de Artes Marciales Mixtas"
        className="w-full h-auto block"
      />

      <div className="w-full bg-background-50 py-14 md:py-20 flex flex-col items-center justify-center px-4">
        <a
          href="#contacto"
          onClick={scrollToContact}
          className="group inline-flex items-center gap-4 whitespace-nowrap h-[60px] px-12 rounded-full bg-foreground-950 text-background-50 text-base font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]"
        >
          <span>Únete a la Familia</span>
          <span className="w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
            <i className="ri-arrow-right-line text-foreground-950 text-lg" />
          </span>
        </a>
      </div>
    </section>
  );
}