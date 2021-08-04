const { EROFS } = require('constants')
const {MongoClient, ObjectId, Db} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) 
        return console.log('Unable to connect to the database!')

    const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id : ObjectId("610174587506c8a4e3941ffb")
    // }, {
    //     $inc: {
    //         age: 3
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error);
    // })


    // db.collection('users').deleteMany({
    //     age: 30   
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        description: "Buy Food"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})


