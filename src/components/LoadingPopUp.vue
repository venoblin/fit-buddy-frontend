<template>
  <div class="loader"></div>
</template>

<script>
  export default {
    name: 'LoadingPopUp'
  }
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.loader {
    width: 48px;
    height: 48px;
    margin: 3rem;
    border: 5px solid $green;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
}
</style>