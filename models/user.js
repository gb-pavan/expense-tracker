const db = require('../db/database');

// Function to insert a new user into the database
exports.createUser = (username, hashedPassword, callback) => {
    const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
    db.run(query, [username, hashedPassword], function(err) {
        callback(err, this);
    });
};

// Function to fetch a user by username
exports.getUserByUsername = (username, callback) => {
    const query = `SELECT * FROM users WHERE username = ?`;
    db.get(query, [username], (err, user) => {
        callback(err, user);
    });
};


