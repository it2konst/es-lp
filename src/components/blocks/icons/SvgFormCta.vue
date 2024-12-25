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

        <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            <symbol id="icon-tweeter" viewBox="0 0 24 20">
                <path fill="#fff" d="M21.057 5.181c.01.211.01.413.01.624.009 6.403-4.696 13.795-13.3 13.795-2.537 0-5.028-.758-7.167-2.179a9.174 9.174 0 0 0 6.918-2.016c-2-.038-3.76-1.392-4.371-3.37a4.366 4.366 0 0 0 2.111-.086c-2.176-.441-3.741-2.429-3.75-4.742v-.058c.648.375 1.38.586 2.12.605C1.582 6.334.943 3.5 2.184 1.284c2.38 3.033 5.88 4.867 9.64 5.068a4.98 4.98 0 0 1 1.352-4.636c1.88-1.834 4.844-1.738 6.622.21A9.095 9.095 0 0 0 22.77.747a4.855 4.855 0 0 1-2.055 2.678 9.362 9.362 0 0 0 2.685-.758 9.768 9.768 0 0 1-2.343 2.515Z" />
            </symbol>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
            <symbol id="icon-linkedin" viewBox="0 0 22 22">
                <path fill="#fff" d="M19.865.6H2.135A1.535 1.535 0 0 0 .6 2.135v17.73A1.536 1.536 0 0 0 2.136 21.4h17.729a1.536 1.536 0 0 0 1.535-1.536V2.135A1.536 1.536 0 0 0 19.865.6ZM6.8 18.319H3.672V8.385H6.8v9.934ZM5.234 7.009a1.795 1.795 0 1 1 1.805-1.794 1.77 1.77 0 0 1-1.805 1.794Zm13.092 11.318H15.2V12.9c0-1.6-.68-2.094-1.558-2.094-.927 0-1.837.7-1.837 2.135v5.386H8.677V8.392h3.008V9.77h.04c.302-.611 1.36-1.655 2.973-1.655 1.745 0 3.63 1.035 3.63 4.069l-.002 6.144Z" />
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
