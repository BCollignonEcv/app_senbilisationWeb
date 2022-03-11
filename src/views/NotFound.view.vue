<script>
import { Section } from '@/components/layer.components'
import { Button } from '@/components/form.components'

export default {
  name: '404',
  components: {
    Section, Button
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
  <Section>
      <p>Well done, that was a fake error, but you are still on a 404 page...</p>
      <RouterLink to="/questions"><Button :type="'medium'" :typeColor="'correct'">Back to assessment</Button></RouterLink>
  </Section>
</template>

<style lang="scss" scoped>
  img{
    &.img-full{
      width: 100%;
      height: auto;
    }
  }
</style>
