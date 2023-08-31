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

- `update(table)`

Initialize the query with the specified table for the UPDATE operation.

`table` (String): The name of the table to perform the update on.

Returns the mysqlUpdate object for method chaining.

- `set(body, filter)`

Specify the columns and values to be updated in the query.

`body` (Object): An object containing the columns and values to be updated.

`filter` (Object, optional): An optional filter configuration object with properties like `ignore` and `add` to customize column updates. If provided, the `ignore` property should be an array of column names that you want to exclude from the update, and the `add` property should be an array of column names that you want only to include in the update.

For example, if you have a `body` object with several columns and you only want to update specific columns while ignoring others, you can use the `filter` parameter to achieve that. Here's how you can use it:

```js
const body = { username: "ali", age: 55, email: "ali@example.com" };

const filter = {
    ignore: ["age", "email"], // Columns to ignore during update
};

// OR

const filter = {
    add: ["username", "age"] // Columns to only include for update
};

const updateQuery = mysqlUpdate.update("users").set(body, filter).where({ id: 1 }).build();


- `where(identifier)`

Specify the condition for the WHERE clause in the query.

`identifier` (Object): An object representing the condition for the WHERE clause.

- `build()`

Returns the complete query string.

## License

This project is licensed under the MIT License.
