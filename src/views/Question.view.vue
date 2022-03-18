<script>

import { Section } from '@/components/layer.components'
import { Image } from '@/components/basic.components'
import { AssessmentNavigation, AssessmentActions, Proposition, Correction} from '@/components/custom.components/assessment'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Question',
    components: {
        Section, Image,
        AssessmentNavigation, Proposition, Correction, AssessmentActions
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
        if(this.assessmentStore.currentQuestion.userAnswer === null && this.assessmentStore.currentQuestion.fakeRedirect){
            this.validateQuestion(1);
            this.$router.push(`/404`)
        }
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
    <Section :type="'splited'" :height="'fullHeight'">
        <template #left>
            <div class="content question">
                <AssessmentNavigation :questions="assessmentStore.assessment.questions"/>   
                <h2 class="question-title">Question {{assessmentStore.currentQuestion.id}} :</h2>
                <p>{{assessmentStore.currentQuestion.label}}</p>
                <template v-if="assessmentStore.currentQuestion.img">
                    <Image v-if="assessmentStore.currentQuestion.userAnswer != null && assessmentStore.currentQuestion.img.correction" :size="'fullWidth'" :filename="`question-${assessmentStore.currentQuestion.id}-correction.png`"/>
                    <Image v-else :size="'fullWidth'" :filename="`question-${assessmentStore.currentQuestion.id}.png`"/>
                </template>
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
                            <AssessmentActions :next="true"/>
                        </template>
                    </Correction>
                </template>
            </Transition>
        </template>
    </Section>
</template>

<style lang="scss" scoped>
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

    .question{
        & &-title{
            margin-bottom: var(--m-5);
        }
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
