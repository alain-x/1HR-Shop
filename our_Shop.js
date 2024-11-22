const products = [
  {
    id: 1,
    name: "1HR Jersey",
    category: "Clothing",
    price: 79000,
    image: "https://placehold.co/500x500",
  },
  {
    id: 2,
    name: "Cap",
    category: "Accessories",
    price: 29000,
    image: "https://placehold.co/500x500",
  },
  {
    id: 3,
    name: "1HR T-Shirt",
    category: "Clothing",
    price: 49000,
    image: "https://placehold.co/500x500",
  },
  {
    id: 4,
    name: "1HR Hoodie",
    category: "Clothing",
    price: 69000,
    image: "https://placehold.co/500x500",
  },
  {
    id: 5,
    name: "Mug",
    category: "Merchandise",
    price: 19999,
    image: "https://placehold.co/500x500",
  },
];

// Render products dynamically
function renderProducts(filteredProducts) {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = ""; // Clear the container
  filteredProducts.forEach((product) => {
    const productHTML = `
          <div class="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <a href="product-details.html?id=${product.id}">
              <img src="${product.image}" alt="${
      product.name
    }" class="w-full h-48 object-cover rounded">
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
