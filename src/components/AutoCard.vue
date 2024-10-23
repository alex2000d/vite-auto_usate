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

.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease; // Transizioni fluide
  
    &:hover {
      transform: scale(1.05); // Ingrandisce la card
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); // Ombra al passaggio del mouse
      transform: rotate(2deg);
    }
  }

  .animated-card {
    opacity: 0; // Inizialmente invisibile
    transform: translateY(20px); // Sposta verso il basso
  
    &.visible {
      opacity: 1; // Rendi visibile
      transform: translateY(0); // Ripristina la posizione originale
      transition: opacity 0.5s ease, transform 0.5s ease; // Transizione fluida
    }
  }
  
  
</style>