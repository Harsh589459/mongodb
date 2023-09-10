const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect=(callback)=>{

  MongoClient.connect('mongodb+srv://harsh589459:b0u832Sa0UDOfpeZ@cluster0.r9y8m8c.mongodb.net/shop?retryWrites=true&w=majority').then(client=>{
  console.log('connected');
  _db = client.db( )
  callback(client)
}).catch(err=>{
  console.log(err);
  throw err;
})
}

const getDb = ()=>{
  if(_db){
    return _db;
  }
  throw 'Nod database found!'
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;






