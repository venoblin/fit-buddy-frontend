<template>
  <h1>{{ `${user}'s` }} Profile</h1>

  <form v-if="isEditing">
    <label class="hide" for="update-user">Update Your Name</label>
    <input 
    class="big-input"
    type="text"
    name="user"
    id="update-user"
    placeholder="Update your name"
    required
    :value="user"
    @input="changeHandler"
    />

    <button>Save</button>
  </form>

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
    },
    changeHandler(evt) {
      this.user = evt.target.value
    }
  }
}
</script>

<style lang="scss" scoped></style>