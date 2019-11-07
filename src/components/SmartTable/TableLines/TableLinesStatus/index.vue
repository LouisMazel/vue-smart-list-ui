<template>
  <span
    class="table-lines-status flex align-center justify-content-center"
  >
    <div :class="`label label-${colorLabel}`">
      {{ statusText }}
    </div>
  </span>
</template>

<script>
  import { GetStatusText, GetStatusClassColor } from '@/utils/GetStatusInfos'

  export default {
    name: 'TableLinesStatus',
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
