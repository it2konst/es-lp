<script setup>
import Header from './components/Header.vue'
import Main from './components/main/Main.vue'
import Footer from './components/Footer.vue'

import { ref, onMounted } from 'vue'
const headerFixed = ref(null)
const options = {
    threshold: 1,
}
onMounted(() => {
    // window.addEventListener('scroll', () => {
    //     const header = document.getElementById('header')
    //     header.classList.toggle('header--active', window.scrollY > 0)
    // })
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                headerFixed.value?.classList.add('header--fixed')
                // setTimeout(() => {
                //     headerFixed.value?.classList.remove('header--fixed')
                // }, 5000)
            } else {
                headerFixed.value?.classList.remove('header--fixed')
            }
        })
    }, options)
    if (headerFixed.value) observer.observe(headerFixed.value)
})
</script>

<template>
    <header ref="headerFixed" class="header" id="header">
        <!-- Component Header-->
        <Header />
    </header>

    <main class="main">
        <!-- Component Main-->
        <Main />
    </main>

    <footer class="footer">
        <!-- Component Footer -->
        <Footer />
    </footer>
</template>

<style lang="scss">
.header {
    margin: 0 auto;
    max-width: rem(1900);
    width: 100%;
    height: remClamp(72, 86);
    background-color: var(--bg-section-blue-40);
}

.main {
    width: 100%;
    // background-color: #ccc;
}

.footer {
    width: 100%;
}
</style>
