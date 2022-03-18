<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/global.components/Header.vue'
import Footer from '@/components/global.components/Footer.vue'

export default {
    name: 'HomePage',
    components: {
      Header, Footer
    }
}

</script>

<template>
    <Header />
    <main>
      <RouterView />
    </main>
</template>

<style>
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/base.scss';
@import '@/assets/scss/layer.scss';
@import '@/assets/scss/components.scss';

</style>
