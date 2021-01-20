//imports
const http = require('http');

//constants

const express = require('express')
const app = express()
const port = 3000

//exports

//core logic



//create a server object:
http.createServer(function (req, res) {
    //write a response to the client
    res.write('Hello from the Node server on your computer'); 
    res.end(); //end the response
  }).listen(8081); //the server object listens on port 8080

  

app.get('/hello', (req, res) => {
  res.send('GET Hello World!')
})

app.post('/hello', (req, res) => {
    res.send('POST Hello World!')
  })

  app.put('/hello', (req, res) => {
    res.send('PUT Hello World!')
  })

  app.delete('/hello', (req, res) => {
    res.send(' DELETE Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})