<template>
<div class="inline-block">
                <button class="relative align-middle ml-4 pp-btn-notice focus:outline-none" :class="{isOpen:opened}" @click="toggle"><span v-show="!opened" class="notif-count absolute pin-t pin-r">{{newNotifs.length}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="29" viewBox="0 0 24 29">
                        <path fill="#75787D" fill-rule="nonzero" d="M12 28.203c1.551 0 2.82-1.27 2.82-2.82H9.18c0 1.55 1.269 2.82 2.82 2.82zm9.166-8.461v-7.756c0-4.371-2.961-7.897-7.05-8.884v-.987C14.115.987 13.127 0 12 0c-1.128 0-2.115.987-2.115 2.115v.987c-4.09.987-7.05 4.513-7.05 8.884v7.756l-2.821 2.82v1.41h23.972v-1.41l-2.82-2.82z"/>
                    </svg>
                </button>
                <div class="rounded-sm bg-white pt-2 mt-2 pp-dropdown pp-dropdown-notice" v-show="opened">
                    <ul class="list-reset">
                        <li class="" v-if="newNotifs.length > 0">
                            <span class="text-blue font-semibold px-4 py-2 block border-b bg-white">NEW</span>
                            <a v-for="(notification, index) in newNotifs" :key="index" href="#" class="p-4 block leading-normal text-xs border-b text-grey-dark no-underline"><strong>{{notification.name}}</strong> commented on <strong>{{notification.articleTitle}}</strong> Social Proof</a></li>
                        <li class="" v-if="earlierNotifs.length > 0">
                            <span class="text-blue font-semibold px-4 py-2 block border-b bg-white">EARLIER</span>
                            <a v-for="(notification, index) in earlierNotifs" :key="index" href="#" class="p-4 block leading-normal text-xs  text-grey-dark no-underline"><strong>{{notification.name}}</strong> commented on <strong>{{notification.articleTitle}}</strong> Social Proof</a></li>
                    </ul>
                    <img class="absolute" src="images/dropdown-tip.png">
                </div>
</div>
</template>

<script>

// import ClickOutside from 'vue-click-outside';

    export default {

        data() {
            return {
                opened: false, 
                newNotifs: [
                    {name:'Carla', articleTitle:'Essay Writing Contest Winner'},
                    {name:'Kevin', articleTitle:'Essay Writing Contest Winner'}
                ],
                earlierNotifs: [
                    {name:'Viva', articleTitle:'Essay Writing Contest Winner'},
                    {name:'Chun Li', articleTitle:'Essay Writing Contest Winner'}
                ]
                 }
        },
            methods: {

         
toggle () {
      this.opened = !this.opened
    },

    hide () {
      this.opened = false
    }
        },
       

 directives: {  
    // ClickOutside 
  } 

    }
</script>