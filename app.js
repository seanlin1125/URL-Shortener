const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const URL = require('./models/URL')
const shortenURL = require('./utils/shortenURL')
require('./config/mongoose')

app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views');

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { originURL } = req.body
  const shortURL = shortenURL(5)
  const baseURL = req.headers.origin
  console.log(baseURL)
  // 找尋第一個符合的原始連結，
  URL.findOne({ originURL })
    // 如果找不到就Create一筆資料至資料庫(含此連結及新產生的隨機五位英數亂碼)
    .then((data) => data ? data : URL.create({ originURL, shortURL }))
    .then((data) => {
      res.render("index", { baseURL, shortURL: data.shortURL })
    }
    )
    .catch((error) => console.error(error))
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})