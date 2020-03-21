<template>
<div class="">
  <div class="social-proof">
     <hero-inner></hero-inner>
  </div>
  <section class="container px-4 mx-auto text-center text-grey-darkest py-10">
         <h2 class="font-normal">More than 599,999 users love Panelplace</h2>
         <p>Proofs of benefits uploaded by our beloved community.The next one could be yours.</p>
  </section>
  <!-- sort -->
    <div class="container mx-auto px-4">
        <div class="text-right">
        <div class="inline-block relative w-full md:w-48">
        <select class="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded leading-tight focus:outline-none">
            <option>All Countries</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
        <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
        </div>
    </div>
    <!-- /sort -->
    <pp-social-proof-card></pp-social-proof-card>

    <!-- proof logos -->
   <section class="w-full bg-white pt-6 pb-3 my-6">
       <div class="container mx-auto text-center px-4">
       <h2 class="my-6 text-xl text-grey-darkest font-normal">We are proud to work with</h2>
       <div class="flex flex-wrap my-6 proof-logos">
           <div class="w-1/2 md:w-1/3 lg:w-1/6 px-10 py-5"><img src="images/proof-uber.jpg" alt="logo"></div>
           <div class="w-1/2 md:w-1/3 lg:w-1/6 px-10 py-5"><img src="images/proof-toluna.jpg" alt="logo"></div>
           <div class="w-1/2 md:w-1/3 lg:w-1/6 px-10 py-5"><img src="images/proof-udemy.jpg" alt="logo"></div>
           <div class="w-1/2 md:w-1/3 lg:w-1/6 px-10 py-5"><img src="images/proof-rakuten.jpg" alt="logo"></div>
           <div class="w-1/2 md:w-1/3 lg:w-1/6 px-10 py-5"><img src="images/proof-yougov.jpg" alt="logo"></div>
           <div class="w-1/2 md:w-1/3 lg:w-1/6 px-10 py-5"><img src="images/proof-skillshare.jpg" alt="logo"></div>
       </div>
       </div>
   </section>

   <section class="my-6 py-6 proof-cta">
       <div class="container mx-auto px-4 text-center">
           <h2 class="text-grey-darkest font-normal mb-10">Get opportunities to Earn, Learn , and more</h2>
           <button class="bg-green py-4 text-lg uppercase hover:bg-green-light font-bold text-white">Join Now</button>
       </div>
   </section>
    <!-- /proof logos -->

  </div>
</template>
<script>
import HeroInner from "../components/HeroInner.vue";
import SocialProofCard from "../components/SocialProofCard.vue";

export default {
   
    components: {
        'hero-inner':HeroInner,
        'pp-social-proof-card':SocialProofCard
    },
    data() {
            return {
             showModal: false,
            }
        },
    
}
</script>

<style lang="scss" scoped>
.social-proof {
    margin-top: 66px;
    background-position: center;
}
.proof-cta {
    button {
        border-radius: 18px;
        min-width: 260px;
    }
}
</style>
