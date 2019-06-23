const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('HELLO')
})

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('App running on port 3000')
})

module.exports = server
