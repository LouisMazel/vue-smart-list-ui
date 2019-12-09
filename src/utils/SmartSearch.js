const Match = (pattern, text, offset, options) => {
  let insertions = 0
  const matchIndexes = []
  let iPattern = 0
  for (let iText = offset; iText < text.length; iText++) {
    if (text[iText] === pattern[iPattern]) {
      matchIndexes.push(iText)
      if (++iPattern === pattern.length) {
        return ({
          insertions: insertions,
          matchIndexes: matchIndexes
        })
      }
    } else if (matchIndexes.length) {
      insertions++
      if (options.maxInsertions > -1 &&
        insertions > options.maxInsertions) {
        return null
      }
    }
  }
  return null
}

const ConcatenateObjectValues = (obj) => {
  const keys = Object.keys(obj).sort()
  const concatProp = keys.reduce((memo, key) => {
    memo.push(obj[key])
    return memo
  }, [])

  return concatProp.join(' ')
}

const NormalizeText = (text) => {
  if (typeof text === 'object') {
    return ConcatenateObjectValues(text)
  }
  return NormalizeString(text)
}

const Find = (pattern, text, options) => {
  let match = false
  let insertions = null
  let matchIndexes = null
  const iPattern = 0
  text = NormalizeText(text)
  if (options.caseSensitive === false) {
    pattern = pattern.toLowerCase()
    text = text.toLowerCase()
  }
  for (let iText = 0; iText < text.length; iText++) {
    if (text[iText] === pattern[iPattern]) {
      const res = Match(pattern, text, iText, options)
      if (res && (match === false || res.insertions <= insertions)) {
        if (match === false || res.insertions < insertions) {
          match = true
          insertions = res.insertions
          matchIndexes = res.matchIndexes
        } else {
          matchIndexes = matchIndexes.concat(res.matchIndexes)
        }
      }
    }
  }
  return match
    ? ({ value: pattern, insertions: insertions, matchIndexes: matchIndexes })
    : null
}

const Score = (entryResults) => {
  const patternsMinInsertions = {}
  const patternsMinMatchIndex = {}
  entryResults.forEach((fieldResults) => {
    fieldResults.patterns.forEach((pattern) => {
      if (patternsMinInsertions[pattern.value] === undefined ||
        pattern.insertions < patternsMinInsertions[pattern.value]) {
        patternsMinInsertions[pattern.value] = pattern.insertions
        patternsMinMatchIndex[pattern.value] = pattern.matchIndexes
      }
    })
  })
  let minInsertions = 0
  let minMatchIndex = []
  for (const pattern in patternsMinInsertions) {
    if (patternsMinInsertions.hasOwnProperty(pattern)) { // eslint-disable-line
      minInsertions += patternsMinInsertions[pattern]
      minMatchIndex = minMatchIndex.concat(patternsMinMatchIndex[pattern])
    }
  }
  return minInsertions + minMatchIndex.sort()[0] / 1000
}

const Search = (entries, patterns, fields, options) => {
  const results = []
  entries.forEach((entry) => {
    let match = false
    const entryMatch = []
    const entryResults = []
    for (const field of fields) {
      const fieldString = entry[field]
      if (typeof fieldString === 'undefined') {
        return
      }
      const fieldMatch = []
      const fieldResults = { field: field, patterns: [] }
      patterns.forEach((pattern) => {
        const res = Find(pattern, fieldString, options)
        if (res) {
          fieldResults.patterns.push(res)
          fieldMatch.push(pattern)
          if (entryMatch.indexOf(pattern) === -1) {
            entryMatch.push(pattern)
          }
        }
      })
      if (fieldMatch.length === patterns.length) {
        entryResults.push(fieldResults)
        match = true
      } else if (options.fieldMatching === false &&
        fieldResults.patterns.length > 0) {
        entryResults.push(fieldResults)
      }
    }
    if ((options.fieldMatching === true && match === true) ||
      (options.fieldMatching === false &&
        entryMatch.length === patterns.length)) {
      results.push({
        entry: entry,
        info: entryResults,
        score: Score(entryResults)
      })
    }
  })
  return results
}

const BuildOptions = (options) => {
  const defaultOptions = {
    caseSensitive: false,
    fieldMatching: false,
    maxInsertions: -1
  }

  return {
    ...defaultOptions,
    ...options
  }
}

const SanitizeArray = function (patterns, caseSensitive) {
  return patterns.map((pattern) => {
    pattern = NormalizeString(pattern)
    return !caseSensitive ? pattern.toLowerCase() : pattern
  })
}

const NormalizeString = (str) => {
  let strAccentsOut = []
  if (str && typeof str === 'string') {
    const strAccents = str.split('')
    const strAccentsLen = str.length
    const accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'
    const accentsOut = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz'
    for (let y = 0; y < strAccentsLen; y++) {
      if (accents.indexOf(strAccents[y]) !== -1) {
        strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1)
      } else {
        strAccentsOut[y] = strAccents[y]
      }
    }
    strAccentsOut = strAccentsOut.join('')
    return strAccentsOut
  } else {
    return ''
  }
}

/*
Entries Array<object>
patterns Array<string>
fields Array<string>
options Object
*/
const SmartSearch = (entries, patterns, fields, options) => {
  options = BuildOptions(options)
  patterns = SanitizeArray(patterns, options.caseSensitive)
  if (entries.length === 0 || patterns.length === 0) {
    return
  }
  const results = Search(entries, patterns, fields, options)
  results.sort(function (a, b) {
    return (a.score - b.score)
  })
  return results
}

export default SmartSearch
