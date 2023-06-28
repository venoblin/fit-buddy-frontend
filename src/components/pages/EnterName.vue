<template>
  <h1>Enter Your Name</h1>
  
  <form @submit="submitHandler">
    <label class="hide" for="user">Enter Your Name</label>
    <input 
    class="big-input"
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
import { useUserStore } from '@/stores/user'

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

      useUserStore().setUserName(this.user)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped></style>