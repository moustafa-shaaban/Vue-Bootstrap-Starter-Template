<script setup>
import { useThemes } from '@/composables/useThemes';

const { storedTheme, activeTheme, setTheme } = useThemes()
</script>

<template>
  <div class="dropdown">
    <button class="btn btn-bd-light dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown"
      aria-expanded="false" id="theme-dropdown">
      <svg class="bi me-2 opacity-75 theme-icon-active" width="1em" height="1em">
        <use :href="`#${activeTheme === 'dark' ? 'moon-stars-fill' : 'sun-fill'}`" />
      </svg>
      {{ activeTheme === 'dark' ? 'Dark' : 'Light' }}
    </button>

    <ul class="dropdown-menu dropdown-menu-end">
      <li>
        <button class="dropdown-item d-flex align-items-center" :class="{ active: storedTheme === 'light' }"
          @click="setTheme('light')" type="button">
          <i class="bi bi-sun-fill"></i>
          Light
        </button>
      </li>
      <li>
        <button class="dropdown-item d-flex align-items-center" :class="{ active: storedTheme === 'dark' }"
          @click="setTheme('dark')" type="button">
          <i class="bi bi-moon-stars-fill"></i>
          Dark
        </button>
      </li>
      <li>
        <button class="dropdown-item d-flex align-items-center" :class="{ active: storedTheme === 'auto' }"
          @click="setTheme('auto')" type="button">
          <i class="bi bi-circle-half"></i>
          Auto
        </button>
      </li>
    </ul>
  </div>
</template>
