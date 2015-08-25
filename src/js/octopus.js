/**
 * the 'octopus' is a term used in the Udacity JavaScript Design Patterns class
 *
 * the octopus (aka controller) knows about the model and the view and provides the logic to wire them up
 *
 * @type {{initializeModel, setupCatList, updateCatView}}
 */
var octopus = (function () {
    var model = this.model,
        view = {
            displayCatView : this.displayCatView,
            chooseCatListView : this.chooseCatListView
        },
        initializeModel,
        setupCatList,
        updateCatView;

    /**
     * setup the model with a set of cats - I suppose the app could have provided this list just as well
     */
    initializeModel = function () {
        model.addCat('catA', 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426');
        model.addCat('catB', 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&amp;h=496');
        model.addCat('catC', 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&amp;h=454');
    };

    /**
     * setup the list of cats in the view and add an event binding for the custom "cat-clicked" event
     */
    setupCatList = function () {
        view.chooseCatListView.renderCatListView(model.getCats());
        view.chooseCatListView.chooseCatListElement.addEventListener('cat-clicked', this.updateCatView);
    };

    /**
     * updates the cat details view with data related to the "cat-clicked" event
     *
     * @param catClickedEvent a custom event thrown by the view when a cat is clicked
     */
    updateCatView = function (catClickedEvent) {
        var cat = model.getCat(catClickedEvent.detail.catNumber);
        cat.clickCount = cat.clickCount + 1; /* increment the cat clicked count for this cat */
        view.displayCatView.renderCatView(cat.name, cat.picture, cat.clickCount);
    };

    return {
        initializeModel : initializeModel,
        setupCatList : setupCatList,
        updateCatView : updateCatView
    };
}());
