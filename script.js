// Slider
const slides = document.querySelectorAll(".slider__image");
const btnPrevious = document.querySelector("#previous");
const btnNext = document.querySelector("#next");
let indexSlide = 0;

function currentSlide(index){
    clearSlide();
    // console.log(index);
    slides[index].style.display = "block";
}

function clearSlide(){
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
}

btnPrevious.addEventListener("click", ()=>{
    indexSlide--;
    if(indexSlide < 0){
        indexSlide = slides.length-1;
        currentSlide(indexSlide);
    }
    currentSlide(indexSlide);
});
btnNext.addEventListener("click", ()=>{
    indexSlide++;
    if(indexSlide > 3){
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

menuBtn.addEventListener("click", ()=>{
    navBar.style.opacity = 1;
    navBar.style.width = "55%";
    document.querySelector("#backgroundNav").style.opacity = 0.5;
    document.querySelector("#backgroundNav").style.zIndex = 7;
});
//colocar clicar fora fecha tbm
closeNav.addEventListener("click", ()=>{
    navBar.style.width = "0%";
    navBar.style.opacity = 0;
    document.querySelector("#backgroundNav").style.opacity = 0;
    document.querySelector("#backgroundNav").style.zIndex = -10;
});


// Shopping section
const btnMinus = document.querySelector("#btnMinus");
const btnPlus = document.querySelector("#btnPlus");
let counter = document.querySelector("#counter");
let quantity = 0;

counter.innerHTML = quantity;

function updatePrices(qtd){
    document.querySelector("#currentPrice").innerHTML = qtd * 125 + ".00";
    document.querySelector("#originalPrice").innerHTML = qtd * 250 + ".00";
}

btnMinus.addEventListener("click", ()=>{
    if(quantity <= 1 || quantity == 0){
        console.log(quantity);
        quantity = 0;   
        counter.innerHTML = quantity;
        updatePrices(1);
    }else{
        counter.innerHTML = --quantity;
        // console.log(quantity);
        updatePrices(quantity);
    }
});
btnPlus.addEventListener("click", ()=>{
    counter.innerHTML = ++quantity;
    // console.log(quantity);
    updatePrices(quantity);
});

addCart.addEventListener("click", ()=>{
    let message = document.querySelector("#controllerMassage");
    if(quantity > 0){
        quantity = 0;   
        counter.innerHTML = quantity;
        updatePrices(1);
        message.style.display = "none";
    }else{
        message.style.display = "block";
        window.scrollTo(0, document.body.scrollHeight);
        // alert("Adicione no mínimo um produto");
    }
});



