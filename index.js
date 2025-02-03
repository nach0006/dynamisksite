let listContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`) // sender en GET-anmodning (forespørgsel til serveren)
  .then((response) => response.json()) // konverterer responsen til JSON (JavaScriipt objekt)
  .then((data) => showList(data)); //henter data

function showList(categories) {
  //bruger bestemt data (categories)
  console.log(categories);
  let markup = categories
    .map(
      (category) =>
        //for each category... and copy a category´s html and change the data (in img - link to the images link!!!)
        `<a class="category grow" href="productlist.html">
                    <h3>${category.category}</h3>
                </a>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
