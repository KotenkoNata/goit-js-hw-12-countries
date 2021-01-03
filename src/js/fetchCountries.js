import { renderTemplate } from "./templates";

export default {
  fetchCountries(name, place) {
    if (!name || name.length === 0) {
      place.innerHTML = "";
      return emptyPromise();
    }

    let url = `https://restcountries.eu/rest/v2/name/${name}`;

    let options = {
      method: "GET",
    };

    return fetch(url, options)
      .then((response) => {
        if (response.status != 200) {
          return [];
        }
        return response.json();
      })
      .then((countries) => {
        const items = renderTemplate(countries);
        place.innerHTML = items;
      });
  },
};

function emptyPromise() {
  return new Promise(function (resolve, reject) {
    resolve([]);
  });
}
