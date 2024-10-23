// server.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactions');

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/transactions', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
