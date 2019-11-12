<template>
  <div class="tracking-table flex flex-direction-column mw-100 bg-color-light">
    <div class="tracking-table__header flex justify-content-between flex-fixed py-2 px-4 align-center bg-color">
      <div class="tracking-table__title pl-2">
        <h2>Tracking Client</h2>
      </div>
      <div class="tracking-table__tools flex">
        <TableSortSelector
          v-if="sortOptions"
          v-model="sortTypeProps"
          :sort-options="sortOptions"
          class="ml-2"
        />
        <TableSearchInput
          v-model="searchQueryProps"
          class="ml-2"
        />
      </div>
    </div>
    <TableTitles
      :titles="titles"
      class="px-4"
      @reorder-column="reorderTableColumn"
    />
    <div class="tracking-table__scroll-content flex flex-1">
      <div
        ref="scroll-content"
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="10"
        class="tracking-table__scroll-content__scroll flex-1"
      >
        <slot />
      </div>
      <TableLoader v-if="loading" />
    </div>
  </div>
</template>

<script>
  import TableSearchInput from './TableSearchInput'
  import TableSortSelector from './TableSortSelector'
  import TableTitles from './TableTitles'
  import TableLoader from './TableLoader'
  import { EventBus } from '@/services/EventBus'

  export default {
    name: 'TrackingTable',
    components: {
      TableSearchInput,
      TableSortSelector,
      TableTitles,
      TableLoader
    },
    props: {
      loading: { type: Boolean, default: false },
      titles: { type: Array, required: true },
      sortOptions: { type: Array, default: null },
      sortType: { type: String, default: null },
      searchQuery: { type: String, default: null }
    },
    computed: {
      sortTypeProps: {
        get () {
          return this.sortType
        },
        set (value) {
          this.scrollContentTop()
          this.$emit('sort', value)
        }
      },
      searchQueryProps: {
        get () {
          return this.searchQuery
        },
        set (value) {
          this.scrollContentTop()
          this.$emit('search', value)
        }
      }
    },
    mounted () {
      EventBus.$on('scroll-top-table-content', () => {
        this.scrollContentTop()
      })
    },
    beforeDestroy () {
      EventBus.$off('scroll-top-table-content')
    },
    methods: {
      loadMore () {
        this.$emit('load-more')
      },
      reorderTableColumn (payload) {
        this.$emit('reorder-column', payload)
      },
      scrollContentTop () {
        this.$nextTick(() => {
          this.$refs['scroll-content'].scrollTop = 0
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tracking-table {
    &__scroll-content {
      position: relative;
      min-height: 0;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      &__scroll {
        overflow-y: auto;
        padding-bottom: 100px;
      }
    }
  }
</style>
