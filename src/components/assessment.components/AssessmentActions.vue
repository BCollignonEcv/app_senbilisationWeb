<template>
    <div class="assessmentActions">
        <template v-if="inHome && assessmentStore.status === 'UNSTART'">
            <ButtonComponent @click="start()" :type="'large'" :typeColor="'secondary'" >START</ButtonComponent>
        </template>
        <template v-else-if="inHome && assessmentStore.status === 'START'">
            <h5 class="title">You have an assessment in progress !</h5>
            <div class="flexContainer">
                <ButtonComponent @click="resume()" :type="'large'" :typeColor="'correct'">RESUME</ButtonComponent>
                <ButtonComponent @click="restart()" :type="'large'" :typeColor="'incorrect'">RESTART</ButtonComponent>
            </div>
        </template>
        <template v-else-if="inAssessment && assessmentStore.status === 'START'">
                <ButtonComponent @click="next()" :type="'large'" :typeColor="'secondary'" >CONTINUE</ButtonComponent>
        </template>
    </div>
</template>

<script>
import ButtonComponent from '@/components/form.components/button.form.vue'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Actions',
    components: {
        ButtonComponent
    },
    setup() {
      const assessmentStore = useAssessmentStore();
      return { assessmentStore }
    },
    computed: {
        inAssessment(){
            return this.$router.currentRoute.value.name === 'questions'
        },
        inHome(){
            return this.$router.currentRoute.value.name === 'home'
        }
    },
    methods: {
        start() {
            this.assessmentStore.startAssessment();
            this.$router.push('/questions/1')
        },
        next(){
            this.assessmentStore.nextQuestion();
            if (this.assessmentStore.status === 'END'){
                this.$router.push(`/results`)
            } else {
                this.$router.push(`/questions/${this.assessmentStore.currentQuestion.id}`)
            }
        },
        resume(){
            this.$router.push('/questions')
        },
        restart(){
            this.assessmentStore.resetAssessment();
            this.assessmentStore.startAssessment();
            this.$router.push('/questions/1')
        }
    }
}
</script>

<style lang="scss" scoped>
    .assessmentActions {
        padding: var(--m-1);
        .title{
            padding-bottom: var(--m-2)
        }
    }
</style>