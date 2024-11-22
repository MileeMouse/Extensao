// script.js

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = document.querySelectorAll('.slides article').length;
        if (index >= totalSlides) currentIndex = 0;
        else if (index < 0) currentIndex = totalSlides - 1;
        else currentIndex = index;

        const offset = -currentIndex * 100; // Desloca a largura de cada slide
        slides.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Inicia o carrossel na primeira imagem
    showSlide(currentIndex);
});
