const express = require('express')
const dotenv = require("dotenv");
const { connecter } = require('./db/connect');
const app = express()
const { URL } = process.env;


connecter(URL, (erreur) => {
        if (erreur){
            console.log("errur de connexion a la bdd")
            process.exit(-1)
        }
        else{
            console.log('connexion avec la bdd etalie')
        }

    })
app.get('/', (req, res)=>{
    console.log("hello world")
} )

app.listen(3000)
console.log('attente resuete port 3000')