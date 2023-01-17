<template>
  <h1>Exercise Finder</h1>
  
  <form @submit="searchHandler">
    <label for="search">Search</label>
    <input 
    type="search"
    name="search"
    id="search"
    placeholder="Search by name"
    :value="searchQuery"
    @input="changeHandler"
    />
    
    <button>Search</button>
  </form>

  <div class="type-container">
    <TypeCard 
    v-for="typeName in types" 
    :key="typeName" 
    :typeName="typeName"
    @click="typeClickHandler(typeName)" />
  </div>

  <div v-if="exercises">
    <ExerciseCard 
    v-for="e in exercises" 
    :key="e.name" 
    :exercise="e" />
  </div>
</template>

<script>
import { typesArr } from '@/utils';
import { GetExercises } from '@/services/api';
import TypeCard from './TypeCard.vue';
import ExerciseCard from './ExerciseCard.vue';

export default {
  name: 'ExerciseFinder',
  components: {
    TypeCard,
    ExerciseCard
  },
  data: () => ({
    types: typesArr,
    searchQuery: '',
    exercises: null
  }),
  methods: {
    changeHandler(evt) {
      this.searchQuery = evt.target.value
    },
    async searchHandler(evt) {
      evt.preventDefault()
      this.exercises = await GetExercises({name: this.searchQuery})
      this.searchQuery = ''
    },
    async typeClickHandler(typeName) {
      this.exercises = await GetExercises({muscle: typeName})
    }
  }
}
</script>

<style lang="scss" scoped>

.type-container {
  max-width: 800px;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>