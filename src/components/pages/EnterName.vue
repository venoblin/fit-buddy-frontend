<template>
  <h1>Enter Your Name</h1>
  
  <form @submit="submitHandler">
    <label for="user">Enter Your Name</label>
    <input 
    type="text"
    name="user"
    id="user"
    placeholder="Enter your name"
    required
    :value="user"
    @input="changeHandler"
    />

    <button>Enter</button>
  </form>
</template>

<script>

export default {
  name: 'EnterName',
  data: () => ({
    user: ''
  }),
  methods: {
    changeHandler(evt) {
      this.user = evt.target.value
    },
    submitHandler(evt) {
      evt.preventDefault

      window.localStorage.setItem('user', this.user)
    }
  }
}
</script>

<style lang="scss" scoped></style>