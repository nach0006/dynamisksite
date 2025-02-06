// Burger menu functionality
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");
const productsLink = document.getElementById("products-link");
const menuItem = document.querySelector(".menu-item");

// Toggle burger menu
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
  burger.classList.toggle("active");
});

// Toggle dropdown menu on "Products" link click
productsLink.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior (no page reload)
  menuItem.classList.toggle("active"); // Toggle the 'active' class for the menu item
});

// Close dropdown if clicking outside
document.addEventListener("click", (event) => {
  // Check if the clicked element is inside the menu or burger
  if (!menuItem.contains(event.target) && !burger.contains(event.target)) {
    // Close the dropdown by removing the 'active' class
    menuItem.classList.remove("active");
  }
});
