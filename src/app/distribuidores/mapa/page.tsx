import React from "react";
import Link from "next/link";

export default function DistribuidoresMapaPage() {
  return (
    <main className="min-h-screen bg-[#ddecc7] flex justify-center px-4 py-10">
      <div className="w-full max-w-4xl rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Puntos Lokki</h1>
        <p className="mt-2 text-sm opacity-80">
          Here we’ll show a map of authorized distributors.
        </p>

        <div className="mt-6 rounded-2xl bg-white border border-black/10 overflow-hidden">
          {/* Temporary placeholder. Next step: embed Google My Maps / Mapbox / Leaflet */}
          <div className="h-[520px] flex items-center justify-center text-sm opacity-70">
            Map embed goes here
          </div>
        </div>

        <div className="mt-6">
          <Link className="underline text-sm" href="/">
            Back
          </Link>
        </div>
      </div>
    </main>
  );
}
