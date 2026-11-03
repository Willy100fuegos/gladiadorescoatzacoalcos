import { useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !mensaje.trim()) return;

    const encodedNombre = encodeURIComponent(nombre.trim());
    const encodedMensaje = encodeURIComponent(mensaje.trim());
    const whatsappUrl = `https://wa.me/529211177811?text=Hola%20soy%20${encodedNombre},%20${encodedMensaje}`;

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      fetch(formRef.current.getAttribute("action") || "", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      }).catch(() => {});
    }

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setNombre("");
    setMensaje("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contacto" className="relative py-24 md:py-32 bg-background-50">
      <div ref={ref} className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className={`scroll-reveal ${isVisible ? "visible" : ""} bg-background-50 rounded-2xl border border-foreground-950/10 p-6 md:p-10`}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="lg:w-[45%]">
              <span className="text-primary-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                Escríbenos
              </span>
              <h3 className="font-heading text-4xl md:text-5xl text-foreground-950 leading-[0.9] tracking-tight mb-3">
                CONTÁCTANOS
              </h3>
              <p className="text-foreground-500 text-sm leading-relaxed">
                ¿Listo para unirte a la familia? Déjanos tus datos y te contactamos. También puedes visitarnos directamente en el gimnasio.
              </p>
            </div>

            <div className="lg:w-[55%]">
              <form
                ref={formRef}
                data-readdy-form=""
                action="https://readdy.ai/api/form/d8oqhlvij7vns5otj2ig"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <div>
                  <label htmlFor="contact-nombre" className="text-foreground-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    Nombre
                  </label>
                  <input
                    id="contact-nombre"
                    name="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    placeholder="Tu nombre completo"
                    className="w-full bg-transparent border-b border-foreground-200 py-3 text-foreground-800 text-sm placeholder:text-foreground-300/60 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="contact-mensaje" className="text-foreground-400 text-xs font-semibold uppercase tracking-wider mb-2 block">
                    Mensaje
                  </label>
                  <textarea
                    id="contact-mensaje"
                    name="mensaje"
                    value={mensaje}
                    onChange={(e) => {
                      if (e.target.value.length <= 500) setMensaje(e.target.value);
                    }}
                    required
                    rows={4}
                    placeholder="¿En qué podemos ayudarte?"
                    maxLength={500}
                    className="w-full bg-transparent border-b border-foreground-200 py-3 text-foreground-800 text-sm placeholder:text-foreground-300/60 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-none"
                  />
                  <p className="text-foreground-300/60 text-[10px] mt-1 text-right">
                    {mensaje.length}/500
                  </p>
                </div>
                <button
                  type="submit"
                  className="group self-start inline-flex items-center gap-3 whitespace-nowrap h-[50px] px-8 rounded-full bg-foreground-950 text-background-50 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
                >
                  <span>{submitted ? "¡Mensaje Enviado!" : "Enviar por WhatsApp"}</span>
                  <span className="w-7 h-7 rounded-full bg-primary-500 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                    <i className={`${submitted ? "ri-check-line" : "ri-whatsapp-line"} text-foreground-950 text-sm`} />
                  </span>
                </button>
                {submitted && (
                  <p className="text-primary-600 text-xs font-medium">
                    Redirigiendo a WhatsApp... Si no se abre automáticamente,
                    <a
                      href={`https://wa.me/529211177811?text=Hola%20soy%20${encodeURIComponent(nombre || "GLADIADOR")},%20${encodeURIComponent(mensaje || "Quiero%20información")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary-500"
                    >
                      haz clic aquí
                    </a>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}