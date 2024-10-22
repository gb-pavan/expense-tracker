// models/transaction.js
const db = require('../db/database');

// Fetch all transactions
exports.getAll = (callback) => {
    db.all('SELECT * FROM transactions', [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        callback(null, rows);
    });
};

// Create a new transaction
exports.create = (data, callback) => {
    const { type, category, amount, date, description } = data;
    db.run(
        'INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)',
        [type, category, amount, date, description],
        function (err) {
            if (err) return callback(err);
            callback(null, { id: this.lastID });
        }
    );
};

// Get transaction by ID
exports.getById = (id, callback) => {
    db.get('SELECT * FROM transactions WHERE id = ?', [id], (err, row) => {
        if (err) return callback(err);
        callback(null, row);
    });
};

// Update transaction by ID
exports.update = (id, data, callback) => {
    const { type, category, amount, date, description } = data;
    db.run(
        'UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?',
        [type, category, amount, date, description, id],
        function (err) {
            if (err) return callback(err);
            callback(null, { changes: this.changes });
        }
    );
};

// Delete transaction by ID
exports.delete = (id, callback) => {
    db.run('DELETE FROM transactions WHERE id = ?', [id], function (err) {
        if (err) return callback(err);
        callback(null, { changes: this.changes });
    });
};
