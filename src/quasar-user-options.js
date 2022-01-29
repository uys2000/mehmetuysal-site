import "./styles/quasar.scss";
import iconSet from "quasar/icon-set/eva-icons.js";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import "@quasar/extras/mdi-v4/mdi-v4.css";
import "@quasar/extras/eva-icons/eva-icons.css";
import { AddressbarColor } from "quasar";

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    brand: {
      primary: "#000000",
      secondary : "#222222",
      accent: "#FF0080",

      dark: "#000000",

      positive: "#00c42e",
      negative: "#e80000",
      info: "#00b7db",
      warning: "#d69d00",
    },
  },
  plugins: {
    AddressbarColor,
  },
  iconSet: iconSet,
};
