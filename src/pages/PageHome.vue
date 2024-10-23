<script>
import ScrollReveal from 'scrollreveal';
import { onMounted, onUnmounted } from 'vue';
export default {
    setup() {
        let observer;

        onMounted(() => {
            const elements = document.querySelectorAll('.jumbo, .style');

            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, 500);
                    } else {
                        entry.target.classList.remove('visible');
                        void entry.target.offsetWidth; // Reset dell'animazione
                    }
                });
            }, {
                threshold: 0.1
            });

            elements.forEach((el) => {
                observer.observe(el);
            });
        });

        onUnmounted(() => {
            if (observer) {
                const elements = document.querySelectorAll('.jumbo');
                elements.forEach((el) => {
                    observer.unobserve(el);
                });
            }
        });
    }
}
</script>

<template>
    <main>
        <video width="100%" height="100%" autoplay muted loop style="position: relative; z-index: 1;">
            <source src="../assets/jumbo-video-2.mp4" type="video/mp4">
        </video>
        <div class="container">
            <div class="row">
                <div class="col-6 mt-5">
                    <h1 class="jumbo">Qui puoi trovare tutto quello che cerchi e finalmente guidare la macchina dei tuoi
                        sogni</h1>
                    <p class="mt-4 jumbo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium natus
                        mollitia
                        alias facere dolore ipsum sunt temporibus tempore eius. Laborum odit error ipsum quidem dolor
                        ullam excepturi ut reprehenderit sint!. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa sit libero impedit in dignissimos? Expedita eaque blanditiis unde, ullam ratione molestiae
                        saepe fugiat animi neque sit quibusdam alias quas exercitationem?</p>
                </div>
                <div class="col-6 mt-5">
                    <img class="jumbotron jumbo" src="../assets/jumbotron.jpeg" alt="">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="col-12 my-5">
                        <h1 class="text-center">Le nostre migliori vendite del 2023/2024</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider w-100 d-flex justify-content-center align-items-center mt-5">
            <div class="slide-track">
                <div class="slide mx-5">
                    <img src=" ../assets/ford-best-sales.avif" alt="">
                    <!-- <strong><h3>Ford Kuga</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src=" ../assets/ford-expedition-best-sales.png" alt="">
                    <!-- <strong><h3>Ford Expedition</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src="../assets/jeep-grand-cherokee-best-sales.png" alt="">
                    <!-- <strong><h3>Jeep Grand Cherokee</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src=" ../assets/ford-best-sales.avif" alt="">
                    <!-- <strong><h3>Ford Kuga</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src=" ../assets/ford-expedition-best-sales.png" alt="">
                    <!-- <strong><h3>Ford Expedition</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src=" ../assets/jeep-grand-cherokee-best-sales.png" alt="">
                    <!-- <strong><h3>Jeep Grand Cherokee</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src=" ../assets/ford-best-sales.avif" alt="">
                    <!-- <strong><h3>Ford Kuga</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src="../assets/ford-expedition-best-sales.png" alt="">
                    <!-- <strong><h3>Ford Expedition</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src=" ../assets/jeep-grand-cherokee-best-sales.png" alt="">
                    <!-- <strong><h3>Jeep Grand Cherokee</h3></strong> -->
                </div>

                <div class="slide mx-5">
                    <img src="../assets/ford-best-sales.avif" alt="">
                    <!-- <strong><h3>Ford Kuga</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src="../assets/ford-expedition-best-sales.png" alt="">
                    <!-- <strong><h3>Ford Expedition</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src=" ../assets/jeep-grand-cherokee-best-sales.png" alt="">
                    <!-- <strong><h3>Jeep Grand Cherokee</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src=" ../assets/ford-best-sales.avif" alt="">
                    <!-- <strong><h3>Ford Kuga</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src="../assets/ford-expedition-best-sales.png" alt="">
                    <!-- <strong><h3>Ford Expedition</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src="../assets/jeep-grand-cherokee-best-sales.png" alt="">
                    <!-- <strong><h3>Jeep Grand Cherokee</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src="../assets/ford-best-sales.avif" alt="">
                    <!-- <strong><h3>Ford Kuga</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src="../assets/ford-expedition-best-sales.png" alt="">
                    <!-- <strong><h3>Ford Expedition</h3></strong> -->
                </div>
                <div class="slide mx-5">
                    <img src=" ../assets/jeep-grand-cherokee-best-sales.png" alt="">
                    <!-- <strong><h3>Jeep Grand Cherokee</h3></strong> -->
                </div>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row text-center">
                <div class="col-12 my-5">
                    <h1 class="text-center">Scegli il giusto stile</h1>
                </div>
                <div class="col-4">
                    <div class>
                        <strong>
                            <h3 class="">avventura e comfort</h3>
                        </strong>
                        <hr>
                        <p>Con le nostre auto partire per una nuova avventura non sara piu un problema,<br> le nostre
                            auto
                            sono dotate di tutto cosi da rendere il viaggio piu piacevole. </p>
                        <img class="adventure style " src=" ../assets/volante-auto.jpg" alt="">
                    </div>
                </div>
                <div class="col-4">
                    <div>
                        <strong>
                            <h3>velocita e sicurezza</h3>
                        </strong>
                        <hr>
                        <p>puoi scegliere sia la potenza pura con le nostre auto sportive e sentire il suono della
                            libertà,
                            oppure goderti il viaggio con la famiglia in totale sicurezza con i nostri suv scoprendo
                            sempre
                            posti meravigliosi.</p>
                        <img class="velocity style" src=" ../assets/ferrari.jpg" alt="">
                    </div>
                </div>
                <div class="col-4">
                    <div>
                        <strong>
                            <h3>Stile</h3>
                        </strong>
                        <hr>
                        <p>Scegli la macchina che fa per te e cambia il tuo stile di vita. Fai la tua scelta</p>
                        <img class="style mt-5" src="../assets/porsche.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row row-cols-5">
                <div class="col"><img class="brand " src=" ../assets/bmw-logo.png"></div>
                <div class="col"> <img class="brand" src="../assets/fiat-logo.png"></div>
                <div class="col"> <img class="brand" src="../assets/ferrari-logo.png" alt="">
                </div>
                <div class="col"> <img class="brand" src="../assets/mercedes-logo.png" alt="">
                </div>
                <div class="col"><img class="brand" src="../assets/jeep-logo.png"></div>
            </div>
        </div>
        <div class="container bg-yellow my-5">
            <div class="row">
                <div class="col-6 mt-5">
                    <h1 class="ms-5">Premium Car<br> Rental</h1>
                    <button class="btn btn-dark mt-3 ms-5"><img class="apple-store me-3"
                            src="../assets/apple-logo.png">Apple Store</button>
                    <button class="btn btn-dark mt-3 ms-5"><img class="play-store me-3"
                            src="../assets/play-store-logo.webp"> Google Play</button>
                </div>
                <div class="col-6 mt-5">
                    <img class="mobile me-3" src="../assets/mobile.png">
                </div>
            </div>
        </div>
    </main>

