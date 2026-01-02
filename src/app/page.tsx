"use client";

import Image from "next/image";
import UseCaseCarousel from "@/components/Usecase_carousel";
import React, { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [modalType, setModalType] = useState<"customer" | "distributor" | null>(null);
  const [distributorMenuOpen, setDistributorMenuOpen] = useState(false);
const distributorMenuRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  function handleClickOutside(e: MouseEvent) {
    if (!distributorMenuRef.current) return;
    if (!distributorMenuRef.current.contains(e.target as Node)) {
      setDistributorMenuOpen(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  return (
    <main className="min-h-screen flex flex-col items-center bg-[#ddecc7]">
      {/* --- REFINED COMPACT HEADER --- */}
      <header className="w-full flex justify-center bg-[#ddecc7] sticky top-0 z-50 border-b border-black/5 shadow-sm">
        <div className="w-full max-w-[1440px] flex items-center justify-between px-6 py-2">
          {/* LEFT: Empezar PNG */}
          <div className="h-10 flex items-center">
           <button
  onClick={() => (window.location.href = "/quiero-mi-tarjeta")}
  className="h-full w-auto hover:opacity-80 transition active:scale-95"
  type="button"
>
              <img
                src="/clean-page/header_container/empezar.png"
                alt="Obtener Tarjeta"
                className="h-full w-auto object-contain"
              />
            </button>
          </div>

          {/* RIGHT: Grouped Nav Assets + CTA + Logo */}
          <div className="flex items-center gap-4 h-12">
            <nav className="hidden md:flex items-center gap-4 h-full">
              {/* 1. ¿Qué es Lokki? */}
              <button
                type="button"
                onClick={() =>
                  document.getElementById("info1")?.scrollIntoView({ behavior: "smooth" })
                }
                className="h-8 flex items-center hover:opacity-70 transition"
              >
                <img
                  src="/clean-page/header_container/queeslokki.png"
                  className="h-full w-auto object-contain"
                  alt="Info"
                />
              </button>

              {/* 2. Encuentra un Distribuidor */}
<div className="relative inline-flex items-center h-8" ref={distributorMenuRef}>
  <button
    type="button"
    onClick={() => setDistributorMenuOpen((v) => !v)}
    className="h-8 flex items-center hover:opacity-70 transition active:scale-95"
    aria-haspopup="menu"
    aria-expanded={distributorMenuOpen}
  >
    <img
      src="/clean-page/header_container/Encuentra-un-distribuidor.png"
      className="h-9 w-auto object-contain block"
      alt="Encuentra un distribuidor"
    />
  </button>

  {distributorMenuOpen && (
    <div
      className="absolute left-1/2 -translate-x-[40%] top-[40px]
                 w-[220px] rounded-xl bg-white shadow-lg
                 border border-black/10 overflow-hidden z-[999]"
      role="menu"
    >
      <button
        type="button"
        onClick={() => {
          setDistributorMenuOpen(false);
          window.location.href = "/distribuidores/mapa";
        }}
        className="w-full px-3 py-2 hover:bg-black/5 transition
             flex items-center justify-start text-left"
  role="menuitem"
      >
        <img
          src="/clean-page/header_container/dropdown/Distribuidor/Mapa.png"
          className="h-9 w-auto object-contain block"
          alt="Ver mapa de puntos Lokki"
        />
      </button>

      <button
        type="button"
        onClick={() => {
          setDistributorMenuOpen(false);
          window.location.href = "/quiero-mi-tarjeta";
        }}
        className="w-full px-3 py-2 hover:bg-black/5 transition
             flex items-center justify-start text-left"
  role="menuitem"
      >
        <img
          src="/clean-page/header_container/dropdown/Distribuidor/tarjetaYA.png"
          className="h-9 w-auto object-contain block"
          alt="Conseguir una tarjeta"
        />
      </button>

      <button
        type="button"
        onClick={() => {
          setDistributorMenuOpen(false);
          window.location.href = "/distribuidores/quiero-ser-distribuidor";
        }}
         className="w-full px-3 py-2 hover:bg-black/5 transition
             flex items-center justify-start text-left"
  role="menuitem"
      >
        <img
          src="/clean-page/header_container/dropdown/Distribuidor/serdist.png"
          className="h-9 w-auto object-contain block"
          alt="¿Quieres ser un distribuidor?"
        />
      </button>
    </div>
  )}
</div>


              {/* 3. Casos de Éxito */}
              <button
                type="button"
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
                type="button"
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

            
            {/* LOGO */}
            <div className="h-8 flex items-center ml-2">
              <img
                src="/clean-page/header_container/lokki.png"
                className="h-full w-auto object-contain"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Carousel */}
      <UseCaseCarousel />

      {/* --- SECURE MODALS --- */}
      {modalType && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              type="button"
              onClick={() => setModalType(null)}
              className="absolute top-4 right-6 text-2xl text-gray-400 hover:text-black"
              aria-label="Cerrar"
            >
              ×
            </button>

            {modalType === "distributor" ? (
              <div>
                <h3 className="text-xl font-bold text-gray-900">Hablar con Ventas</h3>
                <p className="text-xs text-gray-500 mt-1 mb-4">
                  Agenda una cita para tu negocio.
                </p>
                <div className="space-y-3">
                  <input
                    placeholder="Nombre"
                    className="w-full bg-gray-50 border-none p-3 rounded-xl text-sm focus:ring-1 focus:ring-black outline-none"
                  />
                  <input
                    placeholder="WhatsApp"
                    className="w-full bg-gray-50 border-none p-3 rounded-xl text-sm focus:ring-1 focus:ring-black outline-none"
                  />
                  <button
                    type="button"
                    className="w-full bg-black text-white p-3 rounded-xl font-bold text-sm"
                  >
                    Enviar Solicitud
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-gray-900">Ingreso Seguro</h3>
                <p className="text-xs text-gray-500 mt-1 mb-4">
                  Conéctate con el Agente Maestro.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-50 border-none p-3 rounded-xl text-sm focus:ring-1 focus:ring-black outline-none"
                  />
                  <button
                    type="button"
                    className="w-full bg-black text-white p-3 rounded-xl font-bold text-sm"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* INFO 1 (add id so scroll works) */}
      <div id="info1" className="w-full flex justify-center">
        <Image
          src="/clean-page/info1.1.png"
          alt="Lokki info 1"
          width={1440}
          height={900}
          className="w-full max-w-[1440px] h-auto block -mt-px"
        />
      </div>

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
