<template>
  <header class="header">
    <!-- Left: Logo + Title -->
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="BNSF Training" />
      <div class="title-group">
        <h1>Flash Card Training</h1>
        <span class="subtitle">Railroad Terminology & Coding Concepts</span>
      </div>
    </div>

    <!-- Right: Navigation -->
    <nav class="nav">
      <router-link to="/" class="nav-link">
        Home
      </router-link>
      <router-link to="/players" class="nav-link">
        Players
      </router-link>
      <router-link to="/questions" class="nav-link">
        Questions
      </router-link>
      <router-link to="/play" class="nav-link play-link">
        Play
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
/* =========================
   BNSF Header Theme
   ========================= */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 14px 20px;
  background: #ffffff;
  border-bottom: 3px solid #ff6a00;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
}

/* Logo + Title */
.logo-container {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-container img {
  width: 56px;
  height: 56px;
}

.title-group {
  display: flex;
  flex-direction: column;
}

.title-group h1 {
  margin: 0;
  font-size: 20px;
  font-weight: 900;
  color: #111827;
  letter-spacing: 0.3px;
}

.subtitle {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.6px;
}

/* Navigation */
.nav {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-link {
  position: relative;
  padding: 8px 14px;

  font-size: 14px;
  font-weight: 800;
  text-decoration: none;

  color: #1f2937;
  border-radius: 6px;

  transition: background 0.15s ease, color 0.15s ease;
}

.nav-link:hover {
  background: #f3f4f6;
}

/* Active route */
.nav-link.router-link-exact-active {
  color: #111827;
  background: #f9fafb;
}

.nav-link.router-link-exact-active::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  height: 4px;
  width: 100%;
  background: #ff6a00;
  border-radius: 2px;
}

/* Emphasize Play */
.play-link {
  margin-left: 10px;
  border: 2px solid #111827;
  font-weight: 900;
}

.play-link:hover {
  background: #111827;
  color: #ffffff;
}

.play-link.router-link-exact-active {
  background: #ff6a00;
  border-color: #ff6a00;
  color: #111827;
}

/* Responsive */
@media (max-width: 720px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .nav {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
