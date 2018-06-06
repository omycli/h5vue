<template>
    <div class="page1" v-show="isp1">
        <div class="icon-logo page1-logo"></div>

        <div class="icon-text1 page1-text1 animated fadeInLeft"></div> 
        <div class="icon-text2 page1-text2 animated fadeInRight"></div> 

        <div class="icon-cherry1 page1-cherry1"></div>

        <div class="icon-title page1-title animated bounceIn"></div>
        
        <div class="icon-cherry2 page1-cherry2 animated" :class="moveR ? 'bounceOutRight' : 'page1-spin' " @touchmove="goP2()"></div>
        <div class="icon-arrow page1-arrow"></div>

        <div class="icon-label page1-label"></div>
    </div>
</template>

<script>
import Page from '@/components/Page';

export default {
    components: {
        page: Page
    },

    data() {
        return {
            isp1: true,
            moveR: false
        };
    },

    methods: {
        goP2() {
            this.moveR = true;
            setTimeout(() => {
                this.isp1 = false;
                this.$root.$emit('open-p2', 'true');
            }, 600)
        }
    }
};
</script>
