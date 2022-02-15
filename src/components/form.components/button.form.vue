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
        backgroundColor: {
            type: String,
            default: 'Default'
        },
    },
    data () {
        return {
            allowedClass: {
                backgroundColor: ['Default', 'primary', 'secondary'],
                type: ['Default', 'large', 'circle'],
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
    @include bg-color-active;
    font-weight: bold;
    transition: all .25s ease-in-out;
    cursor: pointer;

    &.btn-round{
        @include bg-color-primary;
        @include border-primary;
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