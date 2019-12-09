<template>
  <MazSelect
    v-model="sortOptionSelected"
    class="table-sort-selector"
    label="Sorted by"
    :options="sortOptions"
    color="dodgerblue"
    :dark="hasDarkTheme"
    :border-radius="8"
    dark-color="#303144"
    :item-height="40"
  />
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'TableSortSelector',
    props: {
      sortOptions: { type: Array, required: true },
      value: { type: String, default: null }
    },
    computed: {
      ...mapGetters(['hasDarkTheme']),
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
