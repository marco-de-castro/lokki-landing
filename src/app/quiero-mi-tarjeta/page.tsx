"use client";

import React from "react";
import Link from "next/link";

export default function QuieroMiTarjetaPage() {
  return (
    <main className="min-h-screen bg-[#ddecc7] flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Quiero mi tarjeta ya</h1>
        <p className="mt-2 text-sm opacity-80">
          Vamos a recargar tu tarjeta sin registro. Primero elige tu ubicación.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button className="rounded-xl border border-black/10 bg-white/60 p-4 text-left hover:bg-white transition">
            <div className="font-medium">Estoy en Colombia</div>
            <div className="text-sm opacity-75 mt-1">Pago por Llave</div>
          </button>

          <button className="rounded-xl border border-black/10 bg-white/60 p-4 text-left hover:bg-white transition">
            <div className="font-medium">Estoy fuera de Colombia</div>
            <div className="text-sm opacity-75 mt-1">Pago con Binance</div>
          </button>
        </div>

        <div className="mt-6 flex gap-3">
          <Link className="rounded-xl border border-black/15 px-4 py-2 hover:bg-white" href="/">
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
