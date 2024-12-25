<script setup>
import SvgSchedule from './../blocks/icons/SvgSchedule.vue'
</script>

<template>
    <section class="schedule" id="schedule">
        <div class="section-container">
            <div class="app__heading-box">
                <button class="btn">Upcoming Classes</button>
                <h2 class="app__h2">Class Schedule for <span class="schedule__title-highlight">Fall 2024</span></h2>
                <p class="app__p">All courses follow the same schedule, allowing you to choose the time that best fits your needs.</p>
            </div>

            <div class="schedule__dates">
                <div class="schedule__date">
                    <div class="schedule__img-box">
                        <SvgSchedule name="icon-leaf" size="14" />
                    </div>
                    <span class="schedule__date-month">September</span>
                    <span class="schedule__date-day">3</span>
                </div>
                <div class="schedule__date">
                    <div class="schedule__img-box">
                        <SvgSchedule name="icon-leaf" size="14" />
                    </div>
                    <span class="schedule__date-month">October</span>
                    <span class="schedule__date-day">1</span>
                </div>
                <div class="schedule__date">
                    <div class="schedule__img-box">
                        <SvgSchedule name="icon-leaf" size="14" />
                    </div>
                    <span class="schedule__date-month">October</span>
                    <span class="schedule__date-day">28</span>
                </div>
                <div class="schedule__date">
                    <div class="schedule__img-box">
                        <SvgSchedule name="icon-leaf" size="14" />
                    </div>
                    <span class="schedule__date-month">November</span>
                    <span class="schedule__date-day">25</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
// Main styles
.schedule {
    @include max-w100();
    background: var(--bg-section-orange-50);
}

.schedule .section-container {
    @include flex-wrap-ctr-ctr-gap(0.5rem); // 8px
    row-gap: 2.5rem;

    .app__heading-box {
        @include max-w100(35.625rem); // 570px
        align-self: start;
        margin-right: auto;
        margin-bottom: unset;

        .btn {
            align-self: start;
            text-align: left;
        }

        .app__h2 {
            align-self: start;
            text-align: left;
            & span {
                color: var(--illustration-icon-orange);
            }
        }

        .app__p {
            align-self: start;
            text-align: left;
        }
    }

    .schedule__dates {
        @include max-w100(35.625rem); // 570px
        @include flex-wrap-ctr-ctr-gap(2rem); // 32px
        row-gap: remClamp(56, 66);

        .schedule__date {
            z-index: 1;
            position: relative;
            @include max-w100(16.8125rem); // 269px
            display: flex;
            flex-direction: column;
            gap: 1rem; // 16px

            border-radius: 1.5rem; // 24px
            border: 2px solid var(--illustration-icon-orange);
            padding: rem(24) rem(20);

            box-shadow: 0 17px 20px -10px rgba(255, 140, 0, 0.4);
            background: linear-gradient(180deg, rgba(255, 165, 0, 0.1) 0%, rgba(255, 165, 0, 0.25) 100%);
            transition: transform 0.2s ease-in;

            &::before,
            &::after {
                content: '';
                position: absolute;
                inset: 0;
                z-index: -1;

                border-radius: 1.5rem; // 24px
                box-shadow: 0 17px 20px -10px rgba(255, 140, 0, 0.3);
                background: transparent;
                transform: translateY(10%);
            }

            &::after {
                transform: translateY(20%);
            }

            &:nth-child(1),
            &:nth-child(4) {
                transform: rotate(-1deg);
                @media (hover: hover) {
                    &:hover {
                        transform: rotate(1deg);
                    }
                }
            }

            &:nth-child(2),
            &:nth-child(3) {
                transform: rotate(1deg);
                @media (hover: hover) {
                    &:hover {
                        transform: rotate(-1deg);
                    }
                }
            }

            .schedule__img-box {
                @include flex-ctr-ctr;
                width: 2.5rem; // 40px
                height: 2.5rem; // 40px
                border-radius: 0.625rem; // 10px
                background: var(--illustration-icon-orange);
            }

            .schedule__date-month {
                font-family: var(--font-family);
                font-weight: 900;
                font-size: 1.25rem; // 20px
                line-height: 1.2;
                letter-spacing: -0.01em;
                color: var(--illustration-icon-orange);
                margin-bottom: 0.5rem; // 8px
            }

            .schedule__date-day {
                font-family: var(--font-family);
                font-weight: 900;
                font-size: 4rem; // 64px
                line-height: 0.9;
                letter-spacing: -0.01em;
                color: var(--illustration-icon-orange);

                text-shadow:
                    -1px -1px 4px rgba(0, 0, 0, 0.24),
                    1px 1px 4px rgba(255, 255, 255, 0.34);
            }
        }
    }
}
</style>
