<template>
  <MazInput
    :value="queryValue"
    label="Search"
    color="dodgerblue"
    clearable
    class="table-search-input"
    :loader="hasLoader"
    :dark="hasDarkTheme"
    :border-radius="8"
    dark-color="#303144"
    @input="debounceSearch"
  />
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'TableSearchInput',
    props: {
      value: { type: String, default: String }
    },
    data () {
      return {
        hasLoader: false
      }
    },
    computed: {
      ...mapGetters(['hasDarkTheme']),
      queryValue: {
        get () {
          return this.value
        }
      }
    },
    methods: {
      ...mapActions(['setSearchQuery']),
      debounceSearch(q) {
        this.setSearchQuery(q)
        this.hasLoader = true
        clearTimeout(this.debounce)
        this.debounce = setTimeout(() => {
          this.search(q)
        }, 600)
      },
      search (q) {
        this.$emit('input', q)
        setTimeout(() => { this.hasLoader = false }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .table-search-input {
    width: 250px;
  }
</style>