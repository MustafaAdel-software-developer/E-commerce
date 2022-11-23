let productDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");

function drawFavoritesProductsUI(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsFavorite")).length == 0) {
    noProductsDom.innerHTML = "There is no products!!";
  }
  let products =
    JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;

  let productsUI = products.map((item) => {
    return `
      <div class="product-item">
              <img src="${item.img_url}" alt="glass-img" class="product-item-img" />

              <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, quam.
                </p>
                <span>size: ${item.size}</span>
                <span>quantity: ${item.qty}</span>
              </div>

              <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})" >Remove From Favorite</button>
              </div>
          </div>

    `;
  });

  productDom.innerHTML = productsUI.join("");
}

drawFavoritesProductsUI();

function removeItemFromCart(id) {
  let productsFavorite = localStorage.getItem("productsFavorite");
  if (productsFavorite) {
    let items = JSON.parse(productsFavorite);

    let filteredItems = items.filter((item) => item.id !== id);
    localStorage.setItem("productsFavorite", JSON.stringify(filteredItems));
    drawFavoritesProductsUI(filteredItems);
  }
}
