<template>
  <VueInputUi
    :value="queryValue"
    label="Search"
    color="#44bbbc"
    clearable
    class="table-search-input"
    :loader="hasLoader"
    @input="debounceSearch"
  />
</template>

<script>
  import VueInputUi from 'vue-input-ui'
  import { mapActions } from 'vuex'

  export default {
    name: 'TableSearchInput',
    components: {
      VueInputUi
    },
    props: {
      value: { type: String, default: null }
    },
    data () {
      return {
        hasLoader: false
      }
    },
    computed: {
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