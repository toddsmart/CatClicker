var numClicks = 0,
    catImage = document.getElementById('cat-image'),
    clickCounter = document.getElementById('click-counter');

catImage.addEventListener('click', function () {
    clickCounter.innerText = (++numClicks).toString();
}, false);
