'use client';

import Image from 'next/image'
import { useState } from "react";

export default function Page() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function HandleSubmit(e) {
    e.preventDefault();

    const data = { username, email, password };

    const res = await fetch("/api/register/", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (res.ok) {
      alert("Inscription réussie");
      setUserName('');
      setEmail('');
      setPassword('');
    } else {
      alert("Échec de l'inscription");
    }

    console.log(json);
  }

  const inputStyle = "bg-white text-black py-3 px-6 "

  return (
    <>
      <div className='  flex bg-gray-50 align-center p-4'>
      <Image
      src="/EcoRide_logo.svg"
      alt="logo du site"
      width={128}
      height={80}
      priority
      />
    </div>

    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      
      <form onSubmit={HandleSubmit} className="flex flex-col gap-4 w-full max-w-md p-6 bg-green-50 shadow-md rounded-lg">
        <label className="text-black" htmlFor="username">Nom d'utilisateur</label>
        <input
          className={inputStyle}
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Votre nom d'utilisateur"
          id="username"
          required
        />

        <label className="text-black" htmlFor="email">Adresse email</label>
        <input
          className={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="ex: utilisateur@mail.com"
          id="email"
          required
        />

        <label className="text-black" htmlFor="password">Mot de passe</label>
        <input
          className={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Mot de passe sécurisé"
          id="password"
          required
        />

        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          s'inscrire
        </button>
      </form>
    </div>
    </>
  );
}



