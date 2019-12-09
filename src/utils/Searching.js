import moment from 'moment'

const isDate = (date) => (new Date(date) !== 'Invalid Date') && !isNaN(new Date(date))

export default (arr, searchKey) =>
  arr.filter((obj) =>
    Object.keys(obj).some((key) =>
      isDate(obj[key])
        ? moment(obj[key]).format('LLL').toLowerCase().includes(searchKey.toLowerCase())
        : typeof obj[key] === 'string'
          ? obj[key].toLowerCase().includes(searchKey.toLowerCase())
          : typeof obj[key] === 'object'
            ? Object.keys(obj[key]).some((k) => obj[key][k].toLowerCase().includes(searchKey.toLowerCase()))
            : false
    ))
