// app/quieres-ser-distribuidor/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import  Header  from "@/components/header";

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

// IMPORTANT: Put the sample images in:
// public/distribuidores/mock-card.png
// public/distribuidores/mock-phone.png
// public/distribuidores/illustration-store.png
// public/distribuidores/illustration-flow.png
// public/distribuidores/mock-calendar.png
const ASSETS = {
  card: "/distribuidores/mock-card.png",
  phone: "/distribuidores/mock-phone.png",
  store: "/distribuidores/illustration-store.png",
  flow: "/distribuidores/illustration-flow.png",
  calendar: "/distribuidores/mock-calendar.png",
};

const WHATSAPP_NUMBER = "3144733604";
const whatsappText = `Hola Lokki

Quiero más informacion sobre como volverme distribuidor autorizado.

Gracias.`;

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappText
)}`;

// ====== WIREFRAME COPY (replace later with final) ======
const COPY = {
  heroEyebrow: "Programa de puntos autorizados",
  heroH1: "Conviértete en Distribuidor Lokki",
  heroSubhead:
    "Gana por cada recarga y atrae más clientes a tu negocio con un producto simple: “efectivo pero digital”.",
  heroMicro:
    "Ideal para: misceláneas, tiendas de tecnología, centros de copiado, locutorios y servicios.",

  trust: [
    {
      title: "Activación rápida",
      desc: "Onboarding corto + materiales listos para vender.",
    },
    {
      title: "Operación simple",
      desc: "Sin infraestructura: celular + WhatsApp + flujo claro.",
    },
    {
      title: "Soporte",
      desc: "Te acompañamos con guías y respuestas rápidas.",
    },
  ],

  benefitsTitle: "Un producto fácil de vender",
  benefitsSubtitle:
    "El cliente lo entiende en 10 segundos y tú lo operas sin complicarte.",
  benefits: [
    {
      title: "Ganas por cada recarga",
      desc: "Margen claro por transacción. Tus ingresos crecen con el volumen.",
    },
    {
      title: "Atraes más clientes",
      desc: "Más tráfico a tu punto y ventas cruzadas en mostrador.",
    },
    {
      title: "Producto simple",
      desc: "Recarga → saldo digital → compra internacional. Sin fricción.",
    },
    {
      title: "Material listo",
      desc: "Mensajes, guías y assets para capacitar a tu equipo.",
    },
  ],

  earnTitle: "Así ganas dinero",
  earnSubtitle:
    "Un ejemplo simple para entenderlo. En la llamada ajustamos a tu ciudad y tu volumen.",
  earnExampleTitle: "Ejemplo rápido (wire)",
  earnExampleBody:
    "30 recargas/día × margen promedio = ingreso mensual estimado. (Aquí reemplazamos con números reales cuando definamos márgenes.)",

  stepsTitle: "¿Cómo funciona?",
  stepsSubtitle: "En 4 pasos, sin enredos.",
  steps: [
    { title: "1) Te capacitamos", desc: "Aprendes el flujo completo y soporte básico." },
    { title: "2) Te activamos", desc: "Acceso + material para empezar a vender." },
    { title: "3) Recargas", desc: "Recibes efectivo y el usuario recibe saldo al instante." },
    { title: "4) Cobras tu margen", desc: "Control y reportes. Ingreso por transacción." },
  ],

  videoTitle: "Mira cómo se vende en la vida real",
  videoSubtitle: "Este video también sirve para capacitar a tu equipo.",

  agendaTitle: "Agenda una reunión (15 min)",
  agendaSubtitle:
    "Revisamos tu negocio, ubicación, volumen esperado y te explicamos operación y márgenes.",
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
          background: BRAND.green,
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

export default function QuieresSerDistribuidorPage() {
  const videoUrl = "https://www.youtube.com/embed/VIDEO_ID";

  return (
    <>
    <Header />
        <main
      className="min-h-screen flex flex-col items-center"
      style={{ background: BRAND.bg }}

    >
      <div className="w-full max-w-[1120px] px-4 md:px-8 py-10 md:py-14">
        {/* ===== HERO (wire) ===== */}
        <SoftCard>
          <div className="p-6 md:p-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            {/* LEFT: hero copy */}
            <div>
              <Pill>{COPY.heroEyebrow}</Pill>

              {/* BIG marketing headline */}
              <h1
                className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.05]"
                style={{ color: BRAND.green }}
              >
                {COPY.heroH1}
              </h1>

              {/* BIG subhead */}
              <p
                className="mt-4 text-lg md:text-xl leading-relaxed"
                style={{ color: "rgba(21,61,42,0.82)" }}
              >
                {COPY.heroSubhead}
              </p>

              {/* CTA row */}
              <div className="mt-7 flex flex-wrap gap-3">
                <CTAButton href="#agenda" variant="primary">
                  Agendar reunión (15 min)
                </CTAButton>
                <CTAButton href={WHATSAPP_URL} variant="secondary" newTab>
                  WhatsApp
                </CTAButton>
                <CTAButton href="#video" variant="ghost">
                  Ver video
                </CTAButton>
              </div>

              {/* microcopy */}
              <p
                className="mt-6 text-sm md:text-base leading-relaxed"
                style={{ color: "rgba(21,61,42,0.75)" }}
              >
                {COPY.heroMicro}
              </p>

              {/* mini trust line */}
              <div
                className="mt-4 text-xs md:text-sm font-medium"
                style={{ color: "rgba(21,61,42,0.65)" }}
              >
                Activación rápida • Operación simple • Soporte
              </div>
            </div>

            {/* RIGHT: hero visuals (sample images) */}
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
                    <Pill>Zona visual (wire)</Pill>
                    <span
                      className="inline-flex h-10 items-center rounded-full px-4 text-xs font-semibold border"
                      style={{
                        background: BRAND.yellow,
                        borderColor: "rgba(0,0,0,0.10)",
                        color: BRAND.green,
                      }}
                    >
                      SAMPLE
                    </span>
                  </div>

                  <div className="mt-4 grid gap-4">
                    {/* Card mock */}
                    <div className="relative h-[170px] rounded-2xl overflow-hidden border"
                         style={{ borderColor: "rgba(0,0,0,0.10)" }}>
                      <Image
                        src={ASSETS.card}
                        alt="Mock tarjeta Lokki"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Phone mock */}
                    <div className="relative h-[280px] rounded-2xl overflow-hidden border"
                         style={{ borderColor: "rgba(0,0,0,0.10)" }}>
                      <Image
                        src={ASSETS.phone}
                        alt="Mock app Lokki"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* small strip */}
                    <div
                      className="rounded-2xl border p-4 text-sm font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.55)",
                        borderColor: "rgba(0,0,0,0.10)",
                        color: BRAND.green,
                      }}
                    >
                      Sellos / confianza (wire): Sin infraestructura • Soporte •
                      Margen claro
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay callout */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl p-5 border shadow-lg w-[290px]"
                style={{
                  background: BRAND.orange,
                  borderColor: "rgba(0,0,0,0.10)",
                  color: "white",
                }}
              >
                <div className="text-sm font-semibold">Pitch en 10 segundos</div>
                <div className="mt-2 text-sm leading-relaxed opacity-95">
                  Efectivo → saldo digital → compras internacionales.
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Margen por recarga", "Más tráfico", "Venta cruzada"].map(
                    (c) => (
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
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </SoftCard>

        {/* ===== TRUST STRIP (wire) ===== */}
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

        {/* ===== BENEFITS (wire) ===== */}
        <div className="mt-12">
          <SectionTitle
            eyebrow="Por qué funciona"
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

        {/* ===== HOW YOU EARN (wire) ===== */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
          <SoftCard>
            <div className="p-8">
              <SectionTitle
                eyebrow="Ingresos"
                title={COPY.earnTitle}
                subtitle={COPY.earnSubtitle}
              />

              <div
                className="mt-6 rounded-2xl border p-6"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  borderColor: "rgba(0,0,0,0.10)",
                }}
              >
                <div className="text-lg font-semibold" style={{ color: BRAND.green }}>
                  {COPY.earnExampleTitle}
                </div>
                <div
                  className="mt-2 text-sm md:text-base leading-relaxed"
                  style={{ color: "rgba(21,61,42,0.78)" }}
                >
                  {COPY.earnExampleBody}
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "Recargas/día", v: "30" },
                    { k: "Margen", v: "$X" },
                    { k: "Mes", v: "$Y" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-2xl border p-4"
                      style={{
                        background: "rgba(21,61,42,0.06)",
                        borderColor: "rgba(21,61,42,0.18)",
                        color: BRAND.green,
                      }}
                    >
                      <div className="text-xs font-semibold opacity-75">{x.k}</div>
                      <div className="mt-1 text-2xl font-semibold">{x.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-xs" style={{ color: "rgba(21,61,42,0.65)" }}>
                  (Wire) Aquí luego ponemos números reales y rangos por ciudad/volumen.
                </div>
              </div>
            </div>
          </SoftCard>

          <SoftCard>
            <div className="p-8">
              <div className="text-xs tracking-widest uppercase font-semibold"
                   style={{ color: "rgba(21,61,42,0.70)" }}>
                Visual (A/B)
              </div>
              <div className="mt-2 text-2xl font-semibold" style={{ color: BRAND.green }}>
                Tienda / Mostrador
              </div>

              <div className="mt-5 relative h-[380px] rounded-2xl overflow-hidden border"
                   style={{ borderColor: "rgba(0,0,0,0.10)" }}>
                <Image
                  src={ASSETS.store}
                  alt="Ilustración tienda (sample)"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4 text-sm" style={{ color: "rgba(21,61,42,0.75)" }}>
                (Option B) Aquí es donde podríamos reemplazar por 1 foto real, si queremos.
              </div>
            </div>
          </SoftCard>
        </div>

        {/* ===== HOW IT WORKS (wire) ===== */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
          <SoftCard>
            <div className="p-8">
              <SectionTitle
                eyebrow="Proceso"
                title={COPY.stepsTitle}
                subtitle={COPY.stepsSubtitle}
              />

              <div className="mt-6 space-y-4">
                {COPY.steps.map((s) => (
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
            </div>
          </SoftCard>

          <SoftCard>
            <div className="p-8">
              <div className="text-xs tracking-widest uppercase font-semibold"
                   style={{ color: "rgba(21,61,42,0.70)" }}>
                Visual (wire)
              </div>
              <div className="mt-2 text-2xl font-semibold" style={{ color: BRAND.green }}>
                Diagrama del flujo
              </div>

              <div className="mt-5 relative h-[520px] rounded-2xl overflow-hidden border"
                   style={{ borderColor: "rgba(0,0,0,0.10)" }}>
                <Image
                  src={ASSETS.flow}
                  alt="Ilustración flujo (sample)"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </SoftCard>
        </div>

        {/* ===== VIDEO ===== */}
        <div id="video" className="mt-12">
          <SectionTitle
            eyebrow="Video"
            title={COPY.videoTitle}
            subtitle={COPY.videoSubtitle}
          />

          <div className="mt-6 rounded-[28px] overflow-hidden border bg-black shadow-sm"
               style={{ borderColor: "rgba(0,0,0,0.10)" }}>
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videoUrl}
                title="Video Distribuidores Lokki"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-3 text-xs" style={{ color: "rgba(21,61,42,0.65)" }}>
            (Wire) Reemplaza VIDEO_ID por tu embed real.
          </div>
        </div>

        {/* ===== AGENDA ===== */}
        <div id="agenda" className="mt-12">
          <SectionTitle
            eyebrow="Habla con ventas"
            title={COPY.agendaTitle}
            subtitle={COPY.agendaSubtitle}
          />

          <div className="mt-6 grid lg:grid-cols-[1.4fr_0.6fr] gap-6 items-stretch">
            {/* Calendar embed */}
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

            {/* Right: visual + WhatsApp CTA */}
            <div className="space-y-4">
              <SoftCard>
                <div className="p-6">
                  <div className="text-xs tracking-widest uppercase font-semibold"
                       style={{ color: "rgba(21,61,42,0.70)" }}>
                    Visual
                  </div>
                  <div className="mt-2 text-xl font-semibold" style={{ color: BRAND.green }}>
                    Agenda en 15 min
                  </div>

                  <div className="mt-4 relative h-[220px] rounded-2xl overflow-hidden border"
                       style={{ borderColor: "rgba(0,0,0,0.10)" }}>
                    <Image
                      src={ASSETS.calendar}
                      alt="Mock agenda (sample)"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </SoftCard>

              <SoftCard>
                <div className="p-6">
                  <div className="text-lg font-semibold" style={{ color: BRAND.green }}>
                    ¿Prefieres WhatsApp?
                  </div>
                  <div className="mt-2 text-sm md:text-base leading-relaxed"
                       style={{ color: "rgba(21,61,42,0.75)" }}>
                    Escríbenos y te guiamos para convertirte en distribuidor.
                  </div>

                  <div className="mt-5">
                    <CTAButton href={WHATSAPP_URL} variant="primary" newTab>
                      Continuar por WhatsApp
                    </CTAButton>
                  </div>

                  <div className="mt-3 text-xs" style={{ color: "rgba(21,61,42,0.65)" }}>
                    (Wire) Este botón usa el texto prellenado con tu info.
                  </div>
                </div>
              </SoftCard>
            </div>
          </div>
        </div>

        {/* FOOTER SPACER */}
        <div className="h-12" />
      </div>
    </main>
    </>
  );
}
