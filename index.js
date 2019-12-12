import Model from "./model";
import View from "./view";
import Controller from "./controller";

var m = new Model();
var v = new View(m);
var controller = new Controller(m, v);

var addButton = document.getElementById("search__button");
addButton.addEventListener("click", (ev) => {
    ev.preventDefault();

    var input = document.getElementById("search__bar").value;
    controller.searchForTag(input);
});