<script>
export default {
    name: 'AutoCard',
    props: {
        car: Object
    }
}
</script>
<template>
        <div class="card">
             <img class="img-card-top" :src="car.image != null ? `http://127.0.0.1:8000/storage/${car.image}` : 'https://placehold.co/600x400?text=Immagine+copertina'">
                 <div class="card-body">
                     <h4 class="card-title">{{ car.brand }}</h4>
                     <p class="card-text">{{ car.model }}</p>
                </div>
         </div>
</template>
<style lang="">
    
</style>