const { MongoClient, ObjectID } = require('mongodb')

//connect url
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ToDoApp';

//create a new MongoClient

const client = new MongoClient(url);

client.connect(async (err) => {
    const db = client.db(dbName);
    //delete one document
    const resultDelete = await db.collection('todos').deleteOne({ status: '50/50' })

    console.log("result-delete", resultDelete)
    //delete many document
    const resultDeleteManay = await db.collection('todos').deleteMany({ status: '50/50' })
    console.log("result-delete-many", resultDeleteManay)

    //getAllData
    const resultAllData = await db.collection('todos').find().toArray();
    console.log("ResultAllData", resultAllData);

    //delete findOneDelete
    const resultFindOneDelete = await db.collection('todos').findOneAndDelete({status: 'Approved'})
    console.log("ResultFind", resultFindOneDelete)

})

