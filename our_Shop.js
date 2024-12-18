const products = [
  {
    id: 1,
    name: "Sport Jacket",
    category: "Clothing",
    price: 30000,
    image: "./img/jacket.jpeg",
  },
  {
    id: 2,
    name: "Shorts",
    category: "Clothing",
    price: 45000,
    image: "./img/pent.jpeg",
  },
  {
    id: 3,
    name: "T-Shirt",
    category: "Clothing",
    price: 5000,
    image: "./img/tshet.jpeg",
  },
  {
    id: 4,
    name: "Bottle",
    category: "Equipment",
    price: 69000,
    image: "./img/bottle.jpg",
  },
  {
    id: 5,
    name: "1HR Hats",
    category: "Clothing",
    price: 2000,
    image: "./img/zphats.jpg",
  },
  {
    id: 6,
    name: "1HR Mask",
    category: "Clothing",
    price: 2000,
    image: "./img/mask.jpeg",
  },
  {
    id: 7,
    name: "Cup 1HR",
    category: "Clothing",
    price: 2000,
    image: "./img/zpcup.jpg",
  },
  {
    id: 8,
    name: "Sport Pants",
    category: "Clothing",
    price: 25000,
    image: "./img/zplpent1.jpg",
  },
  {
    id: 9,
    name: "Cups 1HR",
    category: "Equipment",
    price: 2000,
    image: "./img/zpcups.jpg",
  },
  {
    id: 10,
    name: "Sport Jacket",
    category: "Clothing",
    price: 2000,
    image: "./img/jacket1.jpeg",
  },
];

// Render products dynamically
function renderProducts(filteredProducts) {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = ""; // Clear the container
  filteredProducts.forEach((product) => {
    const productHTML = `
          <div class="bg-white   rounded shadow hover:shadow-lg transition">
            <a href="product-details.html?id=${product.id}">
              <img src="${product.image}" alt="${
      product.name
    }" class="w-full h-80 object-cover rounded">
              <h3 class="mt-4 text-xl font-bold">${product.name}</h3>
              <p class="mt-2 text-gray-600">RWF ${product.price.toLocaleString()}</p>
            </a>
          </div>
        `;
    productsContainer.innerHTML += productHTML;
  });
}

// Filter products based on category
function filterByCategory() {
  const category = document.getElementById("category-select").value;
  const query = document.getElementById("search-input").value.toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesQuery =
      product.name.toLowerCase().includes(query) ||
      product.id.toString().includes(query);
    return matchesCategory && matchesQuery;
  });

  renderProducts(filteredProducts);
}

// Update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").textContent = cart.length;
}

// Initialize page
window.onload = () => {
  updateCartCount();
  renderProducts(products); // Render all products initially
};
// Mobile Menu Toggle Functionality
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
