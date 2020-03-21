<template>
    <div class="bg-grey-lightest -mx-5 p-5">
        <div class="border-t md:border-none lg:border-t border-grey-light pt-5 -mt-5">
            <p>
                Whoops, seems like you have not completed your advance profile yet. Some Survey Panels target at specific
                profile, an updated Advance Profile attract more opportunities!
            </p>
            <!--<ul class="list-reset py-5 relative">-->
                <!--<li class="py-2 pl-6" v-for="(notice, k) in notices" :key="k">-->
                    <!--<img src="/cayde6/images/add.svg" class="align-middle absolute pin-l">-->
                    <!--<a :href="notice.link" class="no-underline font-bold">-->
                        <!--{{notice.title}}</a>-->
                    <!--<p class="block mt-5">{{notice.description}}</p></li>-->
            <!--</ul>-->
        </div>
    </div>
</template>


<script>

    export default {

        data() {
            return {
                notices: [
                    {
                        title: 'Update your Lifestyle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum incidunt.',
                        link: '#'
                    },
                    {
                        title: 'Update your Lifestyle',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum incidunt.',
                        link: '#'
                    }
                ]
            }
        }

    };
</script>
