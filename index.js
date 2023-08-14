const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { blogposts } = require("./data");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const cors=require("cors");

const port = 3001;

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });
app.use(cors())

/* REST API */
app.get("/rest/blogposts", (_request, res) => {
  res.send(blogposts);
});
app.get("/rest/blogpost/:id", (request, res) => {
  const blogpost = blogposts.find(
    (blogpost) => blogpost.id === request.params.id
  );
  if (!blogpost) {
    return res.status(404).send();
  }

  res.send(blogpost);
});

app.listen(port, () => {
  console.log(
    `🚀 GraphQL Server ready at http://localhost:${port}${server.graphqlPath}`
  );
  console.log(`🚀 REST Server ready at http://localhost:${port}/rest`);
});
