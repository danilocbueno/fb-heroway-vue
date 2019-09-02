<template>
   <div class="comment">
        <div class="comment-profile-image">
          <div class="comment-image-board">
            <img :src="comment.image" alt="Profile Image" />
          </div>
        </div>
        <div class="comment-content">
          <div class="comment-profile-name">{{comment.name}}</div>
          <div class="comment-text">
            {{comment.comment}}
          </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['comment']
}
</script>

<style scoped>

.post-comments .comment-image-board {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 10px rgba(82, 109, 194, 0.1);
}

.post-comments .comment-image-board img {
  width: 58px;
  height: auto;
}

.post-comments .comment {
  display: flex;
  padding: 10px;
  background-color: #f8f8f8;
  margin-bottom: 10px;
  border-radius: 6px;
}

.post-comments .comment .comment-profile-image {
  margin-right: 10px;
}

.post-comments .comment .comment-profile-name {
  cursor: pointer;
  margin-bottom: 2px;
  font-weight: 600;
  font-size: 0.88rem;
}

.post-comments .comment .comment-text {
  font-size: 0.88rem;
}
</style>