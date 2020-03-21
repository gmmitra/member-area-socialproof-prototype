<template>
    <div class="bg-grey-lightest -mx-5 p-5">
          <div class="border-t md:border-none lg:border-t border-grey-light pt-5 -mt-5">
              <div class="relative pl-8">
                  <img :src="imgpath+userPhoto" class="align-middle absolute pin-l">
                  <p>
                      <span class="text-blue text-lg block mb-2 leading-tight">All-star Profile</span>
                      Your profile is looking great! Your complete profile gives you higher chances of getting more opportunities.
                  </p>
              </div>

          </div>
      </div>
</template>


<script>

export default {
 
  data() {
            return {
                imgpath: '/cayde6/images/',
                userPhoto: 'allstar.svg'
            }
        }

};
</script>
