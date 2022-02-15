<script>

import SectionComponent from '@/components/layer.components/section.layer.vue'
import ButtonComponent from '@/components/form.components/button.form.vue'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Homepage',
    components: {
      SectionComponent, ButtonComponent
    },
    setup() {
      const assessmentStore = useAssessmentStore();
      assessmentStore.$reset();
      return { assessmentStore }
  },
}
</script>

<template>
  <SectionComponent :type="'splited'" :height="'fullHeight'">
    <template #left>
      <div class="content">
        <p>Everyone is using internet more and more, bad people know it and may try to get you down.</p>
      </div>
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