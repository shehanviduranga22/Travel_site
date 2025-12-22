const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const texts = document.querySelectorAll(".home-text");


var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    texts.forEach((text) => {
        text.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    texts[manual].classList.add("active");
    
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    })
})