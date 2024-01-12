/**
 *
 * @param {string} string
 * @returns {string}
 */
export const stringReducer = (string) => {
  if (string.length > 40) {
    return string.substring(0, 40) + '...'
  }
  return string
}
