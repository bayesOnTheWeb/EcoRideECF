"use client";

import React, { useState } from "react";
import Button from "../ui/button";
import Input from "../ui/input";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = { username, email, password, confirmPassword };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors([data.error || "Erreur inconnue"]);
      } else {
        setErrors([]);
        console.log("✅ Compte créé avec succès :", data.message);
        window.location.href = "/building";
      }
    } catch (err) {
      console.error("❌ Erreur serveur :", err);
      setErrors(["Erreur serveur, veuillez réessayer plus tard"]);
    }
  }

  return (
    <section className="flex flex-col h-screen items-center justify-center bg-lightBrunEcoRide">
      <h2 className="text-blackEcoRide text-2xl">INSCRIPTION</h2>

      {errors.length > 0 && (
        <ul className="bg-red-100 text-red-700 p-4 rounded mb-4">
          {errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
      )}

      <form
        className="flex flex-col w-1/5 rounded-2xl gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          label="Nom d'utilisateur : "
          id="username"
          placeholder="Saisissez votre nom d'utilisateur"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Adresse mail : "
          id="email"
          placeholder="Saisissez votre adresse mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Mot de passe : "
          id="password"
          placeholder="Saisissez votre mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Confirmation du mot de passe : "
          id="confirmPassword"
          placeholder="Confirmez votre mot de passe"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button label="S'inscrire" type="submit" style="mainButtonClassName" />
        <Button
          label="Recommencer la saisie"
          type="reset"
          style="secondButtonClassName"
        />
      </form>
    </section>
  );
};

export default RegisterForm;
