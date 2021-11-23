import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#367798',
        secondary: '#367798',
        accent: '#76492b',
        error: '#cc2f48',
        info: '#492b76',
        success: '#2b766f',
        warning: '#FFC107'
      },
    },
  },
});
