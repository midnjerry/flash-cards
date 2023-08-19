<template>
  <section>
    <div class="category">{{ question.category }}</div>
    <h2 class="question">{{ question.question }}</h2>
    <pre v-if="question.code" class="code"><code v-bind:class="question.language">
    {{  question.code }}
    </code></pre>
    <h3 v-if="isFlipped" class="answer"> {{ question.answer }} </h3>
    <div v-else id="button-container">
      <button v-on:click="displayAnswer">Display</button>
    </div>
  </section>
</template>

<script>
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
export default {
  props: ["question", "isFlipped"],
  data() {
    return {
      name: this.player,
    };
  },
  methods: {
    displayAnswer() {
      this.$emit('flipEvent', true);
    },
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); //
  }
};
</script>

<style>
section {
  width: 600px;
  border: 1px solid black;
  display:grid;
  grid-template-areas: 
   ". . category"
   "question question question"
   "code code code"
   "answer answer answer"
   "footer footer footer"
}

.category {
  grid-area: category;
  justify-self: end;
}

.question {
  grid-area: question;
}

.code {
  grid-area: code;
}

.answer {
  grid-area: answer;
}

#button-container {
  grid-area: footer;
  margin-bottom: 10px;
}
</style>