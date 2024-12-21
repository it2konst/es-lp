<!-- Пример использования:
<AppAnimate baseClass="app__h1" animation="animate__rubberBand">
    <h1>Study English To Boost Your Career Or Pass An Immigration Exam</h1>
</AppAnimate>
 -->
<!-- Основной контейнер для анимации -->
<template>
    <div ref="animatedElement" class="animate__animated" :class="[baseClass, animationClass]">
        <slot />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Определение пропсов для компонента
const props = defineProps({
    animation: {
        type: String,
        required: true, // Класс анимации из Animate.css
    },
    baseClass: {
        type: String,
        default: '', // Дополнительный класс для стилизации
    },
    animationDuration: {
        type: Number,
        default: 1000, // Длительность анимации в миллисекундах
    },
})

// Создание ссылок и классов
const animatedElement = ref(null) // Ссылка на анимируемый элемент
const animationClass = ref('') // Текущий класс анимации

// Функция для настройки IntersectionObserver
const setupObserver = () => {
    // Создание нового IntersectionObserver
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Добавление класса анимации при пересечении
                    animationClass.value = props.animation
                    // Удаление класса анимации по истечении времени
                    setTimeout(() => {
                        animationClass.value = ''
                    }, props.animationDuration)
                }
            })
        },
        { threshold: 0.1 }, // Настройка чувствительности
    )

    // Наблюдение за анимируемым элементом
    if (animatedElement.value) {
        observer.observe(animatedElement.value)
    }

    return observer
}

let observer = null // Переменная для хранения экземпляра observer

// Хук жизненного цикла onMounted
onMounted(() => {
    observer = setupObserver() // Настройка observer при монтировании компонента
})

// Хук жизненного цикла onUnmounted
onUnmounted(() => {
    observer?.disconnect() // Отключение observer при размонтировании компонента
})
</script>
