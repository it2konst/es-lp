<script setup>
import SvgHeader from './blocks/icons/SvgHeader.vue'
import MenuMob from './blocks/MenuMob.vue'
import { ref } from 'vue'

const isBurger = ref(false)

const toggleBurger = () => {
    isBurger.value = !isBurger.value
}
</script>

<template>
    <!-- Component MenuMob-->
    <MenuMob v-show="isBurger" @toggleBurger="toggleBurger" :is-burger="isBurger" />

    <div class="header__fixed-wrap d-flex">
        <div class="header__logo d-flex mob-tap">
            <SvgHeader name="icon-logo" size="26" />
            <p>CICCC</p>
        </div>
        <nav class="header__nav d-flex">
            <ul class="header__menu d-flex mob-tap">
                <li class="header__item"><a href="#header" class="header__link">Home</a></li>
                <li class="header__item"><a href="#!" class="header__link">Courses</a></li>
                <li class="header__item"><a href="#!" class="header__link">About</a></li>
                <li class="header__item"><a href="#!" class="header__link">Contacts</a></li>
            </ul>
        </nav>
        <div class="header__burger mob-tap" :class="{ active: isBurger }">
            <SvgHeader name="icon-burger" size="26" @click="toggleBurger" />
        </div>
    </div>
</template>

<style lang="scss">
// Header styles
.header.header--fixed {
    .header__fixed-wrap {
        //---d-flex-center---
        position: fixed;
        padding-top: remClamp(23, 30);
        padding-bottom: remClamp(10, 20);
        transform: translateY(-20%); // Уменьшаем высоту при прокрутке.

        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;

        background-color: #eaf3ffdd;
        backdrop-filter: blur(0.1rem);
    }
}

.header__fixed-wrap {
    //---d-flex---
    justify-content: space-between;
    position: relative;
    z-index: 10;
    flex-wrap: wrap;
    gap: rem(10);
    max-width: calc(remClamp(320, 1230) - rem(30));
    width: 100%;
    padding-inline: rem(15);
    margin: 0 auto;

    transform: translateY(0);
    transition: transform 0.3s ease-in;

    .header__logo {
        //---d-flex---
        gap: rem(6);
        cursor: pointer;

        p {
            font-family: var(--font-family);
            font-weight: 900;
            font-size: rem(20);
            line-height: rem(26);
            letter-spacing: -0.03em;
            color: var(--icon-icon-blue);
        }
    }

    .header__burger {
        display: none;
    }

    .header__nav {
        //---d-flex---
        .header__menu {
            //---d-flex---
            flex-wrap: wrap;
            gap: remClamp(14, 20);

            .header__link {
                position: relative;
                display: block;
                font-family: var(--font-family);
                font-weight: 400;
                font-size: remClamp(14, 18);
                line-height: rem(26);
                color: var(--text-paragraph);

                transition:
                    text-shadow 0.2s ease-in,
                    color 0.2s ease-in;

                &::after {
                    position: absolute;
                    content: '';
                    top: 100%;
                    left: 0;
                    width: 100%;
                    height: 0.1rem;
                    background-color: var(--base-primary-lighten);
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.4s;
                }

                @media (hover: hover) {
                    &:hover,
                    &:focus,
                    &:active {
                        text-shadow:
                            0px 3px 2px rgba(0, 0, 0, 0.2),
                            0px 6px 8px rgba(0, 0, 0, 0.2),
                            0px 12px 24px rgba(0, 0, 0, 0.2);
                    }

                    &:hover::after {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                }

                @media (hover: none) {
                    &:active,
                    &:focus {
                        text-shadow:
                            0px 3px 2px rgba(0, 0, 0, 0.2),
                            0px 6px 8px rgba(0, 0, 0, 0.2),
                            0px 12px 24px rgba(0, 0, 0, 0.2);
                    }

                    &:active::after {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                }
            }
        }
    }

    @include media(md) {
        .header__nav {
            .header__menu {
                display: none;
            }
        }

        .header__burger {
            position: relative;
            display: block;
            cursor: pointer;

            > div:first-of-type {
                opacity: 0.65;

                transition:
                    opacity 0.2s ease-in,
                    transform 0.3s ease-in;

                @include hover-media {
                    opacity: 1;
                }

                &:active {
                    opacity: 1;
                }
            }

            &.active {
                z-index: 11;
                > div:first-of-type {
                    transform: rotate(180deg) scale(1.1);
                }
            }
        }
    }
}
</style>
