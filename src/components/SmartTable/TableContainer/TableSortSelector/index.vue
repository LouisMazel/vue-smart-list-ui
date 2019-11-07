<template>
  <VueSelectInputUi
    v-model="sortOptionSelected"
    class="table-sort-selector"
    label="Sorted by"
    :options="sortOptions"
    color="#44BBBC"
    :item-height="40"
  />
</template>

<script>
  import VueSelectInputUi from 'vue-select-input-ui'
  import 'vue-select-input-ui/dist/vue-select-input-ui.css'

  export default {
    name: 'TableSortSelector',
    components: {
      VueSelectInputUi
    },
    props: {
      sortOptions: { type: Array, required: true },
      value: { type: String, default: null }
    },
    computed: {
      sortOptionSelected: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-sort-selector {
    min-width: 200px;
  }
</style>
