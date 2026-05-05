const steps = [
  { n: "01", title: "Contato Inicial", desc: "Atendimento confidencial via WhatsApp ou formulário." },
  { n: "02", title: "Análise do Caso", desc: "Estudo detalhado das informações e definição de viabilidade." },
  { n: "03", title: "Planejamento Estratégico", desc: "Elaboração da metodologia ideal para cada situação." },
  { n: "04", title: "Execução", desc: "Operação de campo com técnicas profissionais e total sigilo." },
  { n: "05", title: "Entrega de Provas", desc: "Relatório completo com evidências legais e documentadas." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="gold-divider mb-6" />
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold font-semibold">Como Funciona</p>
          <h2 className="text-3xl font-bold text-oxford md:text-5xl">
            Um processo claro do primeiro contato à entrega
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-elegant">
                <div className="mb-4 font-display text-4xl font-bold text-gold">{s.n}</div>
                <h3 className="mb-2 text-lg font-bold text-oxford">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-gold/40 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
