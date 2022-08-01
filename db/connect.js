const { MongoClient } = require("mongodb")

const client = null;

function connecter(url, callback) {
  if (client == null) {

     MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
        if (error) {
          return console.log("Connection failed for some reason");
        }
        console.log("Connection established - All well");
        
      });

  
  }else{
    callback()
  }
}

function db(){
    return new Db(client, "dbok")
}

function fermerConnexion(){
    if(client){
        client.close()
        client = null;
    }
}

module.exports = {
    connecter,
    db,
    fermerConnexion
}