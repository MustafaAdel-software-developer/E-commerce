// Define Products
let productDom = document.querySelector(".products");
let cartProducts = document.querySelector(".carts-products");
let cartProductsDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let badgeList = document.querySelector(".badge-list");
let products = JSON.parse(localStorage.getItem("products"));
let input = document.getElementById("search");

//open cart menu
badgeList.addEventListener("click", openCartMenu);

//display products
let drawProductsUI;
(drawProductsUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
      <div class="product-item">
              <img src="${
                item.img_url
              }" alt="glass-img" class="product-item-img" />

              <div class="product-item-desc">
                <a onclick="saveItemData(${item.id})">${item.title}</a>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, quam.
                </p>
                <span>${item.size}</span>
              </div>

              <div class="product-item-actions">
                <button class="add-to-cart" onclick="addToCart(${
                  item.id
                })">Add To Cart</button>
                <i class="fa-regular fa-heart" style="color:${
                  item.liked == true ? "red" : ""
                }" onclick="addToFavorite(${item.id})"></i>
              </div>
          </div>

    `;
  });

  productDom.innerHTML = productsUI;
})(JSON.parse(localStorage.getItem("products")));

//check if there is items in localStorage

let addedItem = localStorage.getItem("ProductsInCart")
  ? JSON.parse(localStorage.getItem("ProductsInCart"))
  : [];

if (addedItem) {
  addedItem.map((item) => {
    cartProductsDom.innerHTML += `<p>${item.title}:${item.qty}</p>`;
  });
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addedItem.length;
}

//Add to cart
let allItems = [];
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let clickedItem = products.find((item) => item.id === id);
    let item = allItems.find((i) => i.id === clickedItem.id);

    if (item) {
      clickedItem.qty += 1;
    } else {
      allItems.push(clickedItem);
    }

    cartProductsDom.innerHTML = "";
    allItems.forEach((item) => {
      cartProductsDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });

    addedItem = [...addedItem, clickedItem];

    let uniqueProducts = getUniqueArr(addedItem, "id");
    localStorage.setItem("ProductsInCart", JSON.stringify(uniqueProducts));
    let cartProductLen = document.querySelectorAll(".carts-products div p");
    console.log(cartProductLen);

    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductLen.length;
  } else {
    window.location = "login.html";
  }
}

function getUniqueArr(arr, filterType) {
  let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);

  return unique;
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

input.addEventListener("keyup", function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem("products")));

  if (e.target.value.trim() === "") {
    drawProductsUI(JSON.parse(localStorage.getItem("products")));
  }
});

function search(title, myArr) {
  let arr = myArr.filter((item) => item.title.indexOf(title) !== -1);
  drawProductsUI(arr);
}

//Add To Favorite
let favoriteItems = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];

function addToFavorite(id) {
  if (localStorage.getItem("username")) {
    let clickedItem = products.find((item) => item.id === id);
    clickedItem.liked = true;
    favoriteItems = [...favoriteItems, clickedItem];
    let uniqueProducts = getUniqueArr(favoriteItems, "id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    products.map((item) => {
      if (item.id === clickedItem) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    drawProductsUI(products);
  } else {
    window.location = "login.html";
  }
}
