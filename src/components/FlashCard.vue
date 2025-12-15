<template>
  <section class="card" :class="{ flipped: isFlipped }">
    <!-- Top rail -->
    <div class="top-rail">
      <div class="badge">
        <span class="dot" />
        <span class="badge-text">{{ question.category }}</span>
      </div>

      <div class="meta">
        <span class="meta-pill" v-if="question.language">
          {{ question.language.toUpperCase() }}
        </span>
      </div>
    </div>

    <!-- Title -->
    <h2 class="question">{{ question.question }}</h2>

    <!-- Code -->
    <pre v-if="question.code" class="code">
      <code :class="question.language">{{ question.code }}</code>
    </pre>

    <!-- Answer / Button -->
    <transition name="flipfade" mode="out-in">
      <div v-if="isFlipped" key="answer" class="answer-wrap">
        <div class="answer-label">Answer</div>
        <h3 class="answer">{{ question.answer }}</h3>

        <!-- Optional little “railroad flavor” footer line -->
        <div class="signal-line">
          <span class="signal green"></span>
          <span class="signal yellow"></span>
          <span class="signal red"></span>
          <span class="signal-text">Clear to proceed</span>
        </div>
      </div>

      <div v-else key="button" class="footer">
        <button class="btn" @click="displayAnswer">
          <span class="btn-icon">🚂</span>
          Display Answer
        </button>
        <div class="hint">Tip: Think “railroad rules + clean code”</div>
      </div>
    </transition>

    <!-- Bottom rail -->
    <div class="bottom-rail">
      <div class="ties"></div>
    </div>
  </section>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default {
  props: ["question", "isFlipped"],
  methods: {
    displayAnswer() {
      this.$emit("flipEvent", true);
    },
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll();
  },
  watch: {
    // ensures code highlights when you move to the next card/question
    question: {
      deep: true,
      handler() {
        this.$nextTick(() => Prism.highlightAll());
      },
    },
    isFlipped() {
      this.$nextTick(() => Prism.highlightAll());
    },
  },
};
</script>

<style scoped>
/* BNSF-ish palette (inspired): orange + dark + warm neutrals */
.card {
  --bnsf-orange: #ff6a00;
  --bnsf-orange-2: #ff8a2a;
  --coal: #121212;
  --steel: #1c1c1c;
  --panel: rgba(18, 18, 18, 0.72);
  --text: #f4f4f4;
  --muted: rgba(244, 244, 244, 0.72);
  --shadow: 0 18px 40px rgba(0, 0, 0, 0.35);

  width: min(760px, 92vw);
  margin: 18px auto;
  padding: 18px 18px 14px;
  border-radius: 18px;
  color: var(--text);
  background:
    radial-gradient(900px 260px at 10% 10%, rgba(255, 106, 0, 0.35), transparent 55%),
    radial-gradient(700px 240px at 90% 0%, rgba(255, 138, 42, 0.22), transparent 55%),
    linear-gradient(180deg, #161616, #0e0e0e);
  box-shadow: var(--shadow);
  border: 1px solid rgba(255, 106, 0, 0.25);
  position: relative;
  overflow: hidden;
}

/* subtle texture */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 35%),
    repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0 1px, transparent 1px 10px);
  opacity: 0.35;
  pointer-events: none;
}

.top-rail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 1;
  padding-bottom: 10px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 106, 0, 0.12);
  border: 1px solid rgba(255, 106, 0, 0.35);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--bnsf-orange);
  box-shadow: 0 0 0 3px rgba(255, 106, 0, 0.18);
}

.badge-text {
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 12px;
  color: rgba(255, 210, 180, 0.95);
}

.meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.meta-pill {
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--muted);
  font-weight: 600;
  font-size: 12px;
}

.question {
  position: relative;
  z-index: 1;
  margin: 6px 0 14px;
  font-size: clamp(20px, 2.4vw, 28px);
  line-height: 1.15;
  letter-spacing: 0.2px;
}

.code {
  position: relative;
  z-index: 1;
  margin: 0 0 14px;
  padding: 14px 14px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 106, 0, 0.18);
  overflow: auto;
  max-height: 280px;
}

/* Make Prism blend into the theme */
.code :deep(code) {
  font-size: 13px;
  line-height: 1.5;
}

/* Answer styling */
.answer-wrap {
  position: relative;
  z-index: 1;
  padding: 14px;
  border-radius: 16px;
  background: rgba(255, 106, 0, 0.10);
  border: 1px solid rgba(255, 106, 0, 0.28);
}

.answer-label {
  font-size: 12px;
  letter-spacing: 0.35px;
  text-transform: uppercase;
  color: rgba(255, 210, 180, 0.9);
  margin-bottom: 6px;
  font-weight: 700;
}

.answer {
  margin: 0;
  font-size: clamp(18px, 2.1vw, 24px);
  line-height: 1.25;
  color: #fff;
}

/* Footer */
.footer {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 8px;
  justify-items: start;
  padding: 4px 0 6px;
}

.btn {
  appearance: none;
  border: 0;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 14px;
  background: linear-gradient(180deg, var(--bnsf-orange), #e95e00);
  color: #121212;
  font-weight: 800;
  letter-spacing: 0.2px;
  box-shadow: 0 12px 22px rgba(255, 106, 0, 0.22), 0 10px 28px rgba(0, 0, 0, 0.35);
  transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
}

.btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.04);
}

.btn:active {
  transform: translateY(0px);
  box-shadow: 0 8px 16px rgba(255, 106, 0, 0.18), 0 10px 24px rgba(0, 0, 0, 0.32);
}

.btn-icon {
  font-size: 18px;
}

.hint {
  font-size: 12px;
  color: var(--muted);
}

/* Bottom “track” */
.bottom-rail {
  margin-top: 14px;
  position: relative;
  z-index: 1;
  height: 14px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(255, 106, 0, 0.35), rgba(255, 106, 0, 0.10));
  border: 1px solid rgba(255, 106, 0, 0.22);
  overflow: hidden;
}

.ties {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.35) 0 10px,
    transparent 10px 18px
  );
  opacity: 0.55;
}

/* “Signal lights” line under the answer */
.signal-line {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  opacity: 0.95;
}

.signal {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #666;
  box-shadow: 0 0 0 3px rgba(0,0,0,0.22);
}
.signal.green { background: #38d46a; }
.signal.yellow { background: #ffd24a; }
.signal.red { background: #ff4d4d; }

.signal-text {
  margin-left: 6px;
  font-size: 12px;
  color: rgba(244, 244, 244, 0.78);
}

/* Nice flip-ish transition */
.flipfade-enter-active,
.flipfade-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}
.flipfade-enter-from,
.flipfade-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.99);
}

/* Responsive improvements */
@media (max-width: 520px) {
  .card {
    padding: 14px 14px 12px;
    border-radius: 16px;
  }
  .code {
    padding: 12px;
  }
}
</style>
