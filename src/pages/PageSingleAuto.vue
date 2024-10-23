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
                <p>{{ auto.year }}</p>
                <p>{{ auto.color }}</p>
                <p>{{ auto.horsepower }}</p>
                <p>{{ auto.fuel_type }}</p>
                <p>{{ auto.doors }}</p>
                <p>{{ auto.mileage }}</p>
                <p>{{ auto.change_type }}</p>
                <p>{{ auto.quantity }}</p>
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
                    <p>Non ci sono tecnologie associate a questo progetto.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>