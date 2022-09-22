const express = require('express')
router = express.Router()
const URL = require('../../models/URL')
const shortenURL = require('../../utils/shortenURL')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const { originURL } = req.body
  const shortURL = shortenURL(5)
  const baseURL = req.headers.origin
  // 找尋第一個符合的原始連結，
  URL.findOne({ originURL })
    // 如果找不到就Create一筆資料至資料庫(含此連結及新產生的隨機五位英數亂碼)
    .then((data) => data ? data : URL.create({ originURL, shortURL }))
    .then((data) => {
      res.render("index", { baseURL, shortURL: data.shortURL })
    }
    )
    .catch((error) => {
      console.error(error)
      res.render('error', { error: 'Something went wrong. Please contact your service provider.' })
    })
})

router.get('/:shortURL', (req, res) => {
  const { shortURL } = req.params
  const baseURL = req.headers.host
  const errorMessage = `Error! "${baseURL}/${shortURL}" is not found. Please contact your service provider.`
  URL.findOne({ shortURL })
    .then((data) => data ? res.redirect(data.originURL) : res.render('error', { errorMessage }))
    .catch((error) => {
      console.error(error)
      res.render('error', { error: 'Something went wrong. Please contact your service provider.' })
    })
})

module.exports = router