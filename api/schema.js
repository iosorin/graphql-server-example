const { buildSchema } = require('graphql');

/**
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

    type Query {
        todo(id: ID!): Todo!
        todos: [Todo]!
    }
`;

module.exports = buildSchema(schema);
