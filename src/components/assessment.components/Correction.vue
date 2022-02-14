<template>
    <div class="correction">
        <div class="content">
            <p>{{question.userAnswer}}</p>
            <p>{{question.correction}}</p>
        </div>
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
        height: 100%;
        display: flex;
        flex-direction: column;

        .content{
            padding: 48px;
            flex-grow: 10;
        }
    }
</style>