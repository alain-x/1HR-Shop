const productDetails = {
  1: {
    name: "Sport Jacket",
    price: "RWF 30,000",
    description:
      "High-performance Sport Jacket, perfect for all weather conditions.",
    category: "Clothing",
    features: [
      "100% breathable fabric",
      "Durable stitching",
      "Lightweight design",
    ],
    sizeOptions: ["S", "M", "L", "XL"],
    images: ["./img/jacket.jpeg", "./img/jacket1.jpeg"],
  },
  2: {
    name: "Shorts",
    price: "RWF 45,000",
    description:
      "Premium Shorts designed for ultimate comfort and flexibility.",
    category: "Clothing",
    features: ["Lightweight", "Moisture-wicking material", "Elastic waistband"],
    sizeOptions: ["S", "M", "L", "XL"],
    images: [
      "./img/pent.jpeg",
      "https://placehold.co/501x501",
      "https://placehold.co/501x501",
    ],
  },
  3: {
    name: "T-Shirt",
    price: "RWF 5,000",
    description: "Comfortable T-Shirt suitable for casual wear and sports.",
    category: "Clothing",
    features: ["Soft cotton fabric", "Breathable material", "Stylish fit"],
    sizeOptions: ["S", "M", "L"],
    images: ["./img/tshet.jpeg", "./img/tshirt1.jpeg"],
  },
  4: {
    name: "Bottle",
    price: "RWF 69,000",
    description:
      "Durable and eco-friendly water bottle for hydration on the go.",
    category: "Equipment",
    features: ["BPA-free", "Lightweight and portable", "Leak-proof lid"],
    sizeOptions: [],
    images: [
      "./img/bottle.jpg",
      "https://placehold.co/501x501",
      "https://placehold.co/501x501",
    ],
  },
  5: {
    name: "1HR Hats",
    price: "RWF 2,000",
    description: "Stylish and comfortable 1HR branded hats.",
    category: "Clothing",
    features: [
      "Adjustable fit",
      "High-quality fabric",
      "Available in multiple colors",
    ],
    sizeOptions: ["One size fits all"],
    images: [
      "./img/zphats.jpg",
      "https://placehold.co/501x501",
      "https://placehold.co/501x501",
    ],
  },
  6: {
    name: "1HR Mask",
    price: "RWF 2,000",
    description: "Reusable face mask with 1HR branding for style and safety.",
    category: "Clothing",
    features: [
      "Washable and reusable",
      "Comfortable ear loops",
      "Stylish design",
    ],
    sizeOptions: ["One size fits all"],
    images: [
      "./img/mask.jpeg",
      "https://placehold.co/501x501",
      "https://placehold.co/501x501",
    ],
  },
  7: {
    name: "Cup 1HR",
    price: "RWF 2,000",
    description:
      "Classic cup with 1HR branding, perfect for your favorite beverages.",
    category: "Equipment",
    features: ["Dishwasher safe", "High-quality ceramic", "Microwave friendly"],
    sizeOptions: [],
    images: [
      "./img/zpcup.jpg",
      "https://placehold.co/501x501",
      "https://placehold.co/501x501",
    ],
  },
  8: {
    name: "Sport Pants",
    price: "RWF 25,000",
    description: "Comfortable and durable sport pants for active lifestyles.",
    category: "Clothing",
    features: ["Stretchable fabric", "Moisture-wicking", "Stylish design"],
    sizeOptions: ["S", "M", "L", "XL"],
    images: [
      "./img/zplpent1.jpg",
      "https://placehold.co/501x501",
      "https://placehold.co/501x501",
    ],
  },
  9: {
    name: "Cups 1HR (Set)",
    price: "RWF 2,000",
    description: "Set of cups with 1HR branding, perfect for gatherings.",
    category: "Equipment",
    features: ["Dishwasher safe", "Durable material", "Stylish design"],
    sizeOptions: [],
    images: [
      "./img/zpcups.jpg",
      "https://placehold.co/501x501",
      "https://placehold.co/501x501",
    ],
  },
  10: {
    name: "Sport Jacket - Winter",
    price: "RWF 20,000",
    description: "Heavy-duty sport jacket for cold weather.",
    category: "Clothing",
    features: ["Thermal insulation", "Water-resistant", "Stylish and durable"],
    sizeOptions: ["M", "L", "XL"],
    images: ["./img/jacket1.jpeg", "./img/jacket2.jpeg"],
  },
};

let selectedSize = null;

function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId && productDetails[productId]) {
    const product = productDetails[productId];

    document.getElementById("product-name").textContent = product.name;
    document.getElementById(
      "product-price"
    ).textContent = `Price: ${product.price}`;
    document.getElementById("product-description").textContent =
      product.description;
    document.getElementById("product-category").textContent = `Category: ${
      product.category || "General"
    }`;

    // Populate features
    const featuresList = document.getElementById("product-features");
    featuresList.innerHTML = "";
    product.features.forEach((feature) => {
      const li = document.createElement("li");
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    // Populate size options
    const sizeOptionsContainer = document.getElementById("size-options");
    const sizeContainer = document.getElementById("size-container");

    if (product.sizeOptions && product.sizeOptions.length > 0) {
      sizeContainer.style.display = "block"; // Show size container
      sizeOptionsContainer.innerHTML = ""; // Clear previous options
      product.sizeOptions.forEach((size) => {
        const button = document.createElement("button");
        button.textContent = size;
        button.classList.add(
          "border",
          "px-4",
          "py-2",
          "rounded",
          "hover:bg-gray-200"
        );
        button.addEventListener("click", () => {
          document
            .querySelectorAll("#size-options button")
            .forEach((btn) =>
              btn.classList.remove("bg-green-500", "text-white")
            );
          button.classList.add("bg-green-500", "text-white");
          selectedSize = size;
        });
        sizeOptionsContainer.appendChild(button);
      });
    } else {
      sizeContainer.style.display = "none"; // Hide size container
    }

    // Set main image
    document.getElementById("main-image").src = product.images[0];

    // Populate image thumbnails
    const thumbnailsContainer = document
      .getElementById("product-images")
      .querySelector(".flex");
    thumbnailsContainer.innerHTML = "";
    product.images.forEach((image) => {
      const img = document.createElement("img");
      img.src = image;
      img.alt = `Product image`;
      img.classList.add(
        "w-20",
        "h-20",
        "rounded",
        "cursor-pointer",
        "hover:opacity-75",
        "transition"
      );
      img.addEventListener("click", () => changeMainImage(image));
      thumbnailsContainer.appendChild(img);
    });
  } else {
    document.body.innerHTML = `
      <h1 class="text-center text-2xl mt-12">Product not found</h1>`;
  }
}

function changeMainImage(src) {
  document.getElementById("main-image").src = src;
}

document.getElementById("add-to-cart-btn").addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (!productId || !productDetails[productId]) {
    alert("Invalid product.");
    return;
  }

  const product = productDetails[productId];

  if (product.sizeOptions && product.sizeOptions.length > 0 && !selectedSize) {
    alert("Please select a size before adding to cart.");
    return;
  }

  const price = parseInt(
    product.price.replace("RWF", "").replace(",", "").trim()
  );

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItemIndex = cart.findIndex(
    (item) => item.name === product.name && item.selectedSize === selectedSize
  );

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity++;
  } else {
    cart.push({
      name: product.name,
      price,
      selectedSize,
      image: product.images[0],
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart successfully!");
  updateCartCount();
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}

document.addEventListener("DOMContentLoaded", () => {
  loadProductDetails();
  updateCartCount();
});
