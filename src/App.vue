<template>
    <div id="app">
        <loading :progress="progress" v-show="loading"></loading>
        <pageone v-if="!loading"></pageone>
        <pagetwo v-if="!loading"></pagetwo>
        <background-audio></background-audio>
    </div>
</template>

<script>
import Loading from '@/views/Loading';
import PageOne from '@/views/P1';
import PageTwo from '@/views/P2';
import Loader from 'resource-loader';
import { IMAGE_URLS } from '@/assets/js/constants.js';
import BackgroundAudio from '@/components/BackgroundAudio'

export default {
    name: 'app',
    components: {
        'loading': Loading,
        'pageone': PageOne,
        'pagetwo': PageTwo,
        'background-audio': BackgroundAudio
    },

    data() {
        return {
            progress: 13,
            loading: true
        };
    },

    mounted() {
        this.initLoader();
    },

    methods: {
        initLoader() {
            let loader = new Loader();

            Object.keys(IMAGE_URLS).forEach(name => {
                loader.add(name, IMAGE_URLS[name]);
            });

            loader.onProgress.add(() => {
                this.progress = Math.round(loader.progress);
            });

            loader.onComplete.add(() => {
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            });

            loader.load();
            window.loader = loader;
        }
    }
};
</script>
