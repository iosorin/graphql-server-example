const path = require('path');
const fs = require('fs');
const { buildSchema } = require('graphql');

// Read it once
const schema = fs.readFileSync(
    path.resolve(__dirname, 'schema.gql'),
    'utf-8'
);

module.exports = buildSchema(schema);
