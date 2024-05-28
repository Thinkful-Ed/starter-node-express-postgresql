# Starter code: Node.js, Express, & PostgreSQL

This starter code is intended to be run for the Node.js, Express, & PostgreSQL module in the Chegg Skills curriculum.

## Existing files

As you work through the Node.js, Express & PostgreSQL module, you will be writing code that allows your controllers to connect to and query your PostgreSQL database via [Knex](http://knexjs.org/). The table below describes the files and folders in the starter code:

| Folder/file path                 | Description                                                                                                           |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `src/app.js`                     | Directs requests to the appropriate routers.                                                                          |
| `src/server.js`                  | Starts the server on `localhost:5000` by default.                                                                     |
| `src/products/`                  | A folder that contains the `products.controller.js` and `products.router.js` files for the `products` resource.       |
| `src/categories/`                | A folder that contains the `categories.controller.js` and `categories.router.js` files for the `categories` resource. |
| `src/suppliers/`                 | A folder that contains the `suppliers.controller.js` and `suppliers.router.js` files for the `suppliers` resource.    |
| `src/db/`                        | A folder where you will add migration and seed files for your database later on.                                      |
| `src/db/fixtures`                | A folder containing sample data you will seed your database with later on.                                            |
| `src/errors/methodNotAllowed.js` | An error handler for forbidden request methods                                                                        |
| `.env.sample`                    | A sample environment configuration file                                                                               |

In the `*.controller.js` files, the route handlers return hard-coded data for now, but later on, you will modify the controllers to manipulate and return data from a PostgreSQL database.

This starter code closely follows the best practices and patterns established in the Robust Server Structure module.

## Database setup

1. Set up a new Render database instance by following the instructions in the "PostgreSQL: Creating & Deleting Databases" checkpoint.
1. After setting up your database instance, connect DBeaver to your new database instance by following the instructions in the "PostgreSQL: Installing DBeaver" lesson.

## Installation

1. Fork and clone this repository.
2. Run `cp .env.sample .env`.
3. Update your `.env` file with a connection URL to your Render database instance. The connection URL can be found in your Render database instance details (e.g. `"postgres://myfakedatabase:8t6FiWqSDF8GsR--7mrun245I9TofnWd@fakepostgres.db.render.com:5432/myfakedatabase"`). Make sure to append `?ssl=true` to the end of the URL to ensure a secure connection (e.g. `"postgres://myfakedatabase:8t6FiWqSDF8GsR--7mrun245I9TofnWd@fakepostgres.db.render.com:5432/myfakedatabase?ssl=true"`).
4. Run `npm install` to install project dependencies.
5. Run `npm run start:dev` to start your server in development mode.
6. In your browser or Postman, navigate to `localhost:5000/products`. If your server is running properly, you should get back the following JSON response:

```json
[
  {
    "id": 1,
    "name": "Product 1",
    "price": 19.99
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 29.99
  }
]
```
By appending `?ssl=true` to the connection URL, you'll ensure a secure connection to your database, resolving any SSL-related issues.

If you have trouble getting the server to run, reach out for assistance.
