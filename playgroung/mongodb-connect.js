const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to Mangodb database');
  }
  console.log('sucessfully your are connected');
  db.collection('Todos').insertOne({
    text:'soethings to do',
    complete:false
  },(err,result)=>{
    if(err){
      return console.log('unable to connect');
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  })
  db.close();
})
