<template>
  <main>
    <table>
      <thead>
        <th>Name</th>
      </thead>
      <tbody>
        <tr v-for="(player, index) in $store.state.players" v-bind:key="index">
          <td>{{ player }}</td>
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