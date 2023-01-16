<template>
  <div>NAVBAR</div>
</template>

<script>
import { useRoutineStore } from './stores/routine';


export default {
  name: 'App',
  data() {
    const routine = useRoutineStore()

    return {
      routine
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
