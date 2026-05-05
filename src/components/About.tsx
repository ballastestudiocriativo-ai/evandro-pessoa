import { Lock, Scale, UserCheck } from "lucide-react";
import evandroPortrait from "@/assets/evandro-portrait.jpg";

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
    <section id="sobre" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="gold-divider mb-6" />
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold font-semibold">Sobre</p>
            <h2 className="text-3xl font-bold text-oxford md:text-5xl">
              Investigação conduzida com método, ética e absoluta discrição
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Evandro Pessoa é um investigador profissional com ampla experiência nas áreas
                de inteligência e investigação privada. Seu trabalho é marcado pelo compromisso
                rigoroso com a verdade, ética e excelência técnica.
              </p>
              <p>
                Formado e treinado no método <strong className="text-oxford">T.R.I.I.P. – Técnicas Reais
                de Inteligência e Investigação Policial</strong>, Evandro atua com elevada precisão,
                total discrição e absoluto respeito às normas legais e éticas.
              </p>
              <p>
                Seu trabalho fundamenta-se em conhecimento técnico avançado, planejamento
                estratégico e responsabilidade. Acredita que informações confiáveis, obtidas
                de forma profissional e segura, são essenciais para que seus clientes tomem
                decisões assertivas e protegidas.
              </p>
              <p>
                Mais do que realizar investigações, sua missão é entregar confiança, clareza
                e tranquilidade diante dos casos mais complexos e delicados.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl border border-gold/30" aria-hidden="true" />
              <img
                src={evandroPortrait}
                alt="Evandro Pessoa, investigador profissional"
                loading="lazy"
                className="relative w-full max-w-md rounded-2xl object-cover shadow-elegant"
              />
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
