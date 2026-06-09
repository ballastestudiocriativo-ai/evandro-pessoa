<?php
$PHONE_DISPLAY = "(11) 99181-3725";
$PHONE_RAW = "5511991813725";
$WHATSAPP_MSG = "Olá! Gostaria de solicitar uma investigação!";
$WHATSAPP_LINK = "https://wa.me/{$PHONE_RAW}?text=" . rawurlencode($WHATSAPP_MSG);

function waFor($service) {
  global $PHONE_RAW;
  return "https://wa.me/{$PHONE_RAW}?text=" . rawurlencode("Olá Evandro, gostaria de informações sobre: {$service}.");
}

$services = [
  ["icon" => "heart",    "title" => "Investigação Conjugal",     "desc" => "Apuração discreta de suspeitas de infidelidade, com provas concretas e sigilo total."],
  ["icon" => "building", "title" => "Investigação Empresarial",  "desc" => "Análise de fraudes internas, concorrência desleal, desvios e condutas suspeitas no ambiente corporativo."],
  ["icon" => "map",      "title" => "Localização de Pessoas",    "desc" => "Busca de paradeiro de familiares, devedores, testemunhas e pessoas desaparecidas."],
  ["icon" => "eye",      "title" => "Monitoramento e Vigilância","desc" => "Acompanhamento profissional com registros fotográficos e relatórios detalhados."],
  ["icon" => "file",     "title" => "Levantamento de Provas",    "desc" => "Coleta de evidências legais para uso em processos judiciais cíveis, criminais e trabalhistas."],
  ["icon" => "sparkles", "title" => "Serviços Personalizados",   "desc" => "Casos específicos analisados individualmente. Entre em contato para uma consulta confidencial."],
];

$steps = [
  ["n" => "01", "title" => "Contato Inicial",          "desc" => "Atendimento confidencial via WhatsApp ou formulário."],
  ["n" => "02", "title" => "Análise do Caso",          "desc" => "Estudo detalhado das informações e definição de viabilidade."],
  ["n" => "03", "title" => "Planejamento Estratégico", "desc" => "Elaboração da metodologia ideal para cada situação."],
  ["n" => "04", "title" => "Execução",                 "desc" => "Operação de campo com técnicas profissionais e total sigilo."],
  ["n" => "05", "title" => "Entrega de Provas",        "desc" => "Relatório completo com evidências legais e documentadas."],
];

$differentials = [
  ["icon" => "lock",     "title" => "Sigilo Absoluto",          "desc" => "Cada detalhe é protegido com discrição."],
  ["icon" => "check",    "title" => "Atendimento Personalizado","desc" => "Estratégia única para o seu caso."],
  ["icon" => "cog",      "title" => "Técnicas Profissionais",   "desc" => "Métodos modernos e equipamentos adequados."],
  ["icon" => "bolt",     "title" => "Rapidez e Eficiência",     "desc" => "Resposta ágil sem comprometer a qualidade."],
  ["icon" => "scale",    "title" => "Atuação Legal",            "desc" => "Provas válidas dentro da legislação."],
];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Evandro Pessoa — Investigação Profissional | Sigilo Absoluto</title>
<meta name="description" content="Investigação particular com sigilo absoluto. Casos conjugais, empresariais, localização de pessoas e levantamento de provas. Atendimento confidencial via WhatsApp." />
<meta property="og:title" content="Evandro Pessoa — Investigação Profissional" />
<meta property="og:description" content="Soluções discretas e eficazes para casos pessoais e corporativos. Atuação ética e legal." />
<meta property="og:type" content="website" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css" />
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"ProfessionalService","name":"Evandro Pessoa — Investigação Profissional","telephone":"+5511991813725","areaServed":"BR","description":"Investigação particular profissional com sigilo absoluto."}
</script>
</head>
<body>

<!-- HEADER -->
<header id="header" class="header">
  <div class="container header-inner">
    <a href="#inicio" class="logo-link">
      <img src="assets/logo-transparent.png" alt="Evandro Pessoa Investigação Profissional" class="logo" />
    </a>
    <nav class="nav-desktop">
      <a href="#inicio">Início</a>
      <a href="#sobre">Sobre</a>
      <a href="#servicos">Serviços</a>
      <a href="#como-funciona">Como Funciona</a>
      <a href="#contato">Contato</a>
    </nav>
    <a href="<?= $WHATSAPP_LINK ?>" target="_blank" rel="noopener" class="btn btn-gold btn-header">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
      Fale Agora no WhatsApp
    </a>
    <button class="menu-toggle" id="menuToggle" aria-label="Menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
  </div>
  <div class="nav-mobile" id="navMobile">
    <a href="#inicio">Início</a>
    <a href="#sobre">Sobre</a>
    <a href="#servicos">Serviços</a>
    <a href="#como-funciona">Como Funciona</a>
    <a href="#contato">Contato</a>
    <a href="<?= $WHATSAPP_LINK ?>" target="_blank" rel="noopener" class="btn btn-gold">Fale Agora no WhatsApp</a>
  </div>
