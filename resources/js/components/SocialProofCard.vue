<template>
    <div>
        <!-- social proof list -->
    <div class="container mx-auto p-4">
        <div class="flex flex-wrap items-stretch proof-wrap">
            <!-- card -->
        
        <div class="relative bg-white text-center shadow border border-grey-light p-4 proof-card">
            <div class="border-b border-grey-light mb-8 logo-wrap">
                <div class="my-4">
                    <img src="images/toluna.png" alt="logo">
                </div>
                <h2 class="my-6 text-xl md:text-2xl"><a href="#" class="no-underline text-blue">Received 100 USD</a></h2>
            </div>

            <div class="quote-wrap">
                <div class="my-4">
                    <img src="images/ic-qoute.svg" alt="quote">
                </div>
                <p class="my-4 leading-normal px-4 italic quote-text">Its just good start. I will earn more in future. Love this! Where I can earn without stress.</p>

            
            <div class="text-left flex justify-center items-center mb-4 mt-2 profile-wrap">
                <div class="overflow-hidden align-middle inline-block rounded-full bg-grey-light user-pic">
                    <img src="images/blank-profile-picture.jpg" alt="profile-photo">
                </div>
                <div class="inline px-2 text-left">
                    <span class="block font-bold text-sm">Kristine Belmont</span>
                    <span class="block text-sm">Uploaded FEB. 28, 2019</span>
                </div>
            </div>
            <button type="button" class="uppercase view-btn" @click="showModal = !showModal; viewProofModal = !viewProofModal">View Proof</button>
            

            </div>
        </div>
        
            <!-- /card -->
            <!-- card -->
            
        <div class="relative bg-white text-center items-end shadow border border-grey-light p-4 proof-card">
            <div class="border-b border-grey-light mb-8 logo-wrap">
                <div class="my-4">
                <img src="images/skillshare.png" alt="logo">
                </div>
                <h2 class="my-6 text-xl md:text-2xl"><a href="#" class="no-underline text-blue">Essay Writing Contest Winner</a></h2>
            </div>
            <div class="quote-wrap">
                <div class="my-4">
                    <img src="images/ic-qoute.svg" alt="quote">
                </div>
                <p class="my-4 leading-normal  px-4 italic quote-text">Thank you!</p>

            
            <div class="text-left flex justify-center items-center mb-4 mt-2 profile-wrap">
                <div class="overflow-hidden align-middle inline-block rounded-full bg-grey-light user-pic">
                    <img src="images/blank-profile-picture.jpg" alt="profile-photo">
                </div>
                <div class="inline px-2 text-left">
                    <span class="block font-bold text-sm">Kristine Belmont</span>
                    <span class="block text-sm">Uploaded FEB. 28, 2019</span>
                </div>
            </div>
            <button type="button" class="uppercase view-btn" @click="showModal = !showModal; viewProofModal = !viewProofModal">View Proof</button>
            

            </div>
        </div>
          
        <!-- /card -->
        <!-- card -->
        
        <div class="bg-white text-center shadow border border-grey-light p-4 proof-card">
            <div class="border-b border-grey-light mb-8 logo-wrap">
                <div class="my-4">
                <img src="images/udemy.png" alt="logo">
                </div>
                <h2 class="my-6 text-xl md:text-2xl"><a href="#" class="no-underline text-blue">User Experience Design Certificate</a></h2>
            </div>
            <div class="quote-wrap">
                <div class="my-4">
                    <img src="images/ic-qoute.svg" alt="quote">
                </div>
                <p class="my-4 leading-normal  px-4 italic quote-text">3rd payout :) !</p>

            
            <div class="text-left flex justify-center items-center mb-4 mt-2 profile-wrap">
                <div class="overflow-hidden align-middle inline-block rounded-full bg-grey-light user-pic">
                    <img src="images/blank-profile-picture.jpg" alt="profile-photo">
                </div>
                <div class="inline px-2 text-left">
                    <span class="block font-bold text-sm">Kristine Belmont</span>
                    <span class="block text-sm">Uploaded FEB. 28, 2019</span>
                </div>
            </div>
            <button type="button" class="uppercase view-btn" @click="showModal = !showModal; viewProofModal = !viewProofModal">View Proof</button>
           

            </div>
        </div>
        
        <!-- /card -->


     <!-- card -->
        
        <div class="relative bg-white text-center shadow border border-grey-light p-4 proof-card">
            <div class="border-b border-grey-light mb-8 logo-wrap">
                <div class="my-4">
                    <img src="images/toluna.png" alt="logo">
                </div>
                <h2 class="my-6 text-xl md:text-2xl"><a href="#" class="no-underline text-blue">Received 100 USD</a></h2>
            </div>

            <div class="quote-wrap">
                <div class="my-4">
                    <img src="images/ic-qoute.svg" alt="quote">
                </div>
                <p class="my-4 leading-normal px-4 italic quote-text">Its just good start. I will earn more in future. Love this! Where I can earn without stress.</p>

            
            <div class="text-left flex justify-center items-center mb-4 mt-2 profile-wrap">
                <div class="overflow-hidden align-middle inline-block rounded-full bg-grey-light user-pic">
                    <img src="images/blank-profile-picture.jpg" alt="profile-photo">
                </div>
                <div class="inline px-2 text-left">
                    <span class="block font-bold text-sm">Kristine Belmont</span>
                    <span class="block text-sm">Uploaded FEB. 28, 2019</span>
                </div>
            </div>
            <button type="button" class="uppercase view-btn" @click="showModal = !showModal; viewProofModal = !viewProofModal">View Proof</button>
            

            </div>
        </div>
        
            <!-- /card -->
            <!-- card -->
            
        <div class="relative bg-white text-center items-end shadow border border-grey-light p-4 proof-card">
            <div class="border-b border-grey-light mb-8 logo-wrap">
                <div class="my-4">
                <img src="images/skillshare.png" alt="logo">
                </div>
                <h2 class="my-6 text-xl md:text-2xl"><a href="#" class="no-underline text-blue">Essay Writing Contest Winner</a></h2>
            </div>
            <div class="quote-wrap">
                <div class="my-4">
                    <img src="images/ic-qoute.svg" alt="quote">
                </div>
                <p class="my-4 leading-normal  px-4 italic quote-text">Thank you!</p>

            
            <div class="text-left flex justify-center items-center mb-4 mt-2 profile-wrap">
                <div class="overflow-hidden align-middle inline-block rounded-full bg-grey-light user-pic">
                    <img src="images/blank-profile-picture.jpg" alt="profile-photo">
                </div>
                <div class="inline px-2 text-left">
                    <span class="block font-bold text-sm">Kristine Belmont</span>
                    <span class="block text-sm">Uploaded FEB. 28, 2019</span>
                </div>
            </div>
            <button type="button" class="uppercase view-btn" @click="showModal = !showModal; viewProofModal = !viewProofModal">View Proof</button>
            

            </div>
        </div>
          
        <!-- /card -->
        <!-- card -->
        
        <div class="bg-white text-center shadow border border-grey-light p-4 proof-card">
            <div class="border-b border-grey-light mb-8 logo-wrap">
                <div class="my-4">
                <img src="images/udemy.png" alt="logo">
                </div>
                <h2 class="my-6 text-xl md:text-2xl"><a href="#" class="no-underline text-blue">User Experience Design Certificate</a></h2>
            </div>
            <div class="quote-wrap">
                <div class="my-4">
                    <img src="images/ic-qoute.svg" alt="quote">
                </div>
                <p class="my-4 leading-normal  px-4 italic quote-text">3rd payout :) !</p>

            
            <div class="text-left flex justify-center items-center mb-4 mt-2 profile-wrap">
                <div class="overflow-hidden align-middle inline-block rounded-full bg-grey-light user-pic">
                    <img src="images/blank-profile-picture.jpg" alt="profile-photo">
                </div>
                <div class="inline px-2 text-left">
                    <span class="block font-bold text-sm">Kristine Belmont</span>
                    <span class="block text-sm">Uploaded FEB. 28, 2019</span>
                </div>
            </div>
            <button type="button" class="uppercase view-btn" @click="showModal = !showModal; viewProofModal = !viewProofModal">View Proof</button>
           

            </div>
        </div>
        
        <!-- /card -->

         <!-- card -->
        
        <div class="relative bg-white text-center shadow border border-grey-light p-4 proof-card">
            <div class="border-b border-grey-light mb-8 logo-wrap">
                <div class="my-4">
                    <img src="images/toluna.png" alt="logo">
                </div>
                <h2 class="my-6 text-xl md:text-2xl"><a href="#" class="no-underline text-blue">Received 100 USD</a></h2>
            </div>

            <div class="quote-wrap">
                <div class="my-4">
                    <img src="images/ic-qoute.svg" alt="quote">
                </div>
                <p class="my-4 leading-normal px-4 italic quote-text">Its just good start. I will earn more in future. Love this! Where I can earn without stress.</p>

            
            <div class="text-left flex justify-center items-center mb-4 mt-2 profile-wrap">
                <div class="overflow-hidden align-middle inline-block rounded-full bg-grey-light user-pic">
                    <img src="images/blank-profile-picture.jpg" alt="profile-photo">
                </div>
                <div class="inline px-2 text-left">
                    <span class="block font-bold text-sm">Kristine Belmont</span>
                    <span class="block text-sm">Uploaded FEB. 28, 2019</span>
                </div>
            </div>
            <button type="button" class="uppercase view-btn" @click="showModal = !showModal; viewProofModal = !viewProofModal">View Proof</button>
            

            </div>
        </div>
        
            <!-- /card -->

             <!-- card -->
        
        <div class="relative bg-white text-center shadow border border-grey-light p-4 proof-card">
            <div class="border-b border-grey-light mb-8 logo-wrap">
                <div class="my-4">
                    <img src="images/toluna.png" alt="logo">
                </div>
                <h2 class="my-6 text-xl md:text-2xl"><a href="#" class="no-underline text-blue">Received 100 USD</a></h2>
            </div>

            <div class="quote-wrap">
                <div class="my-4">
                    <img src="images/ic-qoute.svg" alt="quote">
                </div>
                <p class="my-4 leading-normal px-4 italic quote-text">Its just good start. I will earn more in future. Love this! Where I can earn without stress.</p>

            
            <div class="text-left flex justify-center items-center mb-4 mt-2 profile-wrap">
                <div class="overflow-hidden align-middle inline-block rounded-full bg-grey-light user-pic">
                    <img src="images/blank-profile-picture.jpg" alt="profile-photo">
                </div>
                <div class="inline px-2 text-left">
                    <span class="block font-bold text-sm">Kristine Belmont</span>
                    <span class="block text-sm">Uploaded FEB. 28, 2019</span>
                </div>
            </div>
            <button type="button" class="uppercase view-btn" @click="showModal = !showModal; viewProofModal = !viewProofModal">View Proof</button>
            

            </div>
        </div>
        
            <!-- /card -->
        
        </div>
        <button class="load-more-btn">View More</button>
    </div>
    <!-- /social proof list -->

    <!-- modal -->
    <div class="fixed w-full h-screen z-50 flex items-center justify-center pin-t pin-l proof-modal" v-if="showModal">
        <div class="p-10 relative modal-content" v-if="viewProofModal">
            <div @click="showModal = !showModal; viewProofModal = !viewProofModal" class="inline-block absolute pin-t pin-r mr-4 mt-4 cursor-pointer"><img src="images/close-button.svg" alt="close"></div>
            <img src="images/the-proof.jpg" alt="proof photo">
        </div>
    </div>
    <!-- /modal -->

    </div>
