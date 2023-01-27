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
@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
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
  color: black;
  text-decoration: none;
  background-color: transparent;
  font-size: 1.25em;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  transition: all 0.3s ease;

  &:hover {
    color: $green;
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

.logo {
  margin: 0;
  padding: 0.5rem;
  font-size: 1.25em;
  color: $green;
  border-radius: 5px;
  font-family: 'Koulen', cursive;
}

input {
  width: 100px;
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

form {

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    label {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }

  button {
    margin-top: 1rem;
  }
}

</style>
