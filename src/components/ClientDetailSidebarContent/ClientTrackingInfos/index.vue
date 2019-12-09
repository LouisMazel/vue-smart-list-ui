<template>
  <div class="client-trancking-infos data-container flex direction-column">
    <div
      v-for="(key, i) in Object.keys(data)"
      :key="i"
    >
      <div
        v-if="key === 'interaction_creation_date' || key === 'due_date'"
        class="flex space-between mb-2"
      >
        <p class="data-container__label">
          {{ getLabel(key) }}
        </p>
        <DateText
          class="data-container__value"
          :date="data[key]"
          filter="LL"
        />
      </div>
      <div
        v-else
        class="flex space-between mb-2"
      >
        <p class="data-container__label">
          {{ getLabel(key) }}
        </p>
        <p class="data-container__value">
          {{ data[key] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import DateText from '@/components/DateText'

  export default {
    name: 'ClientTrackingInfos',
    components: {
      DateText
    },
    props: {
      data: { type: Object, required: true }
    },
    methods: {
      getLabel (key) {
        switch (key) {
        case 'contact_channel':
          return 'From'
        case 'interaction_creation_date':
          return 'Creation date'
        case 'due_date':
          return 'Due date'
        case 'assignedTO':
          return 'Assigned to'
        default:
          return key
        }
      }
    }
  }
</script>
