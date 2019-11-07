<template>
  <div class="date-text dots-text">
    <span>{{ date | moment(filter) }}</span>
  </div>
</template>

<script>
  export default {
    name: 'DateText',
    props: {
      date: { type: String, required: true },
      filter: { type: String, required: true }
    }
  }
</script>
