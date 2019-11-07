<template>
  <button
    class="status-fitler-btn flex justify-content-between align-center"
    :class="[{'active': isActive}]"
    @click="updateStatus(status)"
  >
    <span :class="`dot dot-${colorLabel}`" />
    <span class="ml-2">{{ statusText }}</span>
    <div class="flex-1" />
    <div
      class="badge"
      :class="{
        'badge-white': isActive
      }"
    >
      {{ requestNumber }}
    </div>
  </button>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import mock from '@/../mock/mock.json'
  import { EventBus } from '@/services/EventBus'
  import { GetStatusText, GetStatusClassColor } from '@/utils/GetStatusInfos'

  export default {
    name: 'StatusFitlerBtn',
    props: {
      status: { type: String, required: true },
      active: { type: Boolean, default: false }
    },
    computed: {
      ...mapGetters(['getCurrentFilterState']),
      statusText () {
        return GetStatusText(this.status)
      },
      colorLabel () {
        return GetStatusClassColor(this.status)
      },
      number () {
        return mock.filter((item) => this.status.indexOf(item.status) > -1).length
      },
      requestNumber () {
        return this.status === 'all' ? mock.length : this.number
      },
      isActive () {
        return this.getCurrentFilterState === this.status
      }
    },
    methods: {
      ...mapActions(['setCurrentFilterState']),
      async updateStatus (status) {
        EventBus.$emit('scroll-top-table-content')
        this.$wait.start('get client data')
        await this.setCurrentFilterState(status)
        this.$wait.end('get client data')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .status-fitler-btn {
    color: #000;
    font-size: 14px;
    border-radius: 8px;
    border: none;
    background-color: #FFF;
    height: 38px;
    flex: 0 0 38px;
    padding: 0 20px;
    outline: none;
    margin: 0;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 0 0.2rem rgba(#FFF, 0.7);
      background-color: #F2F2F2;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(#FFF, 0.7);
      background-color: #F2F2F2;
    }

    &.active {
      background-color: $brand-color;
      color: #FFF;
      box-shadow: 0 0 0 0.2rem rgba($brand-color, 0.7);

      .dot {
        box-shadow: 0 0 0 1px #FFF;
      }

      .badge {
        color: #888;
      }
    }
  }
</style>
