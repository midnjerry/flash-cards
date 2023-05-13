<template>
  <section>
    <div class="category">{{ question.category }}</div>
    <h2 class="question">{{ question.question }}</h2>
    <h3 v-if="isFlipped" class="answer"> {{ question.answer }} </h3>
    <div v-else id="button-container">
      <button v-on:click="displayAnswer">Display</button>
    </div>
  </section>
</template>

<script>
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

.answer {
  grid-area: answer;
}

#button-container {
  grid-area: footer;
  margin-bottom: 10px;
}
</style>