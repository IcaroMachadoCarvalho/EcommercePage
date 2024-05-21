// Slider
const slides = document.querySelectorAll(".slider__image");
const btnPrevious = document.querySelector("#previous");
const btnNext = document.querySelector("#next");
let indexSlide = 0;

function currentSlide(index) {
  clearSlide();
  slides[index].style.display = "block";
}

function clearSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

btnPrevious.addEventListener("click", () => {
  indexSlide--;
  if (indexSlide < 0) {
    indexSlide = slides.length - 1;
    currentSlide(indexSlide);
  }
  currentSlide(indexSlide);
});
btnNext.addEventListener("click", () => {
  indexSlide++;
  if (indexSlide > 3) {
    indexSlide = 0;
    currentSlide(indexSlide);
  }
  currentSlide(indexSlide);
});

clearSlide();
currentSlide(0);

// Navbar
const navBar = document.querySelector("#navBar");
const menuBtn = document.querySelector("#menuNav");
const closeNav = document.querySelector("#closeNav");
const headerBackground = document.querySelector("#backgroundNav");
const headerOptions = document.querySelector(".header__options");

// Open menu
menuBtn.addEventListener("click", () => {
  headerOptions.style.opacity = "1";
  navBar.style.opacity = 1;
  navBar.style.width = "55%";
  headerBackground.style.opacity = 0.5;
  headerBackground.style.zIndex = 8;
});

// Close menu
closeNav.addEventListener("click", () => {
  headerOptions.style.opacity = "0";
  navBar.style.width = "0%";
  navBar.style.opacity = 0;
  headerBackground.style.opacity = 0;
  headerBackground.style.zIndex = -10;
});

// Close menu without clicking the close icon
headerBackground.addEventListener("click", () => {
  headerOptions.style.opacity = "0";
  if(window.innerWidth <= 768){
    navBar.style.width = "0%";
    navBar.style.opacity = 0;
  }else{
    navBar.style.width = "100%";
    navBar.style.opacity = 1;
    headerOptions.style.opacity = 1;
    // makes the navBar appears on screens larger than 768px
  }
  headerBackground.style.opacity = 0;
  headerBackground.style.zIndex = -10;
});

// Shopping section
const btnMinus = document.querySelector("#btnMinus");
const btnPlus = document.querySelector("#btnPlus");
let counter = document.querySelector("#counter");
let quantity = 0;

// when the website starts the counter will have zero
counter.innerHTML = quantity;

// Decrease the counter
btnMinus.addEventListener("click", () => {
  if (quantity <= 1) {
    quantity = 0;
    counter.innerHTML = quantity;
  } else {
    counter.innerHTML = --quantity;
  }
});

// Increase the counter
btnPlus.addEventListener("click", () => {
  counter.innerHTML = ++quantity;
});

// This message will appear in the cart when it´s empty
const emptyTitle = document.querySelector("#emptyTitle");

// This message will appear in the cart when the user adds any item
const productsBlock = document.querySelector("#productsId");

// This will transfer the items to the cart
addCart.addEventListener("click", () => {
  if (quantity > 0) {
    document.querySelector("#iconQuantity").style.opacity = "1";
    productsBlock.style.display = "flex";
    emptyTitle.style.display = "none";
    updateQuantity(quantity);
    quantity = 0;
    counter.innerHTML = quantity;
  }
});

// Shopping cart
const avatarCart = document.querySelector("#avatarCart"); // olhar
const shoppingCart = document.querySelector("#shoppingCart");
const iconCart = document.querySelector("#iconCart");
const iconQuantity = document.querySelector("#iconQuantity");
let currentQuantity = 0;

// This event will modfiy the cart and it´s icon
avatarCart.addEventListener("click", () => {
  if (shoppingCart.style.opacity == "1") {
    iconCart.classList.remove("active");
    shoppingCart.style.opacity = "0";
    shoppingCart.style.zIndex = "4";
  } else {
    iconCart.classList.add("active");
    shoppingCart.style.opacity = "1";
    shoppingCart.style.zIndex = "7";
  }
});

function updateQuantity(quantity) {
  currentQuantity += quantity;
  iconQuantity.innerHTML = currentQuantity;
  updatePrices(currentQuantity);
}

function updatePrices(items) {
  document.querySelector("#productsCurrentQuantity").innerHTML = items;
  document.querySelector("#productsTotal").innerHTML = items * 125 + ".00";
}

productsBlock.style.display = "none";

const deleteItems = document.querySelector("#deleteItems");

deleteItems.onclick = () => {
  currentQuantity = 0;
  iconQuantity.innerHTML = currentQuantity;
  emptyTitle.style.display = "block";
  productsBlock.style.display = "none";
  document.querySelector("#iconQuantity").style.opacity = "0";
};

// make the buy button responsive in these measurements
window.onresize = () => {
  if (window.innerWidth >= 768.0 && window.innerWidth <= 1073.64) {
    document.querySelector(".add").style.display = "none";
    document.querySelector(".addCart").style.left = 0;
    headerOptions.style.opacity = 1;
    navBar.style.width = "100%"
    navBar.style.opacity = 1;
    headerBackground.style.opacity = 0;
  } else {
    document.querySelector(".add").style.display = "inline-block";
    document.querySelector(".addCart").style.left = "-8px";
    navBar.style.width = "0%"
    navBar.style.opacity = 0;
    headerBackground.style.opacity = 0;
  }
};

// Functions to the gallery
const galleryOptions = document.querySelectorAll(".gallery__options");
// updates to the selected product
function product(prod, pos) {
  for (let i = 0; i < galleryOptions.length; i++) {
    galleryOptions[i].classList.remove("selected");
  }
  galleryOptions[pos].classList.add("selected");
  changeContent(pos);
}
// change de content of the main gallery
function changeContent(pos) {
  const imgGalleryMain = document.querySelector("#imgGalleryMain");
  switch (pos) {
    case 0:
      imgGalleryMain.src = `./src/assets/image-product-${1}.jpg`;
      break;
    case 1:
      imgGalleryMain.src = `./src/assets/image-product-${2}.jpg`;
      break;
    case 2:
      imgGalleryMain.src = `./src/assets/image-product-${3}.jpg`;
      break;
    case 3:
        imgGalleryMain.src = `./src/assets/image-product-${4}.jpg`;
        break;
  }
}

function showMore(){
  headerBackground.style.opacity = 0.6;
  headerBackground.style.display = "block";
  headerBackground.style.zIndex = 20;
  headerBackground.style.height = "100%";
}