document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      id: 1,
      name: "Sport Jacket",
      price: "RWF 30,000",
      image: "./img/jacket.jpeg",
    },
    {
      id: 2,
      name: "Shorts",
      price: "RWF 45,000",
      image: "./img/pent.jpeg",
    },
    {
      id: 3,
      name: "T-Shirt",
      price: "RWF 5,000",
      image: "./img/tshet.jpeg",
    },
    {
      id: 4,
      name: "Bottle",
      price: "RWF 30,000",
      image: "./img/bottle.jpg",
    },
  ];

  const productContainer = document.getElementById("products-container");

  productContainer.innerHTML = products
    .map(
      (product) => `
              <div class="bg-white  rounded shadow hover:shadow-lg transition">
                <a href="product-details.html?id=${product.id}" class="block">
                  <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="w-full h-80 object-cover rounded"
                  />
                  <h4 class="text-xl font-semibold mb-2">${product.name}</h4>
                  <p class="text-gray-600 mb-4">Price: ${product.price}</p>
                </a>
              </div>
            `
    )
    .join("");

  updateCartCount();
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length > 0 ? cart.length : "0";
}

// Mobile Menu Toggle Functionality
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
