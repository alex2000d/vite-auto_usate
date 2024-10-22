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
        <div class="card">
            <img class="img-card-top"
                :src="car.image && car.image.startsWith('http') ? car.image : `http://127.0.0.1:8000/storage/${car.image}`">
            <div class=" card-body">
                <h4 class="card-title">{{ car.brand }}</h4>
                <p class="card-text">{{ car.model }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.img-card-top {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
</style>