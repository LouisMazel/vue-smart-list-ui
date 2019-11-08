// import mock from '@/../mock/mock.json'

const initialDataShown = [
  // { title: 'PJ', path: 'attachments', width: '100px' },
  { type: 'status', title: 'Status', path: 'status', width: '80px' },
  { type: 'text', title: 'From', path: { 'customer': ['last_name', 'first_name'] }, width: '130px'},
  { type: 'social', title: 'Platform', path: 'contact_channel', width: '80px' },
  { type: 'date', title: 'Creation date', path: 'interaction_creation_date', width: '140px' },
  { type: 'date', title: 'Due date', path: 'due_date', width: '140px' },
  { type: 'text', title: 'Assigned to', path: 'assignedTO', width: '130px' },
  { type: 'comment', title: 'Last comment', path: 'last_comment' }
]

const sortOptions = [
  { label: 'None' },
  { label: 'ID', value: 'id' },
  { label: 'Client name ↓ (A-Z)', value: 'from' },
  { label: 'Client name ↑ (Z-A)', value: '-from' },
  { label: 'From ↓ (A-Z)', value: 'contact_channel' },
  { label: 'From ↑ (Z-A)', value: '-contact_channel' },
  { label: 'Creation date ↓', value: 'interaction_creation_date' },
  { label: 'Creation date ↑', value: '-interaction_creation_date' },
  { label: `Due date ↓`, value: 'due_date' },
  { label: `Due date ↑`, value: '-due_date' },
  { label: 'Assigned to (A-Z) ↓', value: 'assignedTO' },
  { label: 'Assigned to (A-Z) ↑', value: '-assignedTO' },
  { label: 'Status ↓ (A-Z)', value: 'status' },
  { label: 'Status ↑ (Z-A)', value: '-status' }
]

export default {
  workedMock: null,
  clientData: [],
  currentPage: 1,
  maxPage: 1,
  itemNumberPerPage: 30,
  currentClientData: null,
  currentFilterState: localStorage.getItem('currentFilterState') || 'all',
  currentSort: localStorage.getItem('currentSort') || null,
  dataShown: JSON.parse(localStorage.getItem('dataShown')) || initialDataShown,
  sortOptions: sortOptions,
  searchQuery: null,
  availableStatus: ['all', 'waiting', 'reserved', 'inProgress', 'toTreat', 'finished'],
  darkThemeEnable: true
}
