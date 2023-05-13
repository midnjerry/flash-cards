<template>
  <main>
    <table>
      <thead>
        <th>Category</th>
        <th>Question</th>
        <th>Answer</th>
      </thead>
      <tbody>
        <tr
          v-for="(question, index) in $store.state.questions"
          v-bind:key="index"
        >
          <td>{{ question.category }}</td>
          <td>{{ question.question }}</td>
          <td>{{ question.answer }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>