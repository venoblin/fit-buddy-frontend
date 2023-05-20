<template>
  <div class="inputs">
    <button @click="saveHandler">Save Workout</button>
    <button @click="loadHandler">Load Workout</button>
  </div>

  <div class="save">
    <h2>Save Workout</h2>
  </div>

  <div class="load">
    <h2>Load Workout</h2>
  </div>
</template>

<script>
export default {
  name: 'WorkOuts',
  methods: {
    saveHandler() {
      console.log('saving')
    },
    loadHandler() {
      console.log('loading')
    }
  }
}
</script>

<style lang="scss" scoped></style>