<template>
  <h1>Exercise Finder</h1>

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
  data() {
    const types = typesArr

    return {
      types
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