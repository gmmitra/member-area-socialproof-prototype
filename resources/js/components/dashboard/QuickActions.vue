<template>
     <div class="md:w-1/2 lg:w-1/2 bg-white mb-6 md:mr-3 pp-content-box">
  <h5 class="block text-base bg-grey-lightest px-5 py-4 uppercase">Quick Actions</h5>
    <div class="px-4">
<ul class="list-reset px-2">
  <li v-for="(action, index) in actions" :key="index" class="border-solid border-b border-grey-light"><a href="#" class="block no-underline py-5 font-bold text-grey hover:text-blue"><span class="inline-block align-middle mr-3"><img :src="imgpath+action.img" alt=""></span> {{action.title}}</a></li>
</ul>
    </div>

 </div>
</template>

<script>
  export default {
        data() {
            return {
              imgpath:'cayde6/images/',
               actions: [
                {title: 'Join Opportunities', img:'join-opportunities.svg'},
                {title: 'Upload Social Proof', img:'upload-social-proof.svg'},
                {title: 'Update My Profile', img:'update-profile.svg'},
                {title: 'Get Support', img:'get-support.svg'}
                       
                  ]
                  }
        }
    }
</script>
