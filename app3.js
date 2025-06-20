// Load the Express library to build the server
const express = require("express");
const app = express(); // Create an Express app

// Allow the app to read JSON data from requests
app.use(express.json());

// Temporary storage for books (this is just in memory, not a real database)
let books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help"
  },
  {
    id: 3,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Psychology"
  }
];


// ========== ROUTES ==========

//  Get all books
app.get("/books", (req, res) => {
  res.json(books); // Send the full list of books
});

//  Get one book by its ID
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id); // Get ID from URL
  const book = books.find(b => b.id === id); // Find the book

  if (!book) {
    return res.status(404).json({ message: "Book not found!" });
  }

  res.json(book); // Send the found book
});

//  Add a new book
app.post("/books", (req, res) => {
  const { title, author, genre } = req.body; // Get data from request

  // Check if all required fields are there
  if (!title || !author || !genre) {
    return res.status(400).json({ message: "Missing required fields!" });
  }

  // Create a new book with a new ID
  const newBook = {
    id: books.length + 1,
    title,
    author,
    genre
  };

  books.push(newBook); // Add book to the list
  res.status(201).json({ message: "Book added!", book: newBook });
});

// Update a book by ID
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, genre } = req.body;
  const book = books.find(b => b.id === id); // Find book to update

  if (!book) {
    return res.status(404).json({ message: "Book not found!" });
  }

  // Update only the provided fields
  book.title = title || book.title;
  book.author = author || book.author;
  book.genre = genre || book.genre;

  res.json({ message: "Book updated!", book });
});

//  Delete a book by ID
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id); // Find the book's position

  if (index === -1) {
    return res.status(404).json({ message: "Book not found!" });
  }

  books.splice(index, 1); // Remove the book from the list
  res.json({ message: "Book deleted!" });
});


// ========== START SERVER ==========

// Turn on the server and listen at http://localhost:3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
