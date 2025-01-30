import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use('/configure', express.static(path.join(__dirname, '../../dist')));

// Handle all routes for the React app
app.get('/configure/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

// API routes can be added here
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});