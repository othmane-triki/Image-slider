const slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

intializeSlider();
function intializeSlider() {
    slides[currentSlide].style.display = 'block';
}
function showSlide(index) {

}
function nextSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style = 'display: block; animation-name: fade; animation-duration: 1.5s;';
}
function prevSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style = 'display: block; animation-name: fade; animation-duration: 1.5s;';
}