// Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider__image");
const btnPrevious = document.querySelector("#previous");
const btnNext = document.querySelector("#next");
let indexSlide = 0;

function currentSlide(index) {
  clearSlide();
  slides[index].style.display = "block";
  document.querySelector('#imgGalleryMain')
  .setAttribute('data-index', index);
}

function clearSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

btnPrevious.addEventListener("click", () => {
  indexSlide--;
  if (indexSlide == -1) {
    indexSlide = slides.length - 1;
    currentSlide(indexSlide);
  }
  let galSlider = document.querySelectorAll(".gallery__slider");
  galSlider.length > 0? galSlider[indexSlide].click(): null;
    currentSlide(indexSlide);
  });

  btnNext.addEventListener("click", () => {
    indexSlide++;
    if (indexSlide == 4) {
      indexSlide = 0;
      currentSlide(indexSlide);
    }
    let galSlider = document.querySelectorAll(".gallery__slider");
    galSlider.length > 0? galSlider[indexSlide].click(): null;
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
  if (window.innerWidth <= 768) {
    navBar.style.width = "0%";
    navBar.style.opacity = 0;
    slider.style.display = "block";
  } else {
    navBar.style.width = "100%";
    navBar.style.opacity = 1;
    headerOptions.style.opacity = 1;
    slider.style.display = "none";
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

function removeChildrenSlides() {
  let sliderChildren = Array.from(slider.children);
  for (let i = 0; i < sliderChildren.length; i++) {
    if (sliderChildren[i].classList.contains("closeSlider")) {
      sliderChildren[i].remove();
    } else if (sliderChildren[i].classList.contains("gallery__secondary--slider")) {
      sliderChildren[i].remove();
    }
  }
}

// make the buy button responsive in these measurements
window.onresize = () => {
  if(window.innerWidth < 768.0) {
    document.querySelector(".add").style.display = "inline-block";
    document.querySelector(".addCart").style.left = "-8px";
    navBar.style.width = "0%";
    navBar.style.opacity = 0;
    headerBackground.style.opacity = 0;
    slider.style.display = "block";
    removeChildrenSlides();
  }else if (window.innerWidth >= 768.0) {
    // window.innerWidth >= 768.0 && window.innerWidth <= 1073.64
    document.querySelector(".add").style.display = "none";
    document.querySelector(".addCart").style.left = 0;
    headerOptions.style.opacity = 1;
    navBar.style.width = "100%";
    navBar.style.opacity = 1;
    headerBackground.style.opacity = 0;
    slider.style.display = "none";
  }
};

// Functions to the gallery
const galleryOptions = document.querySelectorAll(".gallery__options");
// updates to the selected product
function product(pos,status) {
  for (let i = 0; i < galleryOptions.length; i++) {
    galleryOptions[i].classList.remove("selected");
  }
  galleryOptions[pos].classList.add("selected");
  if(status){changeContent(pos);}
}

function select(num){
  let sliderOptions = document.querySelectorAll(".gallery__slider");
  for (let i = 0; i < sliderOptions.length; i++) {
    sliderOptions[i].classList.remove("selected");
  }
  if(sliderOptions[num]){
    sliderOptions[num].classList.add("selected");
  }
}

// change de content of the main gallery
function changeContent(pos) {
  const imgGalleryMain = document.querySelector("#imgGalleryMain");
  switch (pos) {
    case 0:
      imgGalleryMain.src = `./src/assets/image-product-${1}.jpg`;
      currentSlide(0);
      select(0);
      product(0);
      break;
    case 1:
      imgGalleryMain.src = `./src/assets/image-product-${2}.jpg`;
      currentSlide(1);
      select(1);
      product(1);
      break;
    case 2:
      imgGalleryMain.src = `./src/assets/image-product-${3}.jpg`;
      currentSlide(2);
      select(2);
      product(2);
      break;
    case 3:
      imgGalleryMain.src = `./src/assets/image-product-${4}.jpg`;
      currentSlide(3);
      select(3);
      product(3);
      break;
  }
}

function showMore(index) {
  headerBackground.style.opacity = 0.6;
  headerBackground.style.display = "block";
  headerBackground.style.zIndex = 20;
  headerBackground.style.height = "100%";
  slider.style.display = "block";
  removeChildrenSlides();
  let closeSlider = document.createElement("div");
  closeSlider.setAttribute("class", "closeSlider");
  closeSlider.innerHTML = `
  <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="white"
              fill-rule="evenodd"
            />
          </svg>
`;
  let gallerySecondary = document.createElement("div");
  gallerySecondary.classList.add("gallery__secondary--slider");
  gallerySecondary.innerHTML = `
          <div class="gallery__slider" onclick="changeContent(0)">
            <img src="./src/assets/image-product-1-thumbnail.jpg" alt="">
          </div>
          <div class="gallery__slider" onclick="changeContent(1)">
            <img src="./src/assets/image-product-2-thumbnail.jpg" alt="">
          </div>
          <div class="gallery__slider" onclick="changeContent(2)">
            <img src="./src/assets/image-product-3-thumbnail.jpg" alt="">
          </div>
          <div class="gallery__slider" onclick="changeContent(3)">
            <img src="./src/assets/image-product-4-thumbnail.jpg" alt="">
          </div>
  `;

  slider.insertBefore(closeSlider, slider.firstChild);
  slider.appendChild(gallerySecondary);
  closeSlider.addEventListener("click", () => {
    headerBackground.style.opacity = 0;
    headerBackground.style.display = "none";
    headerBackground.style.zIndex = -10;
    slider.style.display = "none";
  });
  select(index);
}

let galleryMainIndex = () =>{
  let galleryMain = document.querySelector("#imgGalleryMain");
  let galleryMainIndex = galleryMain.getAttribute("data-index");
  showMore(galleryMainIndex);
  currentSlide(galleryMainIndex); 
}

// consertar seta com gallerysecundary slider 25 ok
// double click gallery main ok
// max-width no desktop version ok
// consertar 179 resize ok mas testar
// melhorar o header mobile 


// Conserta o slider e header Mobile, e adiciona funcionalidade na lightbox 