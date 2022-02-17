<script>
import SectionComponent from '@/components/layer.components/section.layer.vue'

export default {
  name: '404',
  components: {
    SectionComponent
  },
  mounted(){
      document.body.requestFullscreen();
      document.getElementsByTagName('header')[0].style.display = 'none';
      addEventListener('fullscreenchange', event => {
        if(!document.fullscreenElement){
          document.getElementsByTagName('header')[0].style.display = 'flex';
          this.$refs.fakeError.remove();
        }
      });
  },
}
</script>

<template >
  <figure>
    <img ref="fakeError" class="img-full" src="/img/fakeError.png" alt="" srcset="">
  </figure>
  <SectionComponent>
      <p>Well done, that was a fake error, but you are still on a 404 page...</p>
  </SectionComponent>
</template>

<style lang="scss" scoped>
  img{
    &.img-full{
      width: 100%;
      height: auto;
    }
  }
</style>
