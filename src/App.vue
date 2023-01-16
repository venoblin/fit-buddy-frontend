<template>
  <NavBar />
  <RouterView />
</template>

<script>
import { useRoutineStore } from './stores/routine';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    routine: useRoutineStore()
  })
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

label {
  position: absolute;
  left: 999999px;
}
</style>
