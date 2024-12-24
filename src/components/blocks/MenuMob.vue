<script setup>
const emit = defineEmits(['toggleBurger'])

const props = defineProps({
    isBurger: Boolean,
})
</script>

<template>
    <transition name="menu-mob">
        <nav class="menu-mob__overlay" :class="{ 'menu-mob__overlay--active': props.isBurger }" @click="emit('toggleBurger')" aria-label="Burger menu">
            <ul class="menu-mob__list d-flex mob-tap">
                <li class="menu-mob__item">
                    <a href="#header" class="menu-mob__link" aria-label="Home">Home</a>
                </li>
                <li class="menu-mob__item">
                    <a href="#!" class="menu-mob__link" aria-label="Courses">Courses</a>
                </li>
                <li class="menu-mob__item">
                    <a href="#!" class="menu-mob__link" aria-label="About">About</a>
                </li>
                <li class="menu-mob__item">
                    <a href="#!" class="menu-mob__link" aria-label="Contacts">Contacts</a>
                </li>
            </ul>
        </nav>
    </transition>
</template>

<style lang="scss">
// ---transition menu-mob
.menu-mob-enter-active,
.menu-mob-leave-active {
    transition: 0.3s ease all;
}
.menu-mob-enter-from,
.menu-mob-leave-to {
    transform: translateX(-20rem);
    background-color: rgba(0, 0, 0, 0);
}
.menu-mob-enter-to {
    transform: translateX(0);
    background-color: rgba(0, 0, 0, 0);
}
// ---animations menu-mob
@keyframes mob-overlay-bgcolor {
    from {
        background-color: rgba(0, 0, 0, 0);
    }
    to {
        background-color: rgba(0, 0, 0, 0.2);
    }
}
@keyframes mob-list-width {
    from {
        width: 0%;
    }
    to {
        width: 80%;
    }
}
// ---menu-mob
.menu-mob__overlay {
    // display: flex;
    position: fixed;
    z-index: 99;
    inset: 0;
    background-color: transparent;

    &.menu-mob__overlay--active {
        animation: mob-overlay-bgcolor 0.3s ease-in 0.3s forwards;

        .menu-mob__list {
            &::before {
                width: 0;
                animation: mob-list-width 0.3s ease-in 0.3s forwards;
            }

            &::after {
                width: 0;
                animation: mob-list-width 0.3s ease-in 0.5s forwards;
            }
        }
    }

    .menu-mob__list {
        //---d-flex---
        flex-direction: column;
        gap: 0.6rem;

        max-width: 17rem; // 272px
        width: 100%;
        padding: 2rem; // 32px

        box-shadow:
            rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
            rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        background-color: var(--bg-card);
        border-bottom-right-radius: 2rem;

        .menu-mob__item {
            width: 100%;
            height: 2.2rem;
            border-radius: 2rem;

            text-shadow:
                0px 3px 2px rgba(0, 0, 0, 0.1),
                0px 6px 8px rgba(0, 0, 0, 0.1),
                0px 12px 24px rgba(0, 0, 0, 0.1);

            transition:
                background-color 0.2s ease-in,
                box-shadow 0.2s ease-in;

            &:hover {
                @media (hover: hover) {
                    background-color: var(--bg-card-lighten);
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                }
            }

            &:active {
                background-color: var(--bg-card-lighten);
            }
        }

        .menu-mob__link {
            display: block;
            max-width: 100%;
            text-align: center;

            font-family: var(--font-family);
            // font-weight: 400;
            font-weight: bold;
            font-size: 1.25rem; // 20px
            line-height: 2.25rem; // 36px
            color: var(--text-paragraph);
            text-transform: uppercase;
            opacity: 0.75;

            transition: opacity 0.2s ease-in;

            &:hover {
                @media (hover: hover) {
                    opacity: 1;
                }
            }

            &:active {
                transition: opacity 0.1s ease-in;
                opacity: 1;
            }
        }

        &::before,
        &::after {
            content: '';
            display: block;
            height: 0.2rem;
            width: 80%;
            background-color: var(--bg-card-lighten);
        }
    }
}
</style>
