export const GetStatusText = (status) => {
  switch (status) {
    case 'all':
      return 'All requests'
    case 'waiting':
      return 'Waiting'
    case 'reserved':
      return 'Reserved'
    case 'inProgress':
      return 'In progress'
    case 'toTreat':
      return 'To treat'
    case 'finished':
      return 'Finished'
    default:
      return status
  }
}

export const GetStatusClassColor = (status) => {
  switch (status) {
    case 'waiting':
      return 'warning'
    case 'reserved':
      return 'dark'
    case 'inProgress':
      return 'info'
    case 'toTreat':
      return 'danger'
    case 'finished':
      return 'success'
    default:
      return null
  }
}
