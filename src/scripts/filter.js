import { searchSettings } from "./search.js";

export default function filter(data) {
  if (data === undefined) return data;

  const priceMin = searchSettings.getBudzetMinimalny() / searchSettings.getLiczbaOsob();
  const priceMax = searchSettings.getBudzetMaksymalny() / searchSettings.getLiczbaOsob();
  const name = searchSettings.getMiejscowosc();
  const from = searchSettings.getWylot();
  const upto = searchSettings.getPowrot();
  
  // let arr = data.filter(e => e.fromCountry.includes(name));
  return data;
}