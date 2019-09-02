<template>
    <div class="feed">
        <div class="container">
            <post v-for="post in shared.posts" 
                :key="post.id"
                :post="post"></post>
            </div>
    </div>
</template>

<script>
import Post from './Post.vue';
import { store } from '../store.js';

export default {
    components: {
        Post
    },
    
    data() {
        return {
            shared: store.state
        }
    },

    mounted() {
        this.$http
            .get('https://us-central1-heroway-react-facebook.cloudfunctions.net/app/posts')
            .then(response => store.storePosts(response.data.posts));
    }

}
</script>