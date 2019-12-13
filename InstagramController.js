export default class InstagramController {
    constructor(InstaModel, InstaView) {
        this.model = InstaModel;
        this.view = InstaView;
        console.log("Instagramcontroller, constructor");
    }

    searchForTag(tag) {
        console.log("searchForTag", this.view, this.model);
        this.model.filterByTag(tag);
        this.view.renderPostList();
    }
}