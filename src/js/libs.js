import { createClient } from "pexels";
import refs from "./refs.js";
import template from "../templates/item.hbs";
let key = "563492ad6f91700001000001a01ff61bf7c74a93994f8329d42fbd08";
const client = createClient(key);

console.log(`ответ от клиента`, client);

// refs.gallery.append(img);

// client.photos.random().then((obj) => {
//   console.log(obj);
//   img.src = obj.src.original;
// });

let query = "moon";
//отрисовка руками
// client.photos.search({ query, per_page: 10 }).then((result) => {
//   console.log(result.photos);
//   const images = result.photos.map((el) => {
//     const img = document.createElement("img");
//     img.width = "300";
//     img.src = el.src.original;
//     return img;
//   });
//   console.log(images);
//   return images;
// });
// .then((images) => {
//   refs.gallery.append(...images);
//   return refs.gallery;
// });

// client.photos.search({ query, per_page: 10 }).then((result) => {
//   console.log(result.photos);
//   const items = template(result.photos);
//   refs.gallery.insertAdjacentHTML("afterbegin", items);
// });
