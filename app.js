const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    console.log("hello world")
} )

app.listen(3000)
console.log('attente resuete port 3000')