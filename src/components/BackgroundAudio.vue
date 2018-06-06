<template>
    <div>
        <span class="music" :class="on === true ? 'on' : 'off'" @click="musicBtn"></span>
        <audio id="audioBg" :src="audioSrc" style="display:none" autoplay loop></audio>
    </div>
</template>

<script>
import { MEDIA_URLS } from '@/assets/js/constants';

export default {
    data() {
        return {
            audioSrc: MEDIA_URLS.backgroundAudio,
            on: true
        };
    },

    mounted() {
        let el = this.$el;
        window.wx.ready(() => {
            el.play();
            el.pause();
            setTimeout(_ => el.play(), 0);
        });
    },

    methods: {
        musicBtn() {
            const audio = document.querySelector('#audioBg')
            this.on = !this.on;
            if (this.on) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    }
};
</script>
