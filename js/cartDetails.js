let products = JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productID");
let itemDom = document.querySelector(".item-details");

let productDetails = products.find((item) => item.id == productId);

itemDom.innerHTML = `
          <img src="${productDetails.img_url}" alt="" />
          <h2>${productDetails.title}</h2>
          <p>${productDetails.desc} </p>
          <span>Size : ${productDetails.size}</span>
          <span>Quantity : ${productDetails.qty}</span>

          `;
