<template>
  <div class="inputs">
    <button @click="saveHandler">Save Workout</button>
    <button @click="loadHandler">Load Workout</button>
  </div>

  <div class="save" v-if="mode === 'save'">
    <h2>Save Workout</h2>
  </div>

  <div class="load" v-if="mode === 'load'">
    <h2>Load Workout</h2>
  </div>
</template>

<script>
export default {
  name: 'WorkOuts',
  data: () => ({
    mode: 'none'
  }),
  methods: {
    saveHandler() {
      console.log('saving')
      this.mode = 'save'
    },
    loadHandler() {
      console.log('loading')
      this.mode = 'load'
    }
  }
}
</script>

<style lang="scss" scoped></style>