<template>
  <div
    class="custom-loader"
    :style="sizeVar"
  >
    <div /><div /><div /><div /><div /><div /><div /><div />
  </div>
</template>

<script>
  export default {
    name: 'CustomLoader',
    props: {
      size: { type: Number, default: 64 }
    },
    computed: {
      sizeVar () {
        return {
          '--size': this.size + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-loader {
    $size: var(--size);

    @function get-size($base) {
      $coef: ((100 * $base) / 64) / 100;

      @return calc(#{$size} * #{$coef});
    }

    display: inline-block;
    position: relative;
    width: get-size(64);
    height: get-size(64);

    div {
      animation: loader-anim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      transform-origin: get-size(32) get-size(32);

      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--brand-color);
        margin: -2.5px 0 0 -2.5px;
      }

      &:nth-child(1) {
        animation-delay: -0.036s;

        &::after {
          top: get-size(50);
          left: get-size(50);
        }
      }

      &:nth-child(2) {
        animation-delay: -0.072s;

        &::after {
          top: get-size(54);
          left: get-size(45);
        }
      }

      &:nth-child(3) {
        animation-delay: -0.108s;

        &::after {
          top: get-size(57);
          left: get-size(39);
        }
      }

      &:nth-child(4) {
        animation-delay: -0.144s;

        &::after {
          top: get-size(58);
          left: get-size(32);
        }
      }

      &:nth-child(5) {
        animation-delay: -0.18s;

        &::after {
          top: get-size(57);
          left: get-size(25);
        }
      }

      &:nth-child(6) {
        animation-delay: -0.216s;

        &::after {
          top: get-size(54);
          left: get-size(19);
        }
      }

      &:nth-child(7) {
        animation-delay: -0.252s;

        &::after {
          top: get-size(50);
          left: get-size(14);
        }
      }

      &:nth-child(8) {
        animation-delay: -0.288s;

        &::after {
          top: get-size(45);
          left: get-size(10);
        }
      }
    }
  }

  @keyframes loader-anim {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
