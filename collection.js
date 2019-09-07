// HOW To Create a MongoDB Collection

// collections are the closest kind of analogy to a table. 
// Collections can store many documents and those documents are the actual items that you're going to be putting into the database

db.createCollection('books')
// its gonna return { "ok" : 1 }
// Here in Mongo you're actually getting an object and a key value Json type object back where the key is ok 
// and then the value is 1. If you were doing this say in an API kind of environment and you just created a collection 
// then you would be able to get this object back and you'd be able to treat it just like pure Json

// run show collection will return 'books'

// For right now just know that is a way that you can create a collection and 
// then how you can see all of the collections inside of a Mongo database.