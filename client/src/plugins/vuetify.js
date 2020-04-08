import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
    theme: {
        primary: '#673ab7',
        secondary: '#9c27b0',
        accent: '#ffc107',
        error: '#e91e63',
        warning: '#f44336',
        info: '#00bcd4',
        success: '#8bc34a'
        }
});

export default new Vuetify({
});
