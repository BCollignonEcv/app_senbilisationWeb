<script>

import SectionComponent from '@/components/layers/section.layer.vue'
export default {
  name: 'Homepage',
  components: {
    SectionComponent
  }
}
</script>

<template>
  <SectionComponent :type="'splited'">
    <template #left>
      <h1>Web danger awareness assessment</h1>
      <p></p>
    </template>
    <template #right>
      <RouterLink to="/questions"><button>Start</button></RouterLink>
    </template>
  </SectionComponent>
</template>
