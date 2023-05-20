<template>
  <div class="inputs" v-if="mode === 'none'">
    <button @click="saveHandler">Save Workout</button>
    <button @click="loadHandler">Load Workout</button>
  </div>

  <button @click="closeHandler" v-if="mode !== 'none'">X</button>

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
    mode: 'none' //used to determine if we display save or load divs
  }),
  methods: {
    saveHandler() {
      this.mode = 'save'
    },
    loadHandler() {
      this.mode = 'load'
    },
    closeHandler() {
      this.mode = 'none'
    }
  }
}
</script>

<style lang="scss" scoped></style>