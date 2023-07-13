window.addEventListener('DOMContentLoaded', (event) => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.slider-image');
    const nextImageButton = document.getElementById('next-image');
    const prevImageButton = document.getElementById('prev-image');
  
    images[currentImageIndex].classList.add('active');
  
    nextImageButton.addEventListener('click', () => {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add('active');
    });
  
    prevImageButton.addEventListener('click', () => {
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      images[currentImageIndex].classList.add('active');
    });
  
    let currentCardIndex = 0;
    const cards = document.querySelectorAll('.card-container .card');
    const nextCardButton = document.getElementById('next-card');
  
    cards[currentCardIndex].classList.add('active');
  
    nextCardButton.addEventListener('click', () => {
      cards[currentCardIndex].classList.remove('active');
      currentCardIndex = (currentCardIndex + 1) % cards.length;
      cards[currentCardIndex].classList.add('active');
    });
});
