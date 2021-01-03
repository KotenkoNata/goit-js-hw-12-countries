import "./styles.css";

// import libs from "./js/libs.js";

import fetchObject from "./js/fetch.js";

import galleryRefs from "./js/refs.js";

const { form, searchBtn, gallery } = galleryRefs;

// console.log(form, searchBtn, gallery);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target.elements);
  //   console.log(e.target.elements.query);
  console.log(e.target.elements.qwery.value);
  const inputValue = e.target.elements.qwery.value;
  fetchObject.getFetch(inputValue, gallery);
});
