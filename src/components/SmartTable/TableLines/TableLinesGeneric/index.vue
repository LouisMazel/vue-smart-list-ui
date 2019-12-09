<template>
  <div class="table-lines-generic fs-12 dots-text">
    <span>{{ data }}</span>
  </div>
</template>

<script>
  export default {
    name: 'TableLinesGeneric',
    props: {
      data: { type: String, default: null }
    }
  }
</script>
