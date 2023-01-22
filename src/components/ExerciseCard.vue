<template>
  <div class="exercise-card">
    <button @click="clickAddHandler">Toggle Add Mode</button>
    
    <p class="name">{{ exercise.name }}</p>

    <div v-if="addMode">
      <form>
        <label for="sets">Sets</label>
        <input 
        type="number"
        name="sets"
        id="sets"
        min="1"
        :value="sets"
        @change="handleChange"
        />

        <label for="reps">Reps</label>
        <input 
        type="number"
        name="reps"
        id="reps"
        :value="reps"
        @change="handleChange"
        />

        <label for="weight">Weight(LBS)</label>
        <input 
        type="number"
        name="weight"
        id="weight"
        :value="weight"
        @change="handleChange"
        />

        <button>Add</button>
      </form>
    </div>
    
    <div v-else>
      <p class="muscle">Muscle: {{ exercise.muscle }}</p>
      <p class="equipment">Equipment: {{ exercise.equipment }}</p>

      <button @click="clickInstHandler">Toggle Instructions</button>
      <p v-if="showInstructions" class="instructions">{{ exercise.instructions }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ExerciseCard',
  props: ['exercise'],
  data: () => ({
    day: null,
    showInstructions: false,
    addMode: false,
    sets: 1,
    reps: 1,
    weight: 10
  }),
  methods: {
    clickInstHandler() {
      this.showInstructions = !this.showInstructions
    },
    clickAddHandler() {
      this.addMode = !this.addMode
      if (this.showInstructions) this.showInstructions = false
    },
    handleChange(evt) {
      const target = evt.target
      this[target.name] = target.value
    }
  },
  mounted: function() {
    this.day = this.$route.params.day
  }
}
</script>

<style lang="scss" scoped>
.exercise-card {
  max-width: 500px;
  padding: 1rem;
  margin: 1rem auto;
  background-color: darkgray;
}
</style>