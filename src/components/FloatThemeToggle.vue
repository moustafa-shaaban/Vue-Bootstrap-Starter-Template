<script setup>
import { ref } from 'vue'
import { useThemes } from '@/composables/useThemes';

const open = ref(false)

const { storedTheme, activeTheme, setTheme } = useThemes()

const themes = [
  { key: 'light', icon: 'sun-fill' },
  { key: 'dark', icon: 'moon-stars-fill' },
  { key: 'auto', icon: 'circle-half' }
]

const toggle = () => (open.value = !open.value)
</script>

<template>
  <div class="theme-fab">
    <!-- Options -->
    <div class="theme-options" :class="{ show: open }">
      <button v-for="theme in themes" :key="theme.key" class="theme-option"
        :class="{ active: storedTheme === theme.key }" @click="setTheme(theme.key)">
        <i class="bi" :class="`bi-${theme.icon}`"></i>
      </button>
    </div>

    <!-- Main button -->
    <button class="theme-main-btn" @click="toggle">
      <i class="bi" :class="activeTheme === 'dark' ? 'bi-moon-stars-fill' : 'bi-sun-fill'"></i>
    </button>
  </div>
</template>

<style scoped>
.theme-fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

/* Main button */
.theme-main-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: var(--bs-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.theme-main-btn:hover {
  transform: scale(1.05);
}

/* Options container */
.theme-options {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  transition: all 0.2s ease;
}

.theme-options.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* Option buttons */
.theme-option {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: var(--bs-body-bg);
  color: var(--bs-body-color);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

.theme-option:hover {
  transform: scale(1.1);
}

.theme-option.active {
  background: var(--bs-primary);
  color: white;
}
</style>
