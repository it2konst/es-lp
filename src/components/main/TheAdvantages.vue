<script setup>
import SvgStudyModes from './../blocks/icons/SvgStudyModes.vue'
import imgMap from '@/assets/images/study-modes/study-modes-map.webp'
import imgOnline from '@/assets/images/study-modes/study-modes-online.webp'
</script>

<template>
    <section class="advantages" id="advantages">
        <div class="container">
            <div class="section__head">
                <h2 class="section__head-h2">Our Advantages</h2>
                <h3 class="section__head-h3">Why Should You <span>Study With Us</span></h3>
                <p class="section__head-p">
                    Certified by top educators, we've been helping students succeed for 44 <br />
                    years. Join our 93% success rate and achieve your language goals.
                </p>
            </div>
        </div>

        <div class="quality-education">
            <h3 class="quality-education__title">Quality Education Certified</h3>
            <p class="quality-education__description">Certified by top educational authorities, we ensure high-quality education and student success.</p>
        </div>

        <div class="experience">
            <h3 class="experience__title">With 44 Years in Education</h3>
            <p class="experience__description">We have a proven record of helping students achieve their goals.</p>
        </div>

        <div class="success-rate">
            <h3 class="success-rate__title">93% Success Rate</h3>
            <p class="success-rate__description">Our programs have a 93% success rate, showing our commitment to helping students succeed.</p>
        </div>

        <div class="cornerstone">
            <p class="cornerstone__text">CORNERSTONE</p>
        </div>
    </section>
</template>

<style lang="scss">
// Main styles

.advantages {
    background-color: var(--white);
}
</style>
