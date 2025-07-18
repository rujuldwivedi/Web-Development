const { gql } = require("apollo-server");
const { authors, books } = require("./data");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: Author
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
  }

  type Mutation {
    addBook(title: String!, authorId: ID!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find((b) => b.id == id),
    authors: () => authors,
  },
  Mutation: {
    addBook: (_, { title, authorId }) => {
      const newBook = {
        id: books.length + 1,
        title,
        authorId: parseInt(authorId),
      };
      books.push(newBook);
      return newBook;
    },
  },
  Book: {
    author: (book) => authors.find((a) => a.id === book.authorId),
  },
  Author: {
    books: (author) => books.filter((b) => b.authorId === author.id),
  },
};

module.exports = { typeDefs, resolvers };
