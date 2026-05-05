import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_LINK, PHONE_DISPLAY } from "@/lib/contact";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden gradient-oxford py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold blur-3xl" />
        <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">
          Precisa de respostas? <span className="text-gold">Estamos prontos.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">
          Atendimento confidencial e sem compromisso. Conte seu caso e receba uma análise inicial.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-4 text-base font-semibold text-[var(--oxford-deep)] shadow-gold transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp Agora
          </a>
          <a
            href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold hover:text-gold"
          >
            <Phone className="h-5 w-5" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
