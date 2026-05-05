import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Differentials } from "@/components/Differentials";
import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evandro Pessoa — Investigação Profissional | Sigilo Absoluto" },
      {
        name: "description",
        content:
          "Investigação particular com sigilo absoluto. Casos conjugais, empresariais, localização de pessoas e levantamento de provas. Atendimento confidencial via WhatsApp.",
      },
      { property: "og:title", content: "Evandro Pessoa — Investigação Profissional" },
      {
        property: "og:description",
        content: "Soluções discretas e eficazes para casos pessoais e corporativos. Atuação ética e legal.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Evandro Pessoa — Investigação Profissional",
          telephone: "+5511991813725",
          areaServed: "BR",
          description: "Investigação particular profissional com sigilo absoluto.",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Differentials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}
