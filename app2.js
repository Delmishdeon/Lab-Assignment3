// Load Express to create the server
const express = require('express');

// Load the File System module to read files
const fs = require('fs');

const app = express();
const port = 3000; 

// Route to read and return book data from data.json
app.get('/books', (req, res) => {
  // Read the file './data/data.json'
  fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
      // If there’s an error, send an error message
      res.status(500).send('Error reading data file');
      return;
    }

    // If successful, send the file content (book data)
    res.send(data);
  });
});

// Start the server and listen at http://localhost:3000/books
app.listen(port, () => {
  console.log(`App2 running at http://localhost:${port}/books`);
});
