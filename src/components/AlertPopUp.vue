<template>
  <div ref="alert">
    <button @click="closeHandler">X</button>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AlertPopUp',
  props: ['msg'],
  methods: {
    closeHandler() {
      this.$refs.alert.remove()
    }
  },
  mounted: function() {
    // setInterval(this.closeHandler, 2000)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

</style>