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
        padding: 48px;
        transition: all 1s ease;
        background-color: var(--background-color-secondary);
        color: var(--text-color-secondary);
        display: flex;
        flex-direction: column;
        &:hover{
            cursor: pointer;
            margin-left: 36px;
            background-color: var(--c-3);
            transition: all 1s ease;
            box-shadow: -10px 0px 15px 2px rgba(0,0,0,0.75);
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
            border-top: 1px solid rgb(165, 165, 165);
        }
    }
</style>