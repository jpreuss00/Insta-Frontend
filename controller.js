class Controller {
    constructor(m, v) {
        this.m = m;
        this.v = v;
        console.log("Controller");
    }

    searchForTag(tag) {
        this.m.filterByTag(tag);
        this.v.renderPostList();
    }

}

export default Controller;