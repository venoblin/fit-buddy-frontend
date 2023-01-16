<template>
  <h1>{{ day }}</h1>
</template>

<script>

export default {
  name: 'EditVue',
  data() {
    const day = this.$route.params.day

    return {
      day
    }
  }
}
</script>

<style lang="scss" scoped></style>