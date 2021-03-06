
const express = require('express');
const cors = require('cors');
const express_graphql = require('express-graphql');
const gql = require('graphql-tag');
const { buildSchema } = require('graphql');
const path = require('path');
const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const schema = buildSchema(typeDefs);
const resolvers = require('./resolvers');

const app = express()

app.use(cors());

app.get('/', function (req, res) {
  res.send("Welcome to GraphMeQL");

  // Will serve the static build of the React client
  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/graphql', express_graphql({ 
  schema: schema,
  rootValue: resolvers,
  graphiql: true 
}));

const port = 8000
app.listen(port, () => console.log(`Running a GraphQL API server at localhost:${port}/graphql`));