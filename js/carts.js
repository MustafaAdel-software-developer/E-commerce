let productDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");

function drawCartProductsUI(allProducts = []) {
  if (JSON.parse(localStorage.getItem("ProductsInCart")).length == 0) {
    noProductsDom.innerHTML = "There is no products!!";
  }
  let products =
    JSON.parse(localStorage.getItem("ProductsInCart")) || allProducts;

  let productsUI = products.map((item) => {
    return `
      <div class="product-item">
              <img src="${item.img_url}" alt="glass-img" class="product-item-img" />

              <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>
                  ${item.desc}
                </p>
                <span>size: ${item.size}</span>
                <span>quantity: ${item.qty}</span>
              </div>

              <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
              </div>
          </div>

    `;
  });

  productDom.innerHTML = productsUI.join("");
}

drawCartProductsUI();

function removeItemFromCart(id) {
  let productsInCart = localStorage.getItem("ProductsInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);

    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("ProductsInCart", JSON.stringify(filteredItems));
    drawCartProductsUI(filteredItems);
  }
}
