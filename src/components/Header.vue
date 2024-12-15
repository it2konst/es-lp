<script setup>
import imgLogo from '@/assets/images/logo.svg'
import imgBurger from '@/assets/images/header/burger.svg'

import { ref } from 'vue'

const isBurger = ref(false)

const toggleBurger = () => {
    isBurger.value = !isBurger.value
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // })
}
</script>

<template>
    <div class="header__fixed-wrap d-flex">
        <div class="header__logo d-flex">
            <img :src="imgLogo" width="26" height="26" alt="Logo" />
            <p>CICCC</p>
        </div>
        <nav class="header__nav d-flex">
            <ul class="header__menu d-flex">
                <li class="header__item"><a href="#!" class="header__link">Home</a></li>
                <li class="header__item"><a href="#!" class="header__link">Programs</a></li>
                <li class="header__item"><a href="#!" class="header__link">About</a></li>
                <li class="header__item"><a href="#!" class="header__link">Contact</a></li>
            </ul>
            <transition name="menu-mob">
                <ul v-show="isBurger" @click="toggleBurger" class="header__menu-mob d-flex">
                    <li class="header__item">
                        <a href="#header" class="header__link">Home</a>
                    </li>
                    <li class="header__item">
                        <a href="#!" class="header__link">Programs</a>
                    </li>
                    <li class="header__item">
                        <a href="#!" class="header__link">About</a>
                    </li>
                    <li class="header__item">
                        <a href="#!" class="header__link">Contact</a>
                    </li>
                </ul>
            </transition>
        </nav>
        <div class="header__burger" :class="{ active: isBurger }">
            <img
                :src="imgBurger"
                alt="Burger Button"
                width="26"
                height="26"
                @click="isBurger = !isBurger"
            />
        </div>
    </div>
</template>

<style lang="scss">
// Header styles

.header__fixed-wrap {
    //---d-flex---
    flex-wrap: wrap;
    gap: rem(10);
    width: 100%;

    position: fixed;
    z-index: 10;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: rem(1200);

    padding-top: remClamp(23, 30);
    padding-bottom: remClamp(10, 16);
    padding-inline: rem(15);

    border-bottom-left-radius: 1rem;
    // border-bottom-right-radius: 1rem;
    background-color: #eaf3ffee;

    .header__burger {
        display: none;
    }

    @include media(md) {
        .header__nav {
            margin-left: unset;
            .header__menu {
                display: none;
            }
        }
        .header__burger {
            display: block;
            margin-left: auto;
            cursor: pointer;
            user-select: none;

            transition: transform 0.3s ease-in;
            &.active {
                transform: rotate(180deg) scale(0.9);
            }
        }
    }

    .header__logo {
        //---d-flex---
        gap: rem(6);
        cursor: pointer;

        img {
            display: block;
        }

        p {
            font-family: var(--font-family);
            font-weight: 900;
            font-size: rem(20);
            line-height: rem(26);
            letter-spacing: -0.03em;
            color: var(--icon-icon-blue);
        }
    }

    .header__nav {
        //---d-flex---
        margin-left: auto;
        .header__menu {
            //---d-flex---
            flex-wrap: wrap;
            gap: remClamp(14, 20);

            .header__link {
                display: block;
                font-family: var(--font-family);
                font-weight: 400;
                font-size: remClamp(14, 18);
                line-height: rem(26);
                color: var(--text-paragraph);

                border-bottom: 1px solid transparent;
                transition:
                    color 0.2s ease-in,
                    border-color 0.4s ease-in;

                @include hover-media {
                    color: var(--base-primary-darken);
                    border-color: var(--base-primary-lighten);
                }

                &:active {
                    color: var(--base-primary-darken);
                    border-color: var(--base-primary-lighten);
                }
            }
        }

        .header__menu-mob {
            //---d-flex---
            flex-direction: column;
            gap: 0.6rem;

            max-width: 18rem;
            width: 100%;
            padding: 3rem;

            position: fixed;
            top: 0;
            left: 0;
            z-index: 11;

            background-color: var(--bg-card);

            border-bottom-right-radius: 2rem;
            box-shadow:
                rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

            .header__item {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                border-radius: 2rem;

                transition: background-color 0.2s ease-in;

                @include hover-media {
                    background-color: var(--bg-card-lighten);
                }

                &:active {
                    background-color: var(--bg-card-lighten);
                }
            }

            .header__link {
                display: block;
                width: 100%;
                text-align: center;
                font-family: var(--font-family);
                font-weight: 400;
                font-size: rem(20);
                line-height: 2;
                color: var(--text-paragraph);
                text-transform: uppercase;
            }

            &::before {
                content: '';
                display: block;
                height: 0.2rem;
                width: 80%;
                background-color: var(--bg-card-lighten);
            }

            &::after {
                content: '';
                display: block;
                height: 0.2rem;
                width: 80%;
                background-color: var(--bg-card-lighten);
            }
        }

        .menu-mob-enter-active,
        .menu-mob-leave-active {
            // transition: opacity 0.5s ease;
            transition: 0.5s ease all;
        }
        .menu-mob-enter-from,
        .menu-mob-leave-to {
            transform: translateX(-20rem);
        }

        .menu-mob-enter-to {
            transform: translateX(0);
        }
    }
}
</style>
