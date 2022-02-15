<script>

import SectionComponent from '@/components/layer.components/section.layer.vue'
import ButtonComponent from '@/components/form.components/button.form.vue'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Result',
    components: {
        SectionComponent, ButtonComponent
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
                <p>Result Page</p>
            </div>
            <RouterLink to="/">
                <ButtonComponent :type="'large'" @click="nextQuestion">Back to home</ButtonComponent>
            </RouterLink>
        </template>
        <template #right>
            <div>
                <p>{{assessmentStore.getNumberOfCorrectAnswer}} / {{assessmentStore.getNumberOfQuestions}} </p>
            </div>
        </template>
    </SectionComponent>
</template>

<style lang="scss">

</style>
