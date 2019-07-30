const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')

app.use(cors())

app.get('/club', async (req, res) => {
  const response = await axios.get(
    'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
  )
  res.json(response.data.teams)
})

app.get('/club/:id/events', async (req, res) => {
  const response = await axios.get(
    `https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${
      req.params.id
    }`
  )
  res.json(response.data.events)
})

app.get('/events/:date', async (req, res) => {
  const response = await axios.get(
    `https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=${
      req.params.date
    }&s=Soccer`
  )
  res.json(response.data.events)
})

app.listen(process.env.PORT || 3000, () => console.log('server running'))
