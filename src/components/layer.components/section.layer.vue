<template>
  <section :class="classObject">
      <template v-if="type === 'splited'">
          <div class="half left-section">
            <slot name="left" ></slot>
          </div>
        <div class="half right-section">
            <slot name="right" ></slot>
          </div>
      </template>
  </section>
</template>

<script>
export default {
    name: 'section-layer',
    props: {
        type: {
            type: String,
            default: 'Default'
        },
        backgroundColor: {
            type: String,
            default: 'Default'
        },
        height: {
            type: [String, Number],
            default: 'Default'
        }
    },
    data () {
        return {
            allowedClass: {
                backgroundColor: ['Default', 'primary', 'secondary'],
                type: ['Default', 'splited'],
                height: ['Default', 'fullHeight', '75', '66', '50', '33'],
            }
        }
    },
    computed: {
        classObject() {
            let customClassObject = [];
            for(const [key, value] of Object.entries(this.$props)) {
                if(value != "Default"){
                    if(this.allowedClass[key] && this.allowedClass[key].includes(value)){
                        customClassObject.push(value);
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

section {
    &.fullHeight{
        height: 100vh;
    }

    &.splited {
        display: flex;

        .half{
            width: 50vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            a .btn-large {
                width: 100%;
                align-self: flex-end;
            }
        }

        .left-section{
            padding: 48px;
        }

        .right-section{
            background-color: var(--c-2);
            color: var(--c-4)
        }
    }
}

</style>