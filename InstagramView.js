export default class InstagramView {
    constructor(InstaModel) {
        this.model = InstaModel;
        console.log("Instagramview, constructor");
    }

    renderPostList() {
        console.log("renderPostList", this.model);
        var container = document.getElementById("postlist");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for (var i = 0; i < this.model.filteredPosts.length; i++) {
            var shownPost = this.model.filteredPosts[i];

            var newShownPost = document.createElement("article");
            newShownPost.setAttribute("class", "post")

            var newShownHeader = document.createElement("div");
            newShownHeader.setAttribute("class", "post__header");
            newShownHeader.innerHTML = shownPost.username;

            var newShownPic = document.createElement("img");
            var newShownPicSrc = shownPost.imgurl;
            newShownPic.setAttribute("src", newShownPicSrc);
            newShownPic.setAttribute("class", "post__picture")

            var newShownFooter = document.createElement("div");
            newShownFooter.setAttribute("class", "post__footer");
            newShownFooter.innerHTML = shownPost.hashtags + " ";

            var newShownBreak = document.createElement("div");
            newShownBreak.innerHTML = "<br/>";

            newShownPost.appendChild(newShownHeader);
            newShownPost.appendChild(newShownPic);
            newShownPost.appendChild(newShownFooter);

            container.appendChild(newShownPost);
            container.appendChild(newShownBreak);
        }
    }
}