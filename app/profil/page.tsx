"use client";

import React from "react";
import Button from "../components/ui/button";


export default function ProfilePage() {

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-lightBrunEcoRide px-6">
      <div className="bg-whiteEcoRide rounded-2xl shadow-lg p-10 max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-darkBrunEcoRide mb-4">
          Profil de Steevn
        </h1>
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 bg-darkBrunEcoRide rounded-full mb-4 flex items-center justify-center text-whiteEcoRide text-2xl">
            S
          </div>
          <p className="text-lg text-blackEcoRide">steevn@example.com</p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="bg-darkBrunEcoRide text-whiteEcoRide font-bold py-2 px-6 rounded-xl shadow-md hover:bg-blackEcoRide transition-colors">
            Éditer le profil
          </button>
          <Button label={"retour à la page d'acceuil"} type={"button"} style={"mainButtonClassName"} redirect="/" />
        </div>
      </div>
    </main>
  );
}
