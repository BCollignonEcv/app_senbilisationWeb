<template>
    <div class="assessmentNavigation">
        <template v-for="question in questions" :key="question.id">
            <RouterLink :to="`/questions/${question.id}`">
                <button class="btn btn-round">{{question.id}}</button>
            </RouterLink>
        </template>
    </div>
</template>

<script>
export default {
    name: 'assessmentNavigation',
    props: ['questions'],
}
</script>

<style lang="scss">
    .assessmentNavigation{
        display: flex;
        gap: 10px;
        flex-wrap: wrap
    }
</style>