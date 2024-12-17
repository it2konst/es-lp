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
            <symbol id="icon-instagram" viewBox="0 0 22 22">
                <path fill="#fff" fill-rule="evenodd" d="M6 11a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" clip-rule="evenodd" />
                <path fill="#fff" d="M16.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                <path fill="#fff" fill-rule="evenodd" d="M0 5a5 5 0 0 1 5-5h12a5 5 0 0 1 5 5v12a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5Zm5-3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Z" clip-rule="evenodd" />
            </symbol>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            <symbol id="icon-facebook" viewBox="0 0 13 22">
                <path fill="#fff" fill-rule="evenodd" d="M4.757 1.757A6 6 0 0 1 9 0h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9v2h3a1 1 0 0 1 .97 1.243l-1 4A1 1 0 0 1 11 14H9v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V6a6 6 0 0 1 1.757-4.243ZM9 2a4 4 0 0 0-4 4v3a1 1 0 0 1-1 1H2v2h2a1 1 0 0 1 1 1v7h2v-7a1 1 0 0 1 1-1h2.22l.5-2H8a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h2V2H9Z" clip-rule="evenodd" />
            </symbol>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            <symbol id="icon-whatsapp" viewBox="0 0 20 20">
                <path fill="#fff" fill-rule="evenodd" d="M3.912 2.066a10 10 0 1 1 1.459 16.798l-4.112 1.102A1 1 0 0 1 .034 18.74l1.102-4.112A10 10 0 0 1 3.912 2.066Zm6.611-.049A8 8 0 0 0 3.072 14l.207.359-.865 3.227 3.227-.865.359.207a8 8 0 1 0 4.523-14.91Z" clip-rule="evenodd" />
                <path fill="#fff" d="M7.865 5.335c.142.344.696 1.884.729 2.163.175.699-.973.847-.997 1.569-.027.8.641 1.218 1.108 1.753.543.624 1.584 1.74 2.477 1.819.64.056.852-1.14 1.641-1.071.465.04 1.393.184 1.998 1.28.224.405.244.816.025 1.161-.562.883-1.573 1.124-2.66.927-1.808-.328-3.08-1.49-4.474-2.601 0 0-2.903-2.846-2.702-5.151.07-.8.437-1.948 1.448-2.138.55-.103 1.217-.045 1.407.29Z" />
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
