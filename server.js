
const express = require('express');
const path = require('path');

const app = express();
const PORT = 6000;

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'build')));


// Add this to your existing server.js

// Serve specific HTML files for routes
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'blog/index.html'));
    console.log("inside the blog")

  });
  
  // app.get('/movie/:ImdbId', (req, res) => {

 
  //  const imdbId = req.params.ImdbId;
  //  console.log(imdbId)

  //   res.sendFile(path.join(__dirname, 'build', `movie/${imdbId}.html`)); // Ensure this path matches your build structure
  // });
  
  app.get('/movie/:ImdbId', (req, res) => {
    const movieId = req.params.ImdbId;
    // Check if pre-rendered file exists
    const filePath = path.join(__dirname, 'build', `movie/${movieId}/index.html`);
    res.sendFile(filePath, (err) => {
      if (err) {
        // Fallback to main index.html for client-side routing if the file doesn't exist
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
      }
    });
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT}`);

});
