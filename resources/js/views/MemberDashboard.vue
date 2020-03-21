<template>
    <section class="container mx-auto px-4 pp-dashboard">
<h1>LKSFLDSKFSD</h1>
        <div class="flex flex-wrap mb-6">
            <div class="md:block lg:hidden welcome-mobile">
                <pp-welcome-message></pp-welcome-message>
            </div>
            <pp-side-bar></pp-side-bar>
            <div class="w-full content-start lg:w-3/4 bg-transparent lg:pl-6">
                <div class="md:hidden lg:block welcome-large">
                    <pp-welcome-message></pp-welcome-message>
                </div>

                <pp-account-statistics></pp-account-statistics>


                <div class="flex-1 md:flex  lg:justify-between">

                    <pp-quick-actions></pp-quick-actions>


                    <!-- mobile box Social Proofs -->

                    <pp-uploaded-social-proofs class="mb-6 md:hidden"></pp-uploaded-social-proofs>

                    <!--  box end -->


                    <pp-promotions-box></pp-promotions-box>


                </div>

                <!-- 3rd box Social Proofs -->

                <pp-uploaded-social-proofs class="hidden md:inline-block"></pp-uploaded-social-proofs>

                <!-- 3rd box end -->


                <div class="lg:hidden help-links-mobile">
                    <pp-helpful-links></pp-helpful-links>
                </div>

            </div>
        </div>

    </section>

</template>

<script>
    import PromotionsBox from '../components/dashboard/PromotionsBox.vue';
    import WelcomeMessage from '../components/dashboard/WelcomeMessage.vue';
    import AccountStatistics from '../components/dashboard/AccountStatistics.vue';
    import QuickActions from '../components/dashboard/QuickActions.vue';
    import UploadedSocialProofs from '../components/dashboard/UploadedSocialProofs.vue';
    import HelpfulLinks from '../components/dashboard/HelpfulLinks.vue';

    export default {
        components: {
            'pp-promotions-box': PromotionsBox,
            'pp-welcome-message': WelcomeMessage,
            'pp-account-statistics': AccountStatistics,
            'pp-quick-actions': QuickActions,
            'pp-uploaded-social-proofs': UploadedSocialProofs,
            'pp-helpful-links': HelpfulLinks
        },
        mounted() {
            console.log("Component mounted.");
        }

    };
</script>
