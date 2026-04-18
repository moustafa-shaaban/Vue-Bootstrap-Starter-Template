<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="app-layout d-flex flex-column min-vh-100">
    <NavBar />
    <main class="flex-grow-1 d-flex">
      <div class="content-wrapper w-100">
        <div class="content-inner">
          <router-view v-slot="{ Component, route }">
            <transition name="material" mode="out-in">
              <component :is="Component" :key="route.path" />
            </transition>
          </router-view>
        </div>
      </div>
    </main>
    <!-- Optional Footer -->
    <footer class="border-top text-center py-2 small text-muted">
      © 2026
    </footer>
  </div>
</template>


<style scoped>
/* Wrapper always fills width */
.content-wrapper {
  display: flex;
  width: 100%;
}

/* Default (mobile): full width, no centering */
.content-inner {
  width: 100%;
  padding: 1rem;
}

/* Desktop behavior */
@media (min-width: 768px) {
  .content-wrapper {
    justify-content: center;
    /* center horizontally */
    align-items: center;
    /* center vertically */
  }

  .content-inner {
    max-width: 720px;
    /* control content width */
    width: 100%;
    padding: 2rem;

    /* optional "card" feel */
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    background: var(--bs-body-bg);
  }
}

/* Larger screens */
@media (min-width: 1200px) {
  .content-inner {
    max-width: 900px;
  }
}

.material-leave-active,
.material-enter-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.material-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.material-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.96);
}
</style>
