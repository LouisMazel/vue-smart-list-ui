<template>
  <div
    class="client-status label fs-14 p-1 text-center"
    :class="`label-${colorLabel}`"
  >
    {{ statusText }}
  </div>
</template>

<script>
  import { GetStatusText, GetStatusClassColor } from '@/utils/GetStatusInfos'

  export default {
    name: 'ClientStatus',
    props: {
      status: { type: String, required: true }
    },
    computed: {
      statusText () {
        return GetStatusText(this.status)
      },
      colorLabel () {
        return GetStatusClassColor(this.status)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .client-status {
    padding: 0.5rem;
    border-radius: 0;
  }
</style>