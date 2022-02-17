<script>

import SectionComponent from '@/components/layer.components/section.layer.vue'
import ButtonComponent from '@/components/form.components/button.form.vue'
import AssessmentNavigation from '@/components/assessment.components/AssessmentNavigation.vue'
import AssessmentActions from '@/components/assessment.components/AssessmentActions.vue'
import Proposition from '@/components/assessment.components/Proposition.vue'
import Correction from '@/components/assessment.components/Correction.vue'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Question',
    components: {
        SectionComponent, ButtonComponent, AssessmentNavigation, Proposition, Correction, AssessmentActions
    },
    props: ['id'],
    data(){
        return {
        }
    },
    setup() {
        const assessmentStore = useAssessmentStore();
        assessmentStore.startAssessment();
        return { assessmentStore }
    },
    created() {
        this.$router.push(`/questions/${this.assessmentStore.currentQuestion.id}`)
    },
    mounted () {
    },
    updated(){
        this.assessmentStore.nextQuestion(this.id)
    },
    methods: {
        validateQuestion(propositionID){
            this.correctionMode = true;
            this.assessmentStore.validateQuestion(propositionID);
        },
    },
}
</script>

<template>
    <SectionComponent :type="'splited'" :height="'fullHeight'">
        <template #left>
            <div class="content">
                <AssessmentNavigation :questions="assessmentStore.assessment.questions"/>   
                <h2>Question {{assessmentStore.currentQuestion.id}} :</h2>
                <p>{{assessmentStore.currentQuestion.label}}</p>
            </div>
        </template>
        <template #right>
            <Transition name="slideLeft" mode="out-in">
                <div v-if="assessmentStore.currentQuestion.userAnswer === null" class="propositions">
                    <template v-for="proposition in assessmentStore.currentQuestion.proposals" :key="proposition.id">
                        <Proposition :proposition="proposition" @click="validateQuestion(proposition.id)"/>
                    </template>
                </div>
                <template v-else>
                    <Correction :question="assessmentStore.currentQuestion">
                        <template #actions>
                            <AssessmentActions />
                        </template>
                    </Correction>
                </template>
            </Transition>
        </template>
    </SectionComponent>
</template>

<style lang="scss">
    section.splited .half .propositions{
        height: 100%;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        align-content:stretch;
    }

    .propositions > .proposition {
        flex: 1;
        flex-grow: 2;
    }

    /* we will explain what these classes do next! */
    .slideLeft-enter-active,
    .slideLeft-leave-active {
        transition: all 0.75s ease;
    }

    .slideLeft-enter-from{
        opacity: 0;
        transform: translateY(100vh);
    }

    .slideLeft-leave-to {
        opacity: 0;
        transform: translateY(-100vh);
    }


</style>
