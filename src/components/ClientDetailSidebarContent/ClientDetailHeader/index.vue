<template>
  <div
    class="client-detail-header p-2 flex space-between align-center bg-color"
  >
    <SectionTitle text="Tracking client" />
    <MazBtn
      class="client-detail-header__close-btn"
      fab
      size="mini"
      @click="$emit('close')"
    >
      ✕
    </MazBtn>
  </div>
</template>

<script>
  import SectionTitle from '@/components/SectionTitle'

  export default {
    name: 'ClientDetailHeader',
    components: {
      SectionTitle
    }
  }
</script>

<style lang="scss" scoped>
  .client-detail-header {
    z-index: 9;

    &__close-btn {
      background-color: var(--second-color);
      color: var(--text-color);

      &:hover {
        background-color: var(--second-color);
      }
    }
  }
</style>
