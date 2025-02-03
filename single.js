let productContainer = document.querySelector(".product_container"); //main with class .productContainer without anything in

const myProduct = new URLSearchParams(window.location.search).get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${myProduct}`) // Sender en GET-anmodning (forespørgsel til serveren)
  .then((response) => response.json()) // Konverterer responsen til JSON (JavaScriipt objekt)
  .then((data) => {
    //Udskriver dataen
    productContainer.innerHTML = `
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${myProduct}.webp" alt="${myProduct}">
            <div class="info">
                <h2 class="productName">${data.productdisplayname}</h2>
                <div class="variable_container">
                    <p class="price">${data.price}kr</p>
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
            </div>`;
  });
