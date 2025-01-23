<script setup>
import AppHeader from './components/AppHeader.vue'
import TheMain from './components/TheMain.vue'
import AppFooter from './components/AppFooter.vue'

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
        <AppHeader @scroll-to-element="scrollToElement" />
    </header>

    <main class="main app-container">
        <!-- Component Main-->
        <TheMain />
    </main>

    <footer class="footer app-container">
        <!-- Component Footer -->
        <AppFooter />
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
