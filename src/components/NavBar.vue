<template>
  <nav>
    <p class="logo">Fit-Buddy</p>

    <div v-if="user">
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/profile">Profile</RouterLink>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from '@/stores/user';

export default {
  name: 'NavBar',
  data: () => ({
    user: useUserStore().user
  })
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