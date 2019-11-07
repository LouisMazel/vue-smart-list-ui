export default {
  getClientData (state) {
    return state.clientData
  },
  getCurrentClientData (state) {
    return state.currentClientData
  },
  getDataShown (state) {
    return state.dataShown
  },
  getAvailableStatus (state) {
    return state.availableStatus
  },
  getSortOptions (state) {
    return state.sortOptions
  },
  getCurrentFilterState (state) {
    return state.currentFilterState
  },
  getCurrentSort (state) {
    return state.currentSort
  },
  getSearchQuery (state) {
    return state.searchQuery
  },
  isLastPage (state) {
    const { currentPage, maxPage } = state
    return currentPage > maxPage
  },
  hasDarkTheme (state) {
    return state.darkThemeEnable
  }
}
