<template>
     <!-- modal -->
    <div class="fixed w-full h-screen z-50 flex items-center justify-center pin-t pin-l proof-modal">
        <div class="p-10 relative modal-content">
            <div @click="showModal = !showModal" class="inline-block absolute pin-t pin-r mr-4 mt-4 cursor-pointer"><img src="images/close-button.svg" alt="close"></div>
            <img src="images/the-proof.jpg" alt="proof photo">
        </div>
    </div>
    <!-- /modal -->
</template>

<script>

export default {
   
    data() {
            return {
             showModal: false,
            }
        }
    
}

</script>

<style lang="scss" scoped>
.proof-modal {
    background: rgba($color: #000000, $alpha: .50);
    .modal-content {
        background: #072E44;
        max-width: 90%;
    }
}
</style>
