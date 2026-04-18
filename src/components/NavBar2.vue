<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useThemes } from '@/composables/useThemes'

// Theme composable
const { storedTheme, setTheme } = useThemes()

// Navbar ref
const navbarRef = ref(null)

// Themes config
const themes = [
  { key: 'light', label: 'Light', icon: 'sun-fill' },
  { key: 'dark', label: 'Dark', icon: 'moon-stars-fill' },
  { key: 'auto', label: 'Auto', icon: 'circle-half' }
]

// Computed current theme
const currentTheme = computed(() =>
  themes.find(t => t.key === storedTheme.value)
)

// Capitalized label
const capitalizedTheme = computed(() => {
  if (!storedTheme.value) return ''
  return storedTheme.value.charAt(0).toUpperCase() + storedTheme.value.slice(1)
})

// Scroll handler (optimized)
const handleScroll = () => {
  if (!navbarRef.value) return
  navbarRef.value.classList.toggle('scrolled', window.scrollY > 10)
}

// Optional: close offcanvas on navigation
const closeOffcanvas = () => {
  const el = document.getElementById('offcanvasNavbar')
  if (el && el.classList.contains('show')) {
    el.classList.remove('show')
  }
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav ref="navbarRef" class="navbar navbar-expand-lg sticky-top" aria-label="Main navigation">
    <div class="container">

      <!-- Brand -->
      <RouterLink to="/" class="navbar-brand d-flex align-items-center gap-2" exact-active-class="active">
        <span class="fw-semibold">Vue Bootstrap</span>
      </RouterLink>

      <!-- Mobile Toggle -->
      <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar">
        <i class="bi bi-list fs-1"></i>
      </button>

      <!-- Offcanvas -->
      <div class="offcanvas offcanvas-end" id="offcanvasNavbar">
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title">Menu</h5>
          <button class="btn-close shadow-none" data-bs-dismiss="offcanvas"></button>
        </div>

        <div class="offcanvas-body">

          <!-- Nav Links -->
          <ul class="navbar-nav flex-grow-1 mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link" exact-active-class="active" @click="closeOffcanvas">
                <i class="bi bi-house-door me-1"></i> Home
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/about" class="nav-link" exact-active-class="active" @click="closeOffcanvas">
                <i class="bi bi-info-circle me-1"></i> About
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/services" class="nav-link" exact-active-class="active" @click="closeOffcanvas">
                <i class="bi bi-briefcase me-1"></i> Services
              </RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link" exact-active-class="active" @click="closeOffcanvas">
                <i class="bi bi-envelope me-1"></i> Contact
              </RouterLink>
            </li>
          </ul>

          <!-- Right Side -->
          <div class="d-flex flex-column flex-lg-row gap-2 ms-lg-auto">

            <!-- Search -->
            <form class="d-flex" @submit.prevent>
              <div class="input-group">
                <span class="input-group-text bg-transparent border-end-0">
                  <i class="bi bi-search"></i>
                </span>
                <input class="form-control border-start-0 ps-0" type="search" placeholder="Search...">
              </div>
            </form>

            <!-- Theme Dropdown -->
            <div class="dropdown">
              <button class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-2"
                data-bs-toggle="dropdown" aria-label="Select theme">
                <i class="bi" :class="`bi-${currentTheme?.icon || 'circle-half'}`"></i>
                <span class="d-none d-md-inline">{{ capitalizedTheme }}</span>
              </button>

              <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0">
                <li v-for="theme in themes" :key="theme.key">
                  <button class="dropdown-item d-flex align-items-center gap-2"
                    :class="{ active: storedTheme.value === theme.key }" @click="setTheme(theme.key)">
                    <i class="bi" :class="`bi-${theme.icon}`"></i>
                    <span>{{ theme.label }}</span>
                    <i v-if="storedTheme.value === theme.key" class="bi bi-check-lg ms-auto"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
