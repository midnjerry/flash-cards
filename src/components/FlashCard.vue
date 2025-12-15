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
/* Theme A: Industrial Light — clean, bright, subtle orange accents */
.card {
  --bnsf-orange: #ff6a00;
  --coal: #121212;
  --ink: #1f2937;         /* slate-ish */
  --panel: #ffffff;
  --panel-2: #f6f7f9;
  --border: rgba(17, 24, 39, 0.12);
  --text: #111827;
  --muted: rgba(17, 24, 39, 0.65);
  --shadow: 0 16px 30px rgba(0, 0, 0, 0.10);

  width: min(760px, 92vw);
  margin: 18px auto;
  padding: 18px 18px 14px;
  border-radius: 18px;

  color: var(--text);
  background: linear-gradient(180deg, var(--panel), var(--panel-2));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

/* subtle “riveted plate” texture */
.card::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20px 20px, rgba(0,0,0,0.06) 0 2px, transparent 3px),
    radial-gradient(circle at calc(100% - 20px) 20px, rgba(0,0,0,0.06) 0 2px, transparent 3px),
    radial-gradient(circle at 20px calc(100% - 20px), rgba(0,0,0,0.06) 0 2px, transparent 3px),
    radial-gradient(circle at calc(100% - 20px) calc(100% - 20px), rgba(0,0,0,0.06) 0 2px, transparent 3px),
    repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0 1px, transparent 1px 14px);
  opacity: 0.55;
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
  border-bottom: 1px solid rgba(17, 24, 39, 0.08);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 106, 0, 0.10);
  border: 1px solid rgba(255, 106, 0, 0.22);
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--bnsf-orange);
  box-shadow: 0 0 0 3px rgba(255, 106, 0, 0.18);
}

.badge-text {
  font-weight: 800;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 12px;
  color: rgba(17, 24, 39, 0.85);
}

.meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.meta-pill {
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(17, 24, 39, 0.06);
  border: 1px solid rgba(17, 24, 39, 0.10);
  color: rgba(17, 24, 39, 0.70);
  font-weight: 700;
  font-size: 12px;
}

.question {
  position: relative;
  z-index: 1;
  margin: 12px 0 14px;
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
  background: #0b1020; /* deep navy for contrast */
  border: 1px solid rgba(17, 24, 39, 0.14);
  overflow: auto;
  max-height: 280px;
}

/* Prism content */
.code :deep(code) {
  font-size: 13px;
  line-height: 1.5;
}

.answer-wrap {
  position: relative;
  z-index: 1;
  padding: 14px;
  border-radius: 16px;
  background: rgba(255, 106, 0, 0.08);
  border: 1px solid rgba(255, 106, 0, 0.20);
}

.answer-label {
  font-size: 12px;
  letter-spacing: 0.35px;
  text-transform: uppercase;
  color: rgba(17, 24, 39, 0.70);
  margin-bottom: 6px;
  font-weight: 800;
}

.answer {
  margin: 0;
  font-size: clamp(18px, 2.1vw, 24px);
  line-height: 1.25;
  color: rgba(17, 24, 39, 0.92);
}

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
  border: 1px solid rgba(17, 24, 39, 0.12);
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 14px;

  background: #111827; /* clean dark button */
  color: #fff;
  font-weight: 900;
  letter-spacing: 0.2px;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.10);
  transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
}

.btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
}

.btn:active {
  transform: translateY(0px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.10);
}

.btn-icon {
  font-size: 18px;
}

.hint {
  font-size: 12px;
  color: var(--muted);
}

/* clean track bar */
.bottom-rail {
  margin-top: 14px;
  position: relative;
  z-index: 1;
  height: 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(17, 24, 39, 0.10), rgba(17, 24, 39, 0.03));
  border: 1px solid rgba(17, 24, 39, 0.10);
  overflow: hidden;
}

.ties {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    rgba(255, 106, 0, 0.25) 0 8px,
    transparent 8px 16px
  );
  opacity: 0.35;
}

/* Signals look better on light theme */
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
  box-shadow: 0 0 0 3px rgba(0,0,0,0.10);
}
.signal.green { background: #2ecc71; }
.signal.yellow { background: #f1c40f; }
.signal.red { background: #e74c3c; }

.signal-text {
  margin-left: 6px;
  font-size: 12px;
  color: rgba(17, 24, 39, 0.65);
}

/* Transition */
.flipfade-enter-active,
.flipfade-leave-active {
  transition: opacity 160ms ease, transform 160ms ease;
}
.flipfade-enter-from,
.flipfade-leave-to {
  opacity: 0;
  transform: translateY(6px) scale(0.99);
}

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
