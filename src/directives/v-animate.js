// v-animate="{ animation: 'animate__zoomInLeft', duration: 1000 }">
import { ref } from 'vue'

export default {
    mounted(el, binding) {
        const { animation = 'animate__fadeInUp', duration = 1000 } = binding.value
        const animationClass = ref('')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animationClass.value = animation
                        el.classList.add('animate__animated', animationClass.value)
                        setTimeout(() => {
                            el.classList.remove(animationClass.value)
                        }, duration)
                    }
                })
            },
            { threshold: 0.1 },
        )

        observer.observe(el)

        el._observer = observer // Сохраняем observer для последующего отключения
    },
    unmounted(el) {
        el._observer.disconnect() // Отключение observer при размонтировании элемента
    },
}
