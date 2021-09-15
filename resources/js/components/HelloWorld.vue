<template>
    <h1>{{ greeting }}</h1>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "HelloWorld",
    setup() {
        const greeting = ref('Hello world from Vue3!')

        return {
            greeting
        }
    }
}
</script>

<style scoped>

</style>
