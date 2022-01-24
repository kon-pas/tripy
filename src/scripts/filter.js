import { searchSettings } from "../scripts/search.js";

export default function filter(data) {
  if (data === undefined) return data;
  console.log('lol');
  console.log(data, searchSettings);
  return data.filter(item => {
    const min = searchSettings.getBudzetMinimalny();
    if (min && item.price < min) {
      return false;
    }

    const max = searchSettings.getBudzetMaksymalny();
    if (max && item.price > max) {
      return false;
    }

    const location = (searchSettings.getMiejscowosc() || '').toLowerCase();
    if (location) {
      const locations = [];
      if (data.toCountry) {
        locations.push(data.toCountry)
      }
      if (data.fromCountry) {
        locations.push(data.toCountry)
      }
      if (data.region) {
        locations.push(data.toCountry)
      }

      if (!locations.includes(location)) {
        return false;
      }
    }

    return true;
  })
}