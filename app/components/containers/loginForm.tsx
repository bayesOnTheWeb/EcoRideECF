"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../ui/input";
import Button from "../ui/button";
import { encrypt } from "@/app/lib/session";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Appel à ton endpoint API pour authentifier l'utilisateur
      const user = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }).then((res) => res.json());

      if (!user?.id) {
        setError("Email ou mot de passe incorrect");
        return;
      }

      // Création du JWT session
      const token = await encrypt({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      // Stockage du token (ici localStorage, tu peux aussi utiliser cookie)
      localStorage.setItem("sessionToken", token);

      // Redirection vers la page profil
      router.push("/profile");
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
      setError("Erreur serveur, veuillez réessayer");
    }
  };

  return (
    <section className="flex flex-col items-center h-screen bg-lightBrunEcoRide justify-center">
      <h2 className="text-blackEcoRide text-2xl mb-6">Connexion</h2>
      <form
        className="flex flex-col gap-4 rounded-2xl p-6 bg-white shadow-md"
        onSubmit={handleSubmit}
      >
        <Input
          id="email"
          name="email"
          label="Adresse mail :"
          type="email"
          placeholder="saisissez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          name="password"
          label="Mot de passe :"
          type="password"
          placeholder="saisissez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button
          type="submit"
          label="Se connecter"
          style="mainButtonClassName"
        />
        <Button
          type="reset"
          label="Supprimer la saisie"
          style="secondButtonClassName"
        />
      </form>
    </section>
  );
}
