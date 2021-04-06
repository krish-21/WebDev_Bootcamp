//CRUD

// C
// insert one or an array
db.collection.insert()

// all items from a collection
db.collection.find()

// R
// passing parameters
// zero or more items which fit
// returns a cursor
db.collection.find({key: value})
db.collection.find({key: value, key: value})

// exactly one
// returns the document
db.collection.findOne({key: value})

// U
                    // select      // update
db.collection.updateOne({key: value}, {operator: {key: value, key: value}})
db.collection.updateMany({key: value}, {operator: {key: value, key: value}})


// D
db.collection.deleteOne({key: value})
db.collection.deleteMany({key: value})


// Operators

db.collection.find({key: {operator: value}, {operator: value}})
db.collection.find({operator: [{"key.key": value}, {key: {operator: value}}]})