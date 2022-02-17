<script>

import SectionComponent from '@/components/layer.components/section.layer.vue'
import AssessmentActions from '@/components/assessment.components/AssessmentActions.vue'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Homepage',
    components: {
      SectionComponent, AssessmentActions
    },
    setup() {
      const assessmentStore = useAssessmentStore();
      return { assessmentStore }
    },
    methods: {
      goTo404(){
        this.$router.push('/404')
      }
    }
}
</script>

<template>
  <SectionComponent :type="'splited'" :height="'fullHeight'">
    <template #left>
      <div class="content">
        <p>Everyone is using internet more and more, bad people know it and may try to get you down.</p>
        <br>
        <p>Never forget, press key <kbd @click="goTo404">esc</kbd> if something strange append !</p>
      </div>
    </template>
    <template #right>
      <p></p>
      <AssessmentActions/>
    </template>
  </SectionComponent>
</template>

<style lang="scss">
  .container {
      padding: 48px;
  }
</style>