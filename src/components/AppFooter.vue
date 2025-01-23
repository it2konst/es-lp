<script setup></script>

<template>
    <div class="footer__container">
        <p class="footer__copyright"><time datetime="2025"></time>A project in development</p>
    </div>
</template>

<style lang="scss">
// Footer styles

.footer__container {
    @include max-w100();
    @include flex-ctr-ctr;

    height: 5rem;
    background-color: #999;

    p {
        font-size: 2rem;
        color: #fff;
    }
}
</style>