</template>
<style lang="scss" scoped>
.image {
    width: 500px;
}

.bg {
    background-color: #d3d7e7;
    background-image: linear-gradient(180deg, #d3d7e7 25%, #FFE32C 100%);

}

.logo {
    img {
        width: 100px;
    }
}

.logo_laravel {
    img {
        width: 100px;
    }
}

.jumbotron {
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
}

// .best-sales {
//     width: 500px;
//     height: 70%;
//     object-fit: contain;
// }

.bg-gray {
    background-color: #e6e9f6;
}

.adventure {
    object-fit: cover;
    width: 100%;
    height: 250px;
    border-radius: 20px;
}

.style {
    width: 100%;
    height: 250px;
    object-fit: fill;
    border-radius: 20px;
}

.brand {
    width: 80%;
    height: 200px;
    object-fit: fill;
    margin-top: 100px;
}

.play-store {
    width: 40px;
}

.apple-store {
    width: 35px;
}



.mobile {
    width: 80%;
}

.bg-yellow {
    background-color: #ffa304;
}

.velocity {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
}

.slider {
    height: 250px;
    margin: auto;
    position: relative;
    width: 90%;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.slide-track {
    display: flex;
    width: calc(250px * 18);
    animation: scroll 40s linear infinite;
}

.slide-track:hover {
    animation-play-state: paused;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-250px * 9))
    }
}

.slide {
    height: 200px;
    width: 250px;
    display: flex;
    align-items: center;
    padding: 15px;
    perspective: 100px;
}

.slider {
    .slide-track {
        .slide {
            img {
                width: 300px;
                transition: transform 0.5s;
            }
        }
    }
}


img:hover {
    transform: translateZ(20px);
}

.jumbo-auto {
    position: relative;
    height: 800px;
    overflow: hidden;
    cursor: pointer;
}

.jumbo-auto::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../img/pexels-introspectivedsgn-28862474.jpg');
    background-size: cover;
    background-position: center;
    transition: filter 2s ease;
    filter: blur(8px);
    z-index: 1;
}

.jumbo-auto:hover::before {
    filter: blur(0px);
}

.jumbo-content {
    position: relative;
    color: white;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    text-align: center;
    padding: 20px;
    border-radius: 10px;
}

.jumbo-content h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: rgb(148, 148, 148);

}

.jumbo-content p {
    font-size: 1.2rem;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    color: rgb(146, 146, 146);

}

.gap-index {
    display: flex;
    gap: 20px;
}

.image-card {
    img {
        width: 100%;
        object-fit: cover;
    }
}

.jumbo {
    opacity: 0;
    transform: scale(0.65);
    transition: opacity 1s ease, transform 1s ease;

    &.visible {
        opacity: 1;
        transform: scale(1);
    }
}

.jumbotron:hover {
    scale: 1.1;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.brand:hover {
    scale: 1.1;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}


.style {
    opacity: 0;
    transform: translateY(20px) scale(0.65);
    transition: opacity 2s ease, transform 2s ease;


    &.visible {
        opacity: 1;
        transform: scale(1);
    }
}
</style>