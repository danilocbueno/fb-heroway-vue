<template>
    <div>
        <!-- Component: PostContent -->
        <div class="post-content">
            <slot></slot>
        </div>
        <div class="post-image">
            <div class="post-image-board">
                <img src="../assets/img/post-image.jpg" alt="Profile Image" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.post-content {
  margin: 20px 0;
}

.post-image .post-image-board {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 420px;
  overflow: hidden;
  border-radius: 6px;
}
.post-image img {
  width: 100%;
  min-width: 400px;
}
</style>