<script setup>
import dataImg1 from '@/assets/images/features/avatar1.webp'
import dataImg2 from '@/assets/images/features/avatar2.webp'
import dataImg3 from '@/assets/images/features/avatar3.webp'
</script>

<template>
    <section class="features">
        <div class="app__heading-box container">
            <button class="btn">Benefits</button>
            <h2 class="app__h2">What Awaits You</h2>
            <p class="app__p">Discover the benefits of learning with us</p>
        </div>
        <div class="features__list container">
            <div class="features__item">
                <div class="features__item-img-wrap">
                    <img :src="dataImg1" alt="Avatar" />
                </div>
                <h3 class="features__item-title">Lots of Practice</h3>
                <b class="features__item-subtitle">Say goodbye to boring lessons</b>
                <p class="features__item-text">Our practice sessions are so engaging, you'll never fall asleep in class. Get ready for interactive activities and lively discussions that make learning English fun and effective.</p>
            </div>
            <div class="features__item">
                <div class="features__item-img-wrap">
                    <img :src="dataImg2" alt="Avatar" />
                </div>
                <h3 class="features__item-title">Teacher Support</h3>
                <b class="features__item-subtitle">Yes, our teachers don't sleep either</b>
                <p class="features__item-text">Our dedicated teachers are always here to help, day or night. Whether you have a quick question or need detailed guidance, you can count on our support to reach your goals.</p>
            </div>
            <div class="features__item">
                <div class="features__item-img-wrap">
                    <img :src="dataImg3" alt="Avatar" />
                </div>
                <h3 class="features__item-title">Student Community</h3>
                <b class="features__item-subtitle">Practice English in a multicultural setting</b>
                <p class="features__item-text">Join a vibrant community of students from all over the world. Practice your English with interesting people from diverse backgrounds.</p>
            </div>
        </div>

        <button class="btn btn--text">Chat with Advisor</button>
    </section>
</template>

<style lang="scss">
// Main styles

.features {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    padding-block: rem(100);
    // background-color: #ccc;
    background-color: var(--bg-section-blue-40);

    .app__heading-box {
        margin-bottom: rem(110);
    }

    .features__list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: rem(40);
        margin-bottom: 4rem;

        @include media(xl) {
            flex-wrap: wrap;
        }

        .features__item {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: rem(24);

            width: 100%;
            max-width: rem(373);
            padding: 2.625rem 1.5rem 1.5rem 1.5rem;
            transform: rotate(-1deg);

            border-radius: 1.5rem;
            background-color: transparent;

            &::after {
                content: '';
                z-index: -1;
                position: absolute;
                inset: 0;
                border-radius: 1.5rem;
                border: 2px solid var(--card-benefits-avatar-avatar-bg-red);
                background: linear-gradient(180deg, rgba(238, 131, 110, 0) 0%, rgba(238, 131, 110, 0.2) 100%);
            }

            &-img-wrap {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                transform: translate(30%, -70%);
                width: rem(70);
                height: rem(70);

                border-radius: 50%;
                box-shadow: 0 8px 24px 0 rgba(238, 131, 110, 0.6);
                background-color: var(--card-benefits-avatar-avatar-bg-red);

                img {
                    display: block;
                    object-fit: cover;
                }
            }

            &:nth-child(2) {
                transform: rotate(1deg);
                &::after {
                    border: 2px solid var(--card-benefits-avatar-avatar-bg-violet);
                    background: linear-gradient(180deg, rgba(142, 68, 173, 0) 0%, rgba(142, 68, 173, 0.2) 100%);
                }
                .features__item-img-wrap {
                    box-shadow: 0 8px 24px 0 rgba(205, 110, 238, 0.6);
                    background: var(--card-benefits-avatar-avatar-bg-violet);
                }
            }

            &:nth-child(3) {
                &::after {
                    border: 2px solid var(--card-programm-title-blue-title);
                    background: linear-gradient(180deg, rgba(74, 140, 255, 0) 0%, rgba(74, 140, 255, 0.2) 100%);
                }
                .features__item-img-wrap {
                    box-shadow: 0 8px 24px 0 rgba(110, 138, 238, 0.6);
                    background: var(--card-programm-title-blue-title);
                    img {
                        transform: translateY(5%);
                    }
                }
            }

            &-title {
                font-family: var(--font-family);
                font-weight: 900;
                font-size: 1.25rem;
                line-height: 1.2;
                letter-spacing: -0.01em;
                color: var(--text-title);
                margin-bottom: -1rem;
            }

            &-subtitle {
                font-family: var(--font-family);
                font-weight: 700;
                font-size: 1rem;
                line-height: 1.47;
                color: var(--text-title);
            }

            &-text {
                font-family: var(--font-family);
                font-weight: 500;
                font-size: 1rem;
                line-height: 1.47;
                color: var(--text-paragraph);
            }
        }
    }
}
</style>
