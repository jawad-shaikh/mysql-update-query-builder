const mysqlUpdate = {
    query: '',

    update: function (table) {
        this.query = `UPDATE ${table} SET `;
        return this;
    },

    set: function (body) {
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

    where: function (identifier) {
        const key = Object.keys(identifier)[0];
        const value = Object.values(identifier)[0];

        this.query += ` WHERE ${key} = ${value}`;

        return this;
    },

    build: function () {
        return this.query;
    },
};

module.exports = mysqlUpdate;
