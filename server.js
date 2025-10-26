const express = require('express');
const path = require('path');

const app = express();

// ✅ Use environment variable for flexibility in Docker/GKE
const PORT = process.env.PORT || 6000;

// ✅ Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// ✅ Optional: Serve specific HTML pages if pre-rendered
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'blog', 'index.html'), (err) => {
    if (err) {
      res.status(404).sendFile(path.join(__dirname, 'build', 'index.html'));
    }
  });
});

// ✅ Serve dynamic movie pages (react-snap pre-rendered or SPA fallback)
app.get('/movie/:ImdbId', (req, res) => {
  const movieId = req.params.ImdbId;
  const filePath = path.join(__dirname, 'build', 'movie', movieId, 'index.html');

  res.sendFile(filePath, (err) => {
    if (err) {
      // Fallback to React app’s index.html for client-side routing
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    }
  });
});

// ✅ Catch-all route for React Router (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ✅ Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
