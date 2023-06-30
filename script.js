window.addEventListener('DOMContentLoaded', (event) => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.slider-image');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    images.forEach((img, index) => {
        if (index !== currentImageIndex) {
            img.style.display = 'none';
        }
    });

    nextButton.addEventListener('click', () => {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    });

    prevButton.addEventListener('click', () => {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        images[currentImageIndex].style.display = 'block';
    });
});
