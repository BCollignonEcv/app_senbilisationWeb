<template>
  <header class="header-navigation">
    <h1><RouterLink to="/">Web danger awareness assessment</RouterLink></h1>
  </header>
</template>

<script>


export default {
  components: {}
}
</script>

<style lang="scss">

.header-navigation {
    z-index: 100;
    height: var(--header-size);
    position: fixed;
    top: 0;
    left: 0;
    width: 50vw;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--cb-n);

    h1{
      padding-left: var(--m-1);
    }
}

</style>