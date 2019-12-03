<template>
  <div class="client-detail-sidebar-content flex direction-column flex-1 bg-color-light">
    <ClientDetailHeader
      @close="$emit('close-sidebar')"
    />
    <ClientStatus
      :status="getCurrentClientData.status"
      :class="{
        'has-shadow-top': scrollPosition > 10
      }"
    />
    <div
      ref="content"
      class="client-detail-sidebar-content__content p-2"
      @scroll="viewScrolled"
    >
      <h4 class="fs-16 mb-3">
        Client informations
      </h4>
      <ClientInformations :data="getCurrentClientData.customer" />

      <h4 class="fs-16 my-3">
        Tracking informations
      </h4>
      <ClientTrackingInfos :data="getCurrentClientDataWithoutClientInfos" />

      <h4 class="fs-16 my-3">
        Last comment
      </h4>
      <ClientComment :comment="getCurrentClientData.last_comment" />

      <ClientId
        :client-id="getCurrentClientData.id"
        class="mt-3"
      />
    </div>
    <ClientDetailFooter
      :attachments="getCurrentClientData.attachments"
      :class="{
        'has-shadow-bottom': scrollPosition < 90
      }"
    />
  </div>
</template>

<script>
  import ClientDetailHeader from './ClientDetailHeader'
  import ClientDetailFooter from './ClientDetailFooter'
  import ClientId from './ClientId'
  import ClientInformations from './ClientInformations'
  import ClientTrackingInfos from './ClientTrackingInfos'
  import ClientStatus from './ClientStatus'
  import ClientComment from './ClientComment'

  import { mapGetters } from 'vuex'

  export default {
    name: 'ClientDetailSidebarContent',
    components: {
      ClientDetailHeader,
      ClientDetailFooter,
      ClientId,
      ClientInformations,
      ClientTrackingInfos,
      ClientStatus,
      ClientComment
    },
    data () {
      return {
        availableStatus: ['all', 'waiting', 'reserved', 'inProgress', 'toTreat', 'finished'],
        scrollPosition: 0
      }
    },
    computed: {
      ...mapGetters(['getCurrentClientData']),
      getCurrentClientDataWithoutClientInfos () {
        const data = this.getCurrentClientData
        const notAllowed = ['id', 'customer', 'last_comment', 'attachments', 'status']
        return Object.keys(data)
          .filter(key => !notAllowed.includes(key))
          .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
          }, {});
      }
    },
    watch: {
      getCurrentClientData () {
        this.$refs.content.scrollTop = 0
      }
    },
    methods: {
      viewScrolled (v) {
        const scrollHeight = v.target.scrollHeight - (v.target.clientHeight)
        const scrollTop = v.target.scrollTop
        const percent = Math.floor(scrollTop / scrollHeight * 100)

        this.scrollPosition = percent
      }
    }
  }
</script>

<style lang="scss" scoped>
  .client-detail-sidebar-content {
    min-height: 0;

    .has-shadow-top {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    .has-shadow-bottom {
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }

    &__content {
      overflow-y: auto;
    }
  }
</style>
