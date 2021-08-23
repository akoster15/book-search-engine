const { gql } = require("apollo-server-express");

const typeDefs = gql`

type Book {
    bookId: ID
    author: String
    description: String
    image: String
    link: String
  }

  input savedBook {
    description: String
    title: String
    bookId: String
    image: String
    link: String
    authors: [String]
  }

  type Query {
    me: User  
  }

  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    deleteBook(bookId: ID!): User
  }

  type Auth {
    token: ID!
    user: User
  }
  `;

  module.exports = typeDefs;