class View {
    constructor(m) {
        this.m = m;
        console.log("View");
    }

    renderPostList() {
        var container = document.getElementById("postlist");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for (var i = 0; i < this.filteredPosts.length; i++) {
            var shownPosts = this.filteredPosts[i];

            var newShownPost = document.createElement("span");
            newShownPost.appendChild(document.createTextNode(shownPosts.text));
            container.appendChild(newShownPost);
        }
    }
}

export default View;