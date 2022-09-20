function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function shortenURL(stringLength) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []
  collection = lowerCaseLetters.split('').concat(upperCaseLetters.split(''), numbers.split(''))

  let randomString = ''
  for (let i = 0; i < stringLength; i++) {
    randomString += sample(collection)
  }
  return randomString
}
module.exports = shortenURL