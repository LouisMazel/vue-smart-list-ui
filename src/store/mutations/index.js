export default {
  SET_DATA_TO_CLIENT_DATA (state, payload) {
    state.clientData = payload
  },
  PUSH_DATA_TO_CLIENT_DATA (state, payload) {
    state.clientData.push(...payload)
  },
  UPDATE_CURRENT_PAGE_CLIENT_DATA (state, value) {
    state.currentPage = value
  },
  SET_CURRENT_CLIENT_DATA (state, value) {
    state.currentClientData = value
  },
  REORDER_TABLE_COLUMN (state, { from, to }) {
    state.dataShown.move(from, to)
    localStorage.setItem('dataShown', JSON.stringify(state.dataShown))
  },
  SET_CURRENT_FILTER_STATE (state, status) {
    localStorage.setItem('currentFilterState', status)
    state.currentFilterState = status
  },
  SET_CURRENT_SORT (state, type) {
    localStorage.setItem('currentSort', type)
    state.currentSort = type || null
  },
  SET_SEARCH_QUERY (state, query) {
    state.searchQuery = query || ''
  },
  SET_MAX_PAGE (state, number) {
    state.maxPage = number
  },
  SET_DARK_THEME (state, value) {
    state.darkThemeEnable = value
  }
}
