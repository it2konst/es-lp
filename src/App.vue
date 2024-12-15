<script setup>
import Header from './components/Header.vue'
import Main from './components/main/Main.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <header class="header" id="header">
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
