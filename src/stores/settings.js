import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    language: "en",
    sidebar: false,
  }),
  actions: {
    setLanguage(lang) {
      this.language = lang;
    },
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
  persist: true,
});
