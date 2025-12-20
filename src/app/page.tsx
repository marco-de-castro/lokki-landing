"use client";

import Image from "next/image";
import React, { useState } from "react";
import UseCaseCarousel from "@/components/Usecase_carousel"

export default function HomePage() {
  const [modalType, setModalType] = useState<"customer" | "distributor" | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center bg-[#ddecc7]">
      
      {/* --- REFINED COMPACT HEADER --- */}
      <header className="w-full flex justify-center bg-[#ddecc7] sticky top-0 z-50 border-b border-black/5 shadow-sm">
        <div className="w-full max-w-[1440px] flex items-center justify-between px-6 py-2">
          
          {/* LEFT: Empezar PNG -> Now scaled to be less intrusive */}
          <div className="h-10 flex items-center">
            <button
              onClick={() => setModalType("customer")}
              className="h-full w-auto hover:opacity-80 transition active:scale-95"
            >
              <img
                src="/clean-page/header_container/empezar.png"
                alt="Obtener Tarjeta"
                className="h-full w-auto object-contain"
              />
            </button>
          </div>

          {/* RIGHT: Grouped Nav Assets */}
<div className="flex items-center gap-4 h-12"> {/* Increased height slightly for clarity */}
  <nav className="hidden md:flex items-center gap-4 h-full">
    
    {/* 1. ¿Qué es Lokki? */}
    <button 
      onClick={() => document.getElementById("info1")?.scrollIntoView({ behavior: "smooth" })}
      className="h-8 flex items-center hover:opacity-70 transition"
    >
      <img 
        src="/clean-page/header_container/queeslokki.png" 
        className="h-full w-auto object-contain" 
        alt="Info" 
      />
    </button>

    {/* 2. Encuentra un Distribuidor */}
    <button 
      onClick={() => setModalType("distributor")}
      className="h-8 flex items-center hover:opacity-70 transition"
    >
      <img 
        src="/clean-page/header_container/Encuentra-un-distribuidor.png" 
        className="h-full w-auto object-contain" 
        alt="Distribuidores" 
      />
    </button>

    {/* 3. Casos de Éxito */}
    <button 
      onClick={() => setModalType("distributor")}
      className="h-8 flex items-center hover:opacity-70 transition"
    >
      <img 
        src="/clean-page/header_container/Casos-De-Exito.png" 
        className="h-full w-auto object-contain" 
        alt="Casos" 
      />
    </button>

    {/* 4. Soporte */}
    <button 
      onClick={() => setModalType("distributor")}
      className="h-8 flex items-center hover:opacity-70 transition"
    >
      <img 
        src="/clean-page/header_container/Soporte.png" 
        className="h-full w-auto object-contain" 
        alt="Soporte" 
      />
    </button>
  </nav>

  {/* LOGO - Keeping it separate to maintain the far-right approved position */}
  <div className="h-8 flex items-center ml-2">
     <img src="/clean-page/header_container/lokki.png" className="h-full w-auto object-contain" alt="Logo" />
  </div>
</div>
</div>
      </header>
      <UseCaseCarousel />

      {/* --- REST OF THE PAGE --- */}
      <section className="w-full">
         {/* Your existing hero.png and info PNGs follow here */}
      </section>

      {/* --- SECURE MODALS (Step-by-step logic) --- */}
      {modalType && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
             <button onClick={() => setModalType(null)} className="absolute top-4 right-6 text-2xl text-gray-400 hover:text-black">×</button>
             {modalType === "distributor" ? (
               <div>
                  <h3 className="text-xl font-bold text-gray-900">Hablar con Ventas</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-4">Agenda una cita para tu negocio.</p>
                  <div className="space-y-3">
                    <input placeholder="Nombre" className="w-full bg-gray-50 border-none p-3 rounded-xl text-sm focus:ring-1 focus:ring-black outline-none" />
                    <input placeholder="WhatsApp" className="w-full bg-gray-50 border-none p-3 rounded-xl text-sm focus:ring-1 focus:ring-black outline-none" />
                    <button className="w-full bg-black text-white p-3 rounded-xl font-bold text-sm">Enviar Solicitud</button>
                  </div>
               </div>
             ) : (
               <div>
                  <h3 className="text-xl font-bold text-gray-900">Ingreso Seguro</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-4">Conéctate con el Agente Maestro.</p>
                  <div className="space-y-3">
                    <input type="email" placeholder="Email" className="w-full bg-gray-50 border-none p-3 rounded-xl text-sm focus:ring-1 focus:ring-black outline-none" />
                    <button className="w-full bg-black text-white p-3 rounded-xl font-bold text-sm">Continuar</button>
                  </div>
               </div>
             )}
          </div>
        </div>
      )}
      {/* HERO */}

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