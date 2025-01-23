<script setup>
import SvgStudyModes from './../blocks/icons/SvgStudyModes.vue'
import imgMap from '@/assets/images/study-modes/study-modes-map.webp'
import imgOnline from '@/assets/images/study-modes/study-modes-online.webp'
</script>

<template>
    <section class="study-modes" id="study-modes">
        <div class="section-container">
            <div class="app__heading-box">
                <button class="btn">Study Modes</button>
                <div class="app__h2">
                    Study <span>Offline</span> or <span>Online</span>
                    <div class="study-modes__svg-wrap">
                        <SvgStudyModes name="icon-offline" size="132" />
                        <SvgStudyModes name="icon-online" size="132" />
                    </div>
                </div>
                <p class="app__p">Choose the Learning Mode That Suits You Best</p>
            </div>

            <div class="study-modes__wrapper">
                <div class="study-mode study-mode--offline">
                    <div class="study-mode__content">
                        <div class="study-mode__header">
                            <h3 class="study-mode__title">Offline Learning</h3>
                            <p class="study-mode__subtitle">Easy access to Vancouver's center</p>
                        </div>
                        <div class="study-mode__description">Location, accessible by public transport or car. Convenient for studying before or after work.</div>
                    </div>
                    <img class="study-mode__image" :src="imgMap" alt="Offline learning location" />
                </div>
                <div class="study-mode study-mode--online">
                    <div class="study-mode__content">
                        <div class="study-mode__header">
                            <h3 class="study-mode__title">Online Learning</h3>
                            <p class="study-mode__subtitle">Learn from anywhere in Canada</p>
                        </div>
                        <div class="study-mode__description">Join convenient, affordable online classes from home. Flexible to balance with other commitments.</div>
                    </div>
                    <img class="study-mode__image" :src="imgOnline" alt="Online learning platform" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
// Main styles

.study-modes {
    background-color: var(--white);
}

.study-modes .section-container {
    display: flex;
    align-items: center;
    flex-direction: column;

    .app__heading-box {
        margin-bottom: remClamp(42, 62);
        .app__h2 {
            position: relative;
            span:nth-child(1) {
                color: var(--illustration-icon-orange);
            }

            span:nth-child(2) {
                color: var(--title-accent-accent-title-green);
            }

            .study-modes__svg-wrap {
                position: absolute;
                top: 0.5rem;
                left: rem(-156);
                right: rem(-156);
                display: flex;
                // align-items: center;
                justify-content: space-between;

                @include media(xl) {
                    display: none;
                }

                > div {
                    transition: transform 0.2s ease-in;
                    @media (hover: hover) {
                        &:hover {
                            transform: scale(1.02);
                        }
                    }
                }
            }
        }
    }

    .study-modes__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;

        @include media(xl) {
            flex-wrap: wrap;
        }

        .study-mode {
            position: relative;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 1.25rem;
            border: 2px solid #000;

            padding: 4.25rem 1.5rem 1.5rem 1.5rem;
            border-radius: 1.5rem;
            max-width: rem(580);
            width: 100%;
            // height: 484px;
            background-color: var(--white);

            .study-mode__content {
                display: flex;
                gap: 1.25rem;
                @include media(md) {
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .study-mode__header {
                    flex: 0 1 50%;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;

                    @include media(md) {
                        flex: 0 1 100%;
                    }
                    .study-mode__title {
                        font-family: var(--font-family);
                        font-weight: 900;
                        font-size: 1.5rem;
                        line-height: 1.2;
                        letter-spacing: -0.02em;
                        color: #000;
                    }

                    .study-mode__subtitle {
                        font-family: var(--font-family);
                        font-weight: 700;
                        font-size: 1rem;
                        line-height: 1.47;
                        color: var(--text-paragraph);
                    }
                }

                .study-mode__description {
                    flex: 0 1 50%;
                    font-family: var(--font-family);
                    font-weight: 500;
                    font-size: 1rem;
                    line-height: 1.47;
                    color: var(--text-paragraph);

                    @include media(md) {
                        flex: 0 1 100%;
                    }
                }
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 9%;
                border-radius: 1.3rem 1.3rem 0rem 0rem;
                background-color: #000;
            }

            &::after {
                content: '•••';
                position: absolute;
                top: 0;
                left: 0;
                transform: translateX(0.7rem);

                font-size: 2rem;
                letter-spacing: 0.1rem;
                text-align: left;
                color: var(--white);
            }

            .study-mode__image {
                display: block;
                max-width: 100%;
                max-height: rem(300);
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1rem;
            }

            &.study-mode--offline,
            &.study-mode--online {
                transition: transform 0.2s ease-in;
                @media (hover: hover) {
                    &:hover {
                        transform: rotate(0deg) scale(1.01);
                    }
                }
            }

            &.study-mode--offline {
                transform: rotate(-1deg);
                border: 2px solid var(--illustration-icon-orange);

                @include media(md) {
                    transform: rotate(0deg);
                }

                &::before {
                    background-color: var(--illustration-icon-orange);
                }

                .study-mode__header {
                    .study-mode__title {
                        color: var(--illustration-icon-orange);
                    }
                }
            }

            &.study-mode--online {
                transform: rotate(1deg);
                border: 2px solid var(--card-study-green-icons);

                @include media(md) {
                    transform: rotate(0deg);
                }

                &::before {
                    background-color: var(--card-study-green-icons);
                }

                .study-mode__header {
                    .study-mode__title {
                        color: var(--card-study-green-icons);
                    }
                }
            }
        }
    }
}
</style>
