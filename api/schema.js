const { buildSchema } = require('graphql');

/**
 * Example:
     query {
        todos(status: UNCOMPLETED) {
            ...Todo
        }
    }

    fragment Todo on Todo {
        id
        title
        completed
        steps {
            title
            completed
        }
    }
 */

const schema = `
    type Step {
        title: String!
        completed: Boolean!
    }

    type Todo {
        id: ID!
        title: String!
        completed: Boolean!
        steps: [Step]
    }

    enum Status {
        COMPLETED,
        UNCOMPLETED
    }

    type Query {
        todo(id: ID!): Todo!
        todos(status: Status): [Todo]!
    }
`;

module.exports = buildSchema(schema);
