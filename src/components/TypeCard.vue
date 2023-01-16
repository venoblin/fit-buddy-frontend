<template>
  <div class="type-card">
    <p>{{ typeName }}</p>
  </div>
</template>

<script>

export default {
  name: 'TypeCard',
  props: ['typeName']
}
</script>

<style lang="scss" scoped>

.type-card {
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  background-color: grey;
}
</style>