<template>
  <div 
    class="client-detail-header p-2 flex justify-content-between align-center"
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
    background-color: #F2F2F2;
    z-index: 9;

    &__close-btn {
      color: #333;
      border: none;
      cursor: pointer;
      height: 28px;
      width: 28px;
      border-radius: 50%;
      outline: none;
      font-size: 12px;

      &:hover,
      &:focus {
        background-color: #F2F2F2;
        box-shadow: 0 0 0 0.2rem rgba(#FFF, 0.7);
      }
    }
  }
</style>