import { createApp } from "vue";
import "./style.css";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
});
createApp(App).use(autoAnimatePlugin).mount("#app");
