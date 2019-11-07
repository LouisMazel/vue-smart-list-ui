<template>
  <div class="crm-interface flex mw-100">
    <VueSidebarUi
      v-model="leftSidebarOpen"
      :width="280"
    >
      <FilterSidebarContent />
    </VueSidebarUi>
    <div class="flex flex-1 main">
      <TableContainer
        class="flex-1"
        :loading="$wait.is('get client data')"
        :sort-options="getSortOptions"
        :sort-type="getCurrentSort"
        :search-query="getSearchQuery"
        :titles="getDataShown"
        @sort="sortData"
        @search="searchingInData({ query: $event })"
        @load-more="loadMoreData"
        @reorder-column="reorderTableColumn"
      >
        <transition-group
          v-if="getClientData.length"
          name="list"
          tag="div"
          class="px-4"
        >
          <TableLines
            v-for="data in getClientData"
            :key="data.id"
            :data="data"
            :path-list="getDataShown"
            :active="getCurrentClientData ? getCurrentClientData.id === data.id : null"
            @click="setCurrentClientData(data)"
          />
        </transition-group>
        <NoDataLayer v-else />
        <div
          v-if="isLastPage && getClientData.length"
          class="flex align-center justify-content-center text-muted fs-12"
        >
          All data is loaded
        </div>
      </TableContainer>
    </div>
    <VueSidebarUi
      :value="!!getCurrentClientData"
      :width="350"
      right
      without-close-btn
    >
      <ClientDetailSidebarContent
        v-if="!!getCurrentClientData"
        @close-sidebar="resetCurrentClientData"
      />
    </VueSidebarUi>
  </div>
</template>

<script>
  import VueSidebarUi from 'vue-sidebar-ui';
  import 'vue-sidebar-ui/dist/vue-sidebar-ui.css';
  import { TableContainer, TableLines } from '@/components/SmartTable'
  import FilterSidebarContent from '@/components/FilterSidebarContent'
  import ClientDetailSidebarContent from '@/components/ClientDetailSidebarContent'
  import NoDataLayer from '@/components/NoDataLayer'

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'CrmInterface',
    components: {
      TableContainer,
      TableLines,
      VueSidebarUi,
      FilterSidebarContent,
      ClientDetailSidebarContent,
      NoDataLayer
    },
    data () {
      return {
        leftSidebarOpen: true,
        tableTitle: 'Tracking Client'
      }
    },
    computed: {
      ...mapGetters([
        'getClientData',
        'getCurrentClientData',
        'getDataShown',
        'getSortOptions',
        'getCurrentSort',
        'getSearchQuery',
        'isLastPage'
      ])
    },
    async mounted () {
      this.$wait.start('get client data')
      await this.getDataClient()
      this.$wait.end('get client data')
    },
    methods: {
      ...mapActions([
        'loadMoreClientData',
        'setCurrentClientData',
        'resetCurrentClientData',
        'reorderTableColumn',
        'getDataClient',
        'sortData',
        'searchingInData'
      ]),
      async loadMoreData () {
        if (this.$wait.is('get client data') || this.isLastPage) return
        this.$wait.start('get client data')
        setTimeout(() => {
          this.loadMoreClientData()
          this.$wait.end('get client data')
        }, 500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .crm-interface {
    .main {
      min-width: 0;
    }
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s;
  }

  .list-enter,
  .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateX(-30px);
  }
</style>
