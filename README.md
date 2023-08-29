# mysql-update-query-builder

## Simplifying Patch Updates for MySQL Records

Have you ever been frustrated by the process of updating a single field in a MySQL record? I certainly was. As a developer, I found myself facing a common issue: every time I needed to update just one field in a record, I had to send the entire payload back to the server, even if only one value had changed. This not only felt inefficient but also cluttered the data transfer unnecessarily.

I knew there had to be a better way. That's why I created `mysql-update-query-builder`. This lightweight JavaScript library was born out of the need for a more elegant solution to the common problem of updating records with precision.

## The Solution: Fluent and Targeted Updates

With `mysql-update-query-builder`, you're no longer constrained by the traditional approach of sending a barrage of fields for a single update. Instead, you can take a more targeted approach. If you only need to update a single field, you can now send just that field's new value, keeping your data transfers lean and efficient.

## Installation

You can install `mysql-update-query-builder` using npm:

```bash
npm install mysql-update-query-builder
```

## Usage

```js
const mysqlUpdate = require("mysql-update-query-builder");

const body = { username: "ali", age: 55 };
const updateQuery = mysqlUpdate.update("users").set(body).where({ id: 1 }).build();

console.log(updateQuery); // UPDATE users SET username = 'ali', age = 55 WHERE id = 1
```

## Methods

- update(table)

Initialize the query with the specified table for the UPDATE operation.

`table` (String): The name of the table to perform the update on.

Returns the mysqlUpdate object for method chaining.

- set(body)

Specify the columns and values to be updated in the query.

`body` (Object): An object containing the columns and values to be updated.
Returns the mysqlUpdate object for method chaining.

- where(identifier)

Specify the condition for the WHERE clause in the query.

`identifier` (Object): An object representing the condition for the WHERE clause.

- build()

Returns the complete query string.

## License

This project is licensed under the MIT License.
