import mock from '@/../mock/mock.json'
import Sorting from '@/utils/Sorting'
import SmartSearch from '@/utils/SmartSearch'
import moment from 'moment'

export default {
  async getDataClient ({ state, commit }, noSetData) {
    try {
      commit('UPDATE_CURRENT_PAGE_CLIENT_DATA', 1)
      const { currentFilterState, currentSort, itemNumberPerPage } = state
      let filteredData

      if (currentSort) await Sorting(mock, currentSort)

      if (currentFilterState !== 'all') {
        filteredData = await mock.filter((item) => currentFilterState.indexOf(item.status) > -1)
      } else {
        filteredData = await mock
      }

      commit('SET_MAX_PAGE', filteredData.length / itemNumberPerPage)

      return noSetData
        ? filteredData
        : commit('SET_DATA_TO_CLIENT_DATA', filteredData.slice(0, itemNumberPerPage))
    } catch (err) {
      window.console.warn('Error while getting data client', err)
    }
  },
  async loadMoreClientData ({ commit, state, dispatch }) {
    try {
      const { currentPage, itemNumberPerPage, searchQuery } = state

      const newData = searchQuery !== '' && searchQuery !== null
        ? await dispatch('searchingInData', { query: searchQuery, noSetData: true })
        : await dispatch('getDataClient', true)
        
      commit('SET_MAX_PAGE', newData.length / itemNumberPerPage)

      const dataToPush = await newData.slice(
        currentPage * itemNumberPerPage,
        currentPage * itemNumberPerPage + itemNumberPerPage
      )

      commit('PUSH_DATA_TO_CLIENT_DATA', dataToPush)
      commit('UPDATE_CURRENT_PAGE_CLIENT_DATA', currentPage + 1)
    } catch (err) {
      window.console.warn('Error while loading more data client', err)
    }
  },
  setCurrentClientData ({ commit }, payload) {
    commit('SET_CURRENT_CLIENT_DATA', payload)
  },
  resetCurrentClientData ({ commit }) {
    commit('SET_CURRENT_CLIENT_DATA', null)
  },
  reorderTableColumn ({ commit }, payload) {
    commit('REORDER_TABLE_COLUMN', payload)
  },
  setSearchQuery ({ commit }, query) {
    commit('SET_SEARCH_QUERY', query)
  },
  setDarkTheme ({ commit }, value) {
    commit('SET_DARK_THEME', value)
  },
  async setCurrentFilterState ({ commit, dispatch }, status) {
    try {
      commit('SET_DATA_TO_CLIENT_DATA', [])
      commit('SET_CURRENT_FILTER_STATE', status)
      dispatch('resetCurrentClientData')
      await dispatch('getDataClient')
    } catch (err) {
      window.console.warn('Error while setting new status filter', err)
    }
  },
  async sortData ({ commit, dispatch }, sortParams) {
    try {
      commit('SET_CURRENT_SORT', sortParams)
      dispatch('resetCurrentClientData')
      dispatch('wait/start', 'get client data', { root: true })
      await dispatch('getDataClient')
      dispatch('wait/end', 'get client data', { root: true })
    } catch (err) {
      window.console.warn('Error while sorting data', err)
    }
  },
  async searchingInData ({ commit, dispatch, state }, { query, noSetData }) {
    try {
      dispatch('wait/start', 'get client data', { root: true })
      dispatch('resetCurrentClientData')

      const dataBase = await dispatch('getDataClient', true)
      const entries = await dataBase.map((data) => {
        return {
          name: `${data.first_name} ${data.customer.last_name}`,
          status: data.status,
          from: data.contact_channel,
          creationName: moment(data.interaction_creation_date).format('LLL'),
          dueDate: moment(data.due_date).format('LLL'),
          assigned: data.assignedTO,
          id: data.id
        }
      })

      const fields = ['name', 'status', 'from', 'creationName', 'dueDate', 'assigned']
      const results = await SmartSearch(entries, [query ? query.trim() : query], fields)

      const data = query !== '' && query !== null
        ? await mock.filter((data) => results.findIndex(r => r.entry.id === data.id) !== -1)
        : await dispatch('getDataClient', true)
        
      dispatch('wait/end', 'get client data', { root: true })

      commit('SET_MAX_PAGE', data.length / state.itemNumberPerPage)

      return noSetData
        ? data
        : commit('SET_DATA_TO_CLIENT_DATA', data.slice(0, state.itemNumberPerPage))
    } catch (err) {
      window.console.log('Error while searching', err)
    }
  }
}
