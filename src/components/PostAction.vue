<template>
   <!-- Component: PostAction -->
    <div class="post-action">
      <div class="post-like-icon liked" @click="onLike">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999">
          <path
            d="M83.578 167.256H16.716C7.524 167.256 0 174.742 0 183.971v300.881c0 9.225 7.491 16.713 16.716 16.713h66.862c9.225 0 16.716-7.489 16.716-16.713V183.971c0-9.229-7.525-16.715-16.716-16.715zM470.266 167.256c-2.692-.456-128.739 0-128.739 0l17.606-48.032c12.148-33.174 4.283-83.827-29.424-101.835-10.975-5.864-26.309-8.809-38.672-5.697-7.09 1.784-13.321 6.478-17.035 12.767-4.271 7.233-3.83 15.676-5.351 23.696-3.857 20.342-13.469 39.683-28.354 54.2-25.952 25.311-106.571 98.331-106.571 98.331v267.45h278.593c37.592.022 62.228-41.958 43.687-74.749 22.101-14.155 29.66-43.97 16.716-66.862 22.102-14.155 29.66-43.97 16.716-66.862 38.134-24.423 25.385-84.871-19.172-92.407z"
          />
        </svg>
        <span>{{this.likesCounter}} Likes</span>
      </div>
      <div class="post-comment-icon commented">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
          <path
            d="M0 8v33c0 3.252 2.748 6 6 6h8v10c0 .413.254.784.639.933.118.046.24.067.361.067.276 0 .546-.114.74-.327L25.442 47H54c3.252 0 6-2.748 6-6V8c0-3.252-2.748-6-6-6H6C2.748 2 0 4.748 0 8zm40 16c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zm-14 0c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zm-14 0c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4z"
          />
        </svg>
        <span>{{this.totalComments}} Comment(s)</span>
      </div>
    </div>
</template>

<script>
export default {
    props: ['totalComments', 'likes'],
    data: function(){
        return {
            likesCounter: this.likes
        }
    },

    methods: {
        onLike() {
            this.likesCounter++;
        }
    }
}
</script>

<style>

.post > .post-action {
  display: flex;
  align-items: center;
  padding: 20px 0;
}
.post > .post-action .post-like-icon,
.post > .post-action .post-comment-icon {
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
}
.post > .post-action .post-like-icon svg,
.post > .post-action .post-comment-icon svg {
  max-width: 16px;
  width: 100%;
  margin-right: 5px;
  fill: #7f8f94;
  transition: all 0.4s ease-in-out;
}

.post > .post-action .post-like-icon span,
.post > .post-action .post-comment-icon span {
  font-size: 0.77rem;
  height: 10px;
  color: #7f8f94;
  transition: color 0.4s ease-in-out;
}

.post > .post-action .post-like-icon:hover svg,
.post > .post-action .post-comment-icon:hover svg {
  transform: rotate(0deg);
  fill: #516d77;
}

.post > .post-action .post-like-icon:hover span,
.post > .post-action .post-comment-icon:hover span {
  color: #516d77;
}

.post > .post-action .post-like-icon.liked svg,
.post > .post-action .post-comment-icon.commented svg {
  fill: #ff4167;
}

.post > .post-action .post-like-icon.liked span,
.post > .post-action .post-comment-icon.commented span {
  color: #516d77;
}

.post > .post-action .post-like-icon.liked:hover svg {
  transform: rotate(180deg);
  fill: #7f8f94;
}

.post > .post-action .post-like-icon.liked:hover span,
.post > .post-action .post-comment-icon.commented:hover span {
  color: #516d77;
}
</style>