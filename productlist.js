const myCategory = new URLSearchParams(window.location.search).get("category");
console.log("productlist loads... with category", myCategory);

let listContainer = document.querySelector(".product_list_container"); //main with class .productContainer without anything in
const overskrift = document.querySelector("h2");

overskrift.innerHTML = myCategory; //udskrive category´s name

fetch(`https://kea-alt-del.dk/t7/api/products/?category=${myCategory}`) // sender en GET-anmodning (forespørgsel til serveren)
  .then((response) => response.json()) // konverterer responsen til JSON (JavaScriipt objekt)
  .then((data) => showList(data)); //henter data

function showList(products) {
  //bruger bestemt data (products)
  console.log(products);
  let markup = products
    .map(
      (product) =>
        //for each product... and copy a product´s html and change the data (in img - link to the images link!!!)
        `<a class="product" href="products.html">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.id}"> 
                        <h3>${product.productdisplayname}</h3>
                        <p>${product.price}kr</p>
                    </a>`
    )
    .join("");
  console.log("markup er nu ", markup);
  listContainer.innerHTML = markup;
}
