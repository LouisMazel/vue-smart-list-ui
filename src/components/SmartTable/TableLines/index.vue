<template>
  <button
    class="table-line flex align-center"
    :class="{ 'active': active }"
    @click="$emit('click')"
  >
    <div
      v-for="({ path, width, type }, i) in pathList"
      :key="i"
      class="table-line__cell p-2"
      :class="{ 'flex-1': !width }"
      :style="{ 'width': width ? width : null }"
    >
      <!-- If data have deep key -->
      <div v-if="typeof path === 'object'">
        <TableLinesMultiData
          :data="data[Object.keys(path)[0]]"
          :keys="path[Object.keys(path)[0]]"
        />
      </div>
      <!-- If data is a date -->
      <DateText 
        v-else-if="type === 'date'"
        :date="data[path]"
        filter="LLL"
        class="fs-12"
      />
      <!-- If data is a status -->
      <TableLinesStatus
        v-else-if="type === 'status'"
        :status="data[path]"
      />
      <!-- If data is a comment -->
      <TableLinesComment
        v-else-if="type === 'comment'"
        :comment="data[path]"
      />
      <TableLinesGeneric
        v-else
        :data="data[path]"
      />
    </div>
  </button>
</template>

<script>
  import TableLinesMultiData from './TableLinesMultiData'
  import TableLinesStatus from './TableLinesStatus'
  import TableLinesComment from './TableLinesComment'
  import TableLinesGeneric from './TableLinesGeneric'
  import DateText from '@/components/DateText'

  export default {
    name: 'TableLine',
    components: {
      TableLinesMultiData,
      TableLinesStatus,
      TableLinesComment,
      TableLinesGeneric,
      DateText
    },
    props: {
      data: { type: Object, default: Object },
      pathList: { type: Array, default: Array },
      active: { type: Boolean, default: false }
    }
  }
</script>

<style lang="scss" scoped>
  .table-line {
    border-radius: 8px;
    margin: 10px 0;
    cursor: pointer;
    user-select: none;
    border: none;
    outline: none;
    width: 100%;
    min-height: 42px;
    padding: 0;
    box-shadow: 0 6px 10px 0 rgba(12, 8, 60, 0.1);


    &:last-child {
      border-bottom: none;
    }

    &__cell {
      border-right: 1px solid var(--second-color);
      font-size: 14px;
      height: 100%;
      min-width: 0;

      &:last-child {
        border-right: none;
      }
    }

    &.active {
      background-color: var(--brand-color);

      &:focus {
        box-shadow: 0 0 0 0.2rem rgba($brand-color, 0.7);
      }

      color: #FFF;

      .table-line__cell {
        border-right: 1px solid darken($brand-color, 8%);

        &:last-child {
          border-right: none;
        }
      }
    }
  }
</style>