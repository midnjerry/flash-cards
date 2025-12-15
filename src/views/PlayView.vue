<template>
  <main class="page">
    <section class="panel">
      <!-- Header -->
      <header class="panel-header">
        <div class="header-left">
          <div class="marker"></div>
          <div>
            <h2 class="title">Training Run</h2>
            <p class="subtitle">Draw cards • Answer • Build score</p>
          </div>
        </div>

        <div class="right-stack">
          <div class="timer-box">
            <div class="timer-label">Session Timer</div>
            <timer :isRunning="isPlaying"></timer>
          </div>

          <div class="status-box">
            <div class="status-label">Signal Status</div>
            <div class="signal-row">
              <span class="signal" :class="signalClass"></span>
              <span class="signal-text">{{ signalText }}</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Controls -->
      <div class="controls">
        <button
          v-if="!isPlaying"
          class="btn btn-start"
          @click="startGame"
        >
          <span class="btn-icon">🚦</span>
          Start Game
        </button>

        <button
          v-if="isPlaying"
          class="btn btn-stop"
          @click="stopGame"
        >
          <span class="btn-icon">🛑</span>
          Stop
        </button>

        <button
          v-if="isPlaying"
          class="btn btn-next"
          :disabled="!isReady"
          @click="drawCard"
        >
          <span class="btn-icon">➡️</span>
          Next Card
        </button>

        <div class="score-pill">
          Score: <span class="score-num">{{ score }}</span>
        </div>
      </div>

      <!-- Player -->
      <div v-if="isPlaying" class="player-line">
        <span class="player-tag">On Duty</span>
        <h1 class="player-name">{{ player }}</h1>
      </div>

      <!-- Card -->
      <div class="card-stage">
        <flash-card
          v-if="isPlaying"
          @flipEvent="onFlip"
          :question="question"
          :isFlipped="isFlipped"
        />
        <div v-else class="idle">
          <div class="idle-title">Ready when you are.</div>
          <div class="idle-sub">
            Press <strong>Start Game</strong> to begin the training run.
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="panel-footer">
        <div class="note">
          🚂 Rule of thumb: Don’t rush. Accuracy first, speed second.
        </div>
      </footer>
    </section>
  </main>
</template>

<script>
import FlashCard from "../components/FlashCard.vue";
import Timer from "../components/Timer.vue";

export default {
  components: { FlashCard, Timer },
  data() {
    return {
      isReady: false,
      isFlipped: false,
      isPlaying: false,
      roster: [],
      questions: [],
      question: {},
      player: "",
      score: 0,
    };
  },
  computed: {
    // Simple “signal” feedback based on score
    signalText() {
      if (!this.isPlaying) return "Stopped";
      if (this.score >= 10) return "Clear";
      if (this.score >= 5) return "Approach";
      return "Restricting";
    },
    signalClass() {
      if (!this.isPlaying) return "red";
      if (this.score >= 10) return "green";
      if (this.score >= 5) return "yellow";
      return "red";
    },
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.isReady = true;
      this.roster = [...this.$store.state.players];
      this.drawCard();
    },
    stopGame() {
      this.isPlaying = false;
      this.isReady = true;
    },
    resetQuestions() {
      this.questions = [...this.$store.state.questions];
    },
    drawCard() {
      this.isReady = false;
      this.isFlipped = false;
      if (this.questions.length == 0) {
        this.resetQuestions();
      }
      const cardIndex = Math.floor(Math.random() * this.questions.length);
      this.question = this.questions.splice(cardIndex, 1)[0];

      const playerIndex = Math.floor(Math.random() * this.roster.length);
      this.player = this.roster.splice(playerIndex, 1)[0];

      this.isDisplaying = true;
    },
    onFlip() {
      this.isReady = true;
      this.isFlipped = true;
      this.score++;
    },
  },
};
</script>

<style scoped>
/* BNSF Training / Operations Theme */
.page {
  padding: 18px;
  display: flex;
  justify-content: center;
}

.panel {
  width: min(1100px, 96vw);
  background: #ffffff;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  position: relative;
}

/* Left orange stripe (accent-only) */
.panel::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background: #ff6a00;
}

/* Header */
.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;

  padding: 16px 18px 14px 18px;
  border-bottom: 2px solid #e5e7eb;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.marker {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: #ff6a00;
}

.title {
  margin: 0;
  font-size: 18px;
  font-weight: 900;
  color: #111827;
}

.subtitle {
  margin: 4px 0 0 0;
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.right-stack {
  display: flex;
  gap: 10px;
  align-items: stretch;
}

.timer-box,
.status-box {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 10px 12px;
  min-width: 170px;
}

.timer-label,
.status-label {
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.45px;
  color: #6b7280;
  margin-bottom: 6px;
}

/* Signal */
.signal-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.signal {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #dc2626;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.08);
}
.signal.green { background: #16a34a; }
.signal.yellow { background: #facc15; }
.signal.red { background: #dc2626; }

.signal-text {
  font-weight: 900;
  color: #111827;
}

/* Controls */
.controls {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 14px 18px;
  border-bottom: 2px solid #f3f4f6;
}

.btn {
  appearance: none;
  border: 2px solid #111827;
  background: #111827;
  color: #ffffff;
  font-weight: 900;
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  transition: transform 0.1s ease, background 0.15s ease, border-color 0.15s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}

.btn-icon {
  margin-right: 8px;
}

.btn-start:hover {
  background: #ff6a00;
  border-color: #ff6a00;
  color: #111827;
}

.btn-next {
  background: #ffffff;
  color: #111827;
}

.btn-next:hover {
  background: #f3f4f6;
}

.btn-stop {
  background: #111827;
}

.score-pill {
  margin-left: auto;
  padding: 10px 14px;
  border-radius: 8px;
  background: #f3f4f6;
  border: 1px solid #d1d5db;
  font-weight: 900;
  color: #111827;
}

.score-num {
  margin-left: 6px;
}

/* Player line */
.player-line {
  padding: 14px 18px 0;
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.player-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 106, 0, 0.10);
  border: 1px solid rgba(255, 106, 0, 0.25);
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  color: #111827;
}

.player-name {
  margin: 0;
  font-size: clamp(20px, 2.2vw, 30px);
  font-weight: 900;
  color: #111827;
}

/* Stage */
.card-stage {
  padding: 16px 18px 10px;
  display: flex;
  justify-content: center;
}

/* Idle */
.idle {
  width: min(760px, 92vw);
  background: #f9fafb;
  border: 2px dashed #d1d5db;
  border-radius: 10px;
  padding: 22px;
  text-align: center;
}

.idle-title {
  font-size: 18px;
  font-weight: 900;
  color: #111827;
  margin-bottom: 6px;
}

.idle-sub {
  font-size: 13px;
  color: #6b7280;
  font-weight: 600;
}

/* Footer */
.panel-footer {
  padding: 12px 18px;
  border-top: 2px solid #e5e7eb;
  background: #ffffff;
}

.note {
  font-size: 12px;
  color: #6b7280;
  font-weight: 600;
}

@media (max-width: 860px) {
  .right-stack {
    flex-direction: column;
  }
  .score-pill {
    margin-left: 0;
  }
}

@media (max-width: 560px) {
  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
