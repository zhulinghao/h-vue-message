import Vue from  'vue';
import App from './App.vue';
import HVueMessage from '../index'
Vue.use(HVueMessage);
new Vue({
    el:'#app',
    data:{
        message:'Hello world'
    },
    template: '<App />',
    components: { App: App }
})
