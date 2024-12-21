// v-animate="{ animation: 'animate__zoomInLeft', duration: 1000 }">
import { ref } from 'vue'

export default {
    mounted(el, binding) {
        const { animation = 'animate__fadeInUp', duration = 1000 } = binding.value
        const obj = {
            baseAnimateClass: 'animate__animated',
            opacityZeroClass: 'opacity-0',
        }
        const animationClass = ref('')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animationClass.value = animation
                        el.classList.add(obj.baseAnimateClass, animationClass.value)
                        el.classList.remove(obj.opacityZeroClass)
                        setTimeout(() => {
                            el.classList.remove(animationClass.value)
                            el.classList.remove(obj.baseAnimateClass)
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
