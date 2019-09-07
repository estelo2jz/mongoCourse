// HOW to Query All Documents in A MongoDb Collection with the find() Method.

// Common find() functions, and sequel SQLEqualvalent.
// run db.books.find(), we will see all the books weve created.
// { "_id" : ObjectId("5d72dacdc1de8338422ad1ae"), "name" : "OOP Programming", "publishedDate" : ISODate("2019-09-06T22:16:45.359Z"), "authors" : [ { "name" : "Jon Snow" }, { "name" : "Ned Stark" } ] }
// { "_id" : ObjectId("5d72db70c1de8338422ad1af"), "name" : "OOP Programming", "publishedDate" : ISODate("2019-09-06T22:19:28.928Z"), "authors" : [ { "name" : "Jon Snow jr" } ] }
// { "_id" : ObjectId("5d72dbbcc1de8338422ad1b0"), "name" : "OOP Programming", "startDate" : ISODate("2019-09-06T22:20:44.307Z"), "authors" : [ { "name" : "Jon Snow jr" } ] }
// { "_id" : ObjectId("5d72df26c1de8338422ad1b1"), "name" : "Confident Ruby", "publishedDate" : ISODate("2019-09-06T22:35:18.894Z"), "authors" : [ { "name" : "Avdi Grimm" } ] }
// { "_id" : ObjectId("5d72df26c1de8338422ad1b2"), "name" : "The War of Art", "publishedDate" : ISODate("2019-09-06T22:35:18.894Z"), "authors" : [ { "name" : "Steven Pressfield" } ] }
// { "_id" : ObjectId("5d72df26c1de8338422ad1b3"), "name" : "Blink", "publishedDate" : ISODate("2019-09-06T22:35:18.894Z"), "authors" : [ { "name" : "Malcolm Gladwell" } ] }

// THIS is the same as SELECT * from books in SQL. where were saying bring everything back.

// Helpful function inside mongo that you can add to any of these find() function called pretty().
// db.books.find().pretty() will return it in a much nicer formatted kind of settup.
db.books.find().pretty() {
    "_id": ObjectId("5d72dacdc1de8338422ad1ae"), // also added the object id. we do not have to put this in the code, mongo does this for us.
    "name": "OOP Programming",
    "publishedDate": ISODate("2019-09-06T22:16:45.359Z"),
    "authors": [{
            "name": "Jon Snow"
        },
        {
            "name": "Ned Stark"
        }
    ]
} {
    "_id": ObjectId("5d72db70c1de8338422ad1af"),
    "name": "OOP Programming",
    "publishedDate": ISODate("2019-09-06T22:19:28.928Z"),
    "authors": [{
        "name": "Jon Snow jr"
    }]
} {
    "_id": ObjectId("5d72dbbcc1de8338422ad1b0"),
    "name": "OOP Programming",
    "startDate": ISODate("2019-09-06T22:20:44.307Z"),
    "authors": [{
        "name": "Jon Snow jr"
    }]
} {
    "_id": ObjectId("5d72df26c1de8338422ad1b1"),
    "name": "Confident Ruby",
    "publishedDate": ISODate("2019-09-06T22:35:18.894Z"),
    "authors": [{
        "name": "Avdi Grimm"
    }]
} {
    "_id": ObjectId("5d72df26c1de8338422ad1b2"),
    "name": "The War of Art",
    "publishedDate": ISODate("2019-09-06T22:35:18.894Z"),
    "authors": [{
        "name": "Steven Pressfield"
    }]
} {
    "_id": ObjectId("5d72df26c1de8338422ad1b3"),
    "name": "Blink",
    "publishedDate": ISODate("2019-09-06T22:35:18.894Z"),
    "authors": [{
        "name": "Malcolm Gladwell"
    }]
}