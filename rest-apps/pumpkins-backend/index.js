const express = require('express');
const mongoose = require('mongoose');
const pumpkinRoutes = require('./routes/pumpkinRoutes');

const app = express();
app.use(express.json());
app.use(express.static('public')); // Serve files from the 'public' directory

mongoose.connect('mongodb://127.0.0.1:27017/mongooseCrudApp').then(() => console.log('MongoDB is connected 🌍'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use('/api', pumpkinRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
