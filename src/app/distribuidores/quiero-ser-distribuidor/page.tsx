// app/quieres-ser-distribuidor/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "¿Quieres ser Distribuidor? | Lokki",
  description:
    "Conviértete en distribuidor autorizado Lokki. Gana por cada recarga, atrae más tráfico y ofrece a tus clientes una tarjeta internacional.",
};

const BENEFITS = [
  {
    title: "Ganas por cada recarga",
    desc: "Margen claro por transacción. Tus ingresos crecen con el volumen.",
  },
  {
    title: "Atraes más clientes a tu negocio",
    desc: "Personas buscando recargar o pagar online llegan a tu punto.",
  },
  {
    title: "Producto simple de explicar",
    desc: "Efectivo → saldo digital → compras internacionales. Sin fricción.",
  },
  {
    title: "Soporte y material de ventas",
    desc: "Te damos guías, mensajes y assets para venderlo en mostrador.",
  },
];

const REQUIREMENTS = [
  "Negocio físico (tienda, tech shop, centro de copiado, miscelánea, etc.)",
  "Disponibilidad para manejar recargas en efectivo según el proceso",
  "Conectividad básica (celular con datos / WhatsApp)",
  "Cumplir lineamientos operativos de punto autorizado",
];

const STEPS = [
  {
    title: "1) Te capacitamos",
    desc: "Aprendes el flujo: recarga, emisión/uso de tarjeta y soporte básico.",
  },
  {
    title: "2) Te activamos como punto",
    desc: "Te damos acceso operativo y materiales para empezar a vender.",
  },
  {
    title: "3) Empiezas a recargar",
    desc: "Recibes efectivo y el usuario recibe saldo digital al instante.",
  },
  {
    title: "4) Cobras tu margen",
    desc: "Liquidación y control: ingresos por transacción y reportes.",
  },
];

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
        <div className="text-xs tracking-widest uppercase text-black/60">
          {eyebrow}
        </div>
      ) : null}
      <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-black leading-tight">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 text-base md:text-lg text-black/70">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Card({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 border border-black/10 p-5 shadow-sm">
      <div className="font-semibold text-black">{title}</div>
      <div className="mt-2 text-sm text-black/70">{desc}</div>
    </div>
  );
}

