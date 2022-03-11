<template>
    <div class="assessmentActions">
        <Button v-if="learn && !next" @click="runLearn()" :type="'large'" :typeColor="'correct'" class="m-b-1" >LEARN</Button>
        <Button v-if="end" @click="runEnd()" :type="'large'" :typeColor="'correct'" >FINISH</Button>
        <template v-if="next && assessmentStore.status.start">
            <Button @click="runNext()" :type="'large'" :typeColor="'secondary'" >CONTINUE</Button>
        </template>
        <template v-else-if="start">
            <template v-if="assessmentStore.status.start">
                <h5 class="title">You have an assessment in progress !</h5>
                <div class="flexContainer">
                    <Button @click="runResume()" :type="'large'" :typeColor="'correct'">RESUME</Button>
                    <Button @click="runRestart()" :type="'large'" :typeColor="'incorrect'">RESTART</Button>
                </div>
            </template>
            <template v-else>
                <Button @click="runStart()" :type="'large'" :typeColor="'secondary'" >START</Button>
            </template>
        </template>
    </div>
</template>

<script>
import { Button } from '@/components/form.components'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Actions',
    props: {
        start: {
            type: Boolean,
            default: false
        },
        next: {
            type: Boolean,
            default: false
        },
        learn: {
            type: Boolean,
            default: false
        },
        end: {
            type: Boolean,
            default: false
        }
    },
    data(){return {}},
    components: {
        Button
    },
    setup() {
      const assessmentStore = useAssessmentStore();
      return { assessmentStore }
    },
    computed: {},
    methods: {
        runStart() {
            this.assessmentStore.startAssessment();
            this.$router.push('/questions/1')
        },
        runNext(){
            this.assessmentStore.nextQuestion();
            if (this.assessmentStore.status.results){
                this.$router.push(`/results`)
            } else {
                this.$router.push(`/questions/${this.assessmentStore.currentQuestion.id}`)
            }
        },
        runResume(){
            this.$router.push('/questions')
        },
        runLearn(){
            this.$router.push('/learn')
        },
        runEnd(){
            this.assessmentStore.resetAssessment();
            this.$router.push('/');
        },
        runRestart(){
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

        .m-b-1{
            margin-bottom: var(--m-3);
        }
    }
</style>