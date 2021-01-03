import template from "../templates/item.hbs";

export default {
  query: "moon",
  page: 1,
  perPage: 4,
  baseUrl: `https://api.pexels.com/v1`,

  get queryValue() {
    return this.query;
  },
  set queryValue(val) {
    return (this.query = val);
  },

  getFetch(val, place) {
    let key = "563492ad6f91700001000001a01ff61bf7c74a93994f8329d42fbd08";
    this.queryValue = val;
    let params = `/search?query=${this.query}`;
    let url = this.baseUrl + params;
    let options = {
      method: "GET",
      headers: {
        Authorization: key,
      },
    };
    return fetch(url, options)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data.photos;
      })
      .then((result) => {
        console.log(result);
        const items = template(result);
        place.insertAdjacentHTML("afterbegin", items);
      });
  },
};
