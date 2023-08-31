/**
 * A utility module for building MySQL UPDATE queries.
 */
const mysqlUpdate = {
    /** The current query being constructed. */
    query: '',

    /**
     * Initializes an UPDATE query with the target table.
     * @param {string} table - The name of the table to update.
     * @returns {Object} The mysqlUpdate object for method chaining.
     */
    update: function (table) {
        this.query = `UPDATE ${table} SET `;
        return this;
    },

    /**
     * Sets the values for columns in the UPDATE query.
     * @param {Object} body - An object representing column-value pairs to set.
     * @param {Object} [filter={}] - An optional filtering configuration.
     * @param {string[]} [filter.ignore] - Columns to ignore during update.
     * @param {string[]} [filter.add] - Columns to only include for update.
     * @returns {Object} The mysqlUpdate object for method chaining.
     */
    set: function (body, filter = {}) {
        if (filter.ignore) {
            body = Object.fromEntries(
                Object.entries(body).filter(([key, val]) => !filter.ignore.includes(key))
            );
        }
        
        if (filter.add) {
            body = Object.fromEntries(
                Object.entries(body).filter(([key, val]) => filter.add.includes(key))
            );
        }

        this.query += Object
            .entries(body)
            .map(([key, value]) => {
                if (typeof value === "string") {
                    return `${key} = '${value}'`;
                } else {
                    return `${key} = ${value}`;
                }
            })
            .join(", ");

        return this;
    },

    /**
     * Adds a WHERE clause to the query.
     * @param {Object} identifier - An object specifying the condition column and value.
     * @returns {Object} The mysqlUpdate object for method chaining.
     */
    where: function (identifier) {
        const key = Object.keys(identifier)[0];
        const value = Object.values(identifier)[0];

        this.query += ` WHERE ${key} = ${value}`;

        return this;
    },

    /**
     * Builds the final query string.
     * @returns {string} The constructed UPDATE query.
     */
    build: function () {
        return this.query;
    },
};

module.exports = mysqlUpdate;
