<template>
  <section :class="classObject">
      <template v-if="type === 'splited'">
          <div class="half">
            <slot name="left" ></slot>
          </div>
        <div class="half">
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

<style>
section.fullHeight{
    height: 100vh;
}

section.splited {
    display: flex;    
}

section.splited .half{
    width: 50vw;
    height: 100%;
}

section.splited .half > *{
    width: 100%;
    height: 100%;
    padding: 48px;
}

section.splited .left-container{
    background-color: red;
}

section.splited .right-container{
    background-color: green;
}

</style>