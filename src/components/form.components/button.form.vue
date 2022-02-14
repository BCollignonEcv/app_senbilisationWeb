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
                type: ['Default', 'large'],
            }
        }
    },
    computed: {
        classObject() {
            console.log(this.$props)
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

.btn{
    font-weight: bold;
    background-color: var(--c-1);
    &.btn-round{

    }

    &.btn-large{
        width: 100%;
        padding: 36px;
    }
}
</style>