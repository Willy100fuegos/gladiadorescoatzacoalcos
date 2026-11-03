import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Clases", href: "#horarios" },
  { label: "Prensa", href: "#prensa" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-[#000000] border-b border-primary-500/20">
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex-shrink-0"
          >
            <img
              src="https://imgfz.com/i/WpQlI2O.png"
              alt="GLADIADORES MMA Logo"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded-md bg-primary-500 text-foreground-950 text-sm font-bold uppercase tracking-wide transition-all duration-300 hover:bg-primary-400 hover:scale-105 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-primary-500/40 bg-zinc-900 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-black transition-all duration-300 shadow-sm"
              aria-label="Alternar modo oscuro o claro"
              title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "#contacto")}
              className="inline-flex items-center whitespace-nowrap h-11 px-7 rounded-full border-2 border-primary-500 text-primary-500 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-primary-500 hover:text-foreground-950"
            >
              Únete
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-primary-500/40 bg-zinc-900 flex items-center justify-center text-primary-500"
              aria-label="Alternar tema"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center text-primary-500"
              aria-label="Menú"
            >
              <i className={`text-2xl transition-all duration-300 ${mobileOpen ? "ri-close-line" : "ri-menu-line"}`} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-400 bg-[#000000] border-t border-primary-500/20 ${
          mobileOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-2 pt-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-3 rounded-md bg-primary-500 text-foreground-950 text-sm font-bold uppercase tracking-wide text-center transition-all duration-200 hover:bg-primary-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "#contacto")}
            className="mt-2 px-4 py-3 rounded-full border-2 border-primary-500 text-primary-500 text-sm font-semibold uppercase tracking-wide text-center transition-all duration-200 hover:bg-primary-500 hover:text-foreground-950"
          >
            Únete a la Familia
          </a>
        </div>
      </div>
    </nav>
  );
}