<template>
  <nav>
    <p class="logo">Fit-Buddy</p>

    <div v-if="isLoggedIn">
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/profile">Profile</RouterLink>
    </div>
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
  .link {    
    &:first-of-type {
      margin-right: 1rem;
    }
  }
}
</style>