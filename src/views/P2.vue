<template>
  <div class="page2" v-show="isp2">
    <img :src="p3" class="p3" v-if="isp3" @click="closeP3">
    <div class="icon-p2tit p2-tit"></div>

    <div class="p2-pic1">
      <div class="icon-p2pic1 bounce animated infinite" @click="openPic(1)"></div>
      <div class="p2-txt p2-pic1-txt" v-if="pic[1]">
        <p class="p">3D球幕电影</p>
        <p>时间：3月20日-4月20日</p>
        <p>地点：新世纪广场南部</p>
      </div>
    </div>

    <div class="p2-pic2">
      <div class="icon-p2pic2 rubberBand animated infinite" @click="openPic(2)"></div>
      <div class="p2-txt p2-pic2-txt" v-if="pic[2]">
        <p class="p">樱花创意集市</p>
        <p>时间：3月20日-4月20日</p>
        <p>地点：华夏南路正阳家居东侧</p>
      </div>
    </div>

    <div class="p2-pic3">
      <div class="icon-p2pic3 swing animated infinite" @click="openPic(3)"></div>
      <div class="p2-txt p2-pic3-txt" v-if="pic[3]">
        <p class="p">炫彩樱花</p>
        <p>时间：3月20日-4月20日</p>
        <p>地点：华夏南路</p>
      </div>
    </div>

    <div class="p2-pic4">
      <div class="icon-p2pic4 jello animated infinite" @click="openPic(4)"></div>
      <div class="p2-txt p2-pic4-txt" v-if="pic[4]">
        <p class="p">广场文化欢乐月</p>
        <p>时间：3月20日-4月20日节假日</p>
        <p>地点：新世纪广场北部</p>
      </div>
    </div>

    <div class="p2-pic5">
      <div class="icon-p2pic5 tada animated infinite" @click="openPic(5)"></div>
      <div class="p2-txt p2-pic5-txt" v-if="pic[5]">
        <p class="p">樱花文化节特色展</p>
        <p>时间：3月20日-4月20日节假日</p>
        <p>地点：市文化中心北广场</p>
      </div>
    </div>

    <div class="p2-pic6">
      <div class="icon-p2pic6 p2-pic66"></div>
      <div class="icon-p2pic8 p2-pic88 pulse animated infinite" @click="openPic(6)"></div>
    </div>

    <div class="p2-pic7">
      <div class="icon-p2pic7 p2-pic7"></div>
      <div class="p2-txt p2-pic7-txt" v-if="pic[6]">
        <p class="p">免费打印照片</p>
        <p>时间：4月2日-4月20日，上午9：00-下午5：00</p>
        <p>地点：华夏南路鹤壁农商银行服务店</p>
        <div class="invit-btn" @click="showInvit">查看参与方式</div>
      </div>
    </div>
  </div>
</template>
<script>
import Page from '@/components/Page';
import { IMAGE_URLS } from '@/assets/js/constants.js';

export default {
    components: {
        page: Page
    },

    data() {
        return {
            isp2: false,
            isp3: false,

            pic: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false
            },
            p3: IMAGE_URLS.p3
        };
    },
    created() {
        window.smoothscroll = () => {
            let currentScroll =
                document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimFrame(window.smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 5);
            }
        };
    },

    mounted() {
        this.receive();
    },

    methods: {
        receive() {
            this.$root.$on('open-p2', data => {
                this.isp2 = true;
            });
        },
        openPic(tag) {
            this.pic[tag] = !this.pic[tag];
        },
        showInvit() {
            this.isp3 = true;
            setTimeout(() => {
                window.smoothscroll();
            }, 500)
        },
        closeP3() {
            this.isp3 = false;
        }
    }
};
</script>
