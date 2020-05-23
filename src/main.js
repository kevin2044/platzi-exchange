import Vue from "vue"; //importar la libreria de vue
import App from "./App.vue"; // se utiliza importa para importar el componente de App
import "@/assets/css/tailwind.css";
import Chartick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart));
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);
Vue.config.productionTip = false;

//es la instancia de Vue
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
