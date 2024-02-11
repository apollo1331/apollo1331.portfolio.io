document.addEventListener("DOMContentLoaded", function () {
    const carouselA = document.querySelector('.carousel-a');
    const prevButtonA = document.querySelector('.prev-a');
    const nextButtonA = document.querySelector('.next-a');

    let currentIndexA = 0;

    const imageArrayA = ['task analysis slide 1.png', 'task analysis slide 2.png', 'task analysis slide 3.png'];

    function updateCarouselA() {
        carouselA.style.transform = `translateX(${-currentIndexA * 100}%)`;
    }

    function showPrevA() {
        currentIndexA = (currentIndexA - 1 + imageArrayA.length) % imageArrayA.length;
        updateCarouselA();
    }

    function showNextA() {
        currentIndexA = (currentIndexA + 1) % imageArrayA.length;
        updateCarouselA();
    }

    prevButtonA.addEventListener('click', showPrevA);
    nextButtonA.addEventListener('click', showNextA);

    // Load the initial set of images
    imageArrayA.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.style.width = '100%'; // Adjust this value if needed
        carouselA.appendChild(imgElement);
    });
});