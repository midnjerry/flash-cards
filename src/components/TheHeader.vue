<template>
  <header>
    <div id="logo-container">
      <img src="@/assets/logo.png" />
      <h1>Flash Card Game</h1>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/players">Players</router-link>
      <router-link to="/questions">Questions</router-link>
      <router-link to="/play">Play</router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
#logo-container {
  padding: 10px;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
nav {
  display: flex;
  flex-direction: row;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 0 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: 64px;
  height: 64px;
}
</style>