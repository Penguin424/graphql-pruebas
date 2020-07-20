'use strict'

const { makeExecutableSchema } = require('graphql-tools');
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
const { connect } = require('mongoose');
const { readArch } = require('./lib/graphql');

const app = express()
const port = process.env.port || 3000

// definiendo el esquema
const schema = makeExecutableSchema(
  {
    typeDefs: readArch,
    resolvers
  }
)

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, async() => {
  console.log(`Server is listening at http://localhost:${port}/api`);

  try 
  {
    await connect(`mongodb+srv://cosbiome:Ac03901582@pruebas.2rdch.mongodb.net/graphqlCurso?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log('Base de datos conectada');  
  } 
  catch(error) 
  {
    console.log(error);
  }
  
})
