<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />

    <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists,
          etc.
        </div>
      </div>
    </div>

    <main class="flex-grow-1 d-flex">
      <div class="w-100 p-3">

        <router-view v-slot="{ Component, route }">
          <transition name="material" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </router-view>

      </div>
    </main>

    <footer class="border-top text-center py-2 small text-muted">
      © 2026
    </footer>
  </div>
</template>


<style scoped>
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
