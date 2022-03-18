<script>

import { Section } from '@/components/layer.components'
import { Button } from '@/components/form.components'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Result',
    components: {
        Section, Button
    },
    setup() {
        const assessmentStore = useAssessmentStore();
        return { assessmentStore }
    },
    methods: {
        
    }

}
</script>

<template>
    <Section :type="'splited'" :height="'fullHeight'">
        <template #left>
            <div class="content">
                <h2>Results</h2>
                <p>Your assessment is finish. Hope you learned something. These are basic actions but they must be understood and applied everywhere and all the time otherwise we are too vulnerable.</p>
            </div>
        </template>
        <template #right>
            <div class="content">
                <p class="results">{{assessmentStore.getNumberOfCorrectAnswer}} / {{assessmentStore.getNumberOfQuestions}} </p>
            </div>
            <AssessmentActions :next="true"/>
        </template>
    </Section>
</template>

<style lang="scss">

    .content{
        margin-top: var(--header-size);
        padding: var(--m-1);
    }

    .results{
        font-size: var(--fs-1);
    }
</style>
