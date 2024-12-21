<script setup>
import vAnimate from './../../directives/v-animate'
import FormCta from './../blocks/FormCta.vue'
import imgTeacher from '@/assets/images/hero/hero-teacher.webp'
import imgStudent from '@/assets/images/hero/hero-student.webp'
</script>

<template>
    <section class="hero">
        <div class="hero__container">
            <div class="container">
                <div class="hero__title-box d-flex">
                    <h1 class="app__h1 opacity-0" v-animate="{}">Study English To Boost Your Career Or Pass An Immigration Exam</h1>
                    <p class="app__p opacity-0" v-animate="{}">Canadian International Community College offers a wide range of English courses for language development and academic growth</p>
                </div>
            </div>
            <div class="hero__col">
                <div class="hero__col-item opacity-0" v-animate="{ animation: 'animate__zoomInLeft' }">
                    <img :src="imgTeacher" alt="Person Teacher" class="hero__image" />
                </div>
                <div class="hero__col-item">
                    <!-- Component FormCta-->
                    <FormCta v-animate="{}" />
                </div>
                <div class="hero__col-item opacity-0" v-animate="{ animation: 'animate__zoomInRight' }">
                    <img :src="imgStudent" alt="Person Student" class="hero__image" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
// Main styles
.hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    padding-top: remClamp(30, 40);
    width: 100%;
    background-color: transparent;
    overflow: hidden;

    .hero__container {
        width: 100%;
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;

            width: rem(1940);
            height: 100%;

            background-color: var(--bg-section-blue-40);
            border-bottom-left-radius: 50%;
            border-bottom-right-radius: 50%;

            @include media(md) {
                width: rem(900);
                height: 78%;
            }
        }
    }

    .hero__title-box {
        //---d-flex---
        margin: 0 auto;

        gap: rem(24);
        flex-direction: column;
        margin-bottom: rem(40);

        max-width: remClamp(320, 842);
        width: 100%;
        .app__p {
            max-width: remClamp(320, 680);
            width: 100%;
        }

        @include media(sm) {
            align-items: start;
        }
    }

    .hero__col {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: rem(35);
        padding-inline: rem(20);

        @include media(xl) {
            justify-content: center;
        }

        @include media(md) {
            flex-wrap: wrap;
        }

        .hero__col-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            &:nth-of-type(1) {
                transform: translate(4%, -23%) rotate(-7deg);
                width: 100%;
                img {
                    max-width: remClamp(320, 396);
                }
                @include media(xl) {
                    display: none;
                    transform: unset;
                }
            }

            &:nth-of-type(2) {
                align-self: flex-start;
                width: 100%;
                @include media(xl) {
                    align-self: unset;
                    margin-left: auto;
                }
            }

            &:nth-of-type(3) {
                transform: translate(-4%, -23%) rotate(9deg);
                width: 100%;
                img {
                    max-width: remClamp(320, 382);
                }
                @include media(xl) {
                    transform: unset;
                    margin-right: auto;
                }
            }
        }
    }
}

// @use './../../assets/styles/mixins' as mix;
// @use './../../assets/styles/mixins' as *;
// width: mix.remClamp(100, 500);
// width: remClamp(100, 500);
// width: rem(200);
</style>
