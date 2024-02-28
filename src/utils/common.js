export function extractPageNumber(inputString) {
  // Define a regular expression pattern to match the page number
  const pattern = /page=(\d+)/
  // Use match to find the first occurrence of the page number pattern
  const matchResult = inputString.match(pattern)
  // If a match is found, extract and return the page number
  if (matchResult) {
    return matchResult[1]
  } else {
    return null
  }
}

export function extractPersonId(inputString) {
  // Define the regular expression pattern to match the person ID
  const pattern = /\/(\d+)\/$/

  // Use the match method to extract the person ID
  const matchResult = inputString.match(pattern)

  // Check if a match is found
  if (matchResult) {
    return matchResult[1]
  } else {
    return null
  }
}