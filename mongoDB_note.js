// GUIDE TO Creating MongoDB Database Along with Admin Database Users.
// 'show dbs' will show all database in the system. 
// use the 'use' to create a new database, mongoCourse
// 'db' database is an object
// To see all the users in a particular database, run db.getUsers()
// To delete a user run db.dropUser('jon') pass in the user name for who you wanting to remove, it will come back as true but gone.


// function and pass a number of arguments, and pass them in as an object
db.createUser({
  user: 'jon',
  pwd: 'pasword',
  customData: { startDate: new Date() },
  // roles expect an array of items, and have to very specific. their gonna be in object format so curly braces.
  // and expect as role as the 'key' and then a set of strings.
  roles: [
    // 'clusterAdmin' and 'readAnyDatabase' is something specific to mongo.
    // then reference the database'db' and it's actually gonna be the 'admin' database.
    // even tho were working inside the mongo database, we need to let mongo know that this user has the ability to function as a Admin.
    { role: 'clusterAdmin', db: 'admin' },
    { role: 'readAnyDatabase', db: 'admin' },
    'readWrite'
  ]
})

// In review what we've done is we've created a database using the use command. 
//Then we've seen how you can view all the databases on your system. 
//We saw how you can create users for a specific database and then we saw how we can see all the users that belong 
//and can administer a database and then we saw how we can remove them.

// paste this into the mongo shell
db.createUser({
  user: 'jordan',
  pwd: 'pasword',
  customData: { startDate: new Date() },
  roles: [
    { role: 'clusterAdmin', db: 'admin' },
    { role: 'readAnyDatabase', db: 'admin' },
    'readWrite'
  ]
})