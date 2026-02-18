import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/header";

export const metadata = {
  title: "¿Quieres ser Distribuidor? | Lokki",
  description:
    "Conviértete en distribuidor autorizado Lokki. Gana por cada recarga, atrae más tráfico y ofrece a tus clientes una tarjeta internacional.",
};

const BRAND = {
  bg: "#DDECC7",
  green: "#153D2A",
  green2: "#0F2E20",
  orange: "#E57A00",
  yellow: "#F2C300",
};

// Assets (keep your current paths)
const ASSETS = {
  card: "/distribuidores/cardAmarilla.png",
  phone: "/distribuidores/phoneLayout.png",
  store: "/distribuidores/illustration-store.png",
  flow: "/distribuidores/illustration-flow.png",
  calendar: "/distribuidores/mock-calendar.png",
};

const WHATSAPP_NUMBER = "3144733604";
const whatsappText = `Hola Lokki

Quiero más información sobre cómo volverme distribuidor autorizado.

Gracias.`;

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappText
)}`;

// New commercial copy (same shape throughout, but we’re free to add new sections)
const COPY = {
  heroEyebrow: "Programa de Puntos Autorizados",
  heroH1: "Convierte tu negocio en un punto de recarga digital.",
  heroSubhead:
    "Gana comisiones ofreciendo pagos digitales a clientes que hoy solo usan efectivo.",
  heroMicro:
    "Llamada de 15 minutos. Te explicamos operación, márgenes y requisitos. Sin compromiso.",

  trust: [
    {
      title: "Ingresos por operación",
      desc: "Comisión en cada recarga. Un producto que se mueve todos los días.",
    },
    {
      title: "Más tráfico al local",
      desc: "Atrae clientes nuevos y aumenta ventas cruzadas en mostrador.",
    },
    {
      title: "Simple y acompañado",
      desc: "Flujo claro desde el celular + guías + soporte para tu equipo.",
    },
  ],

  problemEyebrow: "Lo que ya está pasando",
  problemTitle: "Tu cliente quiere pagar digital. Pero llega con efectivo.",
  problemBullets: [
    "Quiere comprar online y no tiene tarjeta.",
    "Necesita pagar servicios digitales (apps, suscripciones, compras).",
    "Busca un punto confiable cerca de casa.",
  ],
  problemClose:
    "Lokki convierte esa necesidad en ingresos para tu negocio. “Efectivo pero digital”.",

  howEyebrow: "Así funciona",
  howTitle: "3 pasos. Cero enredos.",
  howSteps: [
    {
      title: "1) Llega el cliente con efectivo",
      desc: "Te pide ayuda para pagar una compra o servicio digital.",
    },
    {
      title: "2) Tú haces la recarga",
      desc: "Desde el celular, en segundos. Sin inventario ni infraestructura.",
    },
    {
      title: "3) Cobras tu comisión",
      desc: "El cliente resuelve y vuelve. Tú ganas y aumentas tráfico.",
    },
  ],

  benefitsEyebrow: "Por qué funciona",
  benefitsTitle: "Un producto fácil de vender (y fácil de operar).",
  benefitsSubtitle:
    "La gente lo entiende rápido: tú les resuelves el pago. Ellos vuelven contigo.",
  benefits: [
    {
      title: "Aumenta tu caja diaria",
      desc: "Más operaciones al día, más motivos para que regresen.",
    },
    {
      title: "Diferénciate del vecino",
      desc: "No es una recarga más: es habilitar compras digitales reales.",
    },
    {
      title: "Sin inventario",
      desc: "No compras stock. No tienes que “apostar” capital en producto.",
    },
    {
      title: "Listo para escalar",
      desc: "Si tienes 1 punto o varios, el modelo se replica fácil.",
    },
  ],

  whoEyebrow: "¿Para quién es?",
  whoTitle: "Si tienes flujo de efectivo, Lokki encaja.",
  whoSubtitle:
    "Ideal para negocios de barrio donde la gente ya confía y pregunta “¿me ayudas a pagar esto?”",
  whoTags: [
    "Papelerías",
    "Centros de copiado",
    "Café internet / locutorios",
    "Tiendas de tecnología",
    "Misceláneas / tiendas de barrio",
  ],

  objectionsEyebrow: "Lo que siempre preguntan",
  objectionsTitle: "Respuestas rápidas",
  objections: [
    {
      q: "¿Necesito ser experto en tecnología?",
      a: "No. El flujo está pensado para mostrador. Te capacitamos y te dejamos guías listas.",
    },
    {
      q: "¿Cuánto tiempo toma una recarga?",
      a: "Segundos. La idea es que se sienta como una operación cotidiana del negocio.",
    },
    {
      q: "¿Qué gano exactamente?",
      a: "Comisión por operación + más tráfico. En la llamada te mostramos rangos según tu ciudad y volumen.",
    },
    {
      q: "¿Qué necesito para empezar?",
      a: "Un celular, disposición para operar el flujo y cumplir requisitos básicos. Lo revisamos contigo.",
    },
  ],

  agendaEyebrow: "Habla con ventas",
  agendaTitle: "Agenda una llamada (15 min)",
  agendaSubtitle:
    "Vemos si tu negocio encaja, te explicamos el modelo y si te sirve, te dejamos listo para operar.",
};

function SoftCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border shadow-sm ${className}`}
      style={{
        background: "rgba(255,255,255,0.70)",
        borderColor: "rgba(0,0,0,0.10)",
      }}
    >
      {children}
    </div>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center h-8 px-4 rounded-full text-xs border font-medium"
      style={{
        borderColor: "rgba(21,61,42,0.25)",
        color: BRAND.green,
        background: "rgba(255,255,255,0.35)",
      }}
    >
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <div
          className="text-xs tracking-widest uppercase font-semibold"
          style={{ color: "rgba(21,61,42,0.70)" }}
        >
          {eyebrow}
        </div>
      ) : null}

      <h2
        className="mt-2 text-3xl md:text-4xl font-semibold leading-tight"
        style={{ color: BRAND.green }}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className="mt-3 text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(21,61,42,0.78)" }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function CTAButton({
  href,
  children,
  variant = "primary",
  newTab = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  newTab?: boolean;
}) {
  const base =
    "inline-flex h-12 items-center rounded-full px-6 text-sm font-semibold border shadow-sm active:scale-[0.99] transition";

  const styles =
    variant === "primary"
      ? {
          // Make it pop: Lokki orange
          background: BRAND.orange,
          color: "white",
          borderColor: "rgba(0,0,0,0.10)",
        }
      : variant === "secondary"
      ? {
          background: "rgba(255,255,255,0.55)",
          color: BRAND.green,
          borderColor: "rgba(0,0,0,0.12)",
        }
      : {
          background: "rgba(255,255,255,0.20)",
          color: BRAND.green,
          borderColor: "rgba(21,61,42,0.20)",
        };

  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
      className={base}
      style={styles}
    >
      {children}
    </Link>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex h-9 items-center rounded-full px-4 text-sm font-semibold border"
      style={{
        background: "rgba(255,255,255,0.55)",
        borderColor: "rgba(0,0,0,0.10)",
        color: BRAND.green,
      }}
    >
      {children}
    </span>
  );
}

