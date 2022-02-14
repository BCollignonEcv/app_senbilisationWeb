<template>
    <div class="correction">
        <p>{{question.userAnswer}}</p>
        <p>{{question.correction}}</p>
        <slot name="actions"></slot>
    </div>
</template>

<script>
export default {
    name: 'Correction',
    props: ['question'],
    computed: {

    }
}
</script>

<style lang="scss">
    .correction{
    }
</style>