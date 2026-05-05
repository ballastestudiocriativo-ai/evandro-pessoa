import logoTransparent from "@/assets/logo-transparent.png";
import ballastLogo from "@/assets/ballast-logo.png";
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
            <img src={logoTransparent} alt="Evandro Pessoa" loading="lazy" className="h-24 w-auto" />
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
              <li>Atendimento em todo o território nacional</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Evandro Pessoa — Investigação Profissional. Todos os direitos reservados.
          </p>
          <a
            href={`https://wa.me/5513978086239?text=${encodeURIComponent("Vi que fez o site para o Evandro Pessoa, e gostaria que entrasse em contato comigo!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-sm text-white/70 hover:text-gold transition-colors"
            aria-label="Site desenvolvido por Ballast Presença Digital — falar no WhatsApp"
          >
            <span>Site desenvolvido por Ballast Presença Digital</span>
            <img
              src={ballastLogo}
              alt="Ballast Presença Digital"
              loading="lazy"
              className="h-16 w-auto md:h-20"
            />
          </a>
        </div>
        <p className="mt-4 text-xs text-white/40 text-center md:text-right">
          Todos os serviços realizados dentro da legalidade vigente.
        </p>
      </div>
    </footer>
  );
}
