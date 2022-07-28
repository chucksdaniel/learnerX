## CRUD APPLICATION ASSESEMENT

A CRUD application using Node.js, Express.js, and PostgreSQL.
Requirement: 4 different REST APIs which are to perform the following operations.

1. Create a user record: This endpoint must use a middleware to validate user details such as
   name, email and password before finally creating the record in the database.
2. Read user record: This endpoint is to retrieve user records using their email and password
   which must of course be validated.
3. Update user record: This endpoint is to update user record when a valid user id is sent to it,
   alongside the fields to be updated.
4. Delete user record: This endpoint should delete user record when a valid user id is sent to
   it.

### Starting the application locally

Clone the repo `git clone https://github.com/chucksdaniel/crud-app-assessment.git`

`npm install` -> To install all the packages

`npm run db:reset` -> To set up the postgres database

`npm start` -> To Start the application

### Endpoints

`http://localhost:5000/api/auth/signup` -> POST Method for signing up a user

`http://localhost:5000/api/auth/signup` -> POST Method for logging in user

`http://localhost:5000/api/users/2` -> GET Method to get all a user record

`http://localhost:5000/api/users/2` -> PUT Method to update user record

`http://localhost:5000/api/users/2` -> DELETE Method to Delete user record

Enyata
