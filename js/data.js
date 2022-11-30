let productsDB = [
  {
    id: 1,
    title: "glass",
    desc: "lorem ipsum , cofsafnfdnks fdsfsdf .",
    size: "large",
    img_url: "img/glass.PNG",
    qty: 1,
    isMe: "N",
  },
  {
    id: 2,
    title: "watch",
    desc: "lorem ipsum , cofsafnfdnks fdsfsdf .",
    size: "large",
    img_url: "img/watch.webp",
    qty: 1,
    isMe: "N",
  },
  {
    id: 3,
    title: "laptop",
    desc: "lorem ipsum , cofsafnfdnks fdsfsdf .",
    size: "large",
    img_url: "img/laptop.jpg",
    qty: 1,
    isMe: "N",
  },
  {
    id: 4,
    title: "headphones",
    desc: "lorem ipsum , cofsafnfdnks fdsfsdf .",
    size: "large",
    img_url: "img/headphones.webp",
    qty: 1,
    isMe: "N",
  },
];

localStorage.setItem("products", JSON.stringify(productsDB));
