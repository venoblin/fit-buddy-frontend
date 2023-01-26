<template>
  <NavBar />
  <RouterView />
  <FooterBar />
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@100;400;700&display=swap');
@import '@/assets/styles/global.scss';

* {
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  color: $darkBlue;
  background-color: $white;
  font-size: 1.25em;
}

#app {
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.hide {
  position: absolute;
  left: 999999px;
}

.link {
  color: purple;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:active {
    color: red;
  }
}

.capitalize {
  text-transform: capitalize;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 1px solid $darkBlue;
  background-color: $darkBlue;
  color: $white;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    background-color: transparent;
    color: $darkBlue;
  }

  &.danger {
    background-color: $red;
    border-color: $red;

    &:hover {
      background-color: transparent;
      color: $red;
    }
  }

}

input {
  padding: 0.5rem 1rem;
  font-size: 1.25em;
  border: none;
  outline: none;
  border-bottom: 3px solid $darkBlue;
  color: $darkBlue;
  background-color: transparent;
  transition: all 0.3s ease;

  &:focus {
    border-color: $green;
    color: $green;
  }
}
</style>
