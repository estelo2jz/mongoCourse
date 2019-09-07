// HOW to Query for Specific Documents in a MongoDB Collection.

// db.books.find({} name: "The War of Art" }).pretty()
// this return the specific book.
{
    "_id": ObjectId("5d72df26c1de8338422ad1b2"),
    "name": "The War of Art",
    "publishedDate": ISODate("2019-09-06T22:35:18.894Z"),
    "authors": [{
        "name": "Steven Pressfield"
    }]
}

// if there are multiple books that are name the same, then it's going to return all of these. 
db.books.find({ name: "OOP Programming"}).pretty()
{
    "_id": ObjectId("5d72dacdc1de8338422ad1ae"),
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
}