</header>

<!-- HERO -->
<section id="inicio" class="hero">
  <div class="hero-bg">
    <img src="assets/hero-investigation.jpg" alt="Investigação profissional discreta" />
    <div class="hero-overlay"></div>
  </div>
  <div class="container hero-grid">
    <div class="hero-logo-col">
      <img src="assets/logo-transparent.png" alt="Evandro Pessoa" class="hero-logo" />
    </div>
    <div class="hero-text">
      <div class="badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Sigilo · Ética · Resultado
      </div>
      <h1>Investigação Profissional com <span class="gold">Sigilo Absoluto</span></h1>
      <p class="lead">Soluções discretas e eficazes para casos pessoais e corporativos. Atuação técnica, ética e dentro da legalidade.</p>
      <a href="<?= $WHATSAPP_LINK ?>" target="_blank" rel="noopener" class="btn btn-gold btn-lg">
        Solicitar Investigação
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>
  </div>
</section>

<!-- SOBRE -->
<section id="sobre" class="section bg-secondary">
  <div class="container">
    <div class="about-grid">
      <div>
        <span class="gold-divider"></span>
        <p class="eyebrow">Sobre</p>
        <h2 class="h-oxford">Investigação conduzida com método, ética e absoluta discrição</h2>
        <div class="prose">
          <p>Evandro Pessoa é um investigador profissional com ampla experiência nas áreas de inteligência e investigação privada. Seu trabalho é marcado pelo compromisso rigoroso com a verdade, ética e excelência técnica.</p>
          <p>Formado e treinado no método <strong>T.R.I.I.P. – Técnicas Reais de Inteligência e Investigação Policial</strong>, Evandro atua com elevada precisão, total discrição e absoluto respeito às normas legais e éticas.</p>
          <p>Seu trabalho fundamenta-se em conhecimento técnico avançado, planejamento estratégico e responsabilidade. Acredita que informações confiáveis, obtidas de forma profissional e segura, são essenciais para que seus clientes tomem decisões assertivas e protegidas.</p>
          <p>Mais do que realizar investigações, sua missão é entregar confiança, clareza e tranquilidade diante dos casos mais complexos e delicados.</p>
        </div>
      </div>
      <div class="portrait-wrap">
        <div class="portrait-frame"></div>
        <img src="assets/evandro-portrait.jpg" alt="Evandro Pessoa, investigador profissional" class="portrait" />
      </div>
    </div>

    <div class="cards-3">
      <div class="card">
        <div class="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
        <h3>Confidencialidade Total</h3>
        <p>Cada caso é tratado com o mais absoluto sigilo. Sua identidade e informações permanecem protegidas em todas as etapas.</p>
      </div>
      <div class="card">
        <div class="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M5 8l7-5 7 5M3 21h18"/></svg></div>
        <h3>Atuação Legal</h3>
        <p>Todos os procedimentos seguem rigorosamente a legislação vigente, garantindo provas válidas e sem riscos jurídicos.</p>
      </div>
      <div class="card">
        <div class="card-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <h3>Atendimento Pessoal</h3>
        <p>Acompanhamento direto, comunicação clara e estratégia personalizada para cada situação investigada.</p>
      </div>
    </div>
  </div>
</section>

<!-- SERVIÇOS -->
<section id="servicos" class="section bg-oxford-deep text-white">
  <div class="container">
    <div class="section-head">
      <span class="gold-divider"></span>
      <p class="eyebrow">Serviços</p>
      <h2>Soluções investigativas para cada necessidade</h2>
      <p class="lead-muted">Atuação técnica e personalizada em casos pessoais, familiares e empresariais.</p>
    </div>
    <div class="services-grid">
      <?php foreach ($services as $s): ?>
        <a href="<?= waFor($s['title']) ?>" target="_blank" rel="noopener" class="service-card">
          <div class="service-icon"><?= file_get_contents(__DIR__ . '/icons.svg') !== false ? '' : '' ?>
            <span class="ico ico-<?= $s['icon'] ?>"></span>
          </div>
          <h3><?= htmlspecialchars($s['title']) ?></h3>
          <p><?= htmlspecialchars($s['desc']) ?></p>
          <span class="service-link">Falar no WhatsApp ↗</span>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- COMO FUNCIONA -->
<section id="como-funciona" class="section">
  <div class="container">
    <div class="section-head">
      <span class="gold-divider"></span>
      <p class="eyebrow">Como Funciona</p>
      <h2 class="h-oxford">Um processo claro do primeiro contato à entrega</h2>
    </div>
    <div class="steps-grid">
      <?php foreach ($steps as $st): ?>
        <div class="step-card">
          <div class="step-n"><?= $st['n'] ?></div>
          <h3><?= htmlspecialchars($st['title']) ?></h3>
          <p><?= htmlspecialchars($st['desc']) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- DIFERENCIAIS -->
