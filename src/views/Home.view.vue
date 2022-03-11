<script>

import { Section } from '@/components/layer.components'
import { Button } from '@/components/form.components'
import { Text } from '@/components/basic.components'
import { AssessmentActions } from '@/components/custom.components/assessment'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Homepage',
    components: {
      Section, AssessmentActions, Button, Text
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
  <Section :type="'splited'" :height="'fullHeight'">
    <template #left> 
      <div class="content">
        <Text :padding="{bottom: true}">Never forget, press key <kbd @click="goTo404">esc</kbd> if something strange append !</Text>
        <Text>As we are using internet for everything, web security is one of our main consern. To defend, we find 5 main axis :</Text>
        <br>
        <ul>
          <li><Text>Educate</Text></li>
          <li><Text>Secure access</Text></li>
          <li><Text>Physical security</Text></li>
          <li><Text>Map and react</Text></li>
          <li><Text>Do technology watch</Text></li>
        </ul>
        <br>
        <Text :padding="{bottom: true}">The purpose of this assessment is to pedagogically test your awarness about web security and danger.</Text>
      </div>
    </template>
    <template #right>
      <div></div>
      <div>
        <AssessmentActions :start="true" :learn="true"/>
      </div>
    </template>
  </Section>
</template>

<style lang="scss">
  .container {
      padding: 48px;
  }

  ul {
    margin-left: 2rem;
    list-style: initial;
  }
</style>