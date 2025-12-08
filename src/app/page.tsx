// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-[#ddecc7]">
      {/* HEADER */}
      <Image
        src="/clean-page/header.png"
        alt="Lokki hero section"
        width={1440}
        height={900}
        className="w-full max-w-[1440px] h-auto block"
        priority
      />

      {/* INFO 1 */}
      <Image
        src="/clean-page/info1.1.png"
        alt="Lokki info 1"
        width={1440}
        height={900}
        className="w-full max-w-[1440px] h-auto block -mt-px"
      />

      {/* INFO 2 */}
      <Image
        src="/clean-page/info2.png"
        alt="Lokki info 2"
        width={1440}
        height={900}
        className="w-full max-w-[1440px] h-auto block -mt-px"
      />

      {/* INFO 3 */}
      <Image
        src="/clean-page/info3.png"
        alt="Lokki info 3"
        width={1440}
        height={900}
        className="w-full max-w-[1440px] h-auto block -mt-px"
      />

      {/* TESTIMONIALS */}
      <Image
        src="/clean-page/testimonios.png"
        alt="Lokki testimonials"
        width={1440}
        height={600}
        className="w-full max-w-[1440px] h-auto block -mt-px"
      />

      {/* FOOTER */}
      <Image
        src="/clean-page/footer.png"
        alt="Lokki footer"
        width={1440}
        height={250}
        className="w-full max-w-[1440px] h-auto block -mt-px"
      />
    </main>
  );
}
