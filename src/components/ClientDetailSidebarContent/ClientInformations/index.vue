<template>
  <div class="client-informations data-container flex flex-direction-column">
    <div
      v-for="(key, i) in Object.keys(data)"
      :key="i"
    >
      <div
        v-if="key === 'birthday'"
        class="flex justify-content-between"
      >
        <p class="data-container__label">
          Birthday
        </p>
        <DateText
          class="data-container__value"
          :date="data.birthday"
          filter="LL"
        />
      </div>
      <div 
        v-else
        class="flex justify-content-between mb-2"
      >
        <p class="data-container__label">
          {{ getLabel(key) }}
        </p>
        <p class="data-container__value">
          {{ key === 'gender' ? getGenderText(data[key]) : data[key] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import DateText from '@/components/DateText'

  export default {
    name: 'ClientInformations',
    components: {
      DateText
    },
    props: {
      data: { type: Object, required: true }
    },
    methods: {
      getLabel (key) {
        switch (key) {
          case 'first_name':
            return 'First name'
          case 'last_name':
            return 'Last name'
          case 'email':
            return 'E-mail'
          case 'gender':
            return 'Gender'
          case 'country_code':
            return 'Country code'
          case 'phone':
            return 'Phone'
          default:
            return key
        }
      },
      getGenderText (key) {
        switch (key) {
          case 'Female':
            return 'Female'
          case 'Male':
            return 'Male'
          default:
            return key
        }
      }
    }
  }
</script>
