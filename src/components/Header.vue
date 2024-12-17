<script setup>
import SvgHeader from './blocks/icons/SvgHeader.vue'

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
            <SvgHeader name="icon-logo" size="26" />
            <p>CICCC</p>
        </div>
        <nav class="header__nav d-flex mob-tap">
            <ul class="header__menu d-flex">
                <li class="header__item"><a href="#!" class="header__link">Home</a></li>
                <li class="header__item"><a href="#!" class="header__link">Courses</a></li>
                <li class="header__item"><a href="#!" class="header__link">About</a></li>
                <li class="header__item"><a href="#!" class="header__link">Contacts</a></li>
            </ul>
            <transition name="menu-mob">
                <ul v-show="isBurger" class="header__menu-mob d-flex" :class="{ active: isBurger }">
                    <li class="header__item" @click="toggleBurger">
                        <a href="#header" class="header__link">Home</a>
                    </li>
                    <li class="header__item" @click="toggleBurger">
                        <a href="#!" class="header__link">Courses</a>
                    </li>
                    <li class="header__item" @click="toggleBurger">
                        <a href="#!" class="header__link">About</a>
                    </li>
                    <li class="header__item" @click="toggleBurger">
                        <a href="#!" class="header__link">Contacts</a>
                    </li>
                </ul>
            </transition>
        </nav>
        <div class="header__burger mob-tap" :class="{ active: isBurger }">
            <SvgHeader name="icon-burger" size="26" @click="isBurger = !isBurger" />
            <div class="header__overlay" @click="isBurger = !isBurger"></div>
        </div>
    </div>
</template>

<style lang="scss">
// Header styles
.header.header--fixed {
    .header__fixed-wrap {
        //---d-flex-center---
        position: fixed;
        // inset: 0;
        // left: 0;
        // right: 0;
        transform: translateY(-20%);
        // transform: translateY(30%); // Уменьшаем высоту при прокрутке.
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;

        background-color: #eaf3ffdd;
        backdrop-filter: blur(0.1rem);

        padding-top: remClamp(23, 30);
        padding-bottom: remClamp(10, 20);
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

    margin: 0 auto;
    padding-inline: rem(15);
    // padding-top: remClamp(23, 30);
    // padding-bottom: remClamp(10, 16);
    // padding-inline: rem(15);

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
        // margin-left: auto;
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
                // font-size: 14px;
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

        .header__menu-mob {
            position: fixed;
            z-index: 12;
            top: 0;
            left: -0.5rem;
            // top: -1rem;
            // left: -1rem;
            //---d-flex---
            flex-direction: column;
            gap: 0.6rem;

            max-width: 17rem;
            width: 100%;
            padding: 2rem;

            background-color: var(--bg-card);

            border-bottom-right-radius: 2rem;
            box-shadow:
                rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

            .header__item {
                width: 100%;
                height: 2.2rem;
                border-radius: 2rem;

                text-shadow:
                    0px 3px 2px rgba(0, 0, 0, 0.2),
                    0px 6px 8px rgba(0, 0, 0, 0.2),
                    0px 12px 24px rgba(0, 0, 0, 0.2);

                transition:
                    background-color 0.2s ease-in,
                    box-shadow 0.2s ease-in;
                @include hover-media {
                    background-color: var(--bg-card-lighten);
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                }
                &:active {
                    background-color: var(--bg-card-lighten);
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                }
            }

            .header__link {
                display: block;
                max-width: 100%;
                text-align: center;

                font-family: var(--font-family);
                font-weight: 400;
                font-size: rem(20);
                line-height: 2.2rem;
                color: var(--text-paragraph);
                text-transform: uppercase;
            }

            &::before,
            &::after {
                content: '';
                display: block;
                height: 0.2rem;
                width: 80%;
                background-color: var(--bg-card-lighten);
            }

            &.active {
                &::before {
                    width: 0;
                    animation: move 0.4s ease-in 0.2s forwards;
                }

                &::after {
                    width: 0;
                    animation: move 0.4s ease-in 0.4s forwards;
                }
            }
        }

        .menu-mob-enter-active,
        .menu-mob-leave-active {
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

    @include media(md) {
        .header__nav {
            margin-left: unset;
            .header__menu {
                display: none;
            }
        }

        .header__burger {
            position: relative;
            display: block;
            // margin-left: auto;
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

                .header__overlay {
                    position: fixed;
                    z-index: -1;
                    top: 0;
                    left: -0.5rem;
                    width: 100vw;
                    height: 110vh;

                    background-color: rgba(0, 0, 0, 0.1);

                    opacity: 0;
                    animation: opacity 0.4s ease-in 0.2s forwards;
                }
            }
        }
    }
}

@keyframes move {
    from {
        width: 0%;
    }
    to {
        width: 80%;
    }
}

@keyframes opacity {
    from {
        opacity: 0;
    }
    to {
        opacity: 100%;
    }
}
</style>
