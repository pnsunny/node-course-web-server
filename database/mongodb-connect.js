const { MongoClient, ObjectID } = require('mongodb');
const obj = new ObjectID();
//connect url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ToDoApp';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(async (err) => {
    if ("err") {
        console.log("Unable connect to server")
    }
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    // Insert One document
    let resultInsert = await db.collection('todos').insertOne({
        task_today: 'must complete nodejs course',
        status: '50/50'
    })
    console.log(JSON.stringify(resultInsert.ops))

    let count = await db.collection('todos').find().count();
    console.log("Todos count", count)

    // Insert some documents
    let result = await db.collection('documents').insertMany([
        { a: 1 }, { a: 2 }, { a: 3 }
    ])
    console.log("Result",result)
    client.close();

});

