import noitemsTemplate from "../templates/noitems.hbs";
import itemTemplate from "../templates/item.hbs";
import itemsTemplate from "../templates/items.hbs";
import { alert } from "./notify";

export function renderTemplate(countries) {
  if (countries.length === 0) {
    return noitemsTemplate(countries);
  }
  if (countries.length === 1) {
    return itemTemplate(countries[0]);
  }
  if (countries.length > 10) {
    alert("Too many matches found. Please enter a more specific!");
    return "";
  }
  return itemsTemplate(countries);
}
