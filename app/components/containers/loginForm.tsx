"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../ui/button";
import Input from "../ui/input";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(""); // reset error
    const body = { email, password };

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Erreur lors de la connexion");
        return;
      }

      // Redirection côté client après création du cookie HTTP-only
      router.push("/profil");
    } catch (err) {
      setError("Impossible de se connecter, réessayez plus tard");
    }
  }

  return (
    <section className="flex bg-lightBrunEcoRide flex-col items-center justify-center h-screen">
      <h1 className="text-blackEcoRide mb-4">CONNEXION</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form className="flex flex-col p-4 gap-2" onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          label="Email"
          id="email"
          placeholder="entrez votre email"
          type="email"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          label="Password"
          id="password"
          placeholder="entrez votre mot de passe"
          type="password"
        />
        <Button
          label="Se connecter"
          type="submit"
          style="mainButtonClassName"
        />
      </form>
    </section>
  );
}
