// Define Products
let productDom = document.querySelector(".products");
let cartProducts = document.querySelector(".carts-products");
let cartProductsDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector(".badge");
let badgeList = document.querySelector(".badge-list");
let products = productsDB;
let input = document.getElementById("search");

//open cart menu
badgeList.addEventListener("click", openCartMenu);

//display products
let drawProductsUI;
(drawProductsUI = function (products = []) {
  let productsUI = products.map((item) => {
    return `
      <div class="product-item" style="border: ${
        item.isMe === "Y" ? "1px solid #f8f8f8" : ""
      }">
              <img src="${
                item.img_url
              }" alt="glass-img" class="product-item-img" />

              <div class="product-item-desc">
                <a onclick="saveItemData(${item.id})">${item.title}</a>
                <p>
                  ${item.desc}
                </p>
                <span>${item.size}</span>

                ${
                  item.isMe === "Y" &&
                  "<button class='edit-product' onclick='editProduct(" +
                    item.id +
                    ")> Edit Product </button> "
                }

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

  productDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

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
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem("products")) || products;
    let product = products.find((item) => item.id === id);
    let isProductInCart = addedItem.some((i) => i.id === product.id);

    if (isProductInCart) {
      addedItem = addedItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItem.push(product);
    }

    //UI
    cartProductsDom.innerHTML = "";
    addedItem.forEach((item) => {
      cartProductsDom.innerHTML += `<p>${item.title} ${item.qty}</p>`;
    });

    //Save Data
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));

    //Add counter of Items
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

//search functionality
input.addEventListener("keyup", type);

function type(key) {
  const storageItems = JSON.parse(localStorage.getItem("products"));
  search(key.target.value.toLowerCase(), storageItems);

  if (key.target.value.trim() === "") {
    drawProductsUI(storageItems);
  }
}

function search(typing, storageItems) {
  const searching = storageItems.filter(
    (item) => item.title.toLowerCase().indexOf(typing) !== -1
  );
  drawProductsUI(searching);
}

//Add To Favorite
let favoriteItems = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];

function addToFavorite(id) {
  if (localStorage.getItem("username")) {
    let product = products.find((item) => item.id === id);
    product.liked = true;
    favoriteItems = [...favoriteItems, product];
    let uniqueProducts = getUniqueArr(favoriteItems, "id");
    localStorage.setItem("productsFavorite", JSON.stringify(uniqueProducts));
    products.map((item) => {
      if (item.id === product) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    drawProductsUI(products);
  } else {
    window.location = "login.html";
  }
}

//Filter Products By Size
let sizeFilter = document.getElementById("size-filter");

sizeFilter.addEventListener("change", getProductsFilteredBySize);

function getProductsFilteredBySize(e) {
  let val = e.target.value;
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;

  if (val === "all") {
    drawProductsUI(products);
  } else {
    products = products.filter((i) => i.size === val);
    drawProductsUI(products);
  }
}

//Edit Product
function editProduct(id) {
  localStorage.setItem("editProduct", id);

  window.location = "editProduct.html";
}
