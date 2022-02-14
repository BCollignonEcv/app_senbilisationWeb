<script>

import SectionComponent from '@/components/layer.components/section.layer.vue'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Result',
    components: {
        SectionComponent
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
            <div>
                <p>Result Page</p>
                <RouterLink to="/">
                    <button>Back to Home</button>
                </RouterLink>
            </div>
        </template>
        <template #right>
            <div>
                
            </div>
        </template>
    </SectionComponent>
</template>

<style lang="scss">

</style>
