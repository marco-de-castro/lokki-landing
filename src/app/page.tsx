// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-full bg-[#E7F0E2]">
      
      {/* HEADER */}
      <section className="w-full flex justify-center">
        <Image
          src="/clean-page/header-container.png"
          alt="Lokki Header"
          width={1920}
          height={140}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* HERO (Qué es Lokki / hero block) */}
      <section className="w-full flex justify-center">
        <Image
          src="/clean-page/queesLokki.png"
          alt="Lokki Hero"
          width={1920}
          height={1100}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* INFO 2 */}
      <section className="w-full flex justify-center">
        <Image
          src="/clean-page/info-2.png"
          alt="Lokki Info 2"
          width={1920}
          height={1100}
          className="w-full h-auto"
        />
      </section>

      {/* INFO 3 */}
      <section className="w-full flex justify-center">
        <Image
          src="/clean-page/info3.png"
          alt="Lokki Info 3"
          width={1920}
          height={1100}
          className="w-full h-auto"
        />
      </section>

      {/* TESTIMONIOS */}
      <section className="w-full flex justify-center">
        <Image
          src="/clean-page/testimonios.png"
          alt="Lokki Testimonios"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
      </section>

      {/* FOOTER */}
      <section className="w-full flex justify-center">
        <Image
          src="/clean-page/footer.png"
          alt="Lokki Footer"
          width={1920}
          height={260}
          className="w-full h-auto"
        />
      </section>
    </main>
  );
}
