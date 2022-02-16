<template>
    <div>
        <template v-if="assessmentStore.status === 'UNSTART'">
            <ButtonComponent @click="start()" :type="'large'">START</ButtonComponent>
        </template>
        <template v-else>
            <h3>You have an assessment in progress !</h3>
            <ButtonComponent @click="resume()" :type="'large'">RESUME</ButtonComponent>
            <ButtonComponent @click="restart()" :type="'large'">RESTART</ButtonComponent>
        </template>
    </div>
</template>

<script>
import ButtonComponent from '@/components/form.components/button.form.vue'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'Starter',
    components: {
        ButtonComponent
    },
    setup() {
      const assessmentStore = useAssessmentStore();
      return { assessmentStore }
    },
    methods: {
        start() {
            this.assessmentStore.startAssessment();
            this.$router.push('/questions/1')
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

<style>

</style>