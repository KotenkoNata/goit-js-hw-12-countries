import "./styles.css";

// import libs from "./js/libs.js";

import fetchObject from "./js/fetchCountries.js";

import galleryRefs from "./js/refs";
import debounce from "lodash.debounce";

const { input, searchBtn, gallery } = galleryRefs;

// console.log(form, searchBtn, gallery);

var debouncedFunction = debounce(
  (inputValue) => {
    fetchObject.fetchCountries(inputValue, gallery);
  },
  500,
  {}
);

input.addEventListener("input", (e) => {
  e.preventDefault();
  let value = e.target.value;
  debouncedFunction(value);
});
