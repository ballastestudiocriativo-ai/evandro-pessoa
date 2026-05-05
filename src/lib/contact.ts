export const PHONE_DISPLAY = "(11) 99181-3725";
export const PHONE_RAW = "5511991813725";
export const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar uma investigação!";
export const WHATSAPP_LINK = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const waLinkFor = (service: string) =>
  `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(`Olá Evandro, gostaria de informações sobre: ${service}.`)}`;
