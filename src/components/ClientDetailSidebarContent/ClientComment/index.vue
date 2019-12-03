<template>
  <div class="client-comment data-container flex direction-column">
    <p class="data-container__value">
      {{ comment }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ClientComment',
    props: {
      comment: { type: String, required: true }
    }
  }
</script>

