import logoDark from "@/assets/logo-dark-bg.png";
import { PHONE_DISPLAY, WHATSAPP_LINK } from "@/lib/contact";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="bg-oxford-deep border-t border-white/5 text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logoDark} alt="Evandro Pessoa" className="h-20 w-auto" />
            <p className="mt-4 text-sm leading-relaxed">
              Investigação profissional com sigilo absoluto, ética e atuação dentro da legalidade vigente.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-gold font-semibold">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-[0.2em] text-gold font-semibold">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </li>
              <li>Atendimento: São Paulo e todo o Brasil</li>
              <li>Horário: 24h, todos os dias</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Evandro Pessoa — Investigação Profissional. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/50">
            Todos os serviços realizados dentro da legalidade vigente.
          </p>
        </div>
      </div>
    </footer>
  );
}
