const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: String
        savedBooks: [Book]!
    }

    type Book {
        bookId: String
        bookAuthors: [String]!
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        user(username: String!): User
        book(bookId: String): Book
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookAuthors: String, description: String, title: String, bookId: String!, image: String): User
        deleteBook(bookId: String): User
    }


`;

module.exports = typeDefs;