<template>
  <header class="header-navigation">
      <nav>
          <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

  .header-navigation {
      width: 100vw;
      height: 48px;
      padding-left: 16px;
      display: flex;
      align-items: center;
  }

  .header-navigation nav{}

</style>