<template>
  <h1>{{ `${user}'s` }} Profile</h1>
  <button class="danger" @click="deleteUser">Delete User</button>
</template>

<script>
import { useUserStore } from '@/stores/user'

export default {
  name: 'UserProfile',
  data: () => ({
    user: useUserStore().user
  }),
  methods: {
    deleteUser() {
      useUserStore().deleteUser()
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped></style>