<section class="section bg-secondary">
  <div class="container">
    <div class="section-head">
      <span class="gold-divider"></span>
      <p class="eyebrow">Diferenciais</p>
      <h2 class="h-oxford">Por que escolher nosso trabalho</h2>
    </div>
    <div class="diff-grid">
      <?php foreach ($differentials as $d): ?>
        <div class="diff-card">
          <div class="diff-icon"><span class="ico ico-<?= $d['icon'] ?>"></span></div>
          <h3><?= htmlspecialchars($d['title']) ?></h3>
          <p><?= htmlspecialchars($d['desc']) ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- CTA BANNER -->
<section class="cta-banner">
  <div class="container cta-inner">
    <h2>Precisa de respostas? <span class="gold">Estamos prontos.</span></h2>
    <p>Atendimento confidencial e sem compromisso. Conte seu caso e receba uma análise inicial.</p>
    <div class="cta-actions">
      <a href="<?= $WHATSAPP_LINK ?>" target="_blank" rel="noopener" class="btn btn-gold btn-lg">Falar no WhatsApp Agora</a>
      <a href="tel:+<?= $PHONE_RAW ?>" class="btn btn-outline btn-lg"><?= $PHONE_DISPLAY ?></a>
    </div>
  </div>
</section>

<!-- CONTATO -->
<section id="contato" class="section">
  <div class="container">
    <div class="contact-grid">
      <div>
        <span class="gold-divider"></span>
        <p class="eyebrow">Contato</p>
        <h2 class="h-oxford">Solicite uma consulta confidencial</h2>
        <p class="prose">Preencha o formulário e seu pedido será encaminhado diretamente ao nosso WhatsApp. Atendimento ético, discreto e sem compromisso.</p>
        <div class="contact-info">
          <a href="<?= $WHATSAPP_LINK ?>" target="_blank" rel="noopener" class="contact-item">
            <div class="contact-icon">W</div>
            <div><div class="contact-label">WhatsApp</div><div class="contact-value"><?= $PHONE_DISPLAY ?></div></div>
          </a>
          <a href="tel:+<?= $PHONE_RAW ?>" class="contact-item">
            <div class="contact-icon">T</div>
            <div><div class="contact-label">Telefone</div><div class="contact-value"><?= $PHONE_DISPLAY ?></div></div>
          </a>
          <div class="contact-item">
            <div class="contact-icon">M</div>
            <div><div class="contact-label">Atendimento</div><div class="contact-value">Em todo o território nacional</div></div>
          </div>
        </div>
      </div>
      <form class="contact-form" action="send.php" method="post">
        <h3>Envie sua mensagem</h3>
        <label>Nome
          <input type="text" name="name" maxlength="100" required placeholder="Seu nome" />
        </label>
        <label>Telefone
          <input type="tel" name="phone" maxlength="20" required placeholder="(11) 90000-0000" />
        </label>
        <label>Mensagem
          <textarea name="message" rows="5" maxlength="1000" required placeholder="Descreva brevemente o que precisa..."></textarea>
        </label>
        <button type="submit" class="btn btn-gold btn-lg btn-block">Enviar via WhatsApp</button>
        <p class="form-note">Suas informações são tratadas com sigilo total.</p>
      </form>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="container footer-grid">
    <div>
      <img src="assets/logo-transparent.png" alt="Evandro Pessoa" class="footer-logo" />
      <p>Investigação profissional com sigilo absoluto, ética e atuação dentro da legalidade vigente.</p>
    </div>
    <div>
      <h4>Navegação</h4>
      <ul>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#como-funciona">Como Funciona</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>
    <div>
      <h4>Contato</h4>
      <ul>
        <li><a href="<?= $WHATSAPP_LINK ?>" target="_blank" rel="noopener">WhatsApp: <?= $PHONE_DISPLAY ?></a></li>
        <li>Atendimento em todo o território nacional</li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <p>© <?= date('Y') ?> Evandro Pessoa — Investigação Profissional. Todos os direitos reservados.</p>
    <a href="https://wa.me/5513978086239?text=<?= rawurlencode('Vi que fez o site para o Evandro Pessoa, e gostaria que entrasse em contato comigo!') ?>" target="_blank" rel="noopener" class="ballast">
      <span>Site desenvolvido por Ballast Estúdio Criativo</span>
      <img src="assets/ballast-logo.png" alt="Ballast" />
    </a>
  </div>
  <p class="legal">Todos os serviços realizados dentro da legalidade vigente.</p>
</footer>

<!-- WhatsApp Float -->
<a href="<?= $WHATSAPP_LINK ?>" target="_blank" rel="noopener" class="wa-float" aria-label="Falar no WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
</a>

<script src="script.js"></script>
</body>
</html>
