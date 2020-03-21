<template>
<div class="md:w-1/2 lg:w-1/2 bg-white mb-6 md:ml-3 pp-content-box">
  <div class="bg-grey-lightest relative">
     <h5 class="block text-base px-5 py-4 uppercase">Promotions</h5>
      <div class="pp-promo-prev-nxt absolute pin-r pin-t">
        <!-- slider nav arrow append to pp-promo-prev-nxt -->
      </div>
  </div>
 
    <div class="p-4">
        <div class="mb-3 mx-2">
             <slick ref="slick" :options="slickOptions" class="">
        <div v-for="(slide, slidek) in slides" :key="slidek"><img :src="imgpath + slide.image" class="mx-auto mb-3" alt="">
        
        <article class="px-2">
          <header class="text-lg text-blue font-bold mb-4">{{slide.title}}</header>
          <div class="flex justify-start mb-4">
            <div class="pr-4 leading-normal">
              <p class="text-xs text-right">Period:</p>
              <p class="text-xs text-right">Rewards:</p>
              <p class="text-xs text-right">Participants:</p>
            </div>

            <div class="leading-normal">
              <p class="text-xs text-left">{{slide.Period}}</p>
              <p class="text-xs text-left">{{slide.Rewards}}</p>
              <p class="text-xs text-left">{{slide.Participants}}</p>
            </div>

          </div>
          <div class="md:flex lg:flex md:justify-between lg:justify-between">
            <a :href="slide.takepart" class="bg-blue text-white rounded-sm px-4 py-2 no-underline text-xs hover:bg-blue-lighter pp-take-part">Take Part</a><a href="#" class="no-underline text-xs px-3 py-2 text-grey hover:text-blue font-bold pp-view-all">View All</a>
          </div>
        </article>
        </div>
        </slick>
        </div>
        
    </div>



 </div>
 
</template>


<script>
import Slick from 'vue-slick';
   export default {
       components: { Slick },
        data() {
            return {
                slickOptions: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: true,
                appendArrows: '.pp-promo-prev-nxt',
                nextArrow: '<a href="#" class="inline-block"><img src="/cayde6/images/arrow-right.svg"></a>',
                prevArrow: '<a href="#" class="inline-block"><img src="/cayde6/images/arrow-left.svg"></a>'
                
                // Any other options that can be got from plugin documentation
  },
                imgpath: 'cayde6/images/',    
                slides: [
                  {
                    image: 'promo-banner.png', 
                    title: 'Sample Promotion title: With a title so long it pushes to the next line.',Period: 'August 20 - August 31, 2018', 
                    Rewards: 'USD 1000', 
                    Participants: '8000 participants have taken part', 
                    takepart: '#takepart'
                  },
                  {
                    image: 'promo-banner.png', 
                    title: 'Sample Promotion title: With a title so long it pushes to the next line.',Period: 'August 20 - August 31, 2018', 
                    Rewards: 'USD 1000', 
                    Participants: '8000 participants have taken part', 
                    takepart: '#takepart'
                  }
                ]

                  }
        }

    }
</script>