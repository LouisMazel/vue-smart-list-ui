<template>
  <div class="table-loader p-2 flex justify-content-center flex-end">
    <div class="flex flex-direction-column align-center justify-content-center">
      <CustomLoader
        class="mb-2"
        :size="50"
      />
      <h3>Loading simulation</h3>
    </div>
  </div>
</template>

<script>
  import CustomLoader from '@/components/CustomLoader'

  export default {
    name: 'TableLoader',
    components: {
      CustomLoader
    }
  }
</script>

<style lang="scss" scoped>
  .table-loader {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    h3 {
      text-shadow: #FFF 1px 0 10px;
    }
  }
</style>