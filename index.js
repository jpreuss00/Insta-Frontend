class Model {
    constructor() {
        var p1 = new Post();
        p1.imgurl = "www.google.com";
        p1.hashtags = ["#sport", "#fun"];
        var p2 = new post();
        p1.imgurl = "www.google.com";
        p1.hashtags = ["#nature", "#nofilter"];
        var p3 = new Post();
        p1.imgurl = "www.google.com";
        p1.hashtags = ["#globalwarming", "#ice"];

        this.posts = [p1, p2, p3];
        this.filteredPosts = [];
    }
    filterByTag(tag) {
        this.filteredPosts = [];
        for (i = 0; i < this.posts.length; i++) {
            var post = this.posts[i];
            if (post.hasTag(tag)) {
                this.filteredPosts.push(post);
            }
        }
    }
}

class Post {
    constructor() {
        this.imgurl = "";
        this.username = "";
        this.likes = 0;
        this.hashtags = [];
    }
    hasTag(tag) {
        for (i = 0; i < this.hashtags.length; i++) {
            if (hashtags[i] == tag) {
                return true;
            }
        }
        return false;
    }
}
