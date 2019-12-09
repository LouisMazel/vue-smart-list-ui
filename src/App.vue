<template>
  <div
    id="app"
    class="flex direction-column mh-100"
  >
    <Header class="flex-fixed" />
    <MazFlex
      class="content-container"
      flex
      flex1
    >
      <CrmInterface />
    </MazFlex>
    <div
      v-if="$wait.is('app loading')"
      class="layout-loader flex direction-column align-center justify-center bg-color"
    >
      <MazLoader
        class="mb-4"
      />
      <h3>Loading simulation</h3>
    </div>
  </div>
</template>

<script>
  import CrmInterface from '@/views/CrmInterface'
  import Header from '@/components/Header'
  import { mapGetters } from 'vuex'

  import cssVars from 'css-vars-ponyfill'

  import { darkTheme, lightTheme } from '@/themes'

  export default {
    name: 'App',
    components: {
      Header,
      CrmInterface
    },
    computed: {
      ...mapGetters(['hasDarkTheme']),
      cssTheme () {
        return this.hasDarkTheme ? darkTheme : lightTheme
      }
    },
    watch: {
      hasDarkTheme () {
        cssVars({
          variables: this.hasDarkTheme ? darkTheme : lightTheme
        })
      }
    },
    mounted () {
      // loading simulation page
      this.setCssVars()
      this.$wait.start('app loading')
      setTimeout(() => {
        this.$wait.end('app loading')
      }, 1000)
    },
    methods: {
      setCssVars () {
        cssVars({
          variables: this.hasDarkTheme ? darkTheme : lightTheme
        })
      }
    }
  }
</script>

<style lang="scss">
  #app {
    height: 100%;
    width: 100%;

    .content-container {
      min-height: 0;
    }

    .layout-loader {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9;
    }
  }
</style>
