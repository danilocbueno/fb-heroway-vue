<template>
    <!-- Component: ProfileSidebar -->
    <div class="profile">
        <!-- Component: ProfileInfo -->
        <div class="profile-image">
            <typing/>
            <div class="image-board">
                <img src="../assets/img/person1.jpg" alt="Profile Image" />
            </div>
        </div>
        <div class="profile-name">
            <span>Amarilda Curvada</span>
        </div>
        <div class="profile-info">
            <div>
                <span>347</span>
                <span>Followers</span>
            </div>
            <div>
                <span>94</span>
                <span>Following</span>
            </div>
        </div>
    </div>
</template>

<script>
import Typing from './Typing.vue';

export default {
    components: {
        Typing
    }
}
</script>

<style>
.profile {
    box-shadow: 1px 1px 10px rgba(82, 109, 194, 0.1);
}
.profile > .profile-image {
    width: 120px;
    height: 120px;
    margin: 0 auto;

    position: relative;
}

.profile > .profile-image .image-board {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border-radius: 100%;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 1px 1px 10px rgba(82, 109, 194, 0.1);
}

.profile > .profile-name {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-weight: 600;
}

.profile > .profile-image .image-board img {
    max-width: 200px;
}

.profile > .profile-info {
    display: flex;
    margin: 40px 0;
}

.profile > .profile-info > div {
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.profile > .profile-info > div > span:nth-child(1) {
    color: #526DC2;
}
.profile > .profile-info > div > span:nth-child(2) {
    font-size: 0.66rem;
    text-transform: uppercase;
    padding: 5px;
}

.profile > .profile-share {
    display: flex;
    justify-content: center;
}
</style>