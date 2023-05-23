<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['msg']
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

</style>