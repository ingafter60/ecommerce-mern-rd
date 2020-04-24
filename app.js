const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`
    Server is running on port ${port}
    & go to http://localhost:8000`)
})
