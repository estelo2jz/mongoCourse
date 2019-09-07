// HOW to Insert Many DOcuments into a MongoDB Collection

// insertMany() takes an array
// all of these have the same structors.
db.books.insertMany([
  {
    "name": "Confident Ruby",
    "publishedDate" : new Date(),
    "authors": [
      { "name": "Avdi Grimm" }
    ] 
  },

  {
    "name": "The War of Art",
    "publishedDate": new Date(),
    "authors": [{
      "name": "Steven Pressfield"
    }]
  },

  {
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [{
      "name": "Malcolm Gladwell"
    }]
  }
])

// COPY to the terminal and it will gives s a different return value.
// REMEMBER when we insert just one, will get one object back "nInserted" : 1.
// insertMany() it changes, it will give an
// "acknowlegde" : true, and "insertedIds" 
// SO each one of the ObjectId is the id that the system generated.
// "acknowledged": true,
// "insertedIds": [
//     ObjectId("5d72df26c1de8338422ad1b1"),
//     ObjectId("5d72df26c1de8338422ad1b2"),
//     ObjectId("5d72df26c1de8338422ad1b3")

// Now this gives us a different return value. So that's a very important to know if you're building out some kind of script 
// if you're inserting a single one. Remember that we just got that one object back. If I scroll up here we should still have it. 
// Yes, so we have a right result of an inserted one. Now if you are doing insert many it changes and so it gives you an acknowledged true and 
// then inserted ID. So each one of these is the ID that the system generated. 
// So we'll get into how we can retrieve that ID and what it represents. But essentially what Mongo does is it creates this hash value 
// and it gives some type of unique structure to that document so that it can be retrieved and so that every document in your database 
// is guaranteed to be unique. You need to be able to have some level of confidence in knowing that you can retrieve that if you have nothing 
// besides the ID. And if you're working with very large applications you will start to see IDs that look something like this just 
// because you need the ability to make sure that no matter how many items you get if you have millions or billions of records 
// then you have a way of keeping track of them and making sure that you still can get unique values there. 
// So now you should have a pretty good idea on how to insert one or insert many documents into a Mongo database.