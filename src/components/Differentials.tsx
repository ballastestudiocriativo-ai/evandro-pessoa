import { Lock, UserCheck, Cog, Zap, Scale } from "lucide-react";

const items = [
  { icon: Lock, title: "Sigilo Absoluto", desc: "Cada detalhe é protegido com discrição." },
  { icon: UserCheck, title: "Atendimento Personalizado", desc: "Estratégia única para o seu caso." },
  { icon: Cog, title: "Técnicas Profissionais", desc: "Métodos modernos e equipamentos adequados." },
  { icon: Zap, title: "Rapidez e Eficiência", desc: "Resposta ágil sem comprometer a qualidade." },
  { icon: Scale, title: "Atuação Legal", desc: "Provas válidas dentro da legislação." },
];

export function Differentials() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="gold-divider mb-6" />
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold font-semibold">Diferenciais</p>
          <h2 className="text-3xl font-bold text-oxford md:text-5xl">
            Por que escolher nosso trabalho
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="group rounded-xl bg-card p-6 text-center border border-border transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-oxford text-gold transition-all group-hover:bg-gold group-hover:text-[var(--oxford-deep)]">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-bold text-oxford">{it.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
