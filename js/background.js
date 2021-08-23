imgs = ["0.jpg", "1.jpg", "2.jpg"];

SelectImg = imgs[Math.floor(Math.random() * imgs.length)]

const Himg = document.createElement("img");
Himg.src = `img/${SelectImg}`;
document.body.appendChild(Himg);