<template>
  <header class="header bg-color">
    <div class="px-4 p-2 flex align-center space-between">
      <a
        href="#"
        class="flex logo"
      >
        <img
          class="header__logo mr-2"
          alt="Vue logo"
          src="@/assets/img/logo.png"
        >
        <div class="header__title flex direction-column">
          <h1 class="fs-20">
            Smart interface
          </h1>
          <p class="fs-14 text-muted">
            To manage data list
          </p>
        </div>
      </a>
      <div class="flex">
        <div class="flex align-center mr-4">
          <p class="fs-14 mr-2">
            Dark mode
          </p>
          <MazSwitch
            :value="hasDarkTheme"
            @input="setDarkTheme"
          />
        </div>
        <a
          href="https://www.loicmazuel.com/"
          target="_blank"
          class="flex"
        >
          <div class="header__title flex direction-column align-end">
            <h3>
              Made by Loïc Mazuel
            </h3>
            <p class="fs-14 text-muted">
              With VueJS
            </p>
          </div>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Header',
    computed: {
      ...mapGetters(['hasDarkTheme'])
    },
    methods: {
      ...mapActions(['setDarkTheme'])
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid var(--second-color);

    a.logo {
      text-decoration: none;
    }

    &__logo {
      height: 50px;
    }
  }
</style>
