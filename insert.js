// GUIDE to INserting Documents into a MongoDB Collection

// THERE is NO schema whatsoever. it means is that all of that mongo code that you write,
// mongo does'nt care about things like column names or whst the nems of yours key are,
// you can write and have each one of your documents be as unique as it needs to be.

// This db object references the database that your going to be working with.
// insert() it expects to recieve an object.
// ANYTIME you hear 'oh it expects an object' what that means is we need to pass-in with curly(). just like in js pass in a key value pairs.
db.books.insert({
  "name": "OOP Programming",
  "publishedDate": new Date(),

  // HERE we can pass in a Collection inside of our documents.
  // So inside of this we are not limited to just giving traditional key value pair, like name and then oop programming
  // we can alsa pass in a Collection.
  // This is going to be an array of data.
  // So anytime that your going to pass in a collection, pass it in as an array. 
  // Inside  of authors were going to pass another set object, So each author is going to be an object themeself. 
  "authors": [
    { "name": "Jon Snow" },
    { "name": "Ned Stark" },
  ]
}) 

// PASTe this in the terminal where we create a user, inside mongoCourse.
db.books.insert({
  "name": "OOP Programming",
  "startDate": new Date(),
  "authors": [{
          "name": "Jon Snow jr"
      }
  ]
})
// will return WriteResult({ "nInserted" : 1 }) THIS is a js object.
// THIS got return back to us.