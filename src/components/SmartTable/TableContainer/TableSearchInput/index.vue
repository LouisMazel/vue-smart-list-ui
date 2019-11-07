<template>
  <VueInputUi
    :value="queryValue"
    label="Search"
    color="dodgerblue"
    clearable
    class="table-search-input"
    :loader="hasLoader"
    :dark="hasDarkTheme"
    @input="debounceSearch"
  />
</template>

<script>
  import VueInputUi from 'vue-input-ui'
  import 'vue-input-ui/dist/vue-input-ui.css'

  import { mapActions, mapGetters } from 'vuex'

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