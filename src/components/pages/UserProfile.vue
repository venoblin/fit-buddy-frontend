<template>
  <h1>{{ `${user}'s` }} Profile</h1>

  <div class="links">
    <button @click="toggleInput">Edit Name</button>
    <button class="danger" @click="deleteUser">Delete User</button>
  </div> 
</template>

<script>
import { useUserStore } from '@/stores/user'

export default {
  name: 'UserProfile',
  data: () => ({
    user: useUserStore().user,
    isEditing: false
  }),
  methods: {
    deleteUser() {
      useUserStore().deleteUser()
      this.$router.push('/')
    },
    toggleInput() {
      this.isEditing = true
    }
  }
}
</script>

<style lang="scss" scoped></style>