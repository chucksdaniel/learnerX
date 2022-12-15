# Account

The account is a web app that allow user to open an account for bank transaction

### Functionality of the system (MVP):

-  A user can create an account
-  A user can fund their account
-  A user can transfer funds to another user’s account
-  A user can withdraw funds from their account.

# Getting Started

### Prerequisite

Node Package Manager (NPM). You will need to download and install Node from https://nodejs.com/en/download. This will allow you to be able to run npm commands.
Environment variables will need to be set. These environment variables include database connection details that should not be hard-coded into the application code in production.

### Starting the app

Launch the API locally

To download all the package dependencies for the app, run the command from the root directory

```
npm install
```

To run the application locally, run the script:

```
npm run dev
```

You can visit http://localhost:5000/api/ in your web browser to verify that the application is running. You should see a response of "Welcome to account_api!". Feel free to play around with Postman to test the API's.

## Endpoints

-  Account opening:

```
http://localhost:5000/api/account/create
```

-  Login:

```
http://localhost:5000/api/account/login
```

-  To deposit fund

```
http://localhost:5000/api/transaction/deposit
```

-  To withdraw fund:

```
http://localhost:5000/api/transaction/withdraw
```

-  To transfer fund:

```
http://localhost:5000/api/transaction/transfer
```
