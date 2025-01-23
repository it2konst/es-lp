<script setup>
import SvgAdvantages from '../blocks/icons/SvgAdvantages.vue'
</script>

<template>
    <section class="advantages" id="advantages">
        <div class="container">
            <div class="section__head">
                <h2 class="section__head-h2">Our Advantages</h2>
                <h3 class="section__head-h3">Why Should You <span>Study With Us</span></h3>
                <p class="section__head-p">Certified by top educators, we've been helping students succeed for 44 years. Join our 93% success rate and achieve your language goals.</p>
            </div>

            <div class="advantages__cards">
                <div class="advantages__cards-item">
                    <div class="advantages__cards-icon">
                        <SvgAdvantages name="icon-education" size="22" />
                    </div>
                    <h3 class="advantages__cards-title">Quality Education Certified</h3>
                    <p class="advantages__cards-description">Certified by top educational authorities, we ensure high-quality education and student success.</p>
                </div>

                <div class="advantages__cards-item">
                    <div class="advantages__cards-icon">
                        <SvgAdvantages name="icon-star" size="20" />
                    </div>
                    <h3 class="advantages__cards-title">44 Years of Excellence</h3>
                    <p class="advantages__cards-description">With 44 years in education, we have a proven record of helping students achieve their goals.</p>
                </div>

                <div class="advantages__cards-item">
                    <div class="advantages__cards-icon">
                        <SvgAdvantages name="icon-wavy-check" size="20" />
                    </div>
                    <h3 class="advantages__cards-title">93% Student Success Rate</h3>
                    <p class="advantages__cards-description">Our programs have a 93% success rate, showing our commitment to helping students succeed.</p>
                </div>
            </div>

            <!-- <div class="cornerstone">
                <p class="cornerstone__text">CORNERSTONE</p>
            </div> -->
        </div>
    </section>
</template>

<style lang="scss">
// Main styles

.advantages {
    background-color: var(--white);

    .section__head {
        margin-bottom: rem-clamp(40, 60);
    }

    .section__head-p {
        max-width: rem(677);
        width: 100%;
    }

    .advantages__cards {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;

        &-item {
            display: flex;
            flex-direction: column;
            align-items: center;

            max-width: rem(378);
            width: 100%;

            font-family: var(--font-family);
        }

        &-icon {
            display: grid;
            place-items: center;

            width: 3.5rem;
            height: 3.5rem;

            border-radius: rem(10);
            background-color: var(--icon-icon-blue);

            margin-bottom: rem-clamp(24, 32);
        }

        &-title {
            font-weight: 900;
            font-size: rem(20);
            line-height: 1.2;
            letter-spacing: -0.01em;
            text-align: center;
            color: var(--text-title);
        }

        &-description {
            font-weight: 500;
            line-height: 1.47;
            text-align: center;
            color: var(--text-paragraph);
        }
    }
}
</style>
