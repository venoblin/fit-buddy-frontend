<template>
  <h1>Exercise Finder</h1>
  
  <form>
    <label for="search">Search</label>
    <input 
    type="search"
    name="search"
    id="search"
    placeholder="Search by name"
    :value="searchQuery"
    @input="changeHandler"
    />
    <button>SEARCH</button>
  </form>

  <div class="type-container">
    <TypeCard 
    v-for="typeName in types" 
    :key="typeName" 
    :typeName="typeName" />
  </div>
</template>

<script>
import { typesArr } from '@/utils';
import TypeCard from './TypeCard.vue';

export default {
  name: 'ExerciseFinder',
  components: {
    TypeCard
  },
  data: () => ({
    types: typesArr,
    searchQuery: ''
  }),
  methods: {
    changeHandler(evt) {
      this.searchQuery = evt.target.value
    }
  }
}
</script>

<style lang="scss" scoped>

.type-container {
  display: flex;
  flex-wrap: wrap;
}
</style>