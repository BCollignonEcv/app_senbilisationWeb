<template>
    <div class="proposition">
        <p class="title">Proposition {{proposition.id}} :</p>
        <div class="content">
            <p>{{proposition.label}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Proposition',
    props: ['proposition'],
}
</script>

<style lang="scss">

    .proposition{
        @include bg-color-tertiary;
        @include transition-primary;
        padding: var(--m-1);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        &:hover{
            margin-left: 36px;
            background-color: var(--c-4);
            transition: all 1s ease;
            z-index: 2;
        }

        .title {
            font-weight: bold;
        }

        .content{
            display: flex;
            align-items: center;
            flex-grow: 4;
        }

        &~.proposition{
            border-top: 1px solid var(--cb-n);
        }
    }
</style>