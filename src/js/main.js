var catIdx,
    chooseCatListElement = document.getElementById('choose-cat-list'),
    displayCatNameElement = document.getElementById('display-cat-name'),
    displayCatImageElement = document.getElementById('display-cat-image'),
    displayCatClickCountElement = document.getElementById('display-cat-click-count'),
    catData = [
    {
        name : 'catA',
        picture : 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
        clickCount : 0
    }, {
        name : 'catB',
        picture : 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&amp;h=496',
        clickCount : 0
    }, {
        name : 'catC',
        picture : 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&amp;h=454',
        clickCount : 0
    }
];

for (catIdx = 0; catIdx < catData.length; catIdx++) {

    (function (catNumber) {

        var chooseCatElement = document.createElement('div');

        chooseCatElement.innerText = catData[catNumber].name;
        chooseCatListElement.appendChild(chooseCatElement);

        chooseCatElement.addEventListener('click', function () {
            var clickCount = ++catData[catNumber].clickCount;
            displayCatNameElement.innerText = catData[catNumber].name;
            displayCatImageElement.src = catData[catNumber].picture;
            displayCatClickCountElement.innerText = clickCount.toString();
        }, false);

    }(catIdx));

}
