<template>
  <div
    id="app"
    :style="sizeVar"
    class="flex flex-direction-column mh-100"
  >
    <Header class="flex-fixed" />
    <div class="content-container flex-1 flex">
      <CrmInterface class="flex-1" />
    </div>
    <div
      v-if="$wait.is('app loading')"
      class="layout-loader bg-white pos-a flex flex-direction-column align-center justify-content-center"
    >
      <CustomLoader
        class="mb-4"
      />
      <h3>Loading simulation</h3>
    </div>
  </div>
</template>

<script>
import CrmInterface from '@/views/CrmInterface'

import Header from '@/components/Header'
import CustomLoader from '@/components/CustomLoader'

export default {
  name: 'App',
  components: {
    Header,
    CrmInterface,
    CustomLoader
  },
  computed: {
    sizeVar () {
      return {
        '--brand-color': 'dodgerblue',
        '--bg-color': '#21222E',
        '--text-color': 'white',
        '--border-color': '#303144',
        '--second-color': '#303144'
      }
    }
  },
  mounted () {
    // loading simulation page
    this.$wait.start('app loading')
    setTimeout(() => {
      this.$wait.end('app loading')
    }, 1000)
  }
}
</script>

<style lang="scss">
  #app {
    height: 100%;
    width: 100%;

    .content-container {
      min-height: 0;
      overflow: hidden;
    }

    .layout-loader {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9;
    }
  }
</style>
