
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.main_carousel_button');
var textLine = document.getElementsByClassName('carousel_text');


var manualNav = function(manual){
    [...slides].forEach((slide) => {
        slide.classList.remove('active2');
        [...btns].forEach((btn) => {
            btn.classList.remove('active2');
        });
    });

    slides[manual].classList.add('active2');
    btns[manual].classList.add('active2');
};

btns.forEach((btn, i)=>{
    btn.addEventListener('click', ()=>{
        manualNav(i);
        currentSlide = i;
    });
});

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active2');
    let textActive = document.getElementsByClassName('carousel_text_active');
    
    let i = 1;

    var repeater = () =>{
        setTimeout(function(){
            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('active2');
            });
            [...textActive].forEach((activeText)=>{
                activeText.classList.remove('carousel_text_active')
            });
        slides[i].classList.add('active2');
        btns[i].classList.add('active2');
        j = 0;
        
        i++;       
        if(slides.length == i){
            i=0;
        };
        if(i >= slides.length){
            return;
        };
        repeater();
    }, 7000);
    };
    j = 0;
    var repeater2 = () => {setTimeout(function(){
        textLine[j].classList.add('carousel_text_active');
    
        j++;       
        if(textLine.length == j){
            j=0;
        };
        if(j >= textLine.length){
            return;
        };
        repeater2();
    }, 1000);
    };
    repeater2();
    repeater();
};


repeat();


let myBtn = document.getElementById('topButton');

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        myBtn.style.right = "1rem";
        myBtn.style.opacity = "1";
    }
    else{
        myBtn.style.right = "-3rem";
        myBtn.style.opacity = "0";
    }
}

function returnTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}