<script>
export default {
    name: 'AutoCard',
    props: {
        car: Object
    }
}
</script>
<template>
    <div class="col-4 mb-3">
        <router-link class="text-decoration-none" :to="{ name: 'single-auto', params: { slug: car.slug } }">
            <div class="card min-h">
                <img class="img-card-top w-100"
                    :src="car.image && car.image.startsWith('http') ? car.image : `http://127.0.0.1:8000/storage/${car.image}`">
                <div class=" card-body">
                    <h4 class="card-title">{{ car.brand }}</h4>
                    <p class="card-text">{{ car.model }}</p>
                    <p class="card-text text-end fs-5"><strong>{{ car.price }}&euro;</strong></p>
                </div>
            </div>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
.img-card-top {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    min-height: 280px;
}

.min-h {
    min-height: 350px;
}
</style>