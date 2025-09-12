export async function fetchRates(base: string = "EUR") {
  const res = await fetch(`https://api.frankfurter.app/latest?base=${base}`);
  if (!res.ok) throw new Error("Impossible de récupérer les taux");

  const data = await res.json();
  console.log(data);

  // Ajoute VND manuellement (fixé) si besoin
  return {
    ...data.rates,
    VND: 27000, // taux fictif pour l'exemple
  };
}