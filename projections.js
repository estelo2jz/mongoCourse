// INTRODUCTION to MongoDB Projections.
// projection are various constraints that we can put on our query,
// so that we can ensure that were only getting back the elements that we actaully want.

// WHAT finf() allows us to do, is not only pass in a single object.
// it also allow us to pass in our second object, which is projectio. 
// "name" or name mongo is still going to interpret that.
db.books.find(
  {
    name: "Confident Ruby"
  }
)
// it will bring back the correct book, however and thier attributes.
// { "_id" : ObjectId("5d72df26c1de8338422ad1b1"), "name" : "Confident Ruby", "publishedDate" : ISODate("2019-09-06T22:35:18.894Z"), "authors" : [ { "name" : "Avdi Grimm" } ] }


// NOW what we can do is pass in a second object.
// AND in this second object, this is where our projection go, 
// OUR contraints that allow us to say we only want certain atributs.
// THE way we can do it, is by naming the attribbutes that we want.
// AND the way that you tell it ,you want it or not? is either with a 1'yes' or 0'no'.
db.books.find(
    {
      name: "Confident Ruby"
    },

    // all this is all projections
    {
        _id: 0, // THe id is the only expected result is with that id field. BUT now that it's 0 it will not return.
      name: 1, // this will return the name back.
      // 'publishedDate' i remove it, and it will not return it.
      authors: 1
    }
).pretty()

// this return this
() {
    "_id": ObjectId("5d72df26c1de8338422ad1b1"),
    "publishedDate": ISODate("2019-09-06T22:35:18.894Z"),
    "authors": [{
        "name": "Avdi Grimm"
    }]
}

// SQLquery code ex,
SELECT name, authors FROM books WHERE name = 'Confident Ruby'