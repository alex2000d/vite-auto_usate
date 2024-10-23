<script>
import { router } from '../router';
export default {

}
</script>
<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-4 mt-5">
                    <ul class="d-flex justify-content-center list-unstyled">
                        <li class="me-3">
                            <router-link :to="{ name: 'home' }"
                                class="text-decoration-none text-white menu">Home</router-link>
                        </li>
                        <li class="me-3">
                            <router-link :to="{ name: 'auto' }"
                                class="text-decoration-none text-white menu">Auto</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-4 d-flex justify-content-center">
                    <img class="logo" src="../assets/logo.png" alt="">
                </div>
            </div>
        </div>
    </header>

</template>
<style lang="scss" scoped>
header {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 1rem 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

img {
    width: 350px;
    position: absolute;
    top: -100px;
}
</style>