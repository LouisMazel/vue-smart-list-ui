<template>
  <div class="table-loader p-2 flex justify-center align-end">
    <div class="flex direction-column align-center justify-center">
      <MazSpinner
        class="mb-2"
        :size="50"
      />
      <h3>Loading simulation</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TableLoader'
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
  }
</style>
