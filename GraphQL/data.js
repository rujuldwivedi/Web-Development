// data.js

const authors = [
  { id: 1, name: "J.K. Rowling" },
  { id: 2, name: "George R.R. Martin" },
];

const books = [
  { id: 1, title: "Harry Potter", authorId: 1 },
  { id: 2, title: "A Game of Thrones", authorId: 2 },
  { id: 3, title: "A Clash of Kings", authorId: 2 },
];

module.exports = { authors, books };
