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
    <!-- <Footer /> -->
</template>

<style>
@import '@/assets/reset.scss';
@import '@/assets/base.scss';
@import '@/assets/layer.scss';
@import '@/assets/components.scss';

</style>