export default function QuieresSerDistribuidorPage() {
  return (
    <>
      <Header />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div
          className="mx-auto max-w-[1120px] px-4 pb-4"
          style={{
            background:
              "linear-gradient(180deg, rgba(221,236,199,0) 0%, rgba(221,236,199,1) 55%)",
          }}
        >
          <div
            className="rounded-2xl border p-3 flex items-center justify-between gap-3 shadow-sm"
            style={{
              background: "rgba(255,255,255,0.85)",
              borderColor: "rgba(0,0,0,0.10)",
            }}
          >
            <div className="text-sm font-semibold" style={{ color: BRAND.green }}>
              ¿Hablamos 15 min?
            </div>
            <div className="flex gap-2">
              <CTAButton href={WHATSAPP_URL} variant="secondary" newTab>
                WhatsApp
              </CTAButton>
              <CTAButton href="#agenda" variant="primary">
                Agendar
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      <main
        className="min-h-screen flex flex-col items-center"
        style={{ background: BRAND.bg }}
      >
        <div className="w-full max-w-[1120px] px-4 md:px-8 py-10 md:py-14">
          {/* ===== HERO ===== */}
          <SoftCard>
            <div className="p-6 md:p-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
              <div>
                <Pill>{COPY.heroEyebrow}</Pill>

                <h1
                  className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]"
                  style={{ color: BRAND.green }}
                >
                  {COPY.heroH1}
                </h1>

                <p
                  className="mt-4 text-lg md:text-xl leading-relaxed"
                  style={{ color: "rgba(21,61,42,0.82)" }}
                >
                  {COPY.heroSubhead}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <CTAButton href="#agenda" variant="primary">
                    Agendar llamada (15 min)
                  </CTAButton>
                  <CTAButton href={WHATSAPP_URL} variant="secondary" newTab>
                    WhatsApp
                  </CTAButton>
                </div>

                <p
                  className="mt-6 text-sm md:text-base leading-relaxed"
                  style={{ color: "rgba(21,61,42,0.75)" }}
                >
                  {COPY.heroMicro}
                </p>

                <div
                  className="mt-4 text-xs md:text-sm font-medium"
                  style={{ color: "rgba(21,61,42,0.65)" }}
                >
                  Comisión por operación • Más tráfico • Operación simple
                </div>
              </div>

              {/* Right visuals */}
              <div className="relative">
                <div
                  className="relative rounded-[28px] border shadow-sm overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.45)",
                    borderColor: "rgba(0,0,0,0.10)",
                  }}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <Pill>Así se ve</Pill>
                      <span
                        className="inline-flex h-10 items-center rounded-full px-4 text-xs font-semibold border"
                        style={{
                          background: BRAND.yellow,
                          borderColor: "rgba(0,0,0,0.10)",
                          color: BRAND.green,
                        }}
                      >
                        LOKKI
                      </span>
                    </div>

                    <div className="mt-4 grid gap-4">
                      <div
                        className="relative h-[170px] rounded-2xl overflow-hidden border"
                        style={{ borderColor: "rgba(0,0,0,0.10)" }}
                      >
                        <Image
                          src={ASSETS.card}
                          alt="Tarjeta Lokki"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>

                      <div
                        className="relative h-[280px] rounded-2xl overflow-hidden border"
                        style={{ borderColor: "rgba(0,0,0,0.10)" }}
                      >
                        <Image
                          src={ASSETS.phone}
                          alt="App Lokki"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div
                        className="rounded-2xl border p-4 text-sm font-semibold"
                        style={{
                          background: "rgba(255,255,255,0.55)",
                          borderColor: "rgba(0,0,0,0.10)",
                          color: BRAND.green,
                        }}
                      >
                        Un pitch que se entiende al instante: efectivo → recarga →
                        pago digital.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlay callout */}
                <div
                  className="absolute -bottom-6 -left-6 rounded-2xl p-5 border shadow-lg w-[300px]"
                  style={{
                    background: BRAND.orange,
                    borderColor: "rgba(0,0,0,0.10)",
                    color: "white",
                  }}
                >
                  <div className="text-sm font-semibold">Lo que vendes</div>
                  <div className="mt-2 text-sm leading-relaxed opacity-95">
                    Ayudas a pagar online. Tú cobras comisión. El cliente vuelve.
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Comisión", "Tráfico", "Venta cruzada"].map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 h-7 rounded-full border inline-flex items-center"
                        style={{
                          borderColor: "rgba(255,255,255,0.35)",
                          background: "rgba(0,0,0,0.10)",
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SoftCard>

          {/* ===== TRUST STRIP ===== */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {COPY.trust.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border p-6"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  borderColor: "rgba(0,0,0,0.10)",
                }}
              >
                <div className="text-lg font-semibold" style={{ color: BRAND.green }}>
                  {t.title}
                </div>
                <div
                  className="mt-2 text-sm md:text-base leading-relaxed"
                  style={{ color: "rgba(21,61,42,0.75)" }}
                >
                  {t.desc}
                </div>
              </div>
            ))}
          </div>

          {/* ===== PROBLEM ===== */}
          <div className="mt-12">
            <SectionTitle
              eyebrow={COPY.problemEyebrow}
              title={COPY.problemTitle}
              subtitle={COPY.problemClose}
            />

            <div className="mt-6 grid lg:grid-cols-2 gap-6 items-stretch">
              <SoftCard>
                <div className="p-8">
                  <div className="space-y-3">
                    {COPY.problemBullets.map((b) => (
                      <div
                        key={b}
                        className="rounded-2xl border p-5"
                        style={{
                          background: "rgba(255,255,255,0.55)",
                          borderColor: "rgba(0,0,0,0.10)",
                        }}
                      >
                        <div
                          className="text-sm md:text-base font-semibold"
                          style={{ color: BRAND.green }}
                        >
                          {b}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-6 rounded-2xl border p-5"
                    style={{
                      background: "rgba(21,61,42,0.06)",
                      borderColor: "rgba(21,61,42,0.18)",
                      color: BRAND.green,
                    }}
                  >
                    <div className="text-sm font-semibold">Resultado:</div>
                    <div className="mt-1 text-sm leading-relaxed opacity-90">
                      Tú te vuelves el punto confiable del barrio para resolver pagos
                      digitales.
                    </div>
                  </div>
                </div>
              </SoftCard>

              <SoftCard>
                <div className="p-8">
                  <div
                    className="text-xs tracking-widest uppercase font-semibold"
                    style={{ color: "rgba(21,61,42,0.70)" }}
                  >
                    Visual
                  </div>
                  <div className="mt-2 text-2xl font-semibold" style={{ color: BRAND.green }}>
                    Mostrador / Tienda
                  </div>

                  <div
                    className="mt-5 relative h-[380px] rounded-2xl overflow-hidden border"
                    style={{ borderColor: "rgba(0,0,0,0.10)" }}
                  >
                    <Image
                      src={ASSETS.store}
                      alt="Tienda (visual)"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-4 text-sm" style={{ color: "rgba(21,61,42,0.75)" }}>
                    Puedes reemplazar esta imagen por una foto real de un punto cuando la
                    tengas.
                  </div>
                </div>
              </SoftCard>
            </div>
          </div>

          {/* ===== HOW IT WORKS ===== */}
          <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
            <SoftCard>
              <div className="p-8">
                <SectionTitle
                  eyebrow={COPY.howEyebrow}
                  title={COPY.howTitle}
                  subtitle="Lo importante: se siente como una operación normal del negocio."
                />

                <div className="mt-6 space-y-4">
                  {COPY.howSteps.map((s) => (
                    <div
                      key={s.title}
                      className="rounded-2xl border p-5"
                      style={{
                        background: "rgba(255,255,255,0.55)",
                        borderColor: "rgba(0,0,0,0.10)",
                      }}
                    >
                      <div className="text-lg font-semibold" style={{ color: BRAND.green }}>
                        {s.title}
                      </div>
                      <div
                        className="mt-2 text-sm md:text-base leading-relaxed"
                        style={{ color: "rgba(21,61,42,0.75)" }}
                      >
                        {s.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <CTAButton href="#agenda" variant="primary">
                    Agendar llamada
                  </CTAButton>
                  <CTAButton href={WHATSAPP_URL} variant="secondary" newTab>
                    Preguntar por WhatsApp
                  </CTAButton>
                </div>
              </div>
            </SoftCard>

            <SoftCard>
              <div className="p-8">
                <div
                  className="text-xs tracking-widest uppercase font-semibold"
                  style={{ color: "rgba(21,61,42,0.70)" }}
                >
                  Visual
                </div>
                <div className="mt-2 text-2xl font-semibold" style={{ color: BRAND.green }}>
                  Diagrama del flujo
                </div>

                <div
                  className="mt-5 relative h-[520px] rounded-2xl overflow-hidden border"
                  style={{ borderColor: "rgba(0,0,0,0.10)" }}
                >
                  <Image
                    src={ASSETS.flow}
                    alt="Diagrama del flujo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </SoftCard>
          </div>

          {/* ===== BENEFITS ===== */}
          <div className="mt-12">
            <SectionTitle
              eyebrow={COPY.benefitsEyebrow}
              title={COPY.benefitsTitle}
              subtitle={COPY.benefitsSubtitle}
            />

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {COPY.benefits.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border p-6 shadow-sm"
                  style={{
                    background: "rgba(255,255,255,0.60)",
                    borderColor: "rgba(0,0,0,0.10)",
                  }}
                >
                  <div className="text-lg font-semibold" style={{ color: BRAND.green }}>
                    {b.title}
                  </div>
                  <div
                    className="mt-2 text-sm md:text-base leading-relaxed"
                    style={{ color: "rgba(21,61,42,0.75)" }}
                  >
                    {b.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== WHO IT'S FOR ===== */}
          <div className="mt-12">
            <SectionTitle
              eyebrow={COPY.whoEyebrow}
              title={COPY.whoTitle}
              subtitle={COPY.whoSubtitle}
            />

            <div className="mt-6 flex flex-wrap gap-3">
              {COPY.whoTags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {/* ===== OBJECTIONS ===== */}
          <div className="mt-12">
            <SectionTitle
              eyebrow={COPY.objectionsEyebrow}
              title={COPY.objectionsTitle}
              subtitle="Esto lo resolvemos en llamada, pero aquí van las respuestas rápidas."
            />

            <div className="mt-6 grid lg:grid-cols-2 gap-4">
              {COPY.objections.map((o) => (
                <div
                  key={o.q}
                  className="rounded-2xl border p-6"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    borderColor: "rgba(0,0,0,0.10)",
                  }}
                >
                  <div className="text-base font-semibold" style={{ color: BRAND.green }}>
                    {o.q}
                  </div>
                  <div
                    className="mt-2 text-sm md:text-base leading-relaxed"
                    style={{ color: "rgba(21,61,42,0.75)" }}
                  >
                    {o.a}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== AGENDA ===== */}
          <div id="agenda" className="mt-12">
            <SectionTitle
              eyebrow={COPY.agendaEyebrow}
              title={COPY.agendaTitle}
              subtitle={COPY.agendaSubtitle}
            />

            <div className="mt-6 grid lg:grid-cols-[1.4fr_0.6fr] gap-6 items-stretch">
              <SoftCard className="overflow-hidden">
                <div className="relative w-full min-h-[620px]">
                  <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ299Hs6_w2rPjBu4G8IXpZZ0NTN_n389KeoBXt6vuZzgwIVOoq4JaOUoHN70fsF5KxtsI2B5tyK?gv=true"
                    className="absolute inset-0 w-full h-full border-0"
                    title="Agenda una llamada con Lokki"
                    loading="lazy"
                  />
                </div>
              </SoftCard>

              <div className="space-y-4">
                <SoftCard>
                  <div className="p-6">
                    <div
                      className="text-xs tracking-widest uppercase font-semibold"
                      style={{ color: "rgba(21,61,42,0.70)" }}
                    >
                      Alternativa
                    </div>
                    <div className="mt-2 text-xl font-semibold" style={{ color: BRAND.green }}>
                      ¿Prefieres WhatsApp?
                    </div>

                    <div
                      className="mt-2 text-sm md:text-base leading-relaxed"
                      style={{ color: "rgba(21,61,42,0.75)" }}
                    >
                      Escríbenos y te guiamos. Si encaja, te mandamos el link de agenda o
                      te atendemos directo.
                    </div>

                    <div className="mt-5">
                      <CTAButton href={WHATSAPP_URL} variant="primary" newTab>
                        Continuar por WhatsApp
                      </CTAButton>
                    </div>

                    <div className="mt-3 text-xs" style={{ color: "rgba(21,61,42,0.65)" }}>
                      Mensaje prellenado. Te respondemos lo más rápido posible.
                    </div>
                  </div>
                </SoftCard>

                <SoftCard>
                  <div className="p-6">
                    <div className="text-sm font-semibold" style={{ color: BRAND.green }}>
                      Tip para cerrar más rápido
                    </div>
                    <div
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: "rgba(21,61,42,0.75)" }}
                    >
                      Si ya sabes qué tipo de negocio tienes y tu barrio, la llamada es más
                      corta y más útil.
                    </div>
                  </div>
                </SoftCard>
              </div>
            </div>
          </div>

          {/* Spacer for sticky mobile bar */}
          <div className="h-24 md:h-12" />
        </div>
      </main>
    </>
  );
}
