import { useStorage, usePreferredDark } from "@vueuse/core";
import { computed, watch } from "vue";

export function useThemes() {
  const stored = useStorage("theme", "auto");
  const prefersDark = usePreferredDark();

  const activeTheme = computed(() => {
    return stored.value === "auto" ? (prefersDark.value ? "dark" : "light") : stored.value;
  });

  // Only react to changes (initial value already set by inline script)
  watch(
    activeTheme,
    (theme) => {
      document.documentElement.setAttribute("data-bs-theme", theme);
    },
    { immediate: false },
  );

  const setTheme = (theme) => {
    stored.value = theme;
  };

  return { activeTheme, storedTheme: stored, setTheme };
}
