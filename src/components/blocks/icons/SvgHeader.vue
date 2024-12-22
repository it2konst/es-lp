<script setup>
defineProps({
    name: {
        type: String,
        required: true, // Название иконки, например "icon-circle"
    },
    size: {
        type: [String, Number],
        default: 24, // Размер иконки (по умолчанию 24x24)
    },
})
</script>

<template>
    <div>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" loading="lazy">
            <use :href="`#${name}`" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            <symbol id="icon-logo" viewBox="0 0 26 26">
                <rect width="26" height="26" fill="#2F63EA" rx="6" />
                <path fill="#fff" d="M14.476 6.976 13 4.063l-1.476 2.913a.243.243 0 0 1-.34.102L9.725 6.23l.885 4.651c.054.28-.286.457-.479.25L8.29 9.144l-.478 1.083a.349.349 0 0 1-.399.201l-2.275-.537.797 2.49a.358.358 0 0 1-.184.433l-.876.417 4.077 3.34a.36.36 0 0 1 .109.4l-.491 1.36 3.752-.671a.423.423 0 0 1 .493.443l-.2 3.834h.77l-.2-3.834a.423.423 0 0 1 .493-.444l3.752.672-.491-1.36a.36.36 0 0 1 .109-.4l4.077-3.34-.876-.417a.358.358 0 0 1-.184-.433l.797-2.49-2.275.537a.349.349 0 0 1-.4-.2l-.477-1.084-1.841 1.987c-.193.207-.533.03-.48-.25l.886-4.65-1.46.847a.243.243 0 0 1-.339-.102Z" />
            </symbol>

            <symbol id="icon-burger" viewBox="0 0 512 512">
                <path d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" />
            </symbol>
            <!--
            <symbol id="icon-circle" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
            </symbol>
            <symbol id="icon-square" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" />
            </symbol>
            -->
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    fill: currentColor; /* Цвет через currentColor */
    border: none;
}

// .icon-burger1 {
//     color: darkcyan;
// }
</style>
