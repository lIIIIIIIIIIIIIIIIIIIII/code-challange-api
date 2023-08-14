const { gql } = require('apollo-server-express');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "BlogPost" type defines the queryable fields for every BlogPost in our data source.
  type BlogPost { 
    id: ID,
    title: String,
    subtitle: String,
    created: String,
    image: String,
    author: String,
    content: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "blogposts" query returns an array of zero or more BlogPosts (defined above).
  type Query { 
    blogposts: [BlogPost]! 
    blogpost(id: ID!): BlogPost!
  }

  # GraphQL root schema type
  schema {
    query: Query
  }
`;

module.exports = { typeDefs };