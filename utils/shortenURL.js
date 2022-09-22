function shortenURL(stringLength) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collection = (lowerCaseLetters + upperCaseLetters + numbers).split('')

  let randomString = ''
  for (let i = 0; i < stringLength; i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    const randomChar = collection[randomIndex]
    randomString += randomChar
  }
  return randomString
}
module.exports = shortenURL