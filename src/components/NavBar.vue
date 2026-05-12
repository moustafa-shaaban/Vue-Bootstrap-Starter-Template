<script setup>
import { useThemes } from '@/composables/useThemes';
import { capitalize } from 'vue';

const { storedTheme, setTheme } = useThemes()

const themes = [
  { key: 'light', label: 'Light', icon: 'sun-fill' },
  { key: 'dark', label: 'Dark', icon: 'moon-stars-fill' },
  { key: 'auto', label: 'Auto', icon: 'circle-half' }
]
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" aria-label="Navbar">
    <div class="container">
      <button class="btn btn-outline" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
        aria-controls="offcanvasExample">
        <i class="bi bi-list"></i>
      </button>
      <div class="navbar-brand">
        <RouterLink to="/" class="nav-link" active-class="active">
          <i class="bi bi-house-door me-1"></i> Home
        </RouterLink>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <i class="bi bi-three-dots"></i>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <RouterLink to="/" class="nav-link" active-class="active">
              <i class="bi bi-house-door me-1"></i> Home
            </RouterLink>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav flex-grow-1 pe-3">
            <!-- <li class="nav-item">
              <RouterLink to="/" class="nav-link py-2 px-0 px-lg-2 active" active-class="active">
                Home
              </RouterLink>
            </li> -->
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link py-2 px-0 px-lg-2 active" active-class="active">
                <i class="bi bi-info-circle me-1"></i> About
              </RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link py-2 px-0 px-lg-2 active dropdown-toggle" href="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-circle-half opacity-75"></i>
                {{ capitalize(storedTheme) }}
              </a>
              <ul class="dropdown-menu" aria-label="Select theme">
                <li v-for="theme in themes" :key="theme.key">
                  <button class="dropdown-item" :class="{ active: storedTheme === theme.key }"
                    @click="setTheme(theme.key)">
                    <div class="d-flex align-items-center gap-2">
                      <i class="bi" :class="`bi-${theme.icon}`"></i>
                      {{ theme.label }}
                    </div>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex mt-3 mt-lg-0" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>
