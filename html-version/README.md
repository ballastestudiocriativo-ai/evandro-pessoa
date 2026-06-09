# Versão HTML/CSS/JS/PHP — Evandro Pessoa

Versão estática em PHP do site, pronta para hospedar em qualquer servidor com suporte a PHP (InfinityFree, Hostinger, etc.).

## Conteúdo
- `index.php` — página principal (todas as seções)
- `send.php` — processa o formulário e redireciona para o WhatsApp
- `style.css` — estilos
- `script.js` — menu mobile + efeito do header
- `assets/` — imagens

## Como usar
1. Envie todos os arquivos desta pasta para a raiz (ou subpasta) da sua hospedagem via FTP.
2. Acesse o domínio — o `index.php` será carregado automaticamente.
3. O formulário envia a mensagem direto para o WhatsApp configurado.

## Trocar telefone/mensagens
Edite no topo de `index.php` e `send.php` as variáveis `$PHONE_RAW` e `$PHONE_DISPLAY`.

## Observação
A versão React (Lovable) continua intacta em `/src` — esta pasta é independente e existe apenas para você publicar em hospedagem PHP tradicional.
