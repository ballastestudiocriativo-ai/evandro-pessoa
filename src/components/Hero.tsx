import { ShieldCheck, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-investigation.jpg";
import logoTransparent from "@/assets/logo-transparent.png";
import { WHATSAPP_LINK } from "@/lib/contact";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Investigação profissional discreta"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--oxford-deep)] via-[var(--oxford-deep)]/85 to-[var(--oxford-deep)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--oxford-deep)] via-transparent to-[var(--oxford-deep)]/60" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-28 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <img
            src={logoTransparent}
            alt="Evandro Pessoa Investigação Profissional"
            className="h-64 w-auto md:h-80 lg:h-[26rem]"
          />
        </div>

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            Sigilo · Ética · Resultado
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] text-white md:text-6xl lg:text-6xl xl:text-7xl">
            Investigação Profissional com{" "}
            <span className="text-gold">Sigilo Absoluto</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Soluções discretas e eficazes para casos pessoais e corporativos.
            Atuação técnica, ética e dentro da legalidade.
          </p>

          <div className="mt-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 text-base font-semibold text-[var(--oxford-deep)] shadow-gold transition-all hover:scale-[1.02]"
            >
              Solicitar Investigação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
