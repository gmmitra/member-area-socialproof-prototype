<template>
    <div>
        <pp-header></pp-header>
        <pp-footer></pp-footer>
    </div>
</template>

<script>
    import Header from './components/header/Header.vue'
    import Footer from './components/footer/Footer.vue'

    export default {
        props: ['activePage'],
        data() {
            return {
                showh: false
            }
        },
        components: {
            'pp-header': Header,
            'pp-footer': Footer
        }
    }
</script>

<style lang="scss">


</style>
