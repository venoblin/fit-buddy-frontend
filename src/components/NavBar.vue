<template>
  <nav>
    <RouterLink class="logo" to="/">Fit Buddy</RouterLink>

    <div v-if="user">
      <RouterLink class="link" to="/profile">Profile</RouterLink>
    </div>
  </nav>
</template>

<script>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
  name: 'NavBar',
  data: () => ({
    user: storeToRefs(useUserStore()).user
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