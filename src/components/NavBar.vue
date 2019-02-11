<template>
    <nav v-bind:class="classObject">
        <h5>{{ title }}</h5>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            title: 'Appointment Hero'
        }
    },
    computed: {
        classObject: function () {
            return {
                navbar: true,
                'navbar-dark': true,
                'bg-dark': true,
                'text-white': true
            }
        }
    }
}
</script>

<style scoped>

</style>
