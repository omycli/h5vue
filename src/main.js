import 'whatwg-fetch';
import '@/assets/js/jweixin-1.2.0';
import '@/assets/css/package.scss';
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

window.loader = null;

// 解决IE9不支持requestAnimationFrame问题
window.requestAnimFrame = (function() {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
})();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
});
