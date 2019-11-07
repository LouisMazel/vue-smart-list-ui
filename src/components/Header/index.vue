<template>
  <header class="header">
    <div class="px-4 p-2 flex align-center justify-content-between">
      <a
        href="/"
        class="flex logo"
      >
        <img
          class="header__logo mr-2"
          alt="Vue logo"
          src="@/assets/img/logo.png"
        >
        <div class="header__title flex flex-direction-column">
          <h1 class="fs-20">
            Smart interface
          </h1>
          <p class="fs-14 text-muted">
            To manage data list
          </p>
        </div>
      </a>
      <a
        href="https://www.loicmazuel.com/"
        target="_blank"
        class="flex"
      >
        <div class="header__title flex flex-direction-column flex-end">
          <h3>
            Made by Loïc Mazuel
          </h3>
          <p class="fs-14 text-muted">
            With VueJS
          </p>
        </div>
      </a>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid #F2F2F2;

    a.logo {
      text-decoration: none;
    }

    &__logo {
      height: 50px;
    }
  }
</style>
