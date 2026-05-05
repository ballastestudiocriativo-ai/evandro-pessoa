import { Heart, Building2, MapPin, Eye, FileSearch, Sparkles, ArrowUpRight } from "lucide-react";
import { waLinkFor } from "@/lib/contact";

const services = [
  { icon: Heart, title: "Investigação Conjugal", desc: "Apuração discreta de suspeitas de infidelidade, com provas concretas e sigilo total." },
  { icon: Building2, title: "Investigação Empresarial", desc: "Análise de fraudes internas, concorrência desleal, desvios e condutas suspeitas no ambiente corporativo." },
  { icon: MapPin, title: "Localização de Pessoas", desc: "Busca de paradeiro de familiares, devedores, testemunhas e pessoas desaparecidas." },
  { icon: Eye, title: "Monitoramento e Vigilância", desc: "Acompanhamento profissional com registros fotográficos e relatórios detalhados." },
  { icon: FileSearch, title: "Levantamento de Provas", desc: "Coleta de evidências legais para uso em processos judiciais cíveis, criminais e trabalhistas." },
  { icon: Sparkles, title: "Serviços Personalizados", desc: "Casos específicos analisados individualmente. Entre em contato para uma consulta confidencial." },
];

export function Services() {
  return (
    <section id="servicos" className="bg-oxford-deep py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="gold-divider mb-6" />
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold font-semibold">Serviços</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Soluções investigativas para cada necessidade
          </h2>
          <p className="mt-5 text-white/70">
            Atuação técnica e personalizada em casos pessoais, familiares e empresariais.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <a
              key={s.title}
              href={waLinkFor(s.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/60 hover:bg-white/[0.06]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-[var(--oxford-deep)]">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/65">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                Falar no WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:bg-gold/15" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
