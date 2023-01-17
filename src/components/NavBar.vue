<template>
  <nav>
    <RouterLink class="link" to="/">FitBuddy</RouterLink>

    <div class="links">
      <p>Link</p>
      <p>Link</p>
      <p>Link</p>
    </div>
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
  .links {
    display: flex;
  }
}
</style>