<template>
  <div 
    class="client-detail-header p-2 flex justify-content-between align-center bg-color"
  >
    <SectionTitle text="Tracking client" />
    <button
      class="client-detail-header__close-btn"
      @click="$emit('close')"
    >
      ✕
    </button>
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
      border: none;
      cursor: pointer;
      height: 28px;
      width: 28px;
      border-radius: 50%;
      outline: none;
      font-size: 12px;
    }
  }
</style>