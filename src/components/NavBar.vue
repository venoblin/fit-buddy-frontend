<template>
  <nav>
    <p class="logo">Fit-Buddy</p>

    <RouterLink class="link" to="/">Home</RouterLink>
  </nav>
</template>

<script>

export default {
  name: 'NavBar'
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .links {
    display: flex;
  }
}
</style>