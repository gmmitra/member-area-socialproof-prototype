<template>
    <div class="hidden lg:inline-block relative float-right profile-wrap">
        <a href="#" class="text-grey-darker no-underline">Knowledge Base</a>
        <a
                href="#"
                v-click-outside="hide"
                class="hidden lg:inline-block text-grey no-underline pp-accnt-setting"
                @click="toggle"
        >
            <span class="inline-block overflow-hidden rounded-full align-middle mx-2 pp-avatar">
                <img src="images/blank-profile-picture.jpg">
            </span>
            <span class="align-middle pp-account-name no-underline text-grey-darker">
                YuFei Sensei
            </span>
            <span class="ml-3 pp-arrow-d">
                <img src="images/arrow-down.svg" v-if="!opened">
                <img src="images/arrow-up.svg" v-else>
            </span>
        </a>
        <div class="hidden absolute rounded z-10 lg:inline-block rounded-sm bg-white pin-r pp-dropdown" v-if="opened">
            <ul class="list-reset">
                <li class="border-b">
                    <a class="p-4 block text-xs cursor-pointer text-grey-dark no-underline">
                        Profile
                    </a>
                </li>
                <li class="border-b">
                    <a href="/member/logout" class="p-4 block text-xs  text-grey-dark  no-underline">Logout</a>
                </li>
            </ul>
            <img class="absolute" src="images/dropdown-tip.png">
        </div>
    </div>
</template>


<script>
    import ClickOutside from 'vue-click-outside';

    export default {

        data() {
            return {
                opened: false
            }
        },

        methods: {
            toggle() {
                this.opened = !this.opened
            },

            hide() {
                this.opened = false
            },
        },

        directives: {
            ClickOutside
        }

    }
</script>

<style lang="scss" scoped>
.pp-avatar {
    width: 40px;
    height: 40px;
}
.profile-wrap {
    margin-top: 15px;
}
.pp-arrow-d {
    img {
        width: 18px;
    }
}
.pp-dropdown {
    max-width: 300px;
    width: 100%;
    -webkit-box-shadow: 0 0 30px 8px rgba(0,0,0,.13);
    box-shadow: 0 0 30px 8px rgba(0,0,0,.13);
    img {
    top: -7px;
    right: 4px;
    }
}
</style>
