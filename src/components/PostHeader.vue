<template>
    <!-- Component: PostHeader -->
    <div class="post-header">
        <div class="post-header-profile-image">
            <div class="post-header-image-board">
                <img :src="this.image" alt="Profile Image" />
            </div>
        </div>
        <div class="post-header-pofile-name">
            <div class="profile-name">{{this.name}}</div>
            <div class="post-date">{{this.date}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'date', 'image']
}
</script>

<style scoped>
.post-header {
  display: flex;
  align-items: center;
}

.post-header .post-header-image-board {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 1px 1px 10px rgba(82, 109, 194, 0.1);
}

.post-header .post-header-image-board img {
  width: 58px;
  height: auto;
}

.post-header .post-header-pofile-name {
  margin-left: 10px;
}

.post-header .post-header-pofile-name .profile-name {
  cursor: pointer;
  margin-bottom: 2px;
  font-weight: 600;
}
.post-header .post-header-pofile-name .post-date {
  font-size: 0.75rem;
}
</style>