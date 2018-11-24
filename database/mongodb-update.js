const { MongoClient, ObjectID } = require('mongodb')

//connect url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ToDoApp';

//create a new MongoClient

const client = new MongoClient(url);

client.connect(async (err) => {
    const db = client.db(dbName);
    //update one document
    const result = await db.collection('documents').
        findOneAndUpdate(
            { _id: new ObjectID('5bf1983caa8b556a34ed0539') },
            {
                $set: { a: "I need to test update function"},
                $inc: {age:  1}
            
            },
            { returnOriginal: false }
        )

    console.log("result", result)

})

