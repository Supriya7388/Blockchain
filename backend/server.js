const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const User = require('./models/User');
const authRoutes = require('./routes/auth');

const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the application if unable to connect to MongoDB
    });

// API routes
app.use('/auth', authRoutes);

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Catch all other routes and return the index.html from the React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Specific error handling middleware (customize as needed)
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
