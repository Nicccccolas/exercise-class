const express = require('express')

//? localhost:8000/profile

//! protocolo TCP/IP

const port = 8000

const app = express()

app.get('/profile', (peticion, respuesta) => {
  respuesta.json({
    name: 'Nicolás',
    age: 29,
    country: 'COL'
  })
})

app.post('/profile', (peticion, respuesta) => {
  respuesta.json({
    company1: 'Globant', 
    company2: 'Google',
    company3: 'Supercell'
  })
})

app.patch('/profile', (peticion, respuesta) => {
  respuesta.json({
    hobbie1: 'Develop',
    hobbie2: 'Search job',
    hobbie3: 'Listen music' 
  })
})

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})