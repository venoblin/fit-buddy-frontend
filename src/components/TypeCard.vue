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
@import '@/assets/styles/global.scss';

.type-card {
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  margin: 0.1rem;
  background-color: $lightGrey;
  transition: all 0.3s ease;

  &:hover {
    color: $green;
  }

  &:active {
    transform: scale(0.95);
  }

  p {
    margin: 0;
  }
}

@media (max-width: 800px) {
  .type-card {
    padding: 0.1rem;
  }
}
</style>