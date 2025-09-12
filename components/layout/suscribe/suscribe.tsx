"use client"

import React, { useState } from "react";

/**
 * Suscribe Component
 *
 * @component
 * @description
 * Ce composant affiche une section d’inscription par email.
 * - L’utilisateur peut entrer son email.
 * - Cliquer sur "Suscribe new" simule un envoi.
 * - Un loader s’affiche pendant la simulation d’envoi.
 * - Après un délai, un message de confirmation apparaît.
 */

export default function Suscribe() {
  const [email, setEmail] = useState("");     // 👈 vide par défaut
  const [loading, setLoading] = useState(false); 
  const [success, setSuccess] = useState(false); 

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return; // 👈 vérifie que ce n’est pas vide

    setLoading(true);

    // ⏳ Simule un appel API
    setTimeout(() => {
      setLoading(false);
      setSuccess(true); // ✅ succès
    }, 2000);
  };

  return (
    <div className="bg-[#003459] rounded-3xl flex flex-col md:flex-row md:justify-between justify-center items-center p-4 gap-4">
      <div className="text-white text-xl font-bold text-center md:text-left">
        <h2>Register now so you don&apos;t miss our programs</h2>
      </div>

      <div className="flex items-center md:w-1/2 gap-2 p-2 w-full rounded-xl bg-[#fff7e9]">
        {success ? (
          <p className="text-[#003459] font-bold text-lg p-4">
            ✅ Votre email est bien enregistré, vérifiez votre boîte email pour confirmer
          </p>
        ) : (
          <form 
            className="flex md:flex-row flex-col w-full justify-center items-center gap-2"
            onSubmit={handleSubscribe}
          >
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 outline-none rounded-full w-full"
            />

            <button
              className="bg-[#003459] text-white p-2 rounded-full cursor-pointer w-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "⏳ Envoi..." : "Subscribe new"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}