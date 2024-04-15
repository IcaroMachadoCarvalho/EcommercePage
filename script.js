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