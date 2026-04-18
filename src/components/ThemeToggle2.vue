<script setup>
import { useThemes } from '@/composables/useThemes';

const { storedTheme, setTheme } = useThemes()

const themes = [
  { key: 'light', label: 'Light', icon: 'sun-fill' },
  { key: 'dark', label: 'Dark', icon: 'moon-stars-fill' },
  { key: 'auto', label: 'Auto', icon: 'circle-half' }
]
</script>

<template>
  <li class="nav-item dropdown">
    <button class="nav-link dropdown-toggle d-flex align-items-center gap-2" data-bs-toggle="dropdown" type="button">
      <i class="bi bi-circle-half opacity-75"></i>
      <span class="d-none d-md-inline">Theme</span>
    </button>

    <ul class="dropdown-menu dropdown-menu-end shadow-sm navbar-theme-dropdown">
      <li v-for="theme in themes" :key="theme.key">
        <button class="dropdown-item d-flex align-items-center justify-content-between"
          :class="{ active: storedTheme === theme.key }" @click="setTheme(theme.key)">
          <div class="d-flex align-items-center gap-2">
            <i class="bi" :class="`bi-${theme.icon}`"></i>
            {{ theme.label }}
          </div>

          <i v-if="storedTheme === theme.key" class="bi bi-check2 text-primary"></i>
        </button>
      </li>
    </ul>
  </li>
</template>

<style scoped>
.navbar-theme-dropdown {
  border-radius: 0.75rem;
  padding: 0.4rem;
  min-width: 180px;
}

.dropdown-item {
  border-radius: 0.5rem;
  padding: 0.45rem 0.6rem;
}

.dropdown-item.active {
  background-color: rgba(13, 110, 253, 0.1);
}

[data-bs-theme="dark"] .dropdown-item.active {
  background-color: rgba(13, 110, 253, 0.25);
}
</style>
