<template>
  <div 
    class="data-container flex justify-content-between p-3 br-8"
  >
    <p class="data-container__label">
      Client ID
    </p>
    <p class="data-container__value">
      {{ clientId }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'ClientId',
    props: {
      clientId: { type: [String, Number], required: true }
    }
  }
</script>
