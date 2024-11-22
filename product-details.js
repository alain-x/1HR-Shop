
      const productDetails = {

        
        1: {
          name: "Rugby Jersey",
          price: "RWF 79,000",
          description:
            "A premium rugby jersey for high performance and comfort, available in all sizes.",
          features: [
            "100% breathable fabric",
            "Durable stitching",
            "Available in S, M, L, XL",
          ],
          sizeOptions: ["S", "M", "L", "XL"],
          category: "Sportswear",
          images: [
            "https://placehold.co/500x500",
            "https://placehold.co/501x501",
            "https://placehold.co/502x502",
          ],
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
          document.getElementById(
            "product-category"
          ).textContent = `Category: ${product.category || "General"}`;

          const featuresList = document.getElementById("product-features");
          featuresList.innerHTML = "";
          product.features.forEach((feature) => {
            const li = document.createElement("li");
            li.textContent = feature;
            featuresList.appendChild(li);
          });

          const sizeOptions = document.getElementById("size-options");
          sizeOptions.innerHTML = "";
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
            sizeOptions.appendChild(button);
          });

          document.getElementById("main-image").src = product.images[0];
        } else {
          document.body.innerHTML =
            "<h1 class='text-center text-2xl mt-12'>Product not found</h1>";
        }
      }

      function changeMainImage(src) {
        document.getElementById("main-image").src = src;
      }

      document
        .getElementById("add-to-cart-btn")
        .addEventListener("click", () => {
          if (!selectedSize) {
            alert("Please select a size before adding to cart.");
            return;
          }

          const productId = 1; // Assume product ID is 1 for this demo
          const product = productDetails[productId];

          // Extract numeric price from product price (e.g., "RWF 79,000")
          const price = parseInt(
            product.price.replace("RWF", "").replace(",", "").trim()
          );

          // Add product to the cart with parsed price
          const cart = JSON.parse(localStorage.getItem("cart")) || [];
          cart.push({
            name: product.name,
            price, // Store numeric price
            selectedSize,
            image: product.images[0],
            quantity: 1,
          });
          localStorage.setItem("cart", JSON.stringify(cart));

          alert("Product added to cart successfully!");
          updateCartCount();
        });

      function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        document.getElementById("cart-count").textContent = cart.length;
      }

      // Update cart count when the page loads
      document.addEventListener("DOMContentLoaded", () => {
        loadProductDetails();
        updateCartCount(); // Update cart count on page load
      });
    