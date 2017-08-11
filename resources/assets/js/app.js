import './bootstrap';
import Vue from 'vue';
import ChatRoom from './components/ChatRoom.vue';

Vue.config.productionTip = false;
Vue.component('chat-room', ChatRoom);

const app = new Vue({
    el: '#app'
});
