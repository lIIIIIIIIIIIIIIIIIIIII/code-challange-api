const { blogposts } = require('./data');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    blogposts: () => blogposts,
    blogpost: (_, { id }) => {
      const blogpost = blogposts.find((post) => post.id === id);
      if (!blogpost) {
        throw new Error("BlogPost not found");
      }

      return blogpost;
    },
  },
};

module.exports = { resolvers };
