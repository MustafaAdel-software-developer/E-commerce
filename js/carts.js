let productsInCart = localStorage.getItem("ProductsInCart");
let productDom = document.querySelector(".products");

if (productsInCart) {
  let items = JSON.parse(productsInCart);
  drawCartProductsUI(items);
}

function drawCartProductsUI(Products) {
  let productsUI = Products.map((item) => {
    return `
      <div class="product-item">
              <img src="${item.img_url}" alt="glass-img" class="product-item-img" />

              <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, quam.
                </p>
                <span>${item.size}</span>
              </div>

              <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeFromCart(${item.id})">Remove From Cart</button>
              </div>
          </div>

    `;
  });

  productDom.innerHTML = productsUI;
}
