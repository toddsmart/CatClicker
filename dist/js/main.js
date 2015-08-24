var numClicks1 = 0,
    catImage1 = document.getElementById('cat-image1'),
    clickCounter1 = document.getElementById('click-counter1'),
    numClicks2 = 0,
    catImage2 = document.getElementById('cat-image2'),
    clickCounter2 = document.getElementById('click-counter2');

catImage1.addEventListener('click', function () {
    clickCounter1.innerText = (++numClicks1).toString();
}, false);

catImage2.addEventListener('click', function () {
    clickCounter2.innerText = (++numClicks2).toString();
}, false);
