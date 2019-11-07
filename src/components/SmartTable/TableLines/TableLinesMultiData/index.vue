<template>
  <div class="table-line-multi-data dots-text fs-12">
    <span
      v-for="(values, index) in keys"
      :key="index"
    >
      {{ data[values] }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'TableLineMultiData',
    props: {
      data: { type: Object, required: true },
      keys: { type: Array, required: true }
    }
  }
</script>
