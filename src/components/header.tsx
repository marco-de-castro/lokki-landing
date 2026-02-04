"use client";

import React, { useEffect, useRef, useState } from "react";

type HeaderProps = {
  bgClassName?: string; // optional override later
};

export default function Header({ bgClassName = "bg-[#ddecc7]" }: HeaderProps) {
  const [distributorMenuOpen, setDistributorMenuOpen] = useState(false);
  const distributorMenuRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!distributorMenuRef.current) return;
      if (!distributorMenuRef.current.contains(e.target as Node)) {
        setDistributorMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <header
      className={`w-full flex justify-center sticky top-0 z-50 border-b border-black/5 shadow-sm ${bgClassName}`}
    >
      <div className="w-full max-w-[1440px] flex items-center justify-between px-6 py-2">
        {/* LEFT: Empezar */}
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

        {/* RIGHT: Nav + Logo */}
        <div className="flex items-center gap-4 h-12">
          <nav className="hidden md:flex items-center gap-4 h-full">
            {/* ¿Qué es Lokki? */}
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("info1")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-8 flex items-center hover:opacity-70 transition"
            >
              <img
                src="/clean-page/header_container/queeslokki.png"
                className="h-full w-auto object-contain"
                alt="Info"
              />
            </button>

            {/* Encuentra un Distribuidor */}
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
                    className="w-full px-3 py-2 hover:bg-black/5 transition flex items-center justify-start text-left"
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
                    className="w-full px-3 py-2 hover:bg-black/5 transition flex items-center justify-start text-left"
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
                    className="w-full px-3 py-2 hover:bg-black/5 transition flex items-center justify-start text-left"
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

            {/* Casos de Éxito */}
            <button
              type="button"
              onClick={() => {
                // TODO: wire modal later
              }}
              className="h-8 flex items-center hover:opacity-70 transition"
            >
              <img
                src="/clean-page/header_container/Casos-De-Exito.png"
                className="h-full w-auto object-contain"
                alt="Casos"
              />
            </button>

            {/* Soporte */}
            <button
              type="button"
              onClick={() => {
                // TODO: wire modal later
              }}
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
  );
}
