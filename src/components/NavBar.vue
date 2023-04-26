<template>
  <nav>
    <p class="logo">Fit-Buddy</p>

    <RouterLink v-if="isLoggedIn" class="link" to="/">Home</RouterLink>
  </nav>
</template>

<script>

export default {
  name: 'NavBar',
  data: () => ({
    isLoggedIn: false
  }), 
  methods: {
    checkIfLoggedIn() {
      if (localStorage.getItem('user')) this.isLoggedIn = true
    }
  },
  mounted: function() {
    this.checkIfLoggedIn()
  }
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