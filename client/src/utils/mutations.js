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

export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!) {
      addUser(username: $username, email: $email, password: $password) {
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

export const REMOVE_BOOK = gql`
  mutation removeBook($book: String!) {
    removeBook(book: $book)) {
      _id
      name
      savedBooks
    }
  }
`;