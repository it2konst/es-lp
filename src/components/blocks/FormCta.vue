<script setup>
import SvgFormCta from './icons/SvgFormCta.vue'
</script>

<template>
    <div class="cta__wrap d-flex-center opacity-0">
        <button class="btn">Contact Us</button>
        <p class="cta__text">Chat Online With Educational Advisor</p>
        <div class="hero__social d-flex">
            <a href="#" class="btn btn--social">
                <SvgFormCta name="icon-instagram" size="24" />
            </a>
            <a href="#" class="btn btn--social">
                <SvgFormCta name="icon-facebook" size="24" />
            </a>
            <a href="#" class="btn btn--social">
                <SvgFormCta name="icon-whatsapp" size="24" />
            </a>
        </div>
        <span class="d-flex">Or</span>
        <button class="btn btn--text">Schedule online Meeting</button>
    </div>
</template>

<style lang="scss">
.cta__wrap {
    //---d-flex-center---
    flex-direction: column;
    width: 100%;
    height: auto;
    max-width: rem(320);

    outline: 1px solid var(--base-borderline-250);
    border: none;
    border-radius: rem(24);
    padding: rem(28) rem(24);

    box-shadow: 0 32px 64px -12px rgba(98, 173, 226, 0.5);
    background-color: var(--white);

    .cta__text {
        margin-top: rem(12);
        margin-bottom: rem(32);

        font-family: var(--font-family);
        font-weight: 900;
        font-size: rem(24);
        line-height: 1.2;
        letter-spacing: -0.02em;
        text-align: center;
        color: rgba(8, 10, 15, 0.95);
    }

    .hero__social {
        //---d-flex---
        justify-content: center;
        flex-wrap: wrap;
        gap: rem(10);
        margin-bottom: 1rem;
    }

    span {
        //---d-flex---
        position: relative;
        margin-bottom: 1rem;

        font-family: var(--second-family);
        font-weight: 600;
        font-size: rem(10);
        line-height: 1.3;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        text-align: center;
        color: var(--base-borderline);

        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            width: rem(120);
            height: rem(1);
            background-color: var(--base-borderline);
        }

        &::before {
            left: rem(-8);
            transform: translateX(rem(-120)); // translateX(-120px);
        }

        &::after {
            right: rem(-8);
            transform: translateX(rem(120)); // translateX(120px);
        }
    }

    .btn--text {
        width: 100%;
    }
}
</style>
