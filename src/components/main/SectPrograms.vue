<script setup>
import imgCard1 from '@/assets/images/programs/card1.webp'
import imgCard2 from '@/assets/images/programs/card2.webp'
import imgCard3 from '@/assets/images/programs/card3.webp'
</script>

<template>
    <section class="programs container d-flex">
        <div class="programs__heading d-flex">
            <button class="btn">Our programs</button>
            <h2 class="app__h2">Our Programs for Your Success</h2>
            <p class="app__p">Choose the program that fits your goals</p>
        </div>
        <div class="programs__list d-flex-center">
            <div class="programs__item">
                <img class="programs__item-image" :src="imgCard1" alt="ESL" />
                <div class="programs__item-wrap">
                    <h3 class="programs__item-title">ESL</h3>
                    <p class="programs__item-desc">
                        Perfect for daily communication and fluency. Our ESL program suits all
                        levels, from beginners to advanced.
                    </p>
                </div>
            </div>
            <div class="programs__item">
                <img class="programs__item-image" :src="imgCard2" alt="CELPIP" />
                <div class="programs__item-wrap">
                    <h3 class="programs__item-title">CELPIP</h3>
                    <p class="programs__item-desc">
                        Essential for aspiring Canadian residents. Our CELPIP course helps you
                        prepare for immigration to Canada.
                    </p>
                </div>
            </div>
            <div class="programs__item">
                <img class="programs__item-image" :src="imgCard3" alt="IELTS" />
                <div class="programs__item-wrap">
                    <h3 class="programs__item-title">IELTS</h3>
                    <p class="programs__item-desc">
                        Enhance your career with recognized qualifications. Excel in all test
                        components: listening, reading, writing, and speaking.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
// Programs styles
.programs {
    //---d-flex---
    flex-direction: column;
    padding-block: rem(100);
    background: var(--white);
    // background: #ccc;

    .programs__heading {
        //---d-flex---
        flex-direction: column;
        gap: rem(24);

        max-width: rem(806);
        width: 100%;
        margin-bottom: rem(60);

        @include media(sm) {
            align-items: start;
        }
    }

    .programs__list {
        //---d-flex-center---
        flex-wrap: wrap;
        gap: rem(30);
        .programs__item {
            position: relative;
            flex: 0 1 rem(379);
            height: rem(460);

            display: flex;
            flex-direction: column;
            gap: rem(24);

            overflow: hidden;
            border-radius: 1rem;
            border: 2px solid var(--card-programm-title-blue-title);

            .programs__item-image {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .programs__item-wrap {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                display: flex;
                flex-direction: column;
                gap: rem(8);
                padding: rem(24);
                background-color: transparent;

                .programs__item-title {
                    font-family: var(--font-family);
                    font-weight: 900;
                    font-size: rem(64);
                    line-height: 90%;
                    letter-spacing: -0.01em;
                    color: var(--card-programm-title-blue-title);

                    text-shadow:
                        inset -1px -1px 4px 0 rgba(0, 0, 0, 0.24),
                        inset 1px 1px 4px 0 rgba(255, 255, 255, 0.34);
                }

                .programs__item-desc {
                    font-family: var(--font-family);
                    font-weight: 500;
                    font-size: rem(16);
                    line-height: 1.47;
                    color: var(--text-paragraph);
                }
            }

            &:nth-child(1) {
                transform: rotate(-1deg);
                @include media(sm) {
                    transform: unset;
                }
            }

            &:nth-child(2) {
                border: 2px solid var(--card-programm-title-orange-title);

                .programs__item-title {
                    color: var(--card-programm-title-orange-title);
                }
            }
            &:nth-child(3) {
                transform: rotate(1deg);
                border: 2px solid var(--card-programm-title-red-title);

                .programs__item-title {
                    color: var(--card-programm-title-red-title);
                }
                @include media(sm) {
                    transform: unset;
                }
            }
        }
    }
}
</style>
