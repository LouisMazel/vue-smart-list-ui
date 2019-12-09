<template>
  <div
    class="table-titles flex flex-fixed bg-color"
  >
    <div
      v-for="({ title, width, path }, i) in titles"
      :key="i"
      class="table-titles__title p-2 fw-400 fs-14 dots-text text-muted"
      :class="{ 'flex-1': !width }"
      :style="{ 'width': width ? width : null }"
      draggable
      :data-index="i"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @drop="onDrop"
      @dragover="onDragOver"
      @dragleave="onDragLeave"
    >
      {{ title }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TableTitles',
    props: {
      titles: { type: Array, required: true }
    },
    data () {
      return {
        indexFrom: null
      }
    },
    methods: {
      onDragStart (e) {
        e.target.classList.add('active')
        this.indexFrom = e.target.attributes['data-index'].value
      },
      onDragEnd (e) {
        e.target.classList.remove('active')
      },
      onDragOver (e) {
        e.preventDefault()
        e.target.classList.add('right-border')
      },
      onDragLeave (e) {
        e.target.classList.remove('right-border')
      },
      onDrop (e) {
        const indexTo = e.target.attributes['data-index'].value
        e.target.classList.remove('right-border')
        this.$emit('reorder-column', { from: this.indexFrom, to: indexTo })
        this.indexFrom = null
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-titles {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 1;

    &__title {
      cursor: move;
      border: 2px solid transparent;

      &:hover {
        background-color: var(--hover-color);
      }

      &.right-border:not(.active) {
        background-color: var(--second-color);
        border: 2px dotted var(--text-muted-color);
      }
    }
  }
</style>
