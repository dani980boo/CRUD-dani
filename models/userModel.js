const db = require('../config/db');

const User = {
    create: (user, callback) => {
        const query = 'INSERT INTO usuarios (nome, email, dataNasc, senha) VALUES (?, ?, ?, ?)';
        db.query(query, [user.nome, user.email, user.dataNasc, user.senha], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM usuarios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    findByUsername: (username, callback) => {
        const query = 'SELECT * FROM usuarios WHERE nome = ?';
        db.query(query, [nome], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    },

    update: (id, user, callback) => {
        const query = 'UPDATE usuarios SET nome = ?, email = ?, dataNasc = ?, senha = ?, WHERE id = ?';
        db.query(query, [user.nome, user.email, user.dataNasc, user.senha, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    delete: (id, callback) => {
        const query = 'DELETE FROM usuarios WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },

    getAll: (callback) => {
        const query = 'SELECT * FROM usuarios';
        db.query(query, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    },
};


module.exports = User;
