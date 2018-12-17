const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,dib)=>{
  if(err){
    return console.log('unable to connect to Mangodb database');
  }
  console.log('sucessfully your are connected');
  dib.collection('Todos').find({text:'walking with Dog'}).toArray().then((docs)=>{
    console.log('todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('error has been found',err);
  });
  dib.close();
})
