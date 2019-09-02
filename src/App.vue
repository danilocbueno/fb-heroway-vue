<template>
    <div id="app">
        
        <vheader></vheader> 
        <section class="main">
            <feed></feed>
            <profile-sidebar></profile-sidebar>
        </section>

    </div>
</template>

<script>
import Vheader from './components/Vheader.vue';
import Feed from './components/Feed.vue';
import ProfileSidebar from './components/ProfileSidebar.vue';

export default {
  name: 'app',
  components : {
    Vheader, Feed, ProfileSidebar
  }
}
</script>

<style scoped>
#app {
    font-size: 16px;
    font-family: 'Varela Round';
    color: #516d77;
}

@media (max-width: 575.98px) {
    #app {
        font-size: 18px;
    }
}

.main {
    position: relative;
    display: flex;
    margin-top: 50px;
}

.main > .feed {
    width: calc(100% - 350px);
    min-height: calc(100vh - 50px);
    background-color: #F5F6FB;
}

.main > .feed > .container {
    width: 72%;
    margin: 50px auto;
}


.main > .profile {
    width: 350px;
    right: 0;
    min-height: calc(100vh - 50px);
    padding: 50px;
    position: fixed;
    z-index: 5;
}


@media (max-width: 575.98px) {
    .main > .feed {
        width: 100%;
        min-width: 299px;
    }
    
    .main > .feed > .container {
        width: 90%;
    }

    .main > .profile {
        display: none;
    }
}

@media (min-width: 576px) and (max-width: 767.98px) {
    .main > .feed {
        width: 100%;
    }
    
    .main > .feed > .container {
        width: 90%;
    }

    .main > .profile {
        display: none;
    }
}

@media (min-width: 768px) and (max-width: 991.98px) { 

    .main > .feed {
        width: calc(100% - 280px);
    }
    
    .main > .feed > .container {
        width: 90%;
    }

    .main > .profile {
        width: 280px;
    }
}
</style>
