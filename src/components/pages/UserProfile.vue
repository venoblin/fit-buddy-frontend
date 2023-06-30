<template>
  <h1>{{ `${user}'s` }} Profile</h1>

  <div class="favorites">
    <h2>Favorite Exercises</h2>

    <div v-if="favorites.length">
      <h3>Favorites Here</h3>
    </div>

    <div v-else>
      <p>You have no favorites!</p>
    </div>
  </div>

  <form v-if="isEditing" @submit="submitHandler">
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
import { useRoutineStore } from '@/stores/routine'
import { useWorkoutsStore } from '@/stores/workouts'

export default {
  name: 'UserProfile',
  data: () => ({
    user: useUserStore().user,
    favorites: useUserStore().favoritesArr,
    isEditing: false
  }),
  methods: {
    deleteUser() {
      useUserStore().deleteUser()
      useRoutineStore().resetRoutine()
      useWorkoutsStore().resetWorkouts()
      this.$router.push('/')
    },
    toggleInput() {
      this.isEditing = !this.isEditing
    },
    changeHandler(evt) {
      this.user = evt.target.value
    },
    submitHandler(evt) {
      evt.preventDefault()
      
      useUserStore().setUserName(this.user)
      this.toggleInput()
    }
  }
}
</script>

<style lang="scss" scoped></style>