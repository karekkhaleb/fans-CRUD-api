## fans-CRUD-api
> Fan's CRUD is a simple app that implements all the CRUD operations

This is the api of the app, the front-end is at https://github.com/karekkhaleb/fans-CRUD
 
 # It requires node and npm to be installed
 
 
 After cloning this project run "npm install" in the folder where you cloned it to get all the dependencies
 
 After getting all the dependencies run the app through the main.js file (which is the entry point of the app) 
 either by 'node main.js' or any other method you wish.
 
 Make sure your mongo server is runing
 
 after that, the back-end should be all setup. now you can move to the front end.
  
  ## Some informations
  This api is built with express-js and mongoose to get to the mongoDB server
  
  The express server is hardcorded to run on localhost:53053 if you run (node main.js) so make sure that port is free.
  
  The database server runs on the mongoDB default localhost:27017 port,  
  but if your mongoDB server runs somewhere else you can change this in main.js file (at line 9 where I declared a variable that holds the 
  information about the database server.
