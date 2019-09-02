<template>
  <div class="post">

    <post-header
      :name="this.post.name"
      :date="this.post.date"
      :image="this.post.image" />
  
    <post-content>
      {{this.post.content}}
    </post-content>

   <post-action
      :likes="this.post.likes"
      :totalComments="this.post.comments.length" />
    
    <div class="post-comments">
      <post-comment
        v-for="(comment, index) in this.post.comments"
        :key="index"
        :comment="comment"/>
    </div>
    <!-- Component: PostSendCommentForm -->
    <div class="post-send-comment">
      <div class="post-send-form">
        <input type="text" placeholder="Write your comment" 
        v-model="commentToSend"
        v-on:keyup="keyMonitor" />
      </div>
    </div>
  </div>
</template>

<script>
import PostHeader from "./PostHeader.vue";
import PostContent from "./PostContent.vue";
import PostAction from './PostAction.vue';
import PostComment from './PostComment.vue';

import { store } from '../store.js';

export default {
  name: "post",
  props: ['post'],
  
  data: function(){
    return {
      commentToSend: '',
      timeout: null
    }
  },
  
  components: {
    PostHeader, PostContent, PostAction, PostComment
  },
  
  methods: {
    addComment() {
      const postId = this.post.id;

        this.$http
            .post('https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts/' + postId + '/comment',{
              'comment' : this.commentToSend
            })
            .then(response => {
              //console.log(response.data)
              store.addCommentByPostId(response.data.comment, response.data.postId)
              this.commentToSend = ''
            });
    },

    keyMonitor(e) {

      clearTimeout(this.timeout);

      if(e.key == 'Enter') {
        this.addComment();
        store.toogleTyping(false);

      } else {
        store.toogleTyping(true);

        this.timeout = setInterval(() => {
          store.toogleTyping(false);
        }, 2000);
      }
    }
  }
  

};
</script>


<style scoped>
.post {
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 1px 1px 10px rgba(82, 109, 194, 0.1);
  margin-bottom: 30px;
}


.post > .post-send-comment .post-send-form {
  position: relative;
  width: 100%;
}

.post > .post-send-comment .post-send-form input {
  width: 100%;
  border-radius: 40px;
  border: 0;
  height: 40px;
  padding: 15px;
  background-color: #f8f8f8;
  margin-top: 10px;
  color: #516d77;
}

.post > .post-send-comment .post-send-form input:focus,
.post > .post-send-comment .post-send-form input:active {
  outline: none;
}

.post > .post-send-comment .post-send-form button {
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}
</style>