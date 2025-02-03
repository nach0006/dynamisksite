const myCategory = new URLSearchParams(window.location.search).get("category"); // get category value from URL parameters
console.log("productlist loads... with category", myCategory);

let listContainer = document.querySelector(".product_list_container"); //select container where products will be displayed (html container without info inside)
const overskrift = document.querySelector("h2");

overskrift.innerHTML = myCategory; //display category name

fetch(`https://kea-alt-del.dk/t7/api/products/?category=${myCategory}`) // request to get data (all products) in selected category
  .then((response) => response.json()) // convert response to JSON (JS object)
  .then((data) => showList(data)); //downloads data - call function to display products

//
function showList(products) {
  console.log(products);
  // create HTML for each product
  let markup = products
    .map(
      (product) =>
        //add copy a product´s html and change the data to dynamisk: product.(what u want to fetch)
        `<a class="product" href="products.html?id=${product.id}">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.id}"> 
                        <h3>${product.productdisplayname}</h3>
                        <p>${product.price}kr</p>
                    </a>`
    )
    .join(""); // join array elements into a single string
  console.log("markup er nu ", markup);
  listContainer.innerHTML = markup; // insert products into container
}
