
export async function fetchRates(base: string = "VND") {
  const res = await fetch(`https://api.exchangerate.host/latest?base=${base}`);
  if (!res.ok) throw new Error("Impossible de récupérer les taux");
  const data = await res.json();
  console.log(data)
  return data.rates; // objet { USD: ..., EUR: ..., VND: ... }
}