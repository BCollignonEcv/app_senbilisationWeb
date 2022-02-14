<script>

import SectionComponent from '@/components/layers/section.layer.vue'
import AssessmentNavigation from '@/components/AssessmentNavigation.vue'
import Proposition from '@/components/Proposition.vue'
import Correction from '@/components/Correction.vue'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Question',
    components: {
        SectionComponent, AssessmentNavigation, Proposition, Correction
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
            console.log(propositionID)
            this.correctionMode = true;
            this.assessmentStore.validateQuestion(propositionID);
        },
        nextQuestion(){
            this.correctionMode = false
            this.assessmentStore.nextQuestion();
            if (this.assessmentStore.status === 'END'){
                this.$router.push(`/results`)
            } else {
                this.$router.push(`/questions/${this.assessmentStore.currentQuestion.id}`)
            }
        }
    },
    watch: {
        question: () => {
            console.log('toto')
        }
    }
}
</script>

<template>
    <SectionComponent :type="'splited'" :height="'fullHeight'">
        <template #left>
            <div>
                <AssessmentNavigation :questions="assessmentStore.assessment.questions"/>   
                <h1>Question {{assessmentStore.currentQuestion.id}} :</h1>
            </div>
        </template>
        <template #right>
            <div v-if="assessmentStore.currentQuestion.userAnswer === null" class="propositions">
                <template v-for="proposition in assessmentStore.currentQuestion.proposals" :key="proposition.id">
                    <Proposition :proposition="proposition" @click="validateQuestion(proposition.id)"/>
                </template>
            </div>
            <div v-else>
                <Correction :question="assessmentStore.currentQuestion">
                    <template #actions>
                        <button @click="nextQuestion">Continue</button>
                    </template>
                </Correction>
            </div>
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


</style>
