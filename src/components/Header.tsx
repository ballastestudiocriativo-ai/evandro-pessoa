import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoDark from "@/assets/logo-dark-bg.png";
import { WHATSAPP_LINK } from "@/lib/contact";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-oxford-deep/95 backdrop-blur-md shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoDark} alt="Evandro Pessoa Investigação Profissional" className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-[var(--oxford-deep)] shadow-gold transition-transform hover:scale-105 lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          Fale Agora no WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="bg-oxford-deep/98 border-t border-white/10 lg:hidden">
          <nav className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-white/90 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 font-semibold text-[var(--oxford-deep)]"
            >
              <MessageCircle className="h-4 w-4" />
              Fale Agora no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
