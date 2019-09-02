export const store = {
    debug: true,
    state : {
      posts : [],
      isTyping : false
    },
  
    storePosts(posts) {
      this.state.posts = posts;
    },

    addCommentByPostId(comment, postID) {
      const indexPost = this.state.posts.filter(function(elem){
        if(elem.id == postID) {
          elem.comments.push(comment);
        } 
      })
    },

    isTypingComment() {
      this.state.isTyping = true;
    },

    isNotTypingComment() {
      this.state.isTyping = false;
    },

    toogleTyping(isTyping) {
      this.state.isTyping = isTyping;
    }


  }

  window.store = store;