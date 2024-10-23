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
                this.autos = results.data.results.data;
                this.last_page = results.data.results.last_page
                this.current_page = results.data.results.current_page
            });
        }, goToPage(page) {
            axios.get('http://127.0.0.1:8000/api/autos?page=' + page).then((results) => {
                this.autos = results.data.results.data;
                this.current_page = results.data.results.current_page
            });
        },
        visiblePages() {
            let pages = [];

            // Aggiungi sempre la prima pagina
            pages.push(1);

            // Determina le pagine intermedie dinamiche
            let startPage = Math.max(2, this.current_page - 1);  // Inizia da current_page - 1, ma non sotto 2 (per evitare di includere 1)
            let endPage = Math.min(this.last_page - 1, this.current_page + 1);  // Fino a current_page + 1, ma non oltre la penultima pagina

            // Aggiungi le pagine intermedie, massimo 3 pagine
            for (let i = startPage; i <= endPage && pages.length < 4; i++) {
                pages.push(i);
            }

            // Aggiungi sempre l'ultima pagina se non è già inclusa
            if (this.last_page > 1 && !pages.includes(this.last_page)) {
                pages.push(this.last_page);
            }

            return pages;
        }

    },
}
</script>
<template>
    <div class="container margin">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-5">Elenco delle auto</h1>
            </div>
        </div>
        <div class="row">
            <AutoCard v-for="auto in autos" :key="auto.id" :car="auto" />
            <div class="col-12 mt-5">
                <nav aria-label="Page navigation example">
                    <ul class="pagination d-flex justify-content-center">
                        <li class="page-item" :class="{ disabled: current_page === 1 }"><a class="page-link" href="#"
                                @click="goToPage(current_page - 1)">Previous</a></li>

                        <li class="page-item" v-for="i in visiblePages()" :key="i"
                            :class="{ active: i === current_page }">
                            <a class="page-link" href="#" @click="goToPage(i)">{{ i }}</a>
                        </li>

                        <li class="page-item" :class="{ disabled: current_page === last_page }"><a class="page-link"
                                href="#" @click="goToPage(current_page + 1)">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    margin-top: 200px;
}
</style>