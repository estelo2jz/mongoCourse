// HOW to Delete Documents in MOngoDB

// First is where you can pass in an explicit number on how many you want to remove.
// Second is where you simply want to delete all of the documents that match that query.



// NOW if run this this will remove all of the items.
// BUT if pass in a second element 1, its only going to remove 1 of the items.
db.books.remove({name: "OOP Programming"}, 1)
// will return WriteResult({ "nRemoved" : 1 })


//EX

//> db.books.remove({name: "OOP Programming"}, 1)
WriteResult({ "nRemoved" : 1 }) // number removed is 1.


//> db.books.find({name: "OOP Programming"}) // will tell us how many we got.
{ "_id" : ObjectId("5d72db70c1de8338422ad1af"), "name" : "OOP Programming", "publishedDate" : ISODate("2019-09-06T22:19:28.928Z"), "authors" : [ { "name" : "Jon Snow jr" } ] }
{ "_id" : ObjectId("5d72dbbcc1de8338422ad1b0"), "name" : "OOP Programming", "startDate" : ISODate("2019-09-06T22:20:44.307Z"), "authors" : [ { "name" : "Jon Snow jr" } ] }


//> db.books.remove({name: "OOP Programming"})
WriteResult({ "nRemoved" : 2 })


> db.books.find({name: "OOP Programming"})
> // it return nothing.