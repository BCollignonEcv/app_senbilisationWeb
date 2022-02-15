<template>
    <div class="correction">
        <div class="content">
            <h3 v-if="question.userAnswer" class="validation validation__correct">Correct</h3>
            <h3 v-else class="validation validation__wrong">Wrong</h3>
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
        .validation{
            font-weight: bold;
            
            &__correct{
                color: var(--c-4);
            }
            &__wrong{
                color: var(--c-3);
            }
        }
    }
</style>