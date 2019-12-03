<template>
  <div class="left-sidebar-content p-2 flex direction-column bg-color-light h-100">
    <SectionTitle
      text="Filtered by"
      class="mb-2"
    />
    <StatusFilterBtn
      v-for="(status, i) in getAvailableStatus"
      :key="i"
      :status="status"
    />
  </div>
</template>

<script>
  import StatusFilterBtn from './StatusFilterBtn'
  import SectionTitle from '@/components/SectionTitle'
  import { mapGetters } from 'vuex'

  export default {
    name: 'LeftSidebarContent',
    components: {
      StatusFilterBtn, SectionTitle
    },
    computed: {
      ...mapGetters(['getAvailableStatus'])
    }
  }
</script>

<style lang="scss" scoped>
  .left-sidebar-content {
    overflow-y: auto;

    button {
      margin-bottom: 10px;
    }
  }
</style>
