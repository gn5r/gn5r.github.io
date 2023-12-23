// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./components/Layout.vue";
import "./style.css";
import vuetify from "./plugins/vuetify";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(vuetify);
  },
} satisfies Theme;
