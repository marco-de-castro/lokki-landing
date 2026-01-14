// src/lib/oliviaDistributor.ts

type Intent = {
  id: string;
  keywords: string[];
  short: string;
  followUp?: string;
};

const INTENTS: Intent[] = [
  {
    id: "cupo",
    keywords: ["cupo", "capital muerto", "saldo atrapado", "dinero sentado", "inmovilizado", "liquidez"],
    short:
      "En Lokki no hay capital inmovilizado. Recargas solo cuando el cliente ya te pagó (PSE/LLAVE/Binance). Tu dinero no queda atrapado en la plataforma.",
    followUp: "¿Tu duda es por liquidez o por comisión/margen?",
  },
  {
    id: "comision",
    keywords: ["comision", "comisión", "porcentaje", "20%", "bonificacion", "bonificación", "margen", "gano", "ganancia"],
    short:
      "Ganas mínimo el 20% de la comisión por transacción. Ese porcentaje puede subir con volumen y cumplimiento de actividades (bonificaciones).",
    followUp: "¿Quieres que te explique cómo sube por volumen/bonos?",
  },
  {
    id: "devolucion",
    keywords: ["devolucion", "devolución", "reembolso", "disputa", "contracargo", "reclamo", "queja"],
    short:
      "Lokki es canal de pago, no el comercio. Si el saldo se consumió, la devolución se tramita con el comercio. Si el comercio devuelve, el saldo retorna a la tarjeta. Lokki puede ayudar a elevar la disputa.",
    followUp: "¿Es devolución normal o transacción no reconocida?",
  },
  {
    id: "correo",
    keywords: ["correo", "email", "no llego", "no llegó", "reenviar", "spam", "equivoque", "equivoqué"],
    short:
      "El panel valida el correo 3 veces antes de emitir. Si el cliente no lo ve, puedes reenviar el acceso al instante desde tu panel.",
    followUp: "¿No llegó o quedó mal digitado?",
  },
  {
    id: "limites",
    keywords: ["limite", "límite", "maximo", "máximo", "minimo", "mínimo", "1000", "usd", "monto alto"],
    short:
      "No hay monto mínimo. Por políticas antifraude, el límite operativo por tarjeta es hasta USD 1.000. Montos altos pueden activar controles de seguridad.",
    followUp: "¿Es un pago puntual alto o compras frecuentes?",
  },
  {
    id: "fraude",
    keywords: ["fraude", "hack", "hackeo", "estafa", "lavado", "ilegal", "sospechoso", "robar", "roben"],
    short:
      "Las tarjetas son prepago con límite, sin retiros de efectivo ni P2P. Hay monitoreo antifraude; si algo es sospechoso se bloquea y se revisa. Tu exposición queda acotada al monto de la recarga.",
    followUp: "¿Tu inquietud es por montos altos o por un caso específico?",
  },
  {
    id: "default",
    keywords: [],
    short:
      "Te ayudo. Para ubicarte rápido: ¿tu duda es sobre cupo/liquidez, comisión, devoluciones, límites (USD 1.000) o seguridad/fraude?",
  },
];

function normalize(s: string) {
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}

export function oliviaReply(userText: string): string {
  const t = normalize(userText);

  let best: { intent: Intent; score: number } | null = null;

  for (const intent of INTENTS) {
    if (intent.id === "default") continue;
    let score = 0;
    for (const k of intent.keywords) {
      const kk = normalize(k);
      if (kk && t.includes(kk)) score += 1;
    }
    if (score > 0 && (!best || score > best.score)) best = { intent, score };
  }

  const chosen = best?.intent ?? INTENTS.find((i) => i.id === "default")!;
  return chosen.followUp ? `${chosen.short}\n\n${chosen.followUp}` : chosen.short;
}
