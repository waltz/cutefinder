const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome to CuteFinder!'))

app.listen(port, () => console.log(`CuteFinder is listening on ${port}`))
