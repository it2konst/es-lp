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
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" :width="size" :height="size">
            <use :href="`#${name}`" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            <symbol id="icon-offline" viewBox="0 0 130 132" fill="none">
                <path stroke="#FF8C00" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M128.5 10.93C23.5-27.482-18 60.017 16 130.432m0 0-14-7.415m14 7.415 7.5-14.915" />
            </symbol>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            <symbol id="icon-online" viewBox="0 0 130 132" fill="none">
                <path stroke="#00BF00" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M2 10.93c105-38.413 146.5 49.086 112.5 119.501m0 0 14-7.415m-14 7.415-7.5-14.915" />
            </symbol>
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.icon {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    fill: currentColor; // Цвет через currentColor
    border: none;
}
</style>
