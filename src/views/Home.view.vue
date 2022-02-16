<script>

import SectionComponent from '@/components/layer.components/section.layer.vue'
import Starter from '@/components/assessment.components/Starter.vue'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Homepage',
    components: {
      SectionComponent, Starter
    },
    setup() {
      const assessmentStore = useAssessmentStore();
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
      <Starter/>
    </template>
  </SectionComponent>
</template>

<style lang="scss">
  .container {
      padding: 48px;
  }
</style>