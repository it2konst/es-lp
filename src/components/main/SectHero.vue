<script setup>
import FormCta from './../blocks/FormCta.vue'
import imgTeacher from '@/assets/images/hero/hero-teacher.webp'
import imgStudent from '@/assets/images/hero/hero-student.webp'
import imgBackground from '@/assets/images/hero/hero-bg.svg'
</script>

<template>
    <section class="hero">
        <div class="hero__bg">
            <img :src="imgBackground" alt="Background" />
        </div>
        <div class="hero__container">
            <div class="hero__title-box container d-flex">
                <h1 class="app__h1">
                    Study English To Boost Your Career Or Pass An Immigration Exam
                </h1>
                <p class="app__p">
                    Canadian International Community College offers a wide range of English courses
                    for language development and academic growth
                </p>
            </div>
            <div class="hero__col d-flex">
                <div class="hero__col-item">
                    <img :src="imgTeacher" class="hero__image" alt="Person Teacher" />
                </div>
                <div class="hero__col-item">
                    <!-- Component FormCta-->
                    <FormCta />
                </div>
                <div class="hero__col-item">
                    <img :src="imgStudent" class="hero__image" alt="Person Student" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
// Main styles

.hero {
    position: relative;
    padding-top: remClamp(30, 40);
    width: 100%;
    background-color: transparent;

    .hero__bg {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -10%);
        width: rem(1440);
        height: rem(950);
        z-index: -1;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

.hero__title-box {
    //---d-flex---
    gap: rem(24);
    flex-direction: column;
    margin-bottom: rem(40);

    max-width: remClamp(320, 842);
    width: 100%;

    .app__p {
        max-width: remClamp(320, 680);
    }

    @include media(sm) {
        align-items: start;
    }
}

.hero__col {
    //---d-flex---
    position: relative;
    justify-content: space-between;
    width: 100%;
    gap: rem(35);

    @include media(md) {
        justify-content: center;
        flex-wrap: wrap;
    }

    &-item {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        max-width: 100%;

        img {
            display: block;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    &-item:nth-child(1) {
        max-width: remClamp(320, 398);
        transform: translate(8%, -24%) rotate(-7deg);

        @include media(md) {
            display: none;
            transform: unset;
        }
    }

    &-item:nth-child(2) {
        align-self: flex-start;
    }

    &-item:nth-child(3) {
        max-width: remClamp(320, 382);
        transform: translate(-8%, -24%) rotate(9deg);

        @include media(md) {
            transform: unset;
        }
    }
}

.hero__cta {
    border: 1px solid var(--base-borderline-250);
    border-radius: rem(24);
    padding: rem(28) rem(24);
    width: rem(320);
    height: rem(351);

    box-shadow: 0 32px 64px -12px rgba(98, 173, 226, 0.5);
    background: var(--white);
}

// @use './../../assets/styles/mixins' as mix;
// @use './../../assets/styles/mixins' as *;
// width: mix.remClamp(100, 500);
// width: remClamp(100, 500);
// width: rem(200);
</style>
