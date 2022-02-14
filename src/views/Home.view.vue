<script>

import SectionComponent from '@/components/layer.components/section.layer.vue'
import ButtonComponent from '@/components/form.components/button.form.vue'

export default {
  name: 'Homepage',
  components: {
    SectionComponent, ButtonComponent
  }
}
</script>

<template>
  <SectionComponent :type="'splited'" :height="'fullHeight'">
    <template #left>
      <h1>Web danger awareness assessment</h1>
    </template>
    <template #right>
      <p></p>
      <RouterLink to="/questions">
        <ButtonComponent :type="'large'">Start assessment</ButtonComponent>
      </RouterLink>
    </template>
  </SectionComponent>
</template>

<style lang="scss">
  .container {
      padding: 48px;
  }
</style>