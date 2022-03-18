<template>
    <div class="correction">
        <div class="content">
            <div class="validation validation-container">
                <template v-if="question.userAnswer">
                    <h3 class="validation-title validation_correct">Correct</h3>
                </template>
                <template v-else>
                    <h3 class="validation-title validation_wrong">Wrong</h3>
                    <h5 class="validation-text validation-answer">Correct answer was n°{{question.answer}} :</h5>
                    <p>{{question.proposals[question.answer].label}}</p>
                </template>
            </div>
            <div class="explanation">
                <p v-for="(correction, index) in question.corrections" :key="index" class="explanation-text">{{correction}}</p>
            </div>
            <div v-if="question.tips" class="advice">
                <h5 class="advice-title">Tips :</h5>
                <p v-html="question.tips"></p>
            </div>
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
            display: flex;
            flex-direction: column;
            flex-grow: 10;
            white-space: pre-line;
            padding: var(--m-1) var(--m-1) 0 var(--m-1);

            .validation {
                &-container{
                    @include borderContainer();
                    padding: var(--m-1);
                }
                
                &-title{
                    font-weight: bold;
                }

                &-text{
                    font-weight: bold;
                    margin-top: var(--m-3);
                    margin-bottom: var(--m-5);
                }

                &-answer{
                }

                &_correct{
                    color: var(--c-4);
                }
                &_wrong{
                    color: var(--c-3);
                }
            }

            .explanation{
                padding: var(--m-3) 0;
            }

            .advice{
                @include borderContainer();
                padding: var(--m-3) var(--m-1);
                background-color: var(--c-0-25);
                display: flex;
                margin-top: auto;
                align-items: center;
                gap: var(--m-1);
                 
                &-title{
                    font-weight: 700;
                    display: inline;
                    min-width: 6ch;
                }

                a{
                    color: var(--c-2);
                }

                kbd{
                    background-color: var(--c-0-75);
                    color: var(--c-1);
                    min-width: var(--fs-3);
                    text-align: center;
                }
            }
        }
    }
</style>