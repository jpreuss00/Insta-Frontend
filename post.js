class Post {
    constructor() {
        this.imgurl = "";
        this.username = "";
        this.likes = 0;
        this.hashtags = [];
        console.log("Post");
    }
    hasTag(tag) {
        for (var i = 0; i < this.hashtags.length; i++) {
            if (this.hashtags[i] == tag) {
                return true;
            }
        }
        return false;
    }
}

export default Post;