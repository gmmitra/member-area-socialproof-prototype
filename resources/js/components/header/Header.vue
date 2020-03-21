<template>
    <section class="w-full bg-white fixed z-10 pin-t pp-header">
        <pp-top-bar></pp-top-bar>
    </section>
</template>


<script>
    import TopBar from './TopBar.vue';

    export default {
        props: ['activePage'],
        data() {
            return {
                showh: false
            }
        },
        components: {
            'pp-top-bar': TopBar,
        }
    }
</script>

<style lang="scss" scoped>
.pp-header {
     //border-bottom: 1px solid #dee2e6;
     top: 0;
}
</style>