export default function QuieresSerDistribuidorPage() {
  // Replace these two with your real links:
  const videoUrl = "https://www.youtube.com/embed/VIDEO_ID"; // or Vimeo embed
  const calendlyUrl =
    "https://calendly.com/TU_USUARIO/llamada-distribuidores?hide_gdpr_banner=1";

  return (
    <main className="min-h-screen bg-[#ddecc7] flex flex-col items-center">
      {/* Optional: keep your full-width header image if you want brand continuity */}
      {/* <Image
        src="/clean-page/header.png"
        alt="Lokki header"
        width={1440}
        height={900}
        className="w-full max-w-[1440px] h-auto block"
        priority
      /> */}

      <div className="w-full max-w-[1100px] px-4 md:px-8 py-10 md:py-14">
        {/* HERO */}
        <div className="rounded-[28px] bg-white/60 border border-black/10 overflow-hidden shadow-sm">
          <div className="p-6 md:p-10 grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
            <div>
              <SectionTitle
                eyebrow="Programa de puntos autorizados"
                title="Conviértete en Distribuidor Lokki"
                subtitle="Vende recargas en tu negocio y ofrece a tus clientes una forma simple de pagar compras internacionales con una tarjeta virtual."
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#video"
                  className="inline-flex h-10 items-center rounded-full bg-black text-white px-5 text-sm font-medium hover:opacity-90 active:scale-[0.99] transition"
                >
                  Ver el video
                </Link>
                <Link
                  href="#agenda"
                  className="inline-flex h-10 items-center rounded-full bg-white text-black px-5 text-sm font-medium border border-black/15 hover:bg-white/80 active:scale-[0.99] transition"
                >
                  Agendar reunión
                </Link>
              </div>

              <div className="mt-6 text-sm text-black/70">
                Ideal para: misceláneas, tiendas de tecnología, centros de copiado,
                locutorios, servicios, etc.
              </div>
            </div>

            {/* Right-side visual (swap for your PNG if you have one) */}
            <div className="relative rounded-2xl bg-white/70 border border-black/10 p-5">
              <div className="text-sm font-semibold text-black">
                ¿Qué gana tu negocio?
              </div>
              <ul className="mt-3 space-y-2 text-sm text-black/75 list-disc pl-5">
                <li>Ingresos por transacción</li>
                <li>Más tráfico y ventas cruzadas</li>
                <li>Producto “efectivo pero digital”</li>
                <li>Operación sencilla en mostrador</li>
              </ul>

              <div className="mt-5 rounded-xl bg-[#c5d6af]/60 border border-black/10 p-4">
                <div className="text-xs uppercase tracking-widest text-black/60">
                  Nota
                </div>
                <div className="mt-1 text-sm text-black/80">
                  No necesitas infraestructura especial. Con un celular y el flujo
                  correcto puedes operar.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-10 md:mt-12">
          <SectionTitle
            eyebrow="Por qué funciona"
            title="Un producto fácil de vender"
            subtitle="Lo importante: que el cliente lo entienda en 10 segundos y tú puedas operarlo sin complicarte."
          />
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map((b) => (
              <Card key={b.title} title={b.title} desc={b.desc} />
            ))}
          </div>
        </div>

        {/* REQUIREMENTS + STEPS */}
        <div className="mt-10 md:mt-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/70 border border-black/10 p-6">
            <div className="text-lg font-semibold text-black">
              Requisitos básicos
            </div>
            <ul className="mt-4 space-y-2 text-sm text-black/75 list-disc pl-5">
              {REQUIREMENTS.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white/70 border border-black/10 p-6">
            <div className="text-lg font-semibold text-black">
              ¿Cómo es el proceso?
            </div>
            <div className="mt-4 space-y-3">
              {STEPS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl bg-white/60 border border-black/10 p-4"
                >
                  <div className="font-semibold text-black text-sm">
                    {s.title}
                  </div>
                  <div className="mt-1 text-sm text-black/70">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div id="video" className="mt-10 md:mt-12">
          <SectionTitle
            eyebrow="Video"
            title="Mira cómo se vende en la vida real"
            subtitle="Este video explica el modelo y cómo ganas como distribuidor. Úsalo también para capacitar a tu equipo."
          />

          <div className="mt-6 rounded-[28px] overflow-hidden border border-black/10 bg-black shadow-sm">
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

          <div className="mt-3 text-xs text-black/60">
            Tip: si usas YouTube, pega el link en formato embed:
            <span className="font-mono"> https://www.youtube.com/embed/VIDEO_ID</span>
          </div>
        </div>

        {/* SCHEDULING / TALK TO SALES */}
        <div id="agenda" className="mt-10 md:mt-12">
          <SectionTitle
            eyebrow="Habla con ventas"
            title="Agenda una reunión (15 min)"
            subtitle="Revisamos tu tipo de negocio, ubicación, volumen esperado y te explicamos la operación y márgenes."
          />

          <div className="mt-6 rounded-[28px] overflow-hidden border border-black/10 bg-white/70 shadow-sm">
            {/* Calendly embed */}
            <div className="relative w-full min-h-[740px]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={calendlyUrl}
                title="Agenda con Lokki"
              />
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-white/70 border border-black/10 p-5">
            <div className="text-sm font-semibold text-black">
              ¿Prefieres WhatsApp?
            </div>
            <div className="mt-2 text-sm text-black/70">
              Puedes agregar aquí un botón directo a WhatsApp con un mensaje prellenado.
            </div>

            {/* Replace with your real number/message */}
            <Link
              className="mt-4 inline-flex h-10 items-center rounded-full bg-black text-white px-5 text-sm font-medium hover:opacity-90 active:scale-[0.99] transition"
              href="https://wa.me/0000000000?text=Hola%20Lokki%2C%20quiero%20ser%20distribuidor.%20Mi%20negocio%20es%3A%20_____%20y%20estoy%20en%3A%20_____"
              target="_blank"
              rel="noreferrer"
            >
              Hablar por WhatsApp
            </Link>
          </div>
        </div>

        {/* FOOTER SPACER */}
        <div className="h-10" />
      </div>
    </main>
  );
}
