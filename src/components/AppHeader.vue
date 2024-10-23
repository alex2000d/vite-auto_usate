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
                            <router-link :to="{ name: 'home' }" class="text-decoration-none text-white menu">Home</router-link>
                        </li>
                        <li class="me-3">
                            <router-link :to="{ name: 'auto' }" class="text-decoration-none text-white menu">Auto</router-link>
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
    background-color: black
}

.logo {
    width: 120px;
}


  
</style>