<template>
    <div class="bg-white mb-6 pp-content-box">
  <h5 class="block text-base bg-grey-lightest px-5 py-4 uppercase">Account Statistics</h5>
   
  <div class="flex p-4 pp-accnt-stat">
     <div class="flex-1 cursor-pointer bg-grey-lightest px-4 py-4 m-2 text-center pp-stats-box pp-current-stat">
        <span class="block">opportunities</span>
        <span class="block">Opportunities for you</span>
      </div>
      <div class="flex-1 cursor-pointer bg-grey-lightest px-4 py-4 m-2 text-center pp-stats-box">
        <span class="block">subscribed</span>
        <span class="block">Subscribed</span>
      </div>
      <div class="flex-1 cursor-pointer bg-grey-lightest px-4 py-4 m-2 text-center pp-stats-box disabled">
        <span class="block text-grey-light">notinterested</span>
        <span class="block text-grey-light">Not interested</span>
      </div> 
    </div>


<!-- mobile -->
    <div class="flex w-full flex-wrap p-4 pp-accnt-stat-mob">
      <slick ref="slick" :options="slickOptions" class="">
        <div v-for="(slide, slidestat) in slides" :key="slidestat">
           
      <div class="lg:flex-1 md:flex-1 w-full bg-grey-lightest px-4 py-4 m-2 text-center pp-stats-box pp-current-stat">
        <span class="block">34</span>
        <span class="block">12</span>
      </div>
        </div>
        </slick>
    </div>



 </div>
</template>


<script>
import Slick from 'vue-slick';
   export default {
       components: { Slick },
        data() {
            return {
              opportunities: 23,
              subscribed: 0,
              notinterested: 0,
                slickOptions: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,
                dots: true
                
                // Any other options that can be got from plugin documentation
  },    
                slides: [
                  {
                    desc: 'Opportunities for you', 
                    stats: '23'
                  },
                  {
                    desc: 'Subscribed', 
                    stats: '0'
                  },
                  {
                    desc: 'Not interested', 
                    stats: '0'
                  }
                ]

                  }
        }

    }
</script>