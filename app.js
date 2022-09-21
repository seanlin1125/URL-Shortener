const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const routes = require('./routes')
require('./config/mongoose')

app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views');

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})