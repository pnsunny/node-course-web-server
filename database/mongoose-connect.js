const mongoose = require('mongoose')

const serverUrl = '127.0.0.1:27017'
const dbName = 'ToDoApp';
let connectMongoose = null;

class Database {

    constructor() {
        if (!connectMongoose) {
            this.connect();
        }
    }

    async connect() {
        try {
            connectMongoose = await mongoose.connect(`mongodb://${serverUrl}/${dbName}`)
            console.log("Database connection successful")
        } catch (err) {
            console.error("Database connection error", err)
        }
    }

}
module.exports = new Database();