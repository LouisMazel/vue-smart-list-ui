<template>
  <svg
    :width="`${size}px`"
    :height="`${size}px`"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    style="enable-background: new 0 0 50 50;"
    xml:space="preserve"
    class="mz-loader-ui loader-anim"
  >
    <path
      :style="styleCorlor"
      d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
    />
  </svg>
</template>

<script>
  /**
   * @module component - VueLoaderUi
   * @param {number} size
   * @param {string} color
   */
  export default {
    name: 'VueSpinnerUi',
    props: {
      size: {
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: null
      }
    },
    computed: {
      styleCorlor () {
        return {
          fill: this.color
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mz-spinner-ui {
    path {
      fill: var(--brand-color);
    }
  }
</style>
