const express = require('express'); //import the express module
const app = express();  //create an instance of express
const port = 3000;//port number for the server

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Team 19</title>
        <style>
          body {
            background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
            font-family: Arial, sans-serif;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 0.2em;
          }
          p {
            font-size: 1.5em;
            margin: 0.1em;
          }
          .student-info {
            background: rgba(0, 0, 0, 0.3);
            padding: 1em 2em;
            border-radius: 15px;
          }
        </style>
      </head>
      <body>
        <div class="student-info">
          <h1>Team 19</h1>
          <p>Delmish Deon - Student ID: 200585881</p>
          <p>Akhilesh K Ravi - Student ID: 200585172</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
