<template>
  <div ref="workouts">
    <div class="inputs" v-if="mode === 'none'">
      <button @click="saveHandler">Save Workout</button>
      <button @click="loadHandler">Load Workout</button>
    </div>

    <button @click="closeHandler" v-if="mode !== 'none'">X</button>

    <div class="save" v-if="mode === 'save'">
      <h2>Save Workout</h2>

      <form @submit="submitHandler">
        <label for="workoutName" class="hide">Name</label>
        <input 
        class="big-input"
        type="text"
        name="workoutName"
        placeholder="Name"
        :value="workoutName"
        @input="changeHandler" />

        <button>Save</button>
      </form>
    </div>

    <div class="load" v-if="mode === 'load'">
      <h2>Load Workout</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkOuts',
  props: ['exercises'],
  data: () => ({
    workoutRef: null,
    workoutName: '',
    workout: {
      name: null,
      exercises: null
    },
    mode: 'none' //used to determine if we display save or load divs
  }),
  methods: {
    saveHandler() {
      this.mode = 'save'
      this.workoutRef.classList.add('active')
    },
    loadHandler() {
      this.mode = 'load'
      this.workoutRef.classList.add('active')
    },
    closeHandler() {
      this.mode = 'none'
      this.workoutRef.classList.remove('active')
    },
    changeHandler(evt) {
      this.workoutName = evt.target.value
    },
    submitHandler(evt) {
      evt.preventDefault()
      console.log(this.exercises)
    }
  },
  mounted: function() {
    this.workoutRef = this.$refs.workouts
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.active {
  background-color: $darkBlue;

  button {
    border-color: $white;
    background-color: $white;
    color: $darkBlue;

    &:hover {
    background-color: transparent;
    color: $white;
    }
  }
}
</style>