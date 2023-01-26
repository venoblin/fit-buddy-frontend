<template>
  <button class="add-exercises-btn" v-if="!findMode" @click="findOpenHandler">Add Exercises</button>
  
  <div class="finder" ref="finder">
    <button class="close-btn" @click="findCloseHandler">X</button>
      
    <form @submit="searchHandler">
      <label for="search" class="hide">Search</label>
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

    <div v-if="exercises" class="exercises">
      <ExerciseCard 
      v-for="e in exercises" 
      :key="e.name" 
      :exercise="e"
      :resetExercises="resetExercises" />
    </div>
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
    exercises: null,
    findMode: false
  }),
  methods: {
    findOpenHandler() {
      this.$refs.finder.classList.toggle('show')
      this.findMode = true
    },
    findCloseHandler() {
      this.$refs.finder.classList.toggle('show')
      this.findMode = false
      this.exercises = null
    },
    resetExercises() {
      this.exercises = null
    },
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
@import '@/assets/styles/global.scss';

.finder {
  width: 700px;
  padding-top: 1rem;
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  border-radius: 1rem 1rem 0 0;
  -webkit-box-shadow: 0px 1px 22px -7px rgba(50,63,71,1);
  -moz-box-shadow: 0px 1px 22px -7px rgba(50,63,71,1);
  box-shadow: 0px 1px 22px -7px rgba(50,63,71,1);
  transform: translateX(-2000px);
  background-color: $white;
  transition: transform 0.3s ease;

  &.show {
    right: 0;
    transform: translateX(0);
  }
}

.exercises {
  height: 400px;
  overflow-y: auto;
}

.type-container {
  max-width: 800px;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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