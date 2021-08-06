# Routes
Contains the api routes. Every new identified group of functions that has to be accessed via API must be added in this folder and registered in the app.js file.

The files in this layer must export a `register` function and receive the app parameter, which is the interface `core.Express`. So, the routes will be registered and will be made reachable via http calls.

```
module.exports.register = (app) => {
    app.get('/apartments', async (req, res) => {
        try {
            return res.send(await getAll());
        } catch (err) {
            return getErrorResponse(res, err.message, err, err.stack);
        }
    });
...
```

In the code snippet above, the `register` function receives the app parameter and register a route called `apartments`, which is accessed via http get.

This file can be found in routes/apartment-routes.js.
If in the future we have to add, for example, routes for meetings, we could add a `meeting-routes.js` file to register these routes.

# Core
Contains classes and functions useful for every layer in the application, for example, the `custom errors` that can be added and read in any parts of the application. 

# Infrastructure
Contains accesses to databases, external services, cache and anything outside of the application.
These functions are injected where they are needed by the business/domain layer.

## mongo-db
contains the functions that communicate with mongodb.


## mock-db
contains mocked functions used to run unit tests.

## id-generator
Generates id for elements of the application which need unique id.

# Domain
The domain layer contains the business rules. The folders are named after each group of business rules identified.

# App
Bootstraps the application, injecting the database repo classes, id generator and all dependencies needed, isolating this way the business rules from the frameworks and infrastructure.

## function connectToMongo()
This function is responsible for connecting to mongodb, throwing an exception, logging and terminating the program if it's not able to connect.
I'm using mongoose to connect to the database.

```
async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    if (mongoose.connection.readyState === 1) {
      console.log('connected to mongo');
    } else {
      console.log({
        error: 'error connecting to mongo.',
        state: mongoose.connection.readyState
      });
    }
  } catch (err) {
    console.log({
      error: err,
      state: mongoose.connection.readyState
    });

    throw err;
  }
}
```

test