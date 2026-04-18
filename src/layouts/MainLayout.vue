<template>
  <!-- Main Content -->
  <div class="full-screen-mobile">
    <div class="content-wrapper">

      <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
        <div class="card-body p-5 text-center">
          <h1 class="display-5 fw-bold text-white mb-4">My App</h1>
          <p class="lead text-white-50 mb-5">
            Click the button below to open the full-screen menu on mobile
          </p>

          <!-- Button to trigger Offcanvas -->
          <button class="btn btn-light btn-lg fw-semibold px-5" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#fullScreenOffcanvas">
            Open Full Screen Menu
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Full Screen Offcanvas -->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="fullScreenOffcanvas" aria-labelledby="offcanvasLabel">

    <div class="offcanvas-header">
      <h5 class="offcanvas-title fw-bold" id="offcanvasLabel">Menu</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>

    <div class="offcanvas-body p-4">
      <ul class="nav flex-column fs-5">
        <li class="nav-item mb-3">
          <a href="#" class="nav-link text-dark px-0">🏠 Home</a>
        </li>
        <li class="nav-item mb-3">
          <a href="#" class="nav-link text-dark px-0">🔍 Discover</a>
        </li>
        <li class="nav-item mb-3">
          <a href="#" class="nav-link text-dark px-0">📚 Library</a>
        </li>
        <li class="nav-item mb-3">
          <a href="#" class="nav-link text-dark px-0">❤️ Favorites</a>
        </li>
        <li class="nav-item mb-3">
          <a href="#" class="nav-link text-dark px-0">⚙️ Settings</a>
        </li>
      </ul>

      <hr class="my-4">

      <div class="d-grid gap-2">
        <button class="btn btn-primary btn-lg">Login</button>
        <button class="btn btn-outline-secondary btn-lg">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<style>
body,
html {
  height: 100%;
  margin: 0;
}

.full-screen-mobile {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.content-wrapper {
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
}

/* Make Offcanvas full screen on mobile */
@media (max-width: 991.98px) {
  .offcanvas {
    width: 100% !important;
    max-width: 100% !important;
    height: 100vh !important;
  }
}

/* Optional: nicer look for offcanvas */
.offcanvas-header {
  background: #4c51bf;
  color: white;
}
</style>
