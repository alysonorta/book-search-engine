import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_USER = gql `
  mutation createUser($username: String!, $email: String!, $password: String!) {
      createUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
      }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookAuthor: [bookAuthor], $description: String!, $title: String, $bookId: String, $image: String) {
    saveBook(bookAuthor: $bookAuthor, description: $description, $title: title, $bookId: bookId, $image: image) {
      _id
      name
      savedBooks
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($book: String!) {
    deleteBook(book: $book)) {
      _id
      name
      savedBooks
    }
  }
`;