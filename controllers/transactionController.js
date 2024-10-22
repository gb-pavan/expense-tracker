// controllers/transactionController.js
const Transaction = require('../models/transaction');

// Get all transactions
exports.getTransactions = (req, res) => {
    Transaction.getAll((err, transactions) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(transactions);
    });
};

// Add new transaction
exports.createTransaction = (req, res) => {
    console.log("yes")
    const data = req.body;
    Transaction.create(data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Transaction added successfully', id: result.id });
    });
};

// Get transaction by ID
exports.getTransactionById = (req, res) => {
    const { id } = req.params;
    Transaction.getById(id, (err, transaction) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
        res.json(transaction);
    });
};

// Update a transaction
exports.updateTransaction = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Transaction.update(id, data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Transaction updated successfully' });
    });
};

// Delete a transaction
exports.deleteTransaction = (req, res) => {
    const { id } = req.params;
    Transaction.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Transaction deleted successfully' });
    });
};
