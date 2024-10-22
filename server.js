// server.js
const express = require('express');
const app = express();
const transactionRoutes = require('./routes/transactions');

app.use(express.json());

// Routes
app.use('/transactions', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
