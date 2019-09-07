// Query for a Portion of a Nested Array Element in a Document Using $slice
// $slice() method is a very nice way of being able to go into nested collections and be able to retrieve only the data you want to have.


// NEW doc for Blink, multiple authors,
// THE goal is, once is added to the database, i wanna be able to query this doc,
// BUT i wanna be able to query it and leave out the second author.
// SO it only pulls in malcolm gladwell.
// Sslice() method inside mongo
db.books.insert({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        { "name": "Malcom Gladwell" },
        { "name": "Ghost Writer" }
    ]
});
// paste and run will return WriteResult({ "nInserted" : 1 })

// NOW that is in the database
db.books.find(
  {
    name: "Blink"
  }
).pretty()
// run it this return
{
    "_id": ObjectId("5d73b6b6c1de8338422ad1b4"),
    "name": "Blink",
    "publishedDate": ISODate("2019-09-07T13:55:02.552Z"),
    "authors": [{
            "name": "Malcom Gladwell"
        },
        {
            "name": "Ghost Writer"
        }
    ]
}

// NOW lets add our projection
// IN authors instead of giving it a 1, we can pass in an object{}, 
// AND inside of it instead of name or any attributes, we can pass in a speacial function called $slice().
// $slice() what we can do is pass in 1 and say 'i want this specific element in the array.
db.books.find(
  {
    name: "Blink"
  },
  {
    publishedDate: 1,
    name: 1,
    authors: { $slice: 1 } // changin it to 2 will bring back both authors. -1 will return ghost writter irself, like in an array.
  }
).pretty()
// run it, it will return malcom gladwell
{
    "_id": ObjectId("5d73b6b6c1de8338422ad1b4"),
    "name": "Blink",
    "publishedDate": ISODate("2019-09-07T13:55:02.552Z"),
    "authors": [{
        "name": "Malcom Gladwell"
    }]
}