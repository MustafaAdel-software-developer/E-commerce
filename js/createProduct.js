//variables

let productName = document.getElementById("product-name");
let productDesc = document.getElementById("product-desc");
let productSizeSelect = document.getElementById("product-size");
let createForm = document.getElementById("create-form");
let inputImg = document.getElementById("upload-img");
let productSizeValue;
let productImg;

//Events
productSizeSelect.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFunction);
inputImg.addEventListener("change", uploadImg);
//Functions
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}

function createProductFunction(e) {
  e.preventDefault();
  let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
  let nameValue = productName.value;
  let descValue = productDesc.value;

  if (nameValue && descValue) {
    let obj = {
      id: allProducts ? allProducts.length + 1 : 1,
      qty: 1,
      imageUrl: productImg,
      size: productSizeValue,
      title: nameValue,
      description: descValue,
    };

    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));

    productName.value = "";
    productDesc.value = "";
    productSizeSelect.value = "";
  } else {
    alert("Enter Data ...");
  }
}

function uploadImg() {
  let file = this.files[0];
  console.log(file);

  let types = ["image/jpeg", "image/png"];
  if (types.indexOf(file.type) !== -1) {
    alert("type not supported!");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("img size too big");
    return;
  }

  productImg = URL.createObjectURL(file);
}
