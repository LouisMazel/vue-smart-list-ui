export default (data, params) => {
  let key = params
  if (params.includes('-')) key = params.substr(1)
  switch (params) {
    case 'from':
      return data.sort((a, b) => a['customer']['last_name'].localeCompare(b['customer']['last_name']))
    case '-from':
      return data.sort((a, b) => b['customer']['last_name'].localeCompare(a['customer']['last_name']))
    case 'contact_channel': case 'assignedTO': case 'status':
      return data.sort((a, b) => a[key].localeCompare(b[key]))
    case '-contact_channel': case '-assignedTO': case '-status':
      return data.sort((a, b) => b[key].localeCompare(a[key]))
    case 'interaction_creation_date': case 'due_date':
      return data.sort((a,b) => new Date(a[key]) - new Date(b[key]))
    case '-interaction_creation_date': case '-due_date':
      return data.sort((a,b) => new Date(b[key]) - new Date(a[key]))
    default:
      return data.sort((a, b) => a.id - b.id)
  }
}