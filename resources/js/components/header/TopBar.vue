<template>
  
    <nav class="w-full bg-white fixed z-10 pin-t pp-header">
    <div class="px-4 container mx-auto relative bg-white pp-top-bar">
    <a href="/" class="inline-block logo"><img src="images/pp-logo.png" alt="Panelplace logo"></a>
    <pp-profile-settings></pp-profile-settings>
    <div class="inline-block lg:hidden float-right hamburger-nav" @click="mobileNav = !mobileNav">
      <font-awesome-icon icon="bars" class="text-lg lg:hidden" />
    </div>
    </div>
    <!-- main nav menu -->
    <div class="bg-blue-darkest hidden h-screen text-center lg:h-auto lg:text-left lg:inline-block fixed lg:float-right lg:relative w-full pin-l pin-t items-center mobile-nav" :class="{'flex': mobileNav}">
     <div id="nav" class="container mx-auto">
      <div class="px-4 lg:relative lg:block">
       <div @click="mobileNav = !mobileNav" class="block lg:hidden"><img src="images/close-button.svg" alt="close"></div>
      <router-link to="/dashboard" class="no-underline lg:px-4 block"><span @click="mobileNav = !mobileNav">Dashboard</span></router-link>
      <router-link to="/opportunities" class="no-underline lg:px-4 block"><span @click="mobileNav = !mobileNav">Opportunities</span></router-link>
      <router-link to="/member-social-proof" class="no-underline lg:px-4 block"><span @click="mobileNav = !mobileNav">Social Proof</span></router-link>
      <router-link to="/promotions" class="no-underline lg:px-4 block"><span @click="mobileNav = !mobileNav">Promotions</span></router-link>
      <router-link to="/invite-friends" class="no-underline lg:px-4"><span @click="mobileNav = !mobileNav">Invite Friends</span></router-link>
      <router-link to="/community" class="no-underline lg:px-4"><span @click="mobileNav = !mobileNav">Community</span></router-link>
      </div>
    </div>
    </div>
    <!-- /main nav menu -->
    </nav>
    
</template>



<script>
import SettingsMenu from "./SettingsMenu.vue";

export default {
   
    components: {
        'pp-profile-settings':SettingsMenu
    },
    data() {
            return {
             mobileNav: false,
            }
        }
}
</script>


<style lang="scss" scoped>
//************* navigation styles

$blue: #1d8ed0;
#nav {
   @media screen and (min-width: 992px) {
  padding:0;
   }
  a {
    padding-left: 0;
    @apply text-white block ;
    span {
        padding: 20px 0 17px;
        display: inline-block;
    }
    &:hover {
       @apply text-white  ;
    }
    &.router-link-exact-active {
       @apply text-white ;
    }
    @media screen and (min-width: 992px) {
      padding-right: 40px;
      display: inline-block;
    @apply text-white ;
    &:hover {
       @apply text-white  ;
       span {
           border-bottom: 3px solid $blue;
       }
    }
    &.router-link-exact-active {
       @apply text-white ;
       span {
           border-bottom: 3px solid $blue;
       }
    }
    }
  }
}

.signup-btn {
    color: #fff !important;
    border-radius: 14px;
    margin: 0 auto;
    width: 200px;
    padding:10px !important;
}

.logo {
  margin-top: 3px;
    img {
    width: 128px;
    margin-top: 15px;
    margin-bottom: 15px;
}
} 
.mobile-nav {
  background: #101c29;
   @media screen and (min-width: 992px) {
  
   }
}

.hamburger-nav {
  margin-top: 25px;
}

//************* navigation styles/
</style>
