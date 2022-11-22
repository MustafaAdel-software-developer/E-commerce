// Define Products
let productDom = document.querySelector(".products");
let cartProducts = document.querySelector(".carts-products");
let cartProductsDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let badgeList = document.querySelector(".badge-list");

//open cart menu
badgeList.addEventListener("click", openCartMenu);

//display products
(function drawProductsUI() {
  let productsUI = products.map((item) => {
    return `
      <div class="product-item">
              <img src="${item.img_url}" alt="glass-img" class="product-item-img" />

              <div class="product-item-desc">
                <a onclick="saveItemData(${item.id})">${item.title}</a>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, quam.
                </p>
                <span>${item.size}</span>
              </div>

              <div class="product-item-actions">
                <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
                <i class="fa-regular fa-heart"></i>
              </div>
          </div>

    `;
  });

  productDom.innerHTML = productsUI;
})();

//check if there is items in localStorage

let addedItem = localStorage.getItem("ProductsInCart")
  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];

if (addedItem) {
  addedItem.map((item) => {
    cartProductsDom.innerHTML += `<p>${item.title}</p>`;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addedItem.length;
}

//Add to cart
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let clickedItem = products.find((item) => item.id === id);
    cartProductsDom.innerHTML += `<p>${clickedItem.title}</p>`;

    addedItem = [...addedItem, clickedItem];
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
    let cartProductLen = document.querySelectorAll(".carts-products div p");
    console.log(cartProductLen);

    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductLen.length;
  } else {
    window.location = "login.html";
  }
}

//open cart menu
function openCartMenu() {
  if (cartProductsDom.innerHTML != "") {
    if (cartProducts.style.display == "block") {
      cartProducts.style.display = "none";
    } else {
      cartProducts.style.display = "block";
    }
  }
}

function saveItemData(id) {
  localStorage.setItem("productID", id);
  window.location = "cartDetails.html";
}
