<template>
  <div class="table-lines-comment flex justify-content-between align-center">
    <div
      class="fs-12 text-left flex-1"
      :class="{ 'dots-text': cropText }"
    >
      <span>{{ comment }}</span>
    </div>
    <button
      tabindex="-1"
      class="table-lines-comment__btn-visibility flex align-center justify-content-center"
      @click.stop="cropText = !cropText"
    >
      <i class="material-icons fs-18">
        {{ cropText ? 'visibility' : 'visibility_off' }}
      </i>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'TableLinesComment',
    props: {
      comment: { type: String, default: null }
    },
    data () {
      return {
        cropText: true
      } 
    }
  }
</script>

<style lang="scss" scoped>
  .table-lines-comment {
    &__btn-visibility {
      border: none;
      background: none;
      outline: none;
      background-color: transparent;
      border-radius: 50%;
      height: 24px;
      width: 24px;
      cursor: pointer;
      margin-left: 10px;
      color: rgba(black, 0.4);

      &:hover,
      &:focus {
        background-color: rgba(black, 0.2);
        box-shadow: 0 0 0 0.1rem rgba(black, 0.1);
      }
    }
  }
</style>
