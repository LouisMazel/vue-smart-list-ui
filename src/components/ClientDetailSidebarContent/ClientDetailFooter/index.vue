<template>
  <div 
    class="client-detail-footer p-2 flex justify-content-between align-center"
  >
    <a
      :href="`./${attachments}`"
      download="attachments"
      class="client-detail-footer__btn btn btn-sm flex-1 text-center"
    >
      ↓ Attachment
    </a>
    <button class="client-detail-footer__btn btn btn-success flex-1 btn-sm">
      Call to action
    </button>
  </div>
</template>

<script>
  
  export default {
    name: 'ClientDetailFooter',
    props: {
      attachments: { type: String, default: null }
    }
  }
</script>

<style lang="scss" scoped>
  .client-detail-footer {
    background-color: #F2F2F2;
    z-index: 9;

    a {
      line-height: 36px;
      text-decoration: none;
    }

    &__btn:nth-child(2) {
      margin-left: 10px !important;
    }
  }
</style>