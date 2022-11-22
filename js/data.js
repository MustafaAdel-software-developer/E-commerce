let productsDB = [
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

localStorage.setItem("products", JSON.stringify(productsDB));
