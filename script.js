// Slider
const slides = document.querySelectorAll(".slider__image");
const btnPrevious = document.querySelector("#previous");
const btnNext = document.querySelector("#next");
let indexSlide = 0;

function currentSlide(index){
    clearSlide();
    console.log(index);
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

const navBar = document.querySelector("#navBar");
const menuBtn = document.querySelector("#menuNav");
const closeNav = document.querySelector("#closeNav"); 

menuBtn.addEventListener("click", ()=>{
    navBar.style.opacity = 1;
    navBar.style.width = "55%";
    document.querySelector("#backgroundNav").style.opacity = 0.5;
    document.querySelector("#backgroundNav").style.zIndex = 7;
});

closeNav.addEventListener("click", ()=>{
    navBar.style.width = "0%";
    navBar.style.opacity = 0;
    document.querySelector("#backgroundNav").style.opacity = 0;
    document.querySelector("#backgroundNav").style.zIndex = -10;
});

