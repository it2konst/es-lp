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
            <symbol id="icon-leaf" viewBox="0 0 14 14">
                <path fill="#fff" fill-rule="evenodd" d="M2.597 12.395c1.4.702 2.773 1.002 4.062.895 1.475-.123 2.774-.775 3.808-1.847 2.044-2.117 3.022-5.807 2.64-10.341a.833.833 0 0 0-.789-.763c-4.544-.223-8.199.883-10.243 3C1.04 4.411.434 5.731.363 7.209.3 8.501.649 9.863 1.398 11.237L.34 12.334a.833.833 0 1 0 1.199 1.158l1.059-1.097Zm1.225-1.268c.993.422 1.899.568 2.699.502 1.044-.087 1.973-.542 2.747-1.343 1.483-1.535 2.426-4.392 2.229-8.306-3.918-.06-6.74.982-8.223 2.517-.774.801-1.196 1.746-1.247 2.793-.038.802.14 1.702.596 2.679l2.347-2.43a.833.833 0 1 1 1.2 1.157l-2.348 2.43Z" clip-rule="evenodd" />
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
