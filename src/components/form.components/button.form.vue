<template>
  <button class="btn" :class="classObject">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'button-form',
    props: {
        type: {
            type: String,
            default: 'Default'
        },
        typeColor: {
            type: String,
            default: 'Default'
        },
    },
    data () {
        return {
            allowedClass: {
                typeColor: ['Default', 'primary', 'secondary', 'correct', 'incorrect'],
                type: ['Default', 'large', 'circle', 'round', 'medium', 'small'],
            }
        }
    }, 
    computed: {
        classObject() {
            let customClassObject = [];
            for(const [key, value] of Object.entries(this.$props)) {
                if(value != "Default"){
                    if(this.allowedClass[key] && this.allowedClass[key].includes(value)){
                        customClassObject.push(`btn-${value}`);
                    }
                }
            }
            return customClassObject;
        }
    },
    mounted () {
    }
}
</script>


<style lang="scss">

button.btn{
    @include bg-color-tertiary;
    font-weight: bold;
    transition: all .25s ease-in-out;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;

    &.btn-round{
        @include bg-color-primary;
        @include border-primary;
        padding: 0;
        border: 1px solid;
        border-radius: 25%;
        height: 36px;
        width: 36px;

        & + &{
            margin-left: 5px;
        }

        &:hover, &:focus{
            @include border-secondary;
            @include bg-color-active;
        }
    }

    &.btn-large{
        width: 100%;
        padding: 36px;
    }

    &.btn-medium{
        width: 50%;
        padding: 24px;
    }

    &.btn-small{
        width: 30%;
        padding: 12px;
    }

    &.btn-correct{
        @include bg-color-valid;
        &:hover, &:focus{
            border: none;
        }
    }

    &.btn-secondary{
        @include bg-color-active;
    }

    &.btn-incorrect{
        @include bg-color-error;
        &:hover, &:focus{
            border: none;
        }
    }

    &:hover, &:focus{
        transition: all .25s ease-in-out;
        background-color: var(--c-2);
    }
}

.router-link-active > button.btn {
    @include border-secondary;
    @include bg-color-active;
}
</style>