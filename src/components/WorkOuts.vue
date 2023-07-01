<template>
  <div ref="workouts" class="workouts">
    <div class="inputs" v-if="mode === 'none'">
      <!-- <button @click="saveHandler">Save Workout</button>
      <button @click="loadHandler">Load Workout</button> -->
      <button @click="workoutsHandler">Workouts</button>
    </div>

    <button @click="closeHandler" v-if="mode !== 'none'">X</button>

    <div class="workouts" v-if="mode === 'workouts'">
      <h2>Load Workout</h2>

      <div v-if="workouts.length">
        <WorkOutsCard
        v-for="workout in workouts"
        :key="workout.name"
        :workout="workout"
        :deleteWorkout="deleteWorkout"
        :loadWorkout="loadWorkout"
        :closeHandler="closeHandler" />
      </div>

      <div v-else>
        <p>No saved workouts!</p>
      </div>
    </div>

    <div class="save" v-if="mode === 'save'">
      <h2>Save Workout</h2>

      <form @submit="submitHandler">
        <label for="workoutName" class="hide">Name</label>
        <input 
        class="big-input"
        type="text"
        name="workoutName"
        placeholder="Name"
        required
        :value="workoutName"
        @input="changeHandler" />

        <button>Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import { useWorkoutsStore } from '@/stores/workouts';
import WorkOutsCard from './WorkOutsCard.vue';

export default {
  name: 'WorkOuts',
  props: ['exercises', 'loadWorkout'],
  components: {
    WorkOutsCard
  },
  data: () => ({
    workoutRef: null,
    workoutName: '',
    workouts: useWorkoutsStore().workoutsArr,
    mode: 'none' //used to determine if we display save or load divs
  }),
  methods: {
    workoutsHandler() {
      this.mode = 'workouts'
      this.workoutName = ''
      this.workoutRef.classList.add('active')
    },
    saveHandler() {
      this.mode = 'save'
      this.workoutName = ''
      this.workoutRef.classList.add('active')
    },
    loadHandler() {
      this.mode = 'load'
      this.workoutName = ''
      this.workoutRef.classList.add('active')
    },
    closeHandler() {
      this.mode = 'none'
      this.workoutName = ''
      this.workoutRef.classList.remove('active')
    },
    changeHandler(evt) {
      this.workoutName = evt.target.value
    },
    submitHandler(evt) {
      evt.preventDefault()
      useWorkoutsStore().addWorkout({
        name: this.workoutName.toLowerCase().trim(),
        exercises: this.exercises
      })

      this.workoutName = ''
      this.closeHandler()
    },
    deleteWorkout(workout) {
      this.workouts = useWorkoutsStore().deleteWorkout(workout)
    }
  },
  mounted: function() {
    this.workoutRef = this.$refs.workouts
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


h2 {
  color: $white;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

p {
  color: $white;
}

.workouts {
  padding: 1rem;
  border-radius: 1rem;

  input {
    border-color: $white;
    color: $white;

    &:focus {
      border-color: $green;
      color: $green;
    }
  }
}
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

.load {
  margin-top: 1rem;
  height: 400px;
  overflow-y: auto;
}
</style>