<template>
  <main>
    <timer v-bind:isRunning="isPlaying"></timer>
    <button v-if="!isPlaying" v-on:click="startGame">Start Game</button>
    <button v-if="isPlaying" v-on:click="stopGame">Stop Game</button>
    <button v-if="isPlaying" v-bind:disabled="!isReady" v-on:click="drawCard">
      Next Card
    </button>

    <h1 v-if="isPlaying">-- {{ player }} --</h1>
    <flash-card
      v-if="isPlaying"
      v-on:flipEvent="onFlip"
      v-bind:question="question"
      v-bind:isFlipped="isFlipped"
    />
    <p>Score: {{ score }}</p>
  </main>
</template>

<script>
import FlashCard from "../components/FlashCard.vue";
import Timer from '../components/Timer.vue';

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

<style>
section {
    margin-left: auto;
    margin-right: auto;
}
button {
  margin: 10px;
}
</style>