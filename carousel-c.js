document.addEventListener("DOMContentLoaded", function () {
    const carouselC = document.querySelector('.carousel-c');
    const prevButtonC = document.querySelector('.prev-c');
    const nextButtonC = document.querySelector('.next-c');

    let currentIndexC = 0;

    const imageArrayC = ['slide1.png', 'slide2.png', 'slide3.png', 'slide4.png', 'slide5.png', 'slide6.png', 'slide7.png', 'slide8.png', 'slide9.png', 'slide10.png', 'slide11.png', 'slide12.png'];

    function updateCarouselC() {
        carouselC.style.transform = `translateX(${-currentIndexC * 100}%)`;
    }

    function showPrevC() {
        currentIndexC = (currentIndexC - 1 + imageArrayC.length) % imageArrayC.length;
        updateCarouselC();
    }

    function showNextC() {
        currentIndexC = (currentIndexC + 1) % imageArrayC.length;
        updateCarouselC();
    }

    prevButtonC.addEventListener('click', showPrevC);
    nextButtonC.addEventListener('click', showNextC);

    // Load the initial set of images
    imageArrayC.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.style.width = '100%'; // Adjust this value if needed
        carouselC.appendChild(imgElement);
    });
});