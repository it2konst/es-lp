<script setup>
import SvgSchedule from './../blocks/icons/SvgSchedule.vue'
</script>

<template>
    <section class="weekly-plan">
        <div class="weekly-plan__wrapper container">
            <div class="section__heading">
                <button class="btn">Course Info</button>
                <h2 class="app__h2">Weekly Schedule</h2>
                <p class="app__p">Classes will be held Monday through Thursday PST time.</p>
                <a class="btn btn--text">Chat with Advisor</a>
            </div>
            <div class="weekly-plan__content">
                <div class="weekly-plan__icon">
                    <SvgSchedule name="icon-watch" size="18" />
                </div>
                <h3 class="weekly-plan__days">Monday-Thursday</h3>
                <div class="weekly-plan__period">
                    <span class="weekly-plan__time-slot">Morning</span>
                    <span class="weekly-plan__time">8:30 AM - 12:50 PM</span>
                </div>
                <div class="weekly-plan__period">
                    <span class="weekly-plan__time-slot">Evening</span>
                    <span class="weekly-plan__time">5:30 PM - 9:00 PM</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
// Main styles
.weekly-plan {
    background-color: var(--bg-section-blue-40);
}

.weekly-plan__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 2.5rem; // 40px

    .section__heading {
        align-items: start;
        max-width: rem(570);
        width: 100%;
        margin-right: auto;
        margin-bottom: unset;

        @include media(lg) {
            max-width: 100%;
            margin-right: unset;
        }
    }

    .weekly-plan__content {
        position: relative;
        z-index: 1;
        max-width: rem(269);
        width: 100%;

        border: 2px solid var(--card-programm-title-blue-title);
        border-radius: 1.5rem; // 24px
        padding: 1.5rem 1.25rem; // 24px 20px

        box-shadow: 0 17px 20px -10px rgba(74, 140, 255, 0.4);
        background: linear-gradient(180deg, rgba(74, 140, 255, 0.1) 0%, rgba(74, 140, 255, 0.25) 100%);

        rotate: 1deg;
        transition:
            rotate 0.2s ease-in,
            scale 0.2s ease-in;

        @include media(lg) {
            max-width: rem(320);
        }

        @media (hover: hover) {
            &:hover {
                rotate: (-1deg);
                scale: 1.01;
            }
        }

        &::before,
        &::after {
            content: '';
            position: absolute;
            z-index: -1;
            inset: 0;
            border-radius: 1.5rem; // 24px
            box-shadow: 0 17px 20px -10px rgba(74, 140, 255, 0.3);
            // background: var(--card-schedule-shape-card);
            background: transparent;
            opacity: 0.75;
            scale: 0.92;
            transform: translateY(11%);
        }

        &::after {
            opacity: 0.5;
            scale: 0.86;
            transform: translateY(22%);
        }
    }
}

.weekly-plan__content {
    .weekly-plan__icon {
        display: grid;
        place-items: center;
        width: 2.5rem; // 40px
        height: 2.5rem; // 40px
        border-radius: rem(10);
        background-color: var(--card-programm-title-blue-title);

        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }

    .weekly-plan__days {
        font-family: var(--font-family);
        font-weight: 900;
        font-size: 1.25rem; // 20px
        line-height: 1.2;
        letter-spacing: -0.01em;
        color: var(--card-schedule-title);

        &:not(:last-child) {
            margin-bottom: 1.5rem; // 24px
        }
    }

    .weekly-plan__period {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    }
}

.weekly-plan__period {
    .weekly-plan__time-slot {
        font-family: var(--second-family);
        font-weight: 600;
        font-size: 0.75rem; // 12px
        line-height: 1.47;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--card-programm-title-blue-title);
    }

    .weekly-plan__time {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.47;
        color: var(--card-schedule-title);
    }
}
</style>
