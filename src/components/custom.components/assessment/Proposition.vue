<template>
    <div class="proposition">
        <div class="content">
            <p class="title">{{proposition.id}}.</p>
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

<style lang="scss" scoped>

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
            font-size: var(--fs-1);
            padding-right: var(--m-1);
            color: var(--c-0-75)
        }

        .content{
            margin-left: var(--m-1);
            display: flex;
            align-items: center;
            flex-grow: 4;
        }

        &~.proposition{
            border-top: 1px solid var(--c-0-25);
        }
    }
</style>