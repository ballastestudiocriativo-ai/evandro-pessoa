import { Lock, Scale, UserCheck } from "lucide-react";
import logoLight from "@/assets/logo-light-bg.png";

const cards = [
  {
    icon: Lock,
    title: "Confidencialidade Total",
    desc: "Cada caso é tratado com o mais absoluto sigilo. Sua identidade e informações permanecem protegidas em todas as etapas.",
  },
  {
    icon: Scale,
    title: "Atuação Legal",
    desc: "Todos os procedimentos seguem rigorosamente a legislação vigente, garantindo provas válidas e sem riscos jurídicos.",
  },
  {
    icon: UserCheck,
    title: "Atendimento Pessoal",
    desc: "Acompanhamento direto, comunicação clara e estratégia personalizada para cada situação investigada.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="gold-divider mb-6" />
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold font-semibold">Sobre</p>
            <h2 className="text-3xl font-bold text-oxford md:text-5xl">
              Experiência, ética e resultados que transformam dúvidas em certezas
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Evandro Pessoa atua há mais de uma década no segmento de investigação
                particular, oferecendo soluções discretas e altamente técnicas para clientes
                pessoais e empresariais em todo o Brasil.
              </p>
              <p>
                Com formação especializada e métodos investigativos modernos, conduzimos
                cada apuração com profissionalismo, sensibilidade e absoluto compromisso com
                a verdade — sempre dentro da legalidade.
              </p>
              <p>
                Nosso objetivo é entregar respostas claras, provas legítimas e tranquilidade
                para que você possa tomar decisões com segurança.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl bg-secondary p-12 shadow-elegant border border-border">
              <img src={logoLight} alt="Evandro Pessoa" className="w-72 max-w-full" />
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-elegant"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-oxford text-gold transition-colors group-hover:bg-gold group-hover:text-[var(--oxford-deep)]">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-oxford">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
