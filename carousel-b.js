document.addEventListener("DOMContentLoaded", function () {
    const carouselB = document.querySelector('.carousel-b');
    const prevButtonB = document.querySelector('.prev-b');
    const nextButtonB = document.querySelector('.next-b');

    let currentIndexB = 0;

    const imageArrayB = ['he slide 1.png', 'he slide 2.png', 'he slide 3.png', 'he slide 4.png', 'he slide 5.png'];

    function updateCarouselB() {
        carouselB.style.transform = `translateX(${-currentIndexB * 100}%)`;
    }

    function showPrevB() {
        currentIndexB = (currentIndexB - 1 + imageArrayB.length) % imageArrayB.length;
        updateCarouselB();
    }

    function showNextB() {
        currentIndexB = (currentIndexB + 1) % imageArrayB.length;
        updateCarouselB();
    }

    prevButtonB.addEventListener('click', showPrevB);
    nextButtonB.addEventListener('click', showNextB);

    // Load the initial set of images
    imageArrayB.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.style.width = '100%'; // Adjust this value if needed
        carouselB.appendChild(imgElement);
    });
});