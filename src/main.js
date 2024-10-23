import { createApp } from 'vue'
import { router } from './router.js'
import App from './App.vue'
import scrollreveal from 'scrollreveal'

createApp(App).use(router).use(scrollreveal).mount('#app')

// animazione menu
ScrollReveal().reveal('.menu', { duration: 2000, delay: 900, interval: 400 });
ScrollReveal().reveal('.menu-footer', { duration: 2000, delay: 200, interval: 10 });
ScrollReveal().reveal('.logo', { duration: 2000, delay: 300, interval: 400 });
// animazioni jumbo


// animazione stile
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.style');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 500); // delay di 500 ms
            }
        });
    });

    elements.forEach((el, index) => {
        observer.observe(el);
    });
});

