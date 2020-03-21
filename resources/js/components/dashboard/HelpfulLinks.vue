<template>
    <div class="flex-1 bg-white shadow mt-6 pp-content-box pp-sidebar">
        <h5 class="block text-base bg-grey-lightest px-5 py-4 uppercase">Helpful Links</h5>
        <ul class="flex flex-wrap list-reset p-5">
            <li v-for="(link, index) in links" :key="index" class="py-2 md:w-1/2 lg:w-full">
                <a
                        :href="link.link"
                        class="no-underline"
                        v-text="link.title"
                        target="_blank"
                ></a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        title: 'How to get started?',
                        link: 'https://support.panelplace.com/hc/en-us/articles/215844217-How-does-PanelPlace-work-',
                    },
                    {
                        title: 'What opportunities does PanelPlace offer?',
                        link: 'https://support.panelplace.com/hc/en-us/articles/360000148981-What-opportunities-does-PanelPlace-offer-',
                    },
                    {
                        title: 'What type of opportunities I can join?',
                        link: 'https://support.panelplace.com/hc/en-us/articles/360000148682-What-type-of-opportunities-PanelPlace-offer-',
                    },
                    {
                        title: 'Can I earn in all of the recommended opportunities?',
                        link: 'https://support.panelplace.com/hc/en-us/articles/360000149001-Can-I-earn-in-all-of-the-opportunities-offered-by-PanelPlace-',
                    },
                    {
                        title: 'Why I don’t have/less opportunity offers?',
                        link: 'https://support.panelplace.com/hc/en-us/articles/115000126381-I-have-no-recommended-survey-panels-',
                    },
                    {
                        title: 'How soon can I start earning money?',
                        link: 'https://support.panelplace.com/hc/en-us/articles/215844027-How-soon-can-I-start-earning-money-',
                    },
                    {
                        title: 'How can I earn from Paid Surveys?',
                        link: 'https://support.panelplace.com/hc/en-us/articles/215843807-How-to-make-money-from-Online-Paid-Surveys-',
                    },
                ]
            }
        }
    }
</script>
