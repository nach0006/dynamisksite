let listContainer = document.querySelector(".product_list_container"); //main with class .productContainer without anything in

fetch(`https://kea-alt-del.dk/t7/api/products/`) // sender en GET-anmodning (forespørgsel til serveren)
  .then((response) => response.json()) // konverterer responsen til JSON (JavaScriipt objekt)
  .then((data) => showList(data)); //henter data

function showList(products) {
  //bruger bestemt data (products)
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      //for each product... and copy a product´s html and change the data (in img - link to the images link!!!)
      markup += `<a class="product" href="products.html">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.id}"> 
                        <h3>${product.productdisplayname}</h3>
                        <p>${product.price}kr</p>
                    </a>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
