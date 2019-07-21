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

app.listen(process.env.PORT || 3000, () => console.log('server running'))
