<script setup>
import Header from './components/Header.vue'
import Main from './components/main/Main.vue'
import Footer from './components/Footer.vue'

import { ref, onMounted, onUnmounted } from 'vue'
const headerFixed = ref(null)
let observer = null
const options = {
    threshold: 0.5,
}

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                headerFixed.value?.classList.add('header--fixed')
            } else {
                headerFixed.value?.classList.remove('header--fixed')
            }
        })
    }, options)
    if (headerFixed.value) observer.observe(headerFixed.value)
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})

function scrollToElement() {
    if (headerFixed.value) {
        headerFixed.value.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <header class="header app-container" id="header" ref="headerFixed">
        <!-- Component Header-->
        <Header @scroll-to-element="scrollToElement" />
    </header>

    <main class="main app-container">
        <!-- Component Main-->
        <Main />
    </main>

    <footer class="footer app-container">
        <!-- Component Footer -->
        <Footer />
    </footer>
</template>

<style lang="scss">
.header {
    position: relative;
    display: flex;
    justify-content: center;
}

.main {
    flex: 1;
}

// .footer {
// align-self: center;
// }
</style>
