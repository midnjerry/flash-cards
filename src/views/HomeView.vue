<template>
  <main class="page">
    <section class="hero">
      <div class="hero-left">
        <div class="badge">
          <span class="badge-dot"></span>
          BNSF Training System
        </div>

        <h1 class="headline">
          Flash Card Training
        </h1>

        <p class="description">
          Practice railroad terminology and software concepts using
          structured flash card sessions designed for accuracy,
          consistency, and retention.
        </p>

        <div class="actions">
          <router-link to="/play" class="btn btn-primary">
            🚦 Start Training
          </router-link>

          <router-link to="/players" class="btn btn-secondary">
            👷 Manage Crew
          </router-link>

          <router-link to="/questions" class="btn btn-secondary">
            📘 Question Bank
          </router-link>
        </div>
      </div>

      <div class="hero-right">
        <div class="info-panel">
          <h3>How It Works</h3>
          <ul>
            <li>Start a training run</li>
            <li>A crew member is selected</li>
            <li>Answer the question correctly</li>
            <li>Build your score and confidence</li>
          </ul>
        </div>

        <div class="info-panel">
          <h3>Training Focus</h3>
          <ul>
            <li>Railroad rules & terminology</li>
            <li>Signals and operating practices</li>
            <li>Programming & logic fundamentals</li>
            <li>Real-world scenario thinking</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="status-strip">
      <div class="status-item">
        <span class="label">Players</span>
        <span class="value">{{ $store.state.players.length }}</span>
      </div>

      <div class="divider"></div>

      <div class="status-item">
        <span class="label">Questions</span>
        <span class="value">{{ $store.state.questions.length }}</span>
      </div>

      <div class="divider"></div>

      <div class="status-item">
        <span class="label">Mode</span>
        <span class="value">Training</span>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
/* BNSF Training Portal Theme */
.page {
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

/* HERO */
.hero {
  width: min(1100px, 96vw);
  background: #ffffff;
  border: 2px solid #d1d5db;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);

  padding: 28px;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 28px;
  position: relative;
}

/* Left orange stripe */
.hero::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background: #ff6a00;
  border-radius: 12px 0 0 12px;
}

/* LEFT */
.hero-left {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border-radius: 6px;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: #111827;
  width: fit-content;
}

.badge-dot {
  width: 10px;
  height: 10px;
  background: #ff6a00;
  border-radius: 50%;
}

.headline {
  margin: 0;
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 900;
  color: #111827;
}

.description {
  max-width: 520px;
  font-size: 15px;
  font-weight: 600;
  color: #374151;
  line-height: 1.5;
}

/* ACTIONS */
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

.btn {
  padding: 12px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-primary {
  background: #111827;
  color: #ffffff;
}

.btn-primary:hover {
  background: #ff6a00;
  color: #111827;
}

.btn-secondary {
  background: #ffffff;
  border-color: #111827;
  color: #111827;
}

.btn-secondary:hover {
  background: #f3f4f6;
}

/* RIGHT */
.hero-right {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.info-panel {
  background: #f9fafb;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 14px 16px;
}

.info-panel h3 {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #111827;
}

.info-panel ul {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

.info-panel li {
  margin-bottom: 6px;
}

/* STATUS STRIP */
.status-strip {
  width: min(1100px, 96vw);
  background: #ffffff;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 14px 18px;
  gap: 18px;
}

.status-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: #6b7280;
}

.value {
  font-size: 18px;
  font-weight: 900;
  color: #111827;
}

.divider {
  width: 2px;
  height: 36px;
  background: #e5e7eb;
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
</style>
git status-box