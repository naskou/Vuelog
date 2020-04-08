const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

//typeDef && resolvers
const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers = require('./resolvers');

//Environment vars && mongoose models
require('dotenv').config({ path: 'variables.env' });
const User = require('./models/User');
const Post = require('./models/Post');

//Connect to DB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.error(err));


//Apollo/GraphQL Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
