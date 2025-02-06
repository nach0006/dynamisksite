// select container where product details will be displayed
let productContainer = document.querySelector(".product_container");

// get product ID from URL query parameter
const myProduct = new URLSearchParams(window.location.search).get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${myProduct}`) // request to get data (product details) of selected product
  .then((response) => response.json()) // convert response to JSON
  .then((data) => {
    // display product details dynamically
    productContainer.innerHTML = `
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${myProduct}.webp" alt="${myProduct}">
            <div class="info ${data.soldout && "soldout"}">
                <h2 class="productName">${data.productdisplayname}</h2>
                <div class="variable_container">
                    <p class="${data.discount && "init_price"}">${data.price}kr</p>
                    <p class="not_visible ${data.discount && "new_price"}">${data.discount && Math.round(data.price * (1 - data.discount / 100)) + " kr"}</p>
                    <p class="not_visible ${data.discount && "discount"}">(${data.discount}%)</p>
                </div>
                <div class="variable_container">
                    <h3>Size</h3>
                    <div class="size-selector">
                        <button class="size">S</button>
                        <button class="size">M</button>
                        <button class="size">L</button>
                        <button class="size">XL</button>
                    </div>
                </div>
                <div class="variable_container">
                    <h3>Color</h3>
                        <p class="color">${data.basecolour}</p>
                </div>
                <div class="brand_container">
                    <h3>Brand</h3>
                    <p>${data.brandname}</p>
                </div>
                <div class="buy_button">
                    <button class="buy">Add to basket</button>
                </div>
                <p class="not_visible ${data.soldout && "soldout_text"}">soldout</p>
            </div>`;
  });
