import App from "./index.vue";
import { Quasar } from "quasar";
import { createApp } from "vue";
import quasarUserOptions from "./quasar-user-options";
import "animate.css";

const app = createApp(App);
app.use(Quasar, quasarUserOptions);
app.mount("#app");
