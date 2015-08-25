/**
 * the display cat view area of the cat clicker - basically the clickable list of cats
 *
 * @type {{chooseCatListElement, initializeCatListView, renderCatListView}}
 */
var chooseCatListView = (function () {
    var renderCatListView,
        chooseCatListElement = document.getElementById('choose-cat-list');

    /**
     * renders the list of cats provided and sets an event listener for their selection - once selected, it
     * fires a custom "cat-clicked-event" that the application can listen for and handle
     *
     * @param {Array} cats an array of cats to display
     */
    renderCatListView = function (cats) {
        var catIdx;

        for (catIdx = 0; catIdx < cats.length; catIdx++) {

            (function (catNumber) {

                var chooseCatElement = document.createElement('div');

                chooseCatElement.innerText = cats[catNumber].name;
                chooseCatListElement.appendChild(chooseCatElement);

                /* decided to just create a custom cat clicked event here rather than propagate the DOM event */
                chooseCatElement.addEventListener('click', function (clickEvent) {
                    var catClickEvent = new CustomEvent('cat-clicked', {
                        detail: {
                            catNumber: catNumber, /* the event detail identifies the cat */
                            time: new Date(),
                        },
                        bubbles: true,
                        cancelable: true
                    });
                    /* fire the event on the parent element - the app doesn't need to know about each cat element */
                    chooseCatListElement.dispatchEvent(catClickEvent);
                }, false);

            }(catIdx));

        }
    };

    return {
        chooseCatListElement : chooseCatListElement,
        renderCatListView : renderCatListView
    };
}());

/**
 * the display cat view area of the cat clicker - basically the clickable list of cats
 *
 * @type {{initializeCatView, renderCatView}}
 */
var displayCatView = (function () {
    var renderCatView,
        displayCatNameElement = document.getElementById('display-cat-name'),
        displayCatImageElement = document.getElementById('display-cat-image'),
        displayCatClickCountElement = document.getElementById('display-cat-click-count');

    /**
     * renders a cat in the cat view area
     *
     * @param {String} catName the name of the cat
     * @param {String} catPicture the URL of the picture of the cat
     * @param {Number} clickCount the number of times this cat has been clicked
     */
    renderCatView = function (catName, catPicture, clickCount) {
        displayCatNameElement.innerText = catName;
        displayCatImageElement.src = catPicture;
        displayCatClickCountElement.innerText = clickCount.toString();
    };

    return {
        renderCatView : renderCatView
    };
}());

