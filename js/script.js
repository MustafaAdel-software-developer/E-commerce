// Define Products
let productDom = document.querySelector(".products");
let cartProducts = document.querySelector(".carts-products");
let cartProductsDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let badgeList = document.querySelector(".badge-list");

let Products = [
  {
    id: 1,
    title: "glass",
    size: "large",
    img_url: "img/glass.PNG",
  },
  {
    id: 2,
    title: "watch",
    size: "large",
    img_url: "img/watch.webp",
  },
  {
    id: 3,
    title: "laptop",
    size: "large",
    img_url: "img/laptop.jpg",
  },
  {
    id: 4,
    title: "headphones",
    size: "large",
    img_url: "img/headphones.webp",
  },
];

badgeList.addEventListener("click", openCartMenu);

function drawProductsUI() {
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
                <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
                <i class="fa-regular fa-heart"></i>
              </div>
          </div>

    `;
  });

  productDom.innerHTML = productsUI;
}

drawProductsUI();

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

function addToCart(id) {
  if (localStorage.getItem("username")) {
    let clickedItem = Products.find((item) => item.id === id);
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

function openCartMenu() {
  if (cartProductsDom.innerHTML != "") {
    if (cartProducts.style.display == "block") {
      cartProducts.style.display = "none";
    } else {
      cartProducts.style.display = "block";
    }
  }
}
