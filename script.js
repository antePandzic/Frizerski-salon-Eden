window.addEventListener('DOMContentLoaded', (event) => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.slider-image');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    images[currentImageIndex].classList.add('active');

    nextButton.addEventListener('click', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    });

    prevButton.addEventListener('click', () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        images[currentImageIndex].classList.add('active');
    });
});
