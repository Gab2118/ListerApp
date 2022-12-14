import { createRouter, createWebHashHistory } from "vue-router";
import ListView from "../views/ListView.vue";
import SettingView from "../views/SettingsView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ListView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingView,
    },
  ],
});

export default router;
