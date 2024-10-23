<script>
import axios from 'axios'
import { store } from '../store.js'
export default {
    data() {
        return {
            store,
            auto: null
        }
    }, methods: {
        getAuto() {
            axios.get(`${store.baseUrl}/autos/${this.$route.params.slug}`).then((res) => {
                if (res.data.success) {
                    this.auto = res.data.results
                }
            })
        }
    }, created() {
        this.getAuto();
    }
}
</script>
<template>
    <div class="container-fluid" v-if="auto">
        <div class="row">
            <div class="col-6 d-flex mt-5">
                <img :src="auto.image && auto.image.startsWith('http') ? auto.image : `http://127.0.0.1:8000/storage/${auto.image}`"
                    class="img-fluid" alt="">
            </div>
            <div class="col-6 mt-5">
                <h1>
                    {{ auto.brand }} <span class="fw-normal">{{ auto.model }}</span>
                </h1>
                <p> anno: {{ auto.year }}</p>
                <p> colore: {{ auto.color }}</p>
                <p> cavalli: {{ auto.horsepower }}</p>
                <p>carburante: {{ auto.fuel_type }}</p>
                <p> numero di porte: {{ auto.doors }}</p>
                <p> kilometri: {{ auto.mileage }}</p>
                <p> cambio: {{ auto.change_type }}</p>
                <p> quantità: {{ auto.quantity }}</p>
                <p>{{ auto.status }}</p>
                <div v-if="auto.optionals.length > 0">
                    <h4>Optional disponibili:</h4>
                    <ul class="list-unstyled">
                        <li v-for="(optional, index) in auto.optionals" :key="index">
                            {{ optional.optionals }}
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <p>nessun optionl disponibile.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>