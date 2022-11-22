let productsDB = [
  {
    id: 1,
    title: "glass",
    size: "large",
    img_url: "img/glass.PNG",
    qty: 1,
  },
  {
    id: 2,
    title: "watch",
    size: "large",
    img_url: "img/watch.webp",
    qty: 1,
  },
  {
    id: 3,
    title: "laptop",
    size: "large",
    img_url: "img/laptop.jpg",
    qty: 1,
  },
  {
    id: 4,
    title: "headphones",
    size: "large",
    img_url: "img/headphones.webp",
    qty: 1,
  },
];

localStorage.setItem("products", JSON.stringify(productsDB));
