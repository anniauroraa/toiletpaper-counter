const express = require('express')
const app = express()

// app.use(express.json())

//...

let stats = [
    {
        id: "1",
        object: "toilet paper",
        count: "0"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/stats', (request, response) => {
    response.json(stats)
})

app.get('/api/stats/:id', (request, response) => {
    const id = request.params.id
    const entry = stats.find(entry => entry.id === id)

    if (entry) {
        response.json(entry)
    } else {
        response.status(404).end()
    }

    response.json(entry)
})

// app.post('/api/notes', (request, response) => {
// const entry = request.body
// console.log(entry)
// response.json(entry)
// })




// response.set('Content-Type', 'application/json')

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})