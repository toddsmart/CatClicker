/**
 * the model representing cat data we use in the cat clicker
 *
 * @type {{addCat, getCats, getCat}}
 */
var model = (function () {
    var catData = [],
        addCat,
        getCats,
        getCat;

    /**
     * adds a cat to the model
     *
     * @param {String} catName the name of the cat
     * @param {String} catPicture the string URL of the cat's picture
     */
    addCat = function (catName, catPicture) {
        catData.push({
            name : catName,
            picture : catPicture,
            clickCount : 0
        });
    };

    /**
     * returns the cats
     *
     * @returns {Array} an array of Objects representing cats
     */
    getCats = function () {
        return catData;
    };

    /**
     * returns a cat based on its  index in the model
     *
     * @param {Number} catNumber the number of the cat to return
     * @returns {*} a cat object
     */
    getCat = function(catNumber) {
        return catData[catNumber];
    };

    return {
        addCat : addCat,
        getCats : getCats,
        getCat : getCat
    };
}());
