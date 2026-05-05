import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { PHONE_DISPLAY, PHONE_RAW, WHATSAPP_LINK } from "@/lib/contact";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  phone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  message: z.string().trim().min(5, "Descreva brevemente o caso").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    const text = `Olá Evandro, meu nome é ${result.data.name} (${result.data.phone}).\n\n${result.data.message}`;
    window.open(`https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section id="contato" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="gold-divider mb-6" />
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-gold font-semibold">Contato</p>
            <h2 className="text-3xl font-bold text-oxford md:text-5xl">
              Solicite uma consulta confidencial
            </h2>
            <p className="mt-5 text-muted-foreground">
              Preencha o formulário e seu pedido será encaminhado diretamente ao nosso WhatsApp.
              Atendimento ético, discreto e sem compromisso.
            </p>

            <div className="mt-10 space-y-5">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-oxford text-gold group-hover:bg-gold group-hover:text-[var(--oxford-deep)] transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold text-oxford">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <a href={`tel:+${PHONE_RAW}`} className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-oxford text-gold group-hover:bg-gold group-hover:text-[var(--oxford-deep)] transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Telefone</div>
                  <div className="font-semibold text-oxford">{PHONE_DISPLAY}</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-oxford text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Atendimento</div>
                  <div className="font-semibold text-oxford">Em todo o território nacional</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-oxford-deep p-8 md:p-10 shadow-elegant">
            <h3 className="mb-6 text-2xl font-bold text-white">Envie sua mensagem</h3>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Nome</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Telefone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  maxLength={20}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition"
                  placeholder="(11) 90000-0000"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-wider text-white/60">Mensagem</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={5}
                  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition resize-none"
                  placeholder="Descreva brevemente o que precisa..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 font-semibold text-[var(--oxford-deep)] shadow-gold transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar via WhatsApp
              </button>
              <p className="text-xs text-white/40 text-center">
                Suas informações são tratadas com sigilo total.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
