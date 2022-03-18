<template>
    <div class="assessmentNavigation">
        <template v-for="question in questions" :key="question.id">
            <RouterLink :to="`/questions/${question.id}`">
                <Button :type="'round'" :typeColor="haveAnswer(question)">{{question.id}}</Button>
            </RouterLink>
        </template>
        <Button @click="resetAssessment()">Quitter</Button>
    </div>
</template>

<script>
import { Button } from '@/components/form.components'
import { useAssessmentStore } from '@/stores/useAssessment.store'

export default {
    name: 'assessmentNavigation',
    props: ['questions'],
    components: {
        Button
    },
    setup() {
      const assessmentStore = useAssessmentStore();
      return { assessmentStore }
    },
    methods: {
        haveAnswer(question){
            if(question.userAnswer === null){
                return '';
            }
            if(question.userAnswer){
                return 'correct';
            }
            if(!question.userAnswer){
                return 'incorrect';
            }
        },
        resetAssessment(){
            this.$router.push('/')
            this.assessmentStore.resetAssessment();
        }
    }
}
</script>

<style lang="scss">
    .assessmentNavigation{
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 42px;
    }
</style>