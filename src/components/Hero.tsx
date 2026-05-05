import { MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-investigation.jpg";
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" />
            Sigilo · Ética · Resultado
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl">
            Investigação Profissional com{" "}
            <span className="text-gold">Sigilo Absoluto</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Soluções discretas e eficazes para casos pessoais e corporativos.
            Atuação técnica, ética e dentro da legalidade.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 text-base font-semibold text-[var(--oxford-deep)] shadow-gold transition-all hover:scale-[1.02]"
            >
              Solicitar Investigação
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-all hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-xl">
            {[
              { n: "100%", l: "Confidencial" },
              { n: "24/7", l: "Atendimento" },
              { n: "+10", l: "Anos no setor" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gold md:text-3xl">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
