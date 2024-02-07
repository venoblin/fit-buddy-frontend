<template>
  <h1>{{ `${user}'s` }} Profile</h1>

  <div class="user-info" v-if="!isEditing">
    <div class="inputs">
      <button @click="toggleInput">Edit Name</button>
      <button class="danger" @click="deleteUser">Delete User</button>
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

  <div class="workouts">
    <h2>Workouts</h2>

    <div v-if="workouts.length">
      <p>Workouts...</p>
    </div>
    <div v-else>
      <p>No workouts!</p>
    </div>

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
    isEditing: false,
    workouts: useWorkoutsStore().workoutsArr
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

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.inputs {
  button {
    margin: 0 0.5rem;
  }
}

.favorites {
  border: 1px solid $grey;
  border-radius: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  width: fit-content;
  margin: 2rem auto 0 auto;

  .day-exercise:last-of-type {
    border-bottom: none;
  }
}
</style>