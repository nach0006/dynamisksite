let listContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`) // sender en GET-anmodning (forespørgsel til serveren)
  .then((response) => response.json()) // konverterer responsen til JSON (JavaScriipt objekt)
  .then((data) => showCategory(data)); //henter data

function showCategory(categories) {
  //bruger bestemt data (categories)
  console.log("mine data er: ", categories);
  let markup = categories
    .map(
      (category) =>
        //for each category... and copy a category´s html and change the data (in img - link to the images link!!!)
        `<a class="category grow" href="productlist.html?category=${category.category}">
                    <h3>${category.category}</h3>
                </a>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}

// URL
//opret et URLSearchParams-objekt og hent værdien af "color" (blue)
const myCategory = new URLSearchParams(window.location.search).get("category");

//viser "color: blue" i consolen
console.log("Category:", myCategory);

//viser værdien af farven som h2
document.querySelector("h3").textContent = `${myCategory}`;