</template>

<script>

export default {
   
    data() {
            return {
             showModal: false,
             viewProofModal: false,
            }
        }
    
}

</script>

<style lang="scss" scoped>
.logo-wrap {
    img {
        max-height: 40px;
    }
    @media screen and (min-width: 768px) {
    min-height: 138px;
     }
   
}
.proof-card {
   width: 100%;
   margin-bottom: 15px;
   h2 {
       font-size: 1.3rem;
   }
   @media screen and (min-width: 768px) {
       width: 31.33%;
       
       margin: 1%;
   }
   @media screen and (min-width: 992px) {
       width: 23%;
   }
}

.proof-wrap {
    @media screen and (min-width: 768px) {
    margin: -1%
    }
}

.profile-wrap {
    .user-pic {
        width: 40px;
        height: 40px;
    }
}

.view-btn {
    @apply bg-blue text-white text-sm px-4 py-3 mb-3 ;
    border-radius: 14px;
    &:hover {
        @apply bg-blue-light ;
    }
}

.load-more-btn {
    @apply bg-transparent text-grey-dark uppercase text-sm px-4 py-3 my-8 border border-grey mx-auto block ;
    border-radius: 14px;
    width: 180px;
    &:hover {
        @apply opacity-50 ;
    }
}

.quote-text {
    @media screen and (min-width: 768px) {
    min-height: 100px;
     }
     @media screen and (min-width: 992px) {
    min-height: 80px;
     }
   
}

.proof-modal {
    background: rgba($color: #000000, $alpha: .50);
    .modal-content {
        background: #072E44;
        max-width: 90%;
    }
}

</style>