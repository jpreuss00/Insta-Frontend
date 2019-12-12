import Post from "./post";

class Model {
    constructor() {
        var p1 = new Post();
        p1.imgurl = "www.google.com";
        p1.hashtags = ["#sport", "#fun"];
        var p2 = new Post();
        p1.imgurl = "www.google.com";
        p1.hashtags = ["#nature", "#nofilter"];
        var p3 = new Post();
        p1.imgurl = "www.google.com";
        p1.hashtags = ["#globalwarming", "#ice"];

        this.posts = [p1, p2, p3];
        this.filteredPosts = [];
        console.log("Model");
    }
    filterByTag(tag) {
        this.filteredPosts = [];
        for (var i = 0; i < this.posts.length; i++) {
            var post = this.posts[i];
            if (post.hasTag(tag)) {
                this.filteredPosts.push(post);
            }
        }
    }
}

export default Model;