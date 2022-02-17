<script>

export default {
  name: '404',
  components: {

  },
  mounted(){
      document.body.requestFullscreen();
  }
}
</script>

<template >
  <figure>
    <img ref="fakeError" class="img-full" src="/img/fakeError.png" alt="" srcset="">
  </figure>
</template>

<style lang="scss" scoped>
  img{
    &.img-full{
      width: 100%;
      height: auto;
    }
  }
</style>
