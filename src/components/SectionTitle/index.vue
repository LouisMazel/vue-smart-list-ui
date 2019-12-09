<template>
  <h3 class="section-title fs-20 fw-400">
    {{ text }}
  </h3>
</template>

<script>
  export default {
    name: 'SectionTitle',
    props: {
      text: { type: String, required: true }
    }
  }
</script>
