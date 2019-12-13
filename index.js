import InstagramModel from "./InstagramModel";
import InstagramView from "./InstagramView";
import InstagramController from "./InstagramController";

var InstaModel = new InstagramModel();
var InstaView = new InstagramView(InstaModel);
var InstaController = new InstagramController(InstaModel, InstaView);

var addButton = document.getElementById("search__button");
addButton.addEventListener("click", (ev) => {
    ev.preventDefault();

    var input = document.getElementById("search__bar").value;
    InstaController.searchForTag(input);
});