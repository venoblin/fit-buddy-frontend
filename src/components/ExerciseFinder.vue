<template>
  <button class="add-exercises-btn" v-if="!findMode" @click="findOpenHandler">Add Exercises</button>
  
  <div v-if="findMode" class="finder">
    <button class="close-btn" @click="findCloseHandler">X</button>
      
    <form @submit="searchHandler">
      <label for="search" class="hide">Search</label>
      <input 
        class="big-input"
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
        @click="typeClickHandler(typeName)" 
      />
    </div>

    <LoadingPopUp v-if="!exercises && loading" />
    <div v-else-if="exercises" class="exercises">
      <ExerciseCard 
        v-for="e in exercises" 
        :key="e.name" 
        :exercise="e"
        :resetExercises="resetExercises" 
      />
    </div>
  </div>
</template>

<script>
import { typesArr } from '@/utils'
import { GetExercises } from '@/services/api'
import TypeCard from './TypeCard.vue'
import LoadingPopUp from './LoadingPopUp.vue'
import ExerciseCard from './ExerciseCard.vue'

export default {
  name: 'ExerciseFinder',
  components: {
    TypeCard,
    LoadingPopUp,
    ExerciseCard
  },
  data: () => ({
    types: typesArr,
    searchQuery: '',
    exercises: null,
    findMode: false,
    loading: false
  }),
  methods: {
    findOpenHandler() {
      this.findMode = true
    },
    findCloseHandler() {
      this.findMode = false
      this.exercises = null
      this.searchQuery = ''
    },
    changeHandler(evt) {
      this.searchQuery = evt.target.value
    },
    resetExercises() {
      this.exercises = null
      this.searchQuery = ''
    },
    async load(query) {
      this.exercises = null
      this.loading = true
      this.exercises = await GetExercises(query)
      this.loading = false
      this.searchQuery = ''
    },
    async searchHandler(evt) {
      evt.preventDefault()
      await this.load({name: this.searchQuery})
    },
    async typeClickHandler(typeName) {
      await this.load({muscle: typeName})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.finder {
  max-width: 700px;
  padding-top: 2.5rem;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1rem 1rem 0 0;
  -webkit-box-shadow: 0px 1px 22px -7px rgba(50,63,71,1);
  -moz-box-shadow: 0px 1px 22px -7px rgba(50,63,71,1);
  box-shadow: 0px 1px 22px -7px rgba(50,63,71,1);
  background-color: $white;
  transition: transform 0.3s ease;
}

.exercises {
  height: 400px;
  overflow-y: auto;
}

.type-container {
  max-width: 800px;
  padding-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  -webkit-box-shadow: 0px 15px 22px -19px rgba(50,63,71,1);
  -moz-box-shadow: 0px 15px 22px -19px rgba(50,63,71,1);
  box-shadow: 0px 15px 22px -19px rgba(50,63,71,1);
}

.add-exercises-btn {
  margin-top: 1rem;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem;
  font-weight: bold;
}
</style>