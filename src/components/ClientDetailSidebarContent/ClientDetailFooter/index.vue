<template>
  <div
    class="client-detail-footer p-2 flex space-between align-center bg-color"
  >
    <a
      :href="`./${attachments}`"
      download="attachments"
      class="client-detail-footer__btn btn btn-sm flex-1 text-center"
    >
      ↓ Attachment
    </a>
    <MazBtn
      type="success"
      class="client-detail-footer__btn flex-1"
    >
      Call to action
    </MazBtn>
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
    z-index: 9;

    &__btn:nth-child(2) {
      margin-left: 10px !important;
    }
  }
</style>
