<script>
import axios from 'axios';
import AutoCard from '../components/AutoCard.vue';

export default {
    components: {
        AutoCard
    },
    data() {
        return {
            autos: [],
        }
    },
    created() {
        this.getAutos();
    },
    methods: {
        getAutos() {
            axios.get('http://127.0.0.1:8000/api/autos').then((results) => {
                this.autos = results.data.results;
            });
        }
    },
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-5">Elenco delle auto</h1>
            </div>
        </div>
        <div class="row">
            <AutoCard v-for="auto in autos" :key="auto.id" :car="auto" />
        </div>
    </div>
</template>
<style lang="">

</